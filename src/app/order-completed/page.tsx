import Companies from '@/components/Companies'
import MainHeader from '@/components/MainHeader'
import Image from 'next/image'
import React from 'react'
import { GiCheckMark } from 'react-icons/gi'
import OrderData from './OrderData'

const OrderCompleted = () => {
    
    return (
        <>
        <div className='w-full relative'>
            <MainHeader title='Order Completed' current='Order Completed' prev='Home . Pages . ' />
            <div className='w-full px-10 lg:px-40 py-20 flex justify-center items-center'>
                <div className='w-[625px] flex flex-col items-center justify-center gap-8'>
                    <div className='size-16 rounded-full bg-[url("/fancytick.png")] flex justify-center items-center'>
                        <GiCheckMark size={35} className='text-pink' />
                    </div>
                    <h1 className='font-josefin-sans text-4xl font-bold text-navyBlue capitalize text-center'>Your order is completed!</h1>
                    <p className='text-[#8D92A7] font-lato text-center'>Thank you for your order! Your order is being processed and will be completed within 3-6
                        hours. You will receive an email confirmation when your order is completed.
                    </p>
                    <OrderData />
                    <button className='bg-pink rounded-md font-josefin-sans px-8 text-white py-3'>Continue Shipping</button>
                </div>
            </div>
            <Image src={"/clock.png"} className={'absolute md:top-[350px] lg:top-[400px] md:left-[70px] left-[150px] hidden md:block md:scale-75 lg:scale-100'} width={94} height={94} alt='clock' />
            <Image src={"/checklist.png"} className={'absolute  md:bottom-10 lg:right-48 md:right-28 hidden md:block'} width={70} height={70} alt='clock' />
        </div>
        <Companies />
        </>
    )
}

export default OrderCompleted
