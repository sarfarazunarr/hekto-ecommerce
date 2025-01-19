import Image from 'next/image'
import React from 'react'
import { finalPrice, ProductType } from './ProductCard'
import Link from 'next/link'

const CategoryProduct = ({data}: {data: ProductType}) => {
    const amount = finalPrice(data.discountPercentage, data.price)
    return (
        <div className='w-full h-[360px] flex flex-col items-center justify-center relative group transition-all duration-200 hover:shadow-sm shadow-gray-300'>
            <div className="w-full h-[70%]">
            {/* Image */}
            <div className='size-[220px] bg-skyBlue flex justify-center items-center rounded-full group-hover:border group-hover:border-purple mx-auto'>
                <Image src={data.image_url} height={170} width={170} alt={data.name} />
            </div>
            </div>
            {/* Details */}
            <div className='flex flex-col items-center justify-center gap-2 bg-white  py-2'>
                <h1 className='text-navyBlue font-lato line-clamp-1'>{data.name}</h1>
                <div className='flex gap-2'>
                    <p className='font-josefin-sans font-normal text-sm text-offBlue'>${amount}</p>
                </div>
            </div>

            <div className='flex justify-center items-center absolute bottom-[110px] left-28 md:left-16 opacity-0 group-hover:opacity-100'>
                <Link href={`/product/${data.slug}`}><button className='px-4 py-2 rounded-sm text-white bg-[#08D15F] font-josefin-sans text-xs hover:bg-black'>View Category</button></Link>
            </div>

        </div>
    )
}

export default CategoryProduct
