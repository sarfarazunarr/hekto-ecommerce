import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'

const PRDesignSimple = () => {
    return (
        <div className='w-full h-[360px] flex flex-col relative group transition-all duration-200 hover:shadow-sm shadow-gray-300'>

            {/* Image */}
            <div className='w-full h-2/3 bg-skyBlue flex justify-center items-center'>
                <Image src={'/image2.png'} height={270} width={340} alt='product' />
            </div>

            {/* Details */}
            <div className='flex items-start justify-between gap-2 bg-white  py-5'>
                <div className="flex flex-col items-start gap-5">
                    <h1 className='text-navyBlue font-lato font-semibold'>Cantilever chair</h1>
                    <p className='font-lato font-normal text-sm text-offBlue'>$42.00</p>
                </div>
                <div className='flex justify-start gap-1 text-[#FFC416] text-sm'>
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
