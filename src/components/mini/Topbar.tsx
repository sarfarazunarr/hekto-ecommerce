import Link from 'next/link'
import React from 'react'
import { BiHeart, BiUser } from 'react-icons/bi'
import { FiPhoneCall } from 'react-icons/fi'
import { MdOutlineMail } from 'react-icons/md'
import CartBtns from './CartBtns'

const Topbar = () => {
    return (
        <div className='w-full px-5 lg:px-40 h-auto py-2 md:py-0 md:h-11 flex flex-col md:flex-row items-center justify-between bg-purple gap-4 md:gap-0'>
            <div className="flex justify-start items-center gap-5">
                <div className='flex justify-start gap-2 items-center'>
                    <MdOutlineMail className='text-white' />
                    <p className='text-white font-semibold font-josefin-sans'>sarfarazunarr@gmail.com</p>
                </div>
                <div className='flex justify-start gap-2 items-center'>
                    <FiPhoneCall className='text-white' />
                    <p className='text-white font-semibold font-josefin-sans'>(12345)67890</p>
                </div>
            </div>
            <div className='flex justify-end items-center gap-2'>
                <select name="lang" className='bg-transparent text-white border-none outline-none font-semibold font-josefin-sans' id="lang">
                    <option value="eng">English</option>
                    <option value="urd">Urdu</option>
                </select>
                <select name="currency" className='bg-transparent text-white border-none outline-none font-semibold font-josefin-sans' id="currency">
                    <option value="usd">USD</option>
                    <option value="pkr">PKR</option>
                </select>
                <Link href={"/login"} className='bg-transparent text-white border-none outline-none font-semibold font-josefin-sans flex items-center gap-1'>Login <BiUser color={'white'} /></Link>
                <Link href={"/wishlist"}><button className='bg-transparent text-white border-none outline-none font-semibold font-josefin-sans flex items-center gap-1'>Wishlist <BiHeart color={'white'} /></button></Link>
                <CartBtns varation={3} />
            </div>
        </div>
    )
}

export default Topbar
