import Image from 'next/image'
import React from 'react'
import { LiaSearchPlusSolid } from 'react-icons/lia'
import { finalPrice, ProductType } from './ProductCard'
import Link from 'next/link'
import CartBtns from './CartBtns'
import WishListBtns from './WishListBtns'


const PRDesign2 = ({data}: {data: ProductType}) => {
    const amount = finalPrice(data.discountPercentage, data.price);
    return (
        <div className='w-full h-[360px] flex flex-col relative group transition-all duration-200 hover:shadow-sm shadow-gray-300'>

            {/* Image */}
            <div className='w-full h-[90%] bg-skyBlue group-hover:bg-transparent flex justify-center items-center'>
                <Image src={data.image_url} height={220} width={220} alt={data.name} loading='lazy' />
            </div>

            {/* Details */}
            <div className='flex items-center justify-between gap-2 bg-white  py-2'>
            <Link href={`/product/${data.slug}`}><h1 className='text-navyBlue font-josefin-sans font-semibold'>{data.name}</h1></Link>
                <div className='flex gap-2'>
                    <p className='font-josefin-sans font-normal text-sm text-offBlue'>${amount}</p>
                    {data.discountPercentage > 0 && <p className='font-lato text-xs text-red line-through'>${data.price}</p>}
                </div>
            </div>


            {/* icons */}
            <div className='flex flex-col items-center gap-2 absolute bottom-16 left-2 z-10 opacity-0 group-hover:opacity-100'>
            <CartBtns varation={1} amount={amount} data={data}  />


            <WishListBtns varation={1} data={data} />

                <div className='flex justify-center items-center bg-transparent text-[#1490b9] hover:bg-[#e6e6e7] hover:text-offNavyBlue cursor-pointer rounded-full size-8 p-1'>
                    <LiaSearchPlusSolid size={25} />
                </div>
            </div>
        </div>
    )
}

export default PRDesign2
