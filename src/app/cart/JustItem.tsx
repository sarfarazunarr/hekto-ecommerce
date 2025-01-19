import { ProductType } from '@/components/mini/ProductCard'
import Image from 'next/image'
import React from 'react'

const JustItem = ({data}: {data: ProductType}) => {
    return (
        <div className='flex flex-col md:flex-row justify-start items-center gap-5 p-1'>
            <Image src={data.image_url} width={83} height={87} alt='image' className='rounded-md object-cover' />
            <div className='flex flex-col'>
                <h2>{data.name}</h2>
                <div className='flex justify-start items-center'>
                    <p className='text-gray-400 hidden md:block'>Category: </p>
                    <span className='text-gray-500 font-semibold' title='color'>{data.category}</span>
                </div>
                {data.discountPercentage > 0 && <div className='flex justify-start items-center'>
                    <p className='text-gray-400 hidden md:block'>Discount: </p><span className='text-gray-500 font-semibold' title='size'>{data.discountPercentage}%</span>
                </div>}
            </div>
        </div>
    )
}

export default JustItem
