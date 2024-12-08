import Image from 'next/image'
import React from 'react'

const PromotedCategory = ({ title, image, btn, isActive }: { title: string, image: {src: string, width: number, height: number}, btn: string, isActive: boolean }) => {
    return (
        <div className={`w-full flex flex-col h-[270px] ${isActive ? 'bg-skyBlue' : 'bg-white'}`}>
            <div className='flex flex-col p-4 items-start'>
                <h3 className='text-2xl font-semibold text-navyBlue'>{title}</h3>
                <button className='bg-transparent text-pink font-semibold underline'>{btn}</button>
            </div>
            <div className='w-full flex justify-between'>
                <div></div>
                <Image src={image.src} width={image.width} height={image.height} alt='category' />
            </div>
        </div>
    )
}

export default PromotedCategory
