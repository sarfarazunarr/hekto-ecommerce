import Image from 'next/image'
import React from 'react'
import { BsCart2 } from 'react-icons/bs'
import { LiaSearchPlusSolid } from 'react-icons/lia'
import { TbHeart } from 'react-icons/tb'

const CategoryProduct = () => {
    return (
        <div className='w-full h-[360px] flex flex-col relative group transition-all duration-200 hover:shadow-sm shadow-gray-300'>
            <div className="w-full h-[80%]">
            {/* Image */}
            <div className='size-[220px] bg-skyBlue flex justify-center items-center rounded-full group-hover:border group-hover:border-purple'>
                <Image src={'/product1.png'} height={170} width={170} alt='product' />
            </div>
            </div>
            {/* Details */}
            <div className='flex flex-col items-center justify-center gap-2 bg-white  py-2'>
                <h1 className='text-navyBlue font-lato '>Cantilever chair</h1>
                <div className='flex gap-2'>
                    <p className='font-josefin-sans font-normal text-sm text-offBlue'>$42.00</p>
                </div>
            </div>

            <div className='flex justify-center items-center absolute bottom-[130px] left-16 opacity-0 group-hover:opacity-100'>
                <button className='px-4 py-2 rounded-sm text-white bg-[#08D15F] font-josefin-sans text-xs hover:bg-black'>View Shop</button>
            </div>

        </div>
    )
}

export default CategoryProduct