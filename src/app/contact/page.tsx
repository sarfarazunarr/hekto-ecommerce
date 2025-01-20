"use client";
import MainHeader from '@/components/MainHeader'
import Heading from '@/components/mini/Heading'
import React, { useState } from 'react'
import { FaCircle } from 'react-icons/fa'
import { MdContacts, MdLocationCity, MdSupportAgent } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'
import Input from '../payment/Input'
import Image from 'next/image'
import { toast } from 'react-toastify';

const Contact = () => {
    const [data, setData] = useState({
        name:"", email: "", subject: "", message: ""
    })
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value})
    }
    const handleMessage = () => {
        toast.success("Message Sent Sucessfully!", {autoClose: 2000});
    };
    return (
        <div className='w-full'>
            <MainHeader title='Contact Us' prev='Home . Pages . ' current='Contact Us' />
            <div className='py-10 px-5 md:px-10 lg:px-36 grid lg:grid-cols-2 gap-10 justify-between items-start'>
                <div className='flex flex-col items-start gap-4'>
                    <Heading text='Information About Us' />
                    <p className='font-lato text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                    <div className='flex justify-start items-center gap-3 text-2xl'>
                        <FaCircle color='#5625DF' />
                        <FaCircle color='#FF27B7' />
                        <FaCircle color='#37DAF3' />
                    </div>
                </div>
                <div className='flex flex-col items-start gap-4'>
                    <Heading text='Contact Way' />
                    <div className='grid md:grid-cols-2 gap-5'>
                        <div className='flex justify-start items-center gap-3'>
                            <div className='bg-[#5726DF] size-11 rounded-full flex justify-center items-center text-white text-2xl'>
                                <MdContacts />
                            </div>
                            <div className='flex flex-col gap-1 font-lato text-[#8A8FB9]'>
                                <p>Tel: (877)-121-8500</p>
                                <p>Email: connect@hakto.com</p>
                            </div>
                        </div>
                        <div className='flex justify-start items-center gap-3'>
                            <div className='bg-pink size-11 rounded-full flex justify-center items-center text-white text-2xl'>
                                <MdSupportAgent />
                            </div>
                            <div className='flex flex-col gap-1 font-lato text-[#8A8FB9]'>
                                <p>Support Forum</p>
                                <p>Over for 24 hours</p>
                            </div>
                        </div>
                        <div className='flex justify-start items-center gap-3'>
                            <div className='bg-[#FFB265] size-11 rounded-full flex justify-center items-center text-[#a86f37] text-2xl'>
                                <MdLocationCity />
                            </div>
                            <div className='flex flex-col gap-1 font-lato text-[#8A8FB9]'>
                                <p>20 Margaret st, London</p>
                                <p>Great britain, 3NM98-LK</p>
                            </div>
                        </div>
                        <div className='flex justify-start items-center gap-3'>
                            <div className='bg-[#1BE982] size-11 rounded-full flex justify-center items-center text-white text-2xl'>
                                <TbTruckDelivery />
                            </div>
                            <div className='flex flex-col gap-1 font-lato text-[#8A8FB9]'>
                                <p>Free Standard Shipping</p>
                                <p>on all orders</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-10 px-5 md:px-10 lg:px-36 grid lg:grid-cols-2 gap-10 justify-between items-center'>
                <div className='flex flex-col items-start gap-4'>
                    <Heading text='Get in Touch' />
                    <p className='font-lato text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
                    <div className='py-5 grid grid-cols-2 gap-5'>
                    <Input placeholder='Your Name' name='name' onchange={onChange} value={data.name} v={2} />
                    <Input placeholder='Your Email' v={2} name='email' onchange={onChange} value={data.email} />
                    <Input placeholder='Subject' span='2' v={2} name='subject' onchange={onChange} value={data.subject} />
                    <textarea name="message" id="message" rows={5} className='bg-transparent text-gray-700 placeholder:text-[#C5CBE3] border border-[#C5CBE3] outline-none px-3 py-2 col-span-2 w-full' placeholder='Type Your Message' onChange={()=> onChange} value={data.message}></textarea>
                    </div>
                    <button className='bg-pink rounded-sm font-josefin-sans px-8 text-white py-3' onClick={() =>  handleMessage()}>Send Message</button>
                </div>
                <Image src={"/contact.png"} width={725} height={695} alt='contact' className=' hidden lg:w-full' />
            </div>
        </div>
    )
}

export default Contact
