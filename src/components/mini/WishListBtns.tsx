"use client";
import React from 'react'
import { ProductType } from './ProductCard';
import { toast } from 'react-toastify';
import useWishlistStore from '@/store/wishlistStore';
import { TbHeart } from 'react-icons/tb';
import { FaHeart } from 'react-icons/fa';

const WishListBtns = ({ varation, data }: { varation: number, data: ProductType }) => {
    const { addToWishlist, wishlist_items } = useWishlistStore();

    const handleWishListAction = () => {
        const load = toast.loading('Adding to Wishlist...', { autoClose: 2000 });
        try {
            const isAlreadyExist = wishlist_items.findIndex((pr) => pr._id == data._id);
            if (isAlreadyExist !== -1) {
                toast.update(load, { render: "Item Already is in Wishlist!", type: "error", isLoading: false, autoClose: 1000 });
            } else {
                addToWishlist(data)
            }
            toast.update(load, { render: "Item Added in to wishlist!", type: "success", isLoading: false, autoClose: 1000 });
        } catch (error) {

            toast.update(load, { render: "Failed: Try Again", type: "error", isLoading: false, autoClose: 1000 });
            console.log(error);
        }
    }
    return (
        <>
            {varation == 1 && (
                <div className='flex justify-center items-center bg-transparent text-[#1490b9] hover:bg-[#e6e6e7] hover:text-offNavyBlue cursor-pointer rounded-full size-8 p-1' onClick={handleWishListAction}>
                    <TbHeart size={25} />
                </div>
            )}
            {varation == 2 && (
                <button className='px-6 py-2 text-navyBlue font-semibold bg-white rounded-md hover:bg-pink hover:text-white' onClick={handleWishListAction}><FaHeart /></button>
            )}

        </>
    )
}

export default WishListBtns;
