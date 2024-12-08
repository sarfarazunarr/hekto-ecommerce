import Image from 'next/image'
import React from 'react'

const ProductBar = () => {
  return (
    <div className='w-full py-2 h-[75px] bg-white flex justify-start items-center gap-3'>
      <div className='1/5 bg-skyBlue flex items-center justify-center'>
        <Image src={"/productbar.png"} width={65} height={65} alt='productbar' />
      </div>
      <div className='flex flex-col gap-1'>
        <h3 className='font-semibold font-josefin-sans text-offBlue'>Executive Seat chair</h3>
        <p className='font-josefin-sans text-offBlue line-through text-xs'>$32.00</p>
      </div>
    </div>
  )
}

export default ProductBar
