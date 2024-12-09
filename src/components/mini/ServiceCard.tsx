import Image from 'next/image'
import React from 'react'

const ServiceCard = ({title, image}: {title: string, image: string}) => {
    return (
        <div className='bg-white flex flex-col items-center justify-center gap-4 p-4 rounded-md hover:shadow-sm hover:shadow-gray-300 hover:border-b-2 hover:border-b-[#FF9100]'>
            <Image src={image} height={50} width={50} alt={title} />
            <h4 className='font-josefin-sans text-2xl font-semibold text-navyBlue text-center'>{title}</h4>
            <p className='text-gray-400 font-lato text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>
    )
}

export default ServiceCard
