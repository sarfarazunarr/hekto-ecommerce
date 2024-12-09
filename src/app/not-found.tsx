import Companies from '@/components/Companies'
import MainHeader from '@/components/MainHeader'
import Image from 'next/image'
import React from 'react'

const NotFound = () => {
  return (
    <div className='w-full'>
        <MainHeader title='404 Not Found' current='404 Not Found' prev='Home . Pages . ' />
        <div className='w-full px-40 py-20 h-full flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-y-5'>
                <Image src={"/notfound.png"} width={913} height={640} alt='notfound' />
                <p className='font-josefin-sans font-bold text-offBlue text-2xl'>Oops! The page you requested not found!</p>
                <button className='bg-pink rounded-sm font-josefin-sans px-8 text-white py-3'>Back to Home</button>
            </div>
        </div>
        <Companies />
    </div>
  )
}

export default NotFound
