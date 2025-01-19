import React from 'react'
import Heading from './mini/Heading'
import ProductCard, { ProductType } from './mini/ProductCard'
import { client } from '@/sanity/lib/client'

const FeaturedProducts = async () => {
  const products: ProductType[] = await client.fetch(
    `
    *[_type=="product" && isFeaturedProduct][0..3]{
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
      <Heading text='Featured Products' />
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-10'>
        {products.map((product, index) => (
          <ProductCard key={index} data={product} designType='SIMPLE 1/4' />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
