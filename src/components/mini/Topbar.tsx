import Link from 'next/link'
import React from 'react'
import { BiHeart, BiUser } from 'react-icons/bi'
import { FiPhoneCall, FiShoppingCart } from 'react-icons/fi'
import { MdOutlineMail } from 'react-icons/md'

const Topbar = () => {
    return (
        <div className='w-full px-5 lg:px-40 h-auto py-2 md:py-0 md:h-11 flex flex-col md:flex-row items-center justify-between bg-purple gap-4 md:gap-0'>
            <div className="flex justify-start items-center gap-5">
                <div className='flex justify-start gap-2 items-center'>
                    <MdOutlineMail className='text-white' />
                    <p className='text-white font-semibold font-josefin-sans'>mhhasanul@gmail.com</p>
                </div>
                <div className='flex justify-start gap-2 items-center'>
                    <FiPhoneCall className='text-white' />
                    <p className='text-white font-semibold font-josefin-sans'>(12345)67890</p>
                </div>
            </div>
            <div className='flex justify-end gap-2'>
                <select name="lang" className='bg-transparent text-white border-none outline-none font-semibold font-josefin-sans' id="lang">
                    <option value="eng">English</option>
                    <option value="urd">Urdu</option>
                </select>
                <select name="currency" className='bg-transparent text-white border-none outline-none font-semibold font-josefin-sans' id="currency">
                    <option value="usd">USD</option>
                    <option value="pkr">PKR</option>
                </select>
                <Link href={"/login"} className='bg-transparent text-white border-none outline-none font-semibold font-josefin-sans flex items-center gap-1'>Login <BiUser color={'white'} /></Link>
                <button className='bg-transparent text-white border-none outline-none font-semibold font-josefin-sans flex items-center gap-1'>Wishlist <BiHeart color={'white'} /></button>
                <Link href={"/cart"} className='bg-transparent text-white border-none outline-none pl-3 text-lg'><FiShoppingCart color={'white'} /></Link>
            </div>
        </div>
    )
}

export default Topbar
