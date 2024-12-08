import Image from 'next/image'
import React from 'react'

const CartItem = () => {
    return (
        <tr>
            <td className='flex justify-start items-center gap-5 my-5'>
                <Image src={"/image1.png"} width={83} height={87} alt='image' className='rounded-md object-cover' />
                <div className='flex flex-col'>
                    <h2>Ut diam consequat</h2>
                    <p className='text-gray-400'>Color: <span className='text-gray-500 font-semibold'>Brown</span></p>
                    <p className='text-gray-400'>Size: <span className='text-gray-500 font-semibold'>XL</span></p>
                </div>
            </td>
            <td className='font-semibold text-navyBlue text-center font-josefin-sans'>$32.00</td>
            <td className='pl-10'>
                <div className='grid grid-cols-4 w-20'>
                    <button className='bg-gray-300 text-gray-700'>+</button>
                    <input type="text" className='bg-gray-200 text-gray-500 border-none outline-none text-center font-josefin-sans font-normal' defaultValue={1} />
                    <button className='bg-gray-300 text-gray-700'>-</button>
                </div>
            </td>
            <td className='font-semibold text-navyBlue text-center font-josefin-sans'>$142.00</td>
        </tr>
    )
}

export default CartItem
