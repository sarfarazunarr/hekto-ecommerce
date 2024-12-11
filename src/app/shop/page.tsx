import Companies from '@/components/Companies'
import MainHeader from '@/components/MainHeader'
import ProductCard, { ProductType } from '@/components/mini/ProductCard'
import StoreDatahandler from '@/components/mini/StoreDatahandler'
import React from 'react'

const ShopGrid = () => {
  const products: ProductType[] = [
    {
      title: "sit amet consectetur",
      price: 31.00,
      discountPrice: 52.00,
      image: "/product18.png"
    },
    {
      title: "vel elit eusim",
      price: 26.00,
      discountPrice: 42.00,
      image: "/product19.png"
    },
    {
      title: "sit amet consectetur",
      price: 31.00,
      discountPrice: 52.00,
      image: "/product20.png"
    },
    {
      title: "sed do eiusmod",
      price: 23.00,
      discountPrice: 39.00,
      image: "/product21.png"
    },
    {
      title: "tempor incididunt ut",
      price: 28.00,
      discountPrice: 49.00,
      image: "/product22.png"
    },
    {
      title: "labore et dolore",
      price: 32.00,
      discountPrice: 55.00,
      image: "/product23.png"
    },
    {
      title: "magna aliqua ut",
      price: 29.00,
      discountPrice: 53.00,
      image: "/product24.png"
    },
    {
      title: "enim ad minim",
      price: 22.00,
      discountPrice: 37.00,
      image: "/product25.png"
    },
    {
      title: "veniam quis nostrud",
      price: 30.00,
      discountPrice: 57.00,
      image: "/product26.png"
    },
    {
      title: "exercitation ullamco laboris",
      price: 24.00,
      discountPrice: 40.00,
      image: "/product27.png"
    },
    {
      title: "nisi ut aliquip",
      price: 27.00,
      discountPrice: 48.00,
      image: "/product28.png"
    },
    {
      title: "ex ea commodo",
      price: 25.00,
      discountPrice: 44.00,
      image: "/product29.png"
    }
  ]
  return (
    <>
      <MainHeader title='Shop Grid Default' prev='Home . Pages . ' current='Shop Grid Default' />
       <StoreDatahandler />

      <div className="px-5 md:px-10 lg:px-40 grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-10 py-10">
        {products.map((product, index) => (<ProductCard key={index} data={product} designType='SIMPLEST' />))}
      </div>
        <Companies />
    </>
  )
}

export default ShopGrid
