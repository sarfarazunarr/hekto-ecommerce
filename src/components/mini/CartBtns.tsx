"use client";
import React, { useState } from 'react'
import { BsCart2 } from 'react-icons/bs'
import useCartStore from '@/store/cartStore'
import { ProductType } from './ProductCard';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';

const CartBtns = ({ varation, data, amount }: { varation: number, data?: ProductType, amount?: number }) => {
    const { addToCart, cart, updateQuantity } = useCartStore();
    const [qty, setQty] = useState(1);
    const handleCartAction = () => {
        const load = toast.loading('Adding to Cart...', { autoClose: 2000 });
        if(typeof data == "undefined" || typeof amount == "undefined") {
            toast.update(load, { render: "Data not defined!", type: "success", isLoading: false, autoClose: 1000 });
            return;
        }
        try {
            const cartData = { ...data, quantity: qty, subPrice: amount, totalAmount: (qty * amount) };
            const isAlreadyExist = cart.findIndex((pr) => pr._id == data._id);
            if (isAlreadyExist != -1) {
                const record = cart[isAlreadyExist]
                updateQuantity(data._id, record.quantity + qty);
            } else {
                addToCart(cartData)
            }
            toast.update(load, { render: "Item Added in to cart!", type: "success", isLoading: false, autoClose: 1000 });
        } catch (error) {

            toast.update(load, { render: "Failed: Try Again", type: "error", isLoading: false, autoClose: 1000 });
            console.log(error);
        }
    }
    return (
        <>
            {varation == 1 && (
                <div className='flex justify-center items-center bg-transparent text-[#1490b9] hover:bg-[#e6e6e7] hover:text-offNavyBlue cursor-pointer rounded-full size-8 p-1' onClick={handleCartAction}>
                    <BsCart2 size={25} />
                </div>
            )}
            {varation == 2 && (
                <div className='flex justify-between items-center'>
                    <button className='px-6 py-2 text-navyBlue font-semibold bg-slate-200 rounded-md hover:bg-navyBlue hover:text-white' onClick={handleCartAction}>Add to Cart</button>
                    <input type="number" value={qty} className='bg-gray-200 text-gray-500 border-none outline-none text-center font-josefin-sans text-lg py-1 mx-1 font-normal' onChange={(e) => setQty(Number.parseInt(e.target.value))} />
                </div>
            )}
            {varation == 3 && (
                <Link href={"/cart"} className='bg-transparent text-white border-none outline-none pl-3 text-lg flex justify-start items-center gap-2'><FiShoppingCart color={'white'} /> {cart.length > 0 && <span className='bg-white rounded-full text-sm text-purple size-5 text-center font-semibold'>{cart.length}</span>}</Link>
            )}

        </>
    )
}

export default CartBtns
