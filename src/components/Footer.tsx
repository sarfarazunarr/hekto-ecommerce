import React from 'react'
import { FaFacebookF, FaInstagramSquare, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
        <div className='w-full h-auto px-5 lg:px-32 py-16 bg-skyBlue grid md:grid-cols-2 lg:grid-cols-5 gap-10'>
            <div className='flex flex-col gap-2 md:col-span-2'>
                <div className='logo text-[34px] font-bold font-josefin-sans text-black'>Hekto</div>
                <div className='grid grid-cols-6'>
                    <input type="text" className='bg-white px-3 py-2 col-span-4 text-gray-700 placeholder:text-gray-400 font-lato outline-none' placeholder='Enter Email Address...' />
                    <button className='bg-pink text-white col-span-2 px-3 py-2 rounded-r-md'>Sign Up</button>
                </div>
                <p className='text-[#8A8FB9] font-lato text-sm'>Contact Info</p>
                <p className='text-[#8A8FB9] font-lato text-sm'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>

            <div >
                <h6 className='text-xl font-semibold text-black font-josefin-sans'>Categories</h6>
                <ul className='flex flex-col gap-3 text-[#8A8FB9] py-4'>
                    <li>Laptops & Computer</li>
                    <li>Camera & Photography</li>
                    <li>Smartphones & Teblates</li>
                    <li>Video Games & Consoles</li>
                    <li>Waterproof Headphones</li>
                </ul>
            </div>

            <div >
                <h6 className='text-xl font-semibold text-black font-josefin-sans'>Customer Care</h6>
                <ul className='flex flex-col gap-3 text-[#8A8FB9] py-4'>
                    <li>My Account</li>
                    <li>Discount</li>
                    <li>Returns</li>
                    <li>Order History</li>
                    <li>Order Tracking</li>
                </ul>
            </div>

            <div >
                <h6 className='text-xl font-semibold text-black font-josefin-sans'>Pages</h6>
                <ul className='flex flex-col gap-3 text-[#8A8FB9] py-4'>
                    <li>Blog</li>
                    <li>Browse the Shop</li>
                    <li>Category</li>
                    <li>Pre Built Pages</li>
                    <li>Visual Composer Elements</li>
                    <li>Woocommerce Pages</li>
                </ul>
            </div>
        </div>
        <div className='px-5 lg:px-40 py-5 bg-skyBlue flex justify-between items-center'>
            <p className='text-[#8A8FB9]'>Techryzer - All right reserved</p>
            <div className="flex justify-end gap-2">
                <div className='flex justify-center items-center bg-navyBlue rounded-full size-5'>
                    <FaFacebookF color='white' size={12} />
                </div>
                <div className='flex justify-center items-center bg-navyBlue rounded-full size-5'>
                    <FaInstagramSquare color='white' size={12} />
                </div>
                <div className='flex justify-center items-center bg-navyBlue rounded-full size-5'>
                    <FaTwitter color='white' size={12} />
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer
