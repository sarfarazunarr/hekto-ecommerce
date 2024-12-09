import MainHeader from '@/components/MainHeader'
import Heading from '@/components/mini/Heading'
import ServiceCard from '@/components/mini/ServiceCard'
import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
    return (
        <div className='w-full'>
            <MainHeader title='About Us' prev='Home . Pages . ' current='About Us' />
            <div className='w-full px-5 md:px-10 lg:px-40 py-20 '>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-5'>
                    <div className='hidden lg:block border border-gray-300 w-[570px] h-[370px] bg-navyBlue rounded-md relative'>
                        <Image src={"/about.png"} width={555} height={390} className='rounded-md absolute w-1/2 lg:w-full -top-1 -right-4' alt='about' />
                    </div>
                    <Image src={"/about.png"} width={555} height={390} className='rounded-md block lg:hidden' alt='about' />
                    <div className='flex flex-col items-start justify-start w-full md:w-[550px] md:pl-10'>
                        <h1 className='font-bold text-3xl text-navyBlue py-3 font-josefin-sans'>Know about our Ecommerce Business History!</h1>
                        <p className='font-lato text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                        <div className='flex justify-start items-center py-10'>
                            <button className='bg-pink rounded-sm font-josefin-sans px-8 text-white py-3'>Contact Us</button>
                        </div>
                    </div>
                </div>

                <div className='py-20'>
                    <Heading text='Our Features' color={{ primary: false, value: 'black' }} />
                    <div className='grid md:grid-cols-3 lg:grid-cols-4 py-10 gap-10'>
                        <ServiceCard title='Free Delivery' image='/free-delivery.png' />
                        <ServiceCard title='Return & Refund' image='/cashback.png' />
                        <ServiceCard title='Premium Quality' image='/quality.png' />
                        <ServiceCard title='24/7 Support' image='/support.png' />
                    </div>
                </div>
            </div>
            <div className='py-20 px-5 lg:px-40 w-full bg-[#FBFBFF]'>
                <Heading text='Our Client Say!' color={{ primary: false, value: 'black' }} />
                <div className='flex-col flex justify-center items-center py-10'>
                    <div className='flex justify-center items-center gap-2'>
                        <Image src={'/mask.png'} width={50} height={50} className='rounded-md' alt='user' />
                        <Image src={'/mask.png'} width={55} height={59} className='rounded-md mb-1' alt='user' />
                        <Image src={'/mask.png'} width={50} height={50} className='rounded-md' alt='user' />
                    </div>
                    <div className='py-5'>
                        <p className='font-semibold font-lato text-2xl text-black'>Selina Gomezi</p>
                        <p className='text-center text-[10px] text-gray-400'>CEO at Webaccy Digital</p>
                    </div>
                    <p className='font-bold font-lato text-center text-gray-500 w-full md:w-[690px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
                </div>
                <div className='flex justify-center items-center gap-1'>
                    <div className='w-5 h-1 bg-offPurple rounded-md'></div>
                    <div className='w-7 h-1 bg-pink rounded-md'></div>
                    <div className='w-5 h-1 bg-offPurple rounded-md'></div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
