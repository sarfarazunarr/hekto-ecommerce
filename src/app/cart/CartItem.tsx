"use client";
import React, { useEffect, useState } from 'react'
import JustItem from './JustItem'
import useCartStore, { CartProduct } from '@/store/cartStore'

const CartItem = ({data}: {data: CartProduct}) => {
    const [qty, setQty] = useState(data.quantity);
    const {updateQuantity} = useCartStore();
    useEffect(() => {
        updateQuantity(data._id, qty)
    }, [qty]);
    return (
        <tr>
            <td className='my-5'>
                <JustItem data={data} />
            </td>
            <td className='font-semibold text-navyBlue text-center font-josefin-sans'>${data.subPrice}</td>
            <td className='pl-10 w-24'>
                    <input type="number" className='bg-gray-200 text-gray-500 border-none outline-none text-center font-josefin-sans font-normal ' min={1} value={qty} onChange={(e) => setQty(Number.parseInt(e.target.value))} />
            </td>
            <td className='font-semibold text-navyBlue text-center font-josefin-sans'>${data.totalAmount}</td>
        </tr>
    )
}

export default CartItem
