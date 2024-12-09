import MainHeader from '@/components/MainHeader'
import React from 'react'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import Input from './Input'
import JustItem from '../cart/JustItem'
import Link from 'next/link'

const Payment = () => {
    return (
        <div className='w-full'>
            <MainHeader title='Checkout' current='Payment' prev='Home . Pages . Checkout . ' />
            <div className='w-full px-2 lg:px-40 py-20 grid grid-cols-4 lg:grid-cols-6'>
                <div className='col-span-4 flex flex-col gap-y-3 p-3 lg:p-10 bg-[#F8F8FD]'>
                    <div className='flex justify-between items-center py-4'>
                        <h2 className='font-josefin-sans font-bold text-lg text-navyBlue' >Contact Information</h2>
                        <p className='font-lato font-medium text-[#C1C8E1]'>Already have an account? Log in</p>
                    </div>

                    <Input placeholder='Email or mobile phone number' />
                    <div className='flex justify-start gap-1 pt-8 pb-10'>
                        <IoIosCheckmarkCircle className='text-xs text-green-600' />
                        <p className='text-xs text-gray-500 font-lato'>Keep me up to date on news and excluive offers.</p>
                    </div>

                    <h2 className='font-josefin-sans font-bold text-lg text-navyBlue py-4' >Shipping Address</h2>
                    <div className="grid grid-cols-2 gap-8">
                        <Input placeholder='First Name (Optional)' />
                        <Input placeholder='Last Name ' />
                        <Input placeholder='Address' span='2' />
                        <Input placeholder='Appartment, Suit etc (Optional)' span='2' />
                        <Input placeholder='City' span='2' />
                        <Input placeholder='Pakistan' />
                        <Input placeholder='Postal code' />
                    </div>
                    <div className='mt-10 mb-5 flex justify-start'>
                        <button className='bg-pink rounded-sm font-josefin-sans px-8 text-white py-3'>Continue Shipping</button>
                    </div>
                </div>

                <div className='flex flex-col gap-10 col-span-full lg:col-span-2 p-4'>
                    <div className='flex flex-col gap-5'>
                        {[0, 1, 2, 3, 4].map((val) => {
                            return (
                                <div key={val} className='border-b border-gray-300 pb-2 flex justify-between items-center'>
                                    <JustItem />
                                    <p className='font-semibold font-josefin-sans text-navyBlue'>$32.00</p>
                                </div>
                            )
                        })}
                    </div>
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
                        <Link href={"/order-completion"} className='bg-green-500 rounded-md text-white w-full py-3'>Place Order</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
