"use client";
import React, { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { ProductType } from '@/components/mini/ProductCard';
import { urlFor } from '@/sanity/lib/image';
import { useSearchParams } from 'next/navigation';

interface OrderDataI {
    _id: string,
    products: [{
        product: ProductType,
        quantity: number,
        amount: number
    }],
    status: string,
    shippingId: string,
    payment_method: string,
    totalAmount: number,
    _createdAt: Date
}

const OrderData = () => {


    const [orderdata, setOrderdata] = useState<OrderDataI>();
    const searchParams = useSearchParams()
    const orderId = searchParams.get('id')
    useEffect(() => {
        const getData = async () => {
            const data = await client.fetch(`*[_type == "order" && _id == "${orderId}"]{
                "products": products[]{
                  "product": *[_type == "product" && _id == ^.product._ref][0],
                  quantity,
                  amount
                },
                status,
                shippingId,
                payment_method,
                totalAmount
              }`)
            setOrderdata(data[0]);
        }
        getData();
    }, [orderId])
    console.log(orderdata);
    return (
        <>
            {orderdata && <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-5'>
                <div className='flex flex-col justify-start items-start text-black text-sm bg-slate-100 p-5 rounded-md'>
                    <p>Order Id: <span className='font-semibold'> {orderdata._id} </span></p>
                    <p>Shipping Id: <span className='font-semibold'> {orderdata.shippingId} </span></p>
                    <p>Payment Method<span className='font-semibold'> {orderdata.payment_method} </span></p>
                    <p>Total Amount<span className='font-semibold'> {orderdata.totalAmount} </span></p>
                    <p>Status<span className='font-semibold'> {orderdata.status} </span></p>
                    
                </div>
                <div className='flex flex-col justify-start items-start text-black text-sm bg-slate-100 p-5 rounded-md'>
                    <h3 className='text-lg font-semibold'>Products</h3>
                    {orderdata.products.map((pr, index) => (
                        <div key={index} className='w-full py-2 h-[75px] bg-white flex justify-start items-center gap-3'>
                            <div className='size-16 bg-skyBlue flex items-center justify-center'>
                                <Image src={pr.product.image ? urlFor(pr.product.image).url() : '/product.png'} width={65} height={65} alt={pr.product.name} />
                            </div>
                            <div className='flex flex-col gap-1'><h3 className='font-semibold font-josefin-sans text-offBlue line-clamp-1'>{pr.product.name}</h3>
                                <p className='font-josefin-sans text-offBlue text-xs' title='Browse to View Price'>{pr.quantity} - ${pr.amount}</p>
                            </div>
                        </div>

                    ))}
                </div>

            </div>}

        </>
    )
}

export default OrderData
