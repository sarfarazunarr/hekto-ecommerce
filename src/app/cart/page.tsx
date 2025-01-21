"use client";
import MainHeader from '@/components/MainHeader'
import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import Link from 'next/link'
import useCartStore, { calculateAmount } from '@/store/cartStore'

const CartPage = () => {
    const {cart, clearCart} = useCartStore();
    const [subAmount, setSubAmount] = useState(0);
    useEffect(() => {
        const updatedAmount = calculateAmount(cart);
        setSubAmount(updatedAmount)
    }, [cart]);
    return (
        <div className='w-full'>
            <MainHeader title='Shopping Cart' current='Shopping Cart' prev='Home . Pages . ' />
            <div className='w-full px-5 lg:px-40 py-20'>
                <div className='grid grid-cols-4 lg:grid-cols-6 items-start gap-3'>
                    {cart.length > 0 && <div className='col-span-4 flex flex-col gap-4'>
                    <table className='overflow-x-scroll'>
                        <thead>
                            <tr className='font-josefin-sans text-[#1D3178] font-bold text-xl text-center'>
                                <td className='text-left'>Product</td>
                                <td>Price</td>
                                <td>Qty</td>
                                <td>Total</td>
                            </tr>
                        </thead>

                        <tbody>
                            {cart.map((cartData, index) => (
                                <CartItem key={index} data={cartData} />
                            ))}
                        </tbody>
                    </table>
                    <div className='flex justify-between items-center'>
                        <button className='bg-pink rounded-sm font-josefin-sans px-6 text-white py-3' onClick={() => clearCart()}>Clear Cart</button>
                        </div>
                    </div>}
                    {cart.length == 0 && <div className='col-span-4 flex justify-center'>
                                <h3 className='text-center text-sm text-gray-400'>Cart is Empty</h3>
                        </div>}
                    <div className="flex flex-col md:flex-row lg:flex-col gap-4 col-span-full md:gap-3 lg:col-span-2">
                        <div className='flex flex-col md:col-span-2 lg:col-span-2'>
                            <h2 className='text-2xl lg:text-xl font-bold text-navyBlue text-center py-5'>Cart Total</h2>
                            <div className='bg-[#F4F4FC] rounded-sm p-4'>
                                <div className='flex justify-between items-center pt-4 pb-2 border-b border-gray-400 py-4'>
                                    <p className='font-lato font-semibold text-lg text-navyBlue'>Subtotal</p>
                                    <p className='font-lato text-lg text-navyBlue'>${subAmount}</p>
                                </div>
                                <div className='flex justify-between items-center pt-10 pb-2 border-b border-gray-400 py-4'>
                                    <p className='font-lato font-semibold text-lg text-navyBlue'>Total</p>
                                    <p className='font-lato text-lg text-navyBlue'>$345.00</p>
                                </div>
                                <div className='flex justify-start gap-1 pt-8 pb-10'>
                                    <IoIosCheckmarkCircle className='text-xs text-green-600' />
                                    <p className='text-xs text-gray-500 font-lato'>Shipping and Taxes calculated at checkout.</p>
                                </div>
                                <Link href={"/payment"}><button  className='bg-green-500 rounded-md text-white w-full py-3'>Proceed to Checkout</button></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartPage
