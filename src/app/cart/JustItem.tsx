import Image from 'next/image'
import React from 'react'

const JustItem = () => {
    return (
        <div className='flex justify-start items-center gap-5'>
            <Image src={"/image1.png"} width={83} height={87} alt='image' className='rounded-md object-cover' />
            <div className='flex flex-col'>
                <h2>Ut diam consequat</h2>
                <p className='text-gray-400'>Color: <span className='text-gray-500 font-semibold'>Brown</span></p>
                <p className='text-gray-400'>Size: <span className='text-gray-500 font-semibold'>XL</span></p>
            </div>
        </div>
    )
}

export default JustItem
