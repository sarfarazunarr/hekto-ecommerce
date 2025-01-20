import { client } from "@/sanity/lib/client";
import { CartProduct } from "@/store/cartStore";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    try {
        const data = await req.json();
        const userSchema = {
            _type: "user",
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            mobileNumber: data.mobileNumber,
            address: {
                address1: data.address,
                address2: data.address2,
                city: data.city,
                postal_code: data.postal_code,
                country: data.country
            },
            password: data.password
        }
        const createUser = await client.create(userSchema);
        console.log('User Created with id '+ createUser._id);

        const newproducts: {product: string, quantity: number, amount: number}[] = [];
        await data.products.map((product: CartProduct) => {
            const pr = {
                product: product._id,
                quantity: product.quantity,
                amount: product.totalAmount
            };
            newproducts.push(pr);
        })

        const orderSchema = {
            _type: "order",
            products: newproducts,
            customer: createUser._id,
            totalAmount: data.totalAmount,
            payment_method: data.pyament_method,
            status: "Pending",
            shippingId: Math.random()*10000
        }
        const createOrder = await client.create(orderSchema);
        console.log(`User id ${createUser._id} orderId ${createOrder._id}`);
        return NextResponse.json({message: "Order Placed", type: "success", userid: createUser._id, id: createOrder._id}, {status: 201});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: error || "Failed to place order!"}, {status: 500})
    }
}