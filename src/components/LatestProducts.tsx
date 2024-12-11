import React from 'react'
import Heading from './mini/Heading'
import ProductCard, { ProductType } from './mini/ProductCard'

const LatestProducts = () => {
    const products: ProductType[] = [{title: "Comfort Handy Craft", image:'/product5.png', price: 42.00, discountPrice: 65.00}, {title: "Comfort Handy Craft", image:'/product6.png', price: 42.00, discountPrice: 65.00}, {title: "Comfort Handy Craft", image:'/product7.png', price: 42.00, discountPrice: 65.00}, {title: "Comfort Handy Craft", image:'/product8.png', price: 42.00, discountPrice: 65.00}, {title: "Comfort Handy Craft", image:'/product9.png', price: 42.00, discountPrice: 65.00},{title: "Comfort Handy Craft", image:'/product10.png', price: 42.00, discountPrice: 65.00}]

    return (
        <div className='w-full px-5 lg:px-40 py-10'>
            <Heading text='Latest Products' />
            <div className='flex justify-center items-center gap-6 py-2 pb-5 flex-wrap'>
                <p className='text-pink lato text-lg cursor-pointer '>New Arrivals</p>
                <p className='text-navyBlue lato text-lg cursor-pointer'>Best Seller</p>
                <p className='text-navyBlue lato text-lg cursor-pointer'>Featured</p>
                <p className='text-navyBlue lato text-lg cursor-pointer'>Special Offer</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {products.map((product, index) => (
                    <ProductCard key={index} data={product} designType='MEDIUM 1/3' />
                ))}
            </div>
        </div>
    )
}

export default LatestProducts
