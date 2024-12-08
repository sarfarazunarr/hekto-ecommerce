import React from 'react'
import Topbar from './mini/Topbar'
import Link from 'next/link'
import { FiSearch } from 'react-icons/fi'

const Navbar = () => {
  return (
    <div className='w-full'>
      <Topbar />
      <nav className='w-full px-40 py-4 grid grid-cols-5 justify-between items-center'>
        <div className='logo text-[34px] font-bold font-josefin-sans text-black'>Hekto</div> 
        <div className='flex col-span-2 justify-start gap-7 items-center'>
            <Link href={"/"} className='font-lato text-offBlue hover:underline hover:text-pink'>Home</Link>
            <Link href={"/"} className='font-lato text-offBlue hover:underline hover:text-pink'>Pages</Link>
            <Link href={"/"} className='font-lato text-offBlue hover:underline hover:text-pink'>Products</Link>
            <Link href={"/"} className='font-lato text-offBlue hover:underline hover:text-pink'>Blog</Link>
            <Link href={"/"} className='font-lato text-offBlue hover:underline hover:text-pink'>Shop</Link>
            <Link href={"/"} className='font-lato text-offBlue hover:underline hover:text-pink'>Contact</Link>
        </div>
        <div className='col-span-2 flex justify-end items-center'>
            <div className='w-80 h-10 bg-skyBlue border-gray-200 border grid grid-cols-6 items-center'>
                <input type="text" className='p-3 font-josefin-sans font-semibold text-offNavyBlue border-none outline-none placeholder:text-gray-300 col-span-5' placeholder='Search' />
                <button className='bg-pink w-full h-full flex justify-center items-center'><FiSearch size={20} color='white' /></button>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
