import { authenticate } from "@/middleware/authenticate";
import { CartProduct } from "@/store/cartStore";
import { NextRequest, NextResponse } from "next/server";
import { SanityServerClient } from "../sampledata/utils";

export async function POST(req: NextRequest) {
    try {
        const { decoded } = await authenticate(req);
        if (!decoded) {
            return NextResponse.json({ message: "Please login to continue" }, { status: 401 })
        }
        const data = await req.json();
        const newproducts: { product: { _type: string, _ref: string, _key: string }, quantity: number, amount: number }[] = [];
        await data.products.map((product: CartProduct) => {
            const pr = {
                product: {
                    "_key": `pr-${product._id}`,
                    "_type": "reference",
                    "_ref": product._id
                },
                quantity: product.quantity,
                amount: product.totalAmount
            };
            newproducts.push(pr);
        })

        const orderSchema = {
            _type: "order",
            products: newproducts,
            customer: {
                _type: "reference",
                _ref: decoded.id,
            },
            totalAmount: data.totalAmount,
            payment_method: data.pyament_method,
            status: "Pending",
            shippingId: String("SD-" + Math.round(Math.random() * 10000))
        }
        const createOrder = await SanityServerClient.create(orderSchema);
        console.log(`orderId ${createOrder._id}`);
        return NextResponse.json({ message: "Order Placed", type: "success", id: createOrder._id, shippingId: createOrder.shippingId }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error || "Failed to place order!" }, { status: 500 })
    }
}

export async function GET(req: NextRequest) {
    try {
        const orderId = req.nextUrl.searchParams.get('order');
        if (orderId) {
            const result = await SanityServerClient.fetch(`*[_type == "order" && _id == "${orderId}"]`);
            if (!result) {
                return NextResponse.json({ message: "Invalid Order Id" }, { status: 400 });
            }
            return NextResponse.json({ data: result }, { status: 200 })
        }
        const { decoded } = await authenticate(req);
        if(!decoded?.id){
            return NextResponse.json({message: "Unauthorized"}, {status: 401})
        }
        const result = await SanityServerClient.fetch(`*[_type == "order" && customer._ref == "${decoded.id}"]`);
        return NextResponse.json({data: result}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Failed to load order data", error}, {status: 500})
    }
}
