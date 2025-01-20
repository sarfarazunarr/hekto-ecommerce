import React from 'react'
import { BiComment, BiUser } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'

const Comment = () => {
    
    return (
        <div className='w-full px-5 my-10'>
            <div className='grid md:grid-cols-2 gap-7'>
                <div className='flex justify-start items-center border border-[#8A8FB9] rounded-sm py-2 px-3 gap-3'>
                    <BiUser className='text-gray-500' />
                    <input type="text" className='bg-transparent border-none outline-none placeholder:text-[#8A8FB9]' placeholder='Full Name' />
                </div>
                <div className='flex justify-start items-center border border-[#8A8FB9] rounded-sm py-2 px-3 gap-3'>
                    <MdEmail className='text-gray-500' />
                    <input type="text" className='bg-transparent border-none outline-none placeholder:text-[#8A8FB9]' placeholder='Write your Email' />
                </div>
            </div>
            <div className='flex justify-start items-start border border-[#8A8FB9] rounded-sm py-3 px-3 gap-3 mt-8 mb-4'>
                <BiComment className='text-gray-500' />
                <textarea className='bg-transparent border-none outline-none placeholder:text-[#8A8FB9] w-full resize-none' rows={5} placeholder='Write your Message' />
            </div>
            <button className='bg-pink rounded-sm font-josefin-sans px-8 text-white py-3 w-full my-10 text-lg'>Post Comment</button>
        </div>
    )
}

export default Comment
