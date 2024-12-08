import Image from 'next/image'
import React from 'react'
import { FaPenNib } from 'react-icons/fa'
import { SlCalender } from 'react-icons/sl'

const BlogCard = () => {
    return (
        <div className='w-full h-[495px] flex flex-col rounded-md group'>

            <Image src={"/image1.png"} width={377} height={255} alt='blog' className='rounded-md h-1/2 object-cover' />
            <div className='flex flex-col py-4 px-2 items-start gap-3'>
                <div className='flex justify-start gap-4'>
                    <div className="flex justify-start items-center gap-1">
                        <FaPenNib className='text-pink size-3' />
                        <p className='font-josefin-sans text-navyBlue text-sm'>Sarfaraz Unar</p>
                    </div>
                    <div className="flex justify-start items-center gap-1">
                        <SlCalender className='text-[#FFA454] size-3' />
                        <p className='font-josefin-sans text-navyBlue text-sm'>08-12-2024</p>
                    </div>
                </div>

                <h4 className='font-josefin-sans font-bold text-lg text-navyBlue group-hover:text-red'>Top essential Trends in 2024</h4>
                <p className='font-lato text-[#72718F] font-normal'>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                <button className='bg-white text-navyBlue underline font-lato font-normal hover:text-black group-hover:text-pink'>Read More</button>
            </div>
        </div>
    )
}

export default BlogCard
