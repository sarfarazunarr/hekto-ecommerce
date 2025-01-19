import React from 'react'
import Heading from './mini/Heading'
import ProductCard, { ProductType } from './mini/ProductCard'
import { client } from '@/sanity/lib/client'

const Categories = async () => {
  const products: ProductType[][] = await client.fetch(
    `
    [
      *[_type=="product" && category == "Sofa"][0..1] {
        _id,
        name,
        description,
        stockLevel,
        discountPercentage,
        price,
        category,
        "image_url":image.asset->url,
        "slug": slug.current
      },
      *[_type=="product" && discountPercentage > 0 && category == "Chair"][0..1] {
        name,
        description,
        stockLevel,
        discountPercentage,
        price,
        category,
        "image_url":image.asset->url,
        "slug": slug.current
      }
    ]
      `
  )
  return (
    <div className='w-full px-5 lg:px-40 py-10'>
      <Heading text='Top Categories' />
      <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-10'>
        {products[0].map((product, index) => (<ProductCard key={index} data={product} designType='CATEGORY PRODUCT' />))}
        {products[1].map((product, index) => (<ProductCard key={index} data={product} designType='CATEGORY PRODUCT' />))}
      </div>
    </div>
  )
}

export default Categories
