import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaPenNib } from 'react-icons/fa'
import { SlCalender } from 'react-icons/sl'

export interface BlogContent {
    title: string,
    image: string,
    content: string,
    date: string,
}

const BlogCard = ({size = "MINI", data}: {size?: "MINI" | "LARGE", data: BlogContent}) => {
    return (
        <div className='w-full flex flex-col rounded-md group'>

            <Image src={data?.image} width={size == "MINI" ? 377 : 870} height={size == "MINI" ? 255 : 543} alt='blog' className={`rounded-md ${size == "MINI" ? 'h-1/2' : 'h-2/3'}  object-cover`} />
            <div className='flex flex-col py-4 px-2 items-start gap-3'>
                <div className='flex justify-start gap-4'>
                    <div className="flex justify-start items-center gap-1">
                        <FaPenNib className='text-pink size-3' />
                        <p className={`font-josefin-sans text-navyBlue text-sm ${size == "MINI" ? 'bg-white' : 'bg-pink/20'}`}>Sarfaraz Unar</p>
                    </div>
                    <div className="flex justify-start items-center gap-1">
                        <SlCalender className='text-[#FFA454] size-3' />
                        <p className={`font-josefin-sans text-navyBlue text-sm ${size == "MINI" ? 'bg-white' : 'bg-pink/20'}`}>{data?.date}</p>
                    </div>
                </div>

                <h4 className={`font-josefin-sans font-bold  text-navyBlue ${size == "MINI" ? 'group-hover:text-red text-lg' : 'text-3xl'} `}>Top essential Trends in 2024</h4> 
                <p className='font-lato text-[#72718F] font-normal '>{data?.content}</p>
                <Link href={"/blog/1"}><button className='bg-white text-navyBlue underline font-lato font-normal hover:text-black group-hover:text-pink'>Read More</button></Link>
            </div>
        </div>
    )
}

export default BlogCard
