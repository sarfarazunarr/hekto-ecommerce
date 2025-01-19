import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import { finalPrice, ProductType } from './ProductCard'

const PRDesignSimple = ({ version = 1, data }: { version?: 1 | 2 , data:ProductType}) => {
    const amount = finalPrice(data.discountPercentage, data.price);
    return (
        <div className='w-full h-[360px] flex flex-col relative group transition-all duration-200 hover:shadow-sm shadow-gray-300'>

            {/* Image */}
            <div className='w-full h-2/3 bg-skyBlue flex justify-center items-center'>
                <Image src={data.image_url} height={version == 1 ? 270 : 254} width={version == 1 ? 340 : 210} alt={data.name} />
            </div>

            {/* Details */}
            <div className='flex items-start justify-between gap-2 bg-white  py-5'>
                <div className={`"flex flex-col ${version == 2 ? 'items-end' : 'items-start'} gap-5"`}>
                    <Link href={`/product/${data.slug}`}><h1 className={`text-navyBlue font-lato font-semibold ${version == 2 && 'text-lg'}`}>{data.name}</h1></Link>
                    <div className='flex justify-start items-center gap-2'>
                        <p className={`font-lato font-normal text-sm text-offBlue`}>${amount}</p>
                        {data.discountPercentage > 0 && version == 2 && <p className={`font-lato font-normal text-sm text-red line-through`}>${data.price}</p>}
                       {version ==2 && <div className={`flex justify-start gap-1 text-[#FFC416] text-[10px]`}>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar className='text-gray-400' />
                        </div>}
                    </div>
                </div>
                <div className={`flex justify-start gap-1 text-[#FFC416] ${version == 2 ? 'hidden' : 'text-sm'}`}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar className='text-gray-400' />
                </div>
            </div>
        </div>
    )
}

export default PRDesignSimple
