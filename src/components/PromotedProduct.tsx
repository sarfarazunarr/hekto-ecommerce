import Image from 'next/image'
import React from 'react'

const PromotedProduct = () => {
  return (
    <div className='w-full md:h-auto lg:h-[570px] px-10 lg:px-40 py-10 flex flex-col md:flex-row justify-center items-center gap-10 bg-skyBlue'>
      <Image src={"/sofa.png"} alt='sofa' width={500} height={500} />
      <div className='flex flex-col gap-5'>
        <h2 className='text-3xl md:text-4xl font-bold font-josefin-sans text-navyBlue'>Unique Features Of leatest & Trending Poducts</h2>
        <div className='flex flex-col gap-2'>
            <div className='flex justify-start items-center gap-2'>
                <div className='size-3 bg-pink rounded-full'></div>
                <p className='font-lato text-gray-400'>All frames constructed with hardwood solids and laminates</p>
            </div>
            <div className='flex justify-start items-center gap-2'>
                <div className='size-3 bg-navyBlue rounded-full'></div>
                <p className='font-lato text-gray-400'>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</p>
            </div>
            <div className='flex justify-start items-center gap-2'>
                <div className='size-3 bg-[#2BF5CC] rounded-full'></div>
                <p className='font-lato text-gray-400'>Arms, backs and seats are structurally reinforced</p>
            </div>
        </div>
        <div className='flex justify-start items-center gap-3'>
            <button className='bg-pink text-white font-josefin-sans font-semibold text-lg px-3 py-2 rounded-sm'>Add to Cart</button>
            <div className='flex flex-col gap-1'>
                <p className='font-josefin-sans font-semibold text-sm text-navyBlue'>B&B Italian Sofa</p>
                <p className='font-lato font-normal text-sm text-navyBlue'>$32.00</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PromotedProduct
