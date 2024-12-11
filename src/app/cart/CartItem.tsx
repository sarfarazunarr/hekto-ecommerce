import React from 'react'
import JustItem from './JustItem'

const CartItem = ({image}: {image: string}) => {
    return (
        <tr>
            <td className='my-5'>
                <JustItem image={image} />
            </td>
            <td className='font-semibold text-navyBlue text-center font-josefin-sans'>$32.00</td>
            <td className='pl-10'>
                <div className='grid grid-cols-4 w-20'>
                    <button className='bg-gray-300 text-gray-700'>+</button>
                    <input type="text" className='bg-gray-200 text-gray-500 border-none outline-none text-center font-josefin-sans font-normal' defaultValue={1} />
                    <button className='bg-gray-300 text-gray-700'>-</button>
                </div>
            </td>
            <td className='font-semibold text-navyBlue text-center font-josefin-sans'>$219.00</td>
        </tr>
    )
}

export default CartItem
