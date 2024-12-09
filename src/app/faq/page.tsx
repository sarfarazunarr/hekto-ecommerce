import MainHeader from '@/components/MainHeader'
import Heading from '@/components/mini/Heading'
import React from 'react'
import Input from '../payment/Input'
import Companies from '@/components/Companies'

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
                    <h2 className={`py-2 text-2xl font-bold font-josefin-sans text-center text-navyBlue`}>
                        Ask a Question
                    </h2>
                    <div className='py-5 w-full grid grid-cols-2 gap-5'>
                        <Input placeholder='Your Name' span='2' v={2} />
                        <Input placeholder='Subject' span='2' v={2} />
                        <textarea name="message" id="message" rows={5} className='bg-transparent text-gray-700 placeholder:text-[#C5CBE3] border border-[#C5CBE3] outline-none px-3 py-2 col-span-2 w-full' placeholder='Type Your Message'></textarea>
                    </div>
                    <button className='bg-pink rounded-sm font-josefin-sans px-8 text-white py-3'>Send Message</button>
                </div>
            </div>
            <Companies />
        </div>
    )
}

export default FAQs
