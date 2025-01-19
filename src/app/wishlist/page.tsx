"use client";
import MainHeader from '@/components/MainHeader'
import ProductCard from '@/components/mini/ProductCard';
import useWishlistStore from '@/store/wishlistStore'
import React from 'react'

const WishList = () => {
    const {wishlist_items } = useWishlistStore();

  return (
    <>
      <MainHeader title='Wishlist Items' prev='Home . Pages . ' current='Wishlist' />
      {(wishlist_items.length == 0) && (
        <div className='w-full my-5 flex justify-center flex-col items-center'>
          <h3 className='text-xl font-bold text-center text-gray-700 pt-10'>No Products are available in wishlist!</h3>
        </div>
      )}
      <div className={"grid my-5 grid-cols-4 px-20 gap-4"}>
        {wishlist_items.map((product, index) => (<ProductCard key={index} data={product} designType='SIMPLEST' />))}
      </div>
    </>
  )
}

export default WishList
