"use client";
import Link from 'next/link'
import React from 'react'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import JustItem from '../cart/JustItem'
import useCartStore, { calculateAmount } from '@/store/cartStore';

const CartProducts = () => {
    const {cart } = useCartStore();
    const finalAmount = calculateAmount(cart);

    return (
        <div className='flex flex-col gap-10 col-span-full lg:col-span-2 p-4'>
            <div className='flex flex-col gap-5'>
                {cart.length <= 0 && (
                    <p className='text-lg text-center text-gray-500 py-5'>Cart is Empty</p>
                )}
                {cart.map((product, index) => {
                    return (
                        <div key={index} className='border-b border-gray-300 pb-2 flex justify-between items-center'>
                            <JustItem data={product} />
                            <p className='font-semibold font-josefin-sans text-navyBlue'>${product.totalAmount}</p>
                        </div>
                    )
                })}
            </div>
            <div className='bg-[#F4F4FC] rounded-sm p-4'>
                <div className='flex justify-between items-center pt-4 pb-2 border-b border-gray-400 py-4'>
                    <p className='font-lato font-semibold text-lg text-navyBlue'>Subtotal</p>
                    <p className='font-lato text-lg text-navyBlue'>${finalAmount}</p>
                </div>
                <div className='flex justify-between items-center pt-10 pb-2 border-b border-gray-400 py-4'>
                    <p className='font-lato font-semibold text-lg text-navyBlue'>Total</p>
                    <p className='font-lato text-lg text-navyBlue'>$345.00</p>
                </div>
                <div className='flex justify-start gap-1 pt-8 pb-10'>
                    <IoIosCheckmarkCircle className='text-xs text-green-600' />
                    <p className='text-xs text-gray-500 font-lato'>Shipping and Taxes calculated at checkout.</p>
                </div>
                <Link href={"/order-completed"}><button className='bg-green-500 rounded-md text-white w-full py-3'>Place Order</button></Link>
            </div>
        </div>
    )
}

export default CartProducts
