import MainHeader from '@/components/MainHeader'
import React from 'react'
import CartItem from './CartItem'
import { IoIosCheckmarkCircle } from 'react-icons/io'

const CartPage = () => {
    return (
        <div className='w-full'>
            <MainHeader title='Shopping Cart' current='Shopping Cart' prev='Home . Pages . ' />
            <div className='w-full px-40 py-20'>
                <div className='grid grid-cols-6 items-start gap-3'>
                    <table className='col-span-4'>
                        <thead>
                            <tr className='font-josefin-sans text-[#1D3178] font-bold text-xl text-center'>
                                <td className='text-left'>Product</td>
                                <td>Price</td>
                                <td>Qty</td>
                                <td>Total</td>
                            </tr>
                        </thead>

                        <tbody>
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                        </tbody>
                    </table>
                    <div className="flex flex-col gap-4 col-span-2">
                        <div className='flex flex-col'>
                            <h2 className='text-xl font-bold text-navyBlue text-center py-5'>Cart Total</h2>
                            <div className='bg-[#F4F4FC] rounded-sm p-4'>
                                <div className='flex justify-between items-center pt-4 pb-2 border-b border-gray-400 py-4'>
                                    <p className='font-lato font-semibold text-lg text-navyBlue'>Subtotal</p>
                                    <p className='font-lato text-lg text-navyBlue'>$219.00</p>
                                </div>
                                <div className='flex justify-between items-center pt-10 pb-2 border-b border-gray-400 py-4'>
                                    <p className='font-lato font-semibold text-lg text-navyBlue'>Total</p>
                                    <p className='font-lato text-lg text-navyBlue'>$345.00</p>
                                </div>
                                <div className='flex justify-start gap-1 pt-8 pb-10'>
                                    <IoIosCheckmarkCircle className='text-xs text-green-600' />
                                    <p className='text-xs text-gray-500 font-lato'>Shipping and Taxes calculated at checkout.</p>
                                </div>
                                <button className='bg-green-500 rounded-md text-white w-full py-3'>Proceed to Checkout</button>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='text-xl font-bold text-navyBlue text-center py-5'>Checkout</h2>
                            <div className='bg-[#c8c8c8] rounded-sm p-4 flex flex-col gap-y-8'>
                                <input type="text" className='bg-transparent text-gray-700 placeholder:text-gray-400 border-none border border-b border-b-gray-400 outline-none' placeholder='Bangladesh' />
                                <input type="text" className='bg-transparent text-gray-700 placeholder:text-gray-400 border-none  border-b border-b-gray-400 outline-none' placeholder='Mirapur Dhaka, 1200' />
                                <input type="text" className='bg-transparent text-gray-700 placeholder:text-gray-400 border-none  border-b border-b-gray-400 outline-none ' placeholder='Postal Code' />
                                <div className='flex justify-start gap-1 pt-8 pb-10'>
                                    <button className='bg-pink rounded-md text-white w-full py-3'>Calculate Shipping</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartPage
