import React from 'react'
import Heading from './mini/Heading'
import ProductCard, { ProductType } from './mini/ProductCard'
import { client } from '@/sanity/lib/client'

const LatestProducts = async () => {
    const products: ProductType[] = await client.fetch(
        `
        *[_type=="product" && discountPercentage > 0][4..9]{
            _id,
            name,
            description,
            stockLevel,
            discountPercentage,
            price,
            "image_url":image.asset->url,
            "slug": slug.current
          }
          `
      )

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
