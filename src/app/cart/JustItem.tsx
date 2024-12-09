import Image from 'next/image'
import React from 'react'

const JustItem = () => {
    return (
        <div className='flex flex-col md:flex-row justify-start items-center gap-5'>
            <Image src={"/image1.png"} width={83} height={87} alt='image' className='rounded-md object-cover' />
            <div className='flex flex-col'>
                <h2>Ut diam consequat</h2>
                <div className='flex justify-start items-center'>
                    <p className='text-gray-400 hidden md:block'>Color: </p>
                    <span className='text-gray-500 font-semibold' title='color'>Brown</span>
                </div>
                <div className='flex justify-start items-center'>
                    <p className='text-gray-400 hidden md:block'>Size: </p><span className='text-gray-500 font-semibold' title='size'>XL</span>
                </div>
            </div>
        </div>
    )
}

export default JustItem
