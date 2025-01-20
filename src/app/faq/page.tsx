import MainHeader from '@/components/MainHeader'
import Heading from '@/components/mini/Heading'
import React from 'react'
import Companies from '@/components/Companies'
import Link from 'next/link'

const FAQs = () => {
    return (
        <div className='w-full'>
            <MainHeader title='FAQs' prev='Home . Pages . ' current='FAQ' />
            <div className='w-full px-5 md:px-12 lg:px-40 grid md:grid-cols-2 gap-10'>
                <div>

                    <Heading text='General Information' />
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-2'>
                            <h3 className='font-semibold font-josefin-sans font-xl'>Eu dictumst cum at sed euismood condimentum?</h3>
                            <p className='font-josefin-sans text-[#A1ABCC]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h3 className='font-semibold font-josefin-sans font-xl'>Eu dictumst cum at sed euismood condimentum?</h3>
                            <p className='font-josefin-sans text-[#A1ABCC]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h3 className='font-semibold font-josefin-sans font-xl'>Eu dictumst cum at sed euismood condimentum?</h3>
                            <p className='font-josefin-sans text-[#A1ABCC]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h3 className='font-semibold font-josefin-sans font-xl'>Eu dictumst cum at sed euismood condimentum?</h3>
                            <p className='font-josefin-sans text-[#A1ABCC]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-start items-start gap-4 bg-[#F8F8FD] p-2 lg:p-14'>
                    <Link href={"/contact"}><h2 className={`py-2 text-2xl font-bold font-josefin-sans text-center text-navyBlue`}>
                        Visit to Contact Us
                    </h2></Link>
                    
                </div>
            </div>
            <Companies />
        </div>
    )
}

export default FAQs
