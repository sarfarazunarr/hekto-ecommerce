import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        // Hero section
        <div className='w-full lg:max-w-[1920px] h-auto md:h-[680px] bg-skyBlue px-5 lg:px-40 flex flex-col md:flex-row justify-between items-center relative'>

            {/* Right Side Content */}
            <div className='flex w-full md:w-1/2 flex-col items-start gap-4 py-10 md:py-0'>
                <p className='text-pink font-lato font-bold'>Best Furniture For Your Castle....</p>
                <h1 className='font-bold text-black text-5xl lg:text-[55px] font-josefin-sans leading-tight'>New Furniture Collection Trends in 2020</h1>
                <p className='text-offNavyBlue font-lato'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                <Link href={"/shop"} className='px-8 md:px-4 py-2 text-center bg-pink text-white font-josefin-sans font-semibold'>Shop Now</Link>
            </div>

            {/* Left Side Image */}
            <Image src={"/wheelchair.png"} className='w-full md:w-1/2' alt='chair' width={500} height={500} />


            {/* Absolute light and offer tag */}
            <Image alt='light' src={"/light.png"} height={350} width={350} className='hidden lg:block absolute top-0 -left-24' />
            <Image alt='light' src={"/offer.png"} height={100} width={100} className='absolute bottom-72 right-5 md:right-3 md:top-24 lg:top-16 lg:right-40' />
        </div>
    )
}

export default Hero
