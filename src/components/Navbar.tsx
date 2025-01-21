"use client";
import React, { useState } from 'react'
import Topbar from './mini/Topbar'
import Link from 'next/link'
import { FiSearch } from 'react-icons/fi'
import { useRouter } from 'next/navigation';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const router = useRouter();
  return (
    <div className='w-full'>
      {/* Topbar */}
      <Topbar />

      {/* Navbar */}
      <nav className='w-full bg-white px-2 lg:px-40 py-4 grid grid-cols-2 lg:grid-cols-5 justify-between items-center'>
        <div className='logo text-[34px] font-bold font-josefin-sans text-black'>Hekto</div>

        {/* Menu */}
        <div className='hidden md:flex col-span-2 justify-start gap-4 items-center'>
          <Link href={"/"} className='font-lato text-offBlue hover:underline hover:text-pink'>Home</Link>
          <Link href={"/blog"} className='font-lato text-offBlue hover:underline hover:text-pink'>Blog</Link>
          <Link href={"/shop"} className='font-lato text-offBlue hover:underline hover:text-pink'>Shop</Link>
          <Link href={"/about"} className='font-lato text-offBlue hover:underline hover:text-pink'>About</Link>
          <Link href={"/faq"} className='font-lato text-offBlue hover:underline hover:text-pink'>FAQ</Link>
          <Link href={"/contact"} className='font-lato text-offBlue hover:underline hover:text-pink'>Contact</Link>
        </div>

        {/* Mobile navigator icon */}
        <div className='flex md:hidden justify-end items-center px-5'>
          <div className={`w-8 md:hidden flex flex-col justify-center gap-1 ${open ? 'cross' : ''}`} onClick={() => setOpen(!open)}>
            <div className="w-full h-1 bg-gray-700 transition-transform duration-500 ease-in-out"></div>
            <div className="w-full h-1 bg-gray-700 transition-transform duration-500 ease-in-out"></div>
            <div className="w-full h-1 bg-gray-700 transition-transform duration-500 ease-in-out"></div>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && <div className='z-10 absolute top-40 right-0 bg-navyBlue backdrop:blur-md w-full h-auto flex flex-col items-center justify-start p-10 gap-3'>
          <div className='w-80 h-10 bg-skyBlue border-gray-200 border grid grid-cols-6 items-center my-4'>
            <input type="text" value={search} className='p-3 font-josefin-sans font-semibold text-offNavyBlue border-none outline-none placeholder:text-gray-300 col-span-5' placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
            <button className='bg-pink w-full h-full flex justify-center items-center'  onClick={() => router.push(`/shop/list?search=${search}`)} disabled={search.length <= 1}><FiSearch size={20} color='white' /></button>
          </div>
          <Link href={"/"} className='font-lato text-white hover:underline hover:text-pink'>Home</Link>
          <Link href={"/blog"} className='font-lato text-white hover:underline hover:text-pink'>Blog</Link>
          <Link href={"/shop"} className='font-lato text-white hover:underline hover:text-pink'>Shop</Link>
          <Link href={"/about"} className='font-lato text-white hover:underline hover:text-pink'>About</Link>
          <Link href={"/faq"} className='font-lato text-white hover:underline hover:text-pink'>FAQ</Link>
          <Link href={"/contact"} className='font-lato text-white hover:underline hover:text-pink'>Contact</Link>
        </div>}

        <div className='hidden md:col-span-5 lg:col-span-2 md:flex justify-end items-center'>
          <div className='md:w-full lg:w-80 h-10 bg-skyBlue border-gray-200 border grid grid-cols-6 items-center'>
            <input type="text" value={search} className='p-3 font-josefin-sans font-semibold text-offNavyBlue border-none outline-none placeholder:text-gray-300 col-span-5' placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
            <button className='bg-pink w-full h-full flex justify-center items-center' onClick={() => router.push(`/shop/list?search=${search}`)} disabled={search.length <= 1}><FiSearch size={20} color='white' /></button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
