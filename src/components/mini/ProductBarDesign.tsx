import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import { LiaSearchPlusSolid } from 'react-icons/lia'
import { finalPrice, ProductType } from './ProductCard'
import Link from 'next/link'
import CartBtns from './CartBtns'
import WishListBtns from './WishListBtns'

const ProductBarDesign = ({data}: {data: ProductType}) => {
    const amount = finalPrice(data.discountPercentage, data.price);
    return (
        <div className='w-full h-min my-5 flex flex-row items-center'>
            {/* Image */}
            <div className='w-1/3 lg:w-[330px] h-min bg-skyBlue flex justify-center items-center'>
                <Image src={data.image_url} height={217} width={330} alt={data.name} />
            </div>

            {/* Details */}
            <div className='flex flex-col items-start justify-start gap-y-1 md:gap-y-4 bg-white p-5'>
                <div className='flex justify-start items-center gap-3'>
                <Link href={`/product/${data.slug}`}><h1 className='text-navyBlue font-lato text-lg md:text-xl font-semibold'>{data.name}</h1></Link>
                    <div className='md:flex justify-center items-center gap-3 hidden'>
                        <div className='size-2 md:size-3 bg-[#05E6B7] rounded-full'></div>
                        <div className='size-2 md:size-3 bg-pink rounded-full'></div>
                        <div className='size-2 md:size-3 bg-navyBlue group-hover:bg-white rounded-full'></div>
                    </div>
                </div>
                <div className="flex justify-start items-center gap-4">
                    <p className='font-josefin-sans text-left text-offBlue font-medium'>${amount}  <span className='text-red line-through'>${data.price}</span></p>
                    <div className='flex justify-start gap-1 text-[#FFC416] text-sm'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar className='text-gray-400' />
                    </div>
                </div>
                <p className='font-lato text-gray-400 w-[500px] hidden md:block'>{data.description}</p>


                <div className='flex justify-start items-center gap-5'>
                <CartBtns varation={1} amount={amount} data={data}  />

                <WishListBtns varation={1} data={data} />

                <div className='flex justify-center items-center bg-transparent text-navyBlue hover:bg-[#e6e6e7] hover:text-offNavyBlue cursor-pointer rounded-full size-8 p-1'>
                    <LiaSearchPlusSolid size={25} />
                </div>
            </div>
            </div>
        </div>
    )
}

export default ProductBarDesign
