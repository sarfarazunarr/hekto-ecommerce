import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className='max-w-[1920px] h-[680px] bg-skyBlue px-40 flex justify-between items-center relative'>
            <div className='flex w-1/2 flex-col items-start gap-4'>
                <p className='text-pink font-lato font-bold'>Best Furniture For Your Castle....</p>
                <h1 className='font-bold text-black text-[55px] font-josefin-sans leading-tight'>New Furniture Collection Trends in 2020</h1>
                <p className='text-offNavyBlue font-lato'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                <Link href={"/shop"} className='px-4 py-2 text-center bg-pink text-white font-josefin-sans font-semibold'>Shop Now</Link>
            </div>
            <Image src={"/wheelchair.png"} className='w-1/2' alt='chair' width={500} height={500} />


            <Image alt='light' src={"/light.png"} height={350} width={350} className='absolute top-0 -left-24' />
            <Image alt='light' src={"/offer.png"} height={100} width={100} className='absolute top-16 right-40' />
        </div>
    )
}

export default Hero
