import Companies from '@/components/Companies'
import MainHeader from '@/components/MainHeader'
import ProductCard, { ProductType } from '@/components/mini/ProductCard'
import StoreDatahandler from '@/components/mini/StoreDatahandler'
import React from 'react'


const ShopList = () => {
    const products: ProductType[] = [
        {
            title: "sit amet consectetur",
            price: 31.00,
            discountPrice: 52.00,
            image: "/product31.png"
          },
          {
            title: "vel elit eusim",
            price: 26.00,
            discountPrice: 42.00,
            image: "/product32.png"
          },
          {
            title: "sit amet consectetur",
            price: 31.00,
            discountPrice: 52.00,
            image: "/product33.png"
          },
          {
            title: "sed do eiusmod",
            price: 23.00,
            discountPrice: 39.00,
            image: "/product34.png"
          },
          {
            title: "tempor incididunt ut",
            price: 28.00,
            discountPrice: 49.00,
            image: "/product35.png"
          },
          {
            title: "labore et dolore",
            price: 32.00,
            discountPrice: 55.00,
            image: "/product36.png"
          },
          {
            title: "magna aliqua ut",
            price: 29.00,
            discountPrice: 53.00,
            image: "/product37.png"
          },
    ]
    return (
        <>
            <MainHeader title='Shop List' prev='Home . Pages . Shop . ' current='Shop List' />

            <StoreDatahandler />
            <div className="px-5 md:px-10 lg:px-40 w-full py-10">
                {products.map((product, index) => (<ProductCard key={index} data={product} designType='BAR' showDots={true} />))}

            </div>
            <Companies />
        </>
    )
}

export default ShopList
