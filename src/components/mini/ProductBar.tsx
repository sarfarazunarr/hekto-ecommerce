import Image from 'next/image'
import React from 'react'
import { ProductType } from './ProductCard'
import Link from 'next/link';

const ProductBar = ({data}: {data: ProductType}) => {
  return (
    <div className='w-full py-2 h-[75px] bg-white flex justify-start items-center gap-3'>
      <div className='size-16 bg-skyBlue flex items-center justify-center'>
        <Image src={data.image_url} width={65} height={65} alt={data.name} />
      </div>
      <div className='flex flex-col gap-1'>
        <Link href={`/product/${data.slug}`}><h3 className='font-semibold font-josefin-sans text-offBlue line-clamp-1'>{data.name}</h3>
        <p className='font-josefin-sans text-offBlue line-through text-xs' title='Browse to View Price'>${data.price}</p></Link>
      </div>
    </div>
  )
}

export default ProductBar
