import Image from 'next/image'
import React from 'react'
import Heading from './mini/Heading'
import { FaCheck } from 'react-icons/fa'

const ProductBanner = () => {
    return (
        <>
            <Heading text='Discount Item' />
            <div className='flex flex-wrap justify-center items-center gap-6 py-2'>
                <p className='text-pink lato text-lg cursor-pointer'>Wood Chair</p>
                <p className='text-navyBlue lato text-lg cursor-pointer'>Plastic Chair</p>
                <p className='text-navyBlue lato text-lg cursor-pointer'>Sofa Collection</p>
            </div>
            <div className='w-full h-auto lg:h-[570px] px-5 lg:px-40 py-10 flex flex-col-reverse gap-10 md:gap-0 md:flex-row justify-center items-center bg-white'>

                <div className='flex flex-col gap-5'>
                    <h2 className='text-4xl font-bold font-josefin-sans text-navyBlue'>20% Discount Of All Products</h2>
                    <p className='text-xl text-pink font-semibold font-josefin-sans'>Eams Sofa Compact</p>
                    <p className='font-lato text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                    <div className='grid grid-cols-2 gap-2'>
                        <div className='flex justify-start items-center gap-4 text-gray-400'>
                            <FaCheck />
                            <p>Material expose like metals</p>
                        </div>
                        <div className='flex justify-start items-center gap-4 text-gray-400'>
                            <FaCheck />
                            <p>Clear lines and geomatric figures</p>
                        </div>
                        <div className='flex justify-start items-center gap-4 text-gray-400'>
                            <FaCheck />
                            <p>Simple neutral colours.</p>
                        </div>
                        <div className='flex justify-start items-center gap-4 text-gray-400'>
                            <FaCheck />
                            <p>Material expose like metals</p>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-3'>
                        <button className='bg-pink text-white font-josefin-sans font-semibold px-10 py-2 rounded-sm'>Shop Now</button>
                    </div>
                </div>

                <Image src={"/sofachair.png"} alt='sofa' width={500} height={500} />
            </div>
        </>
    )
}

export default ProductBanner
