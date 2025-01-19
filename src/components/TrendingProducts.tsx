import React from 'react'
import ProductCard, { ProductType } from './mini/ProductCard'
import Heading from './mini/Heading'
import PromotedCategory from './mini/PromotedCategory'
import ProductBar from './mini/ProductBar'
import { client } from '@/sanity/lib/client'

const TrendingProducts = async () => {
    const products: ProductType[] = await client.fetch(
        `
        *[_type=="product" && discountPercentage > 0][9..12]{
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

    const minproducts: ProductType[] = await client.fetch(
        `
        *[_type=="product" && discountPercentage > 0] | order(price asc) [0..2] {
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
            <Heading text='Trending Products' />
            <div className='grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-5 lg:gap-10'>
                {products.map((product, index) => (
                    <ProductCard key={index} data={product} designType='SIMPLE 1/4' />
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-4">
                <div className='md:col-span-3'>
                    <PromotedCategory title='Special Discount on Chairs' btn='Shop Now' image={{src: '/chair.png', width: 200, height: 200}} isActive={false} url='chair' />
                </div>
                <div className='md:col-span-3'>
                    <PromotedCategory title='Special Discount on Sofas' image={{src: '/sofa2.png', width: 200, height: 200}} isActive={true} btn='View Collection' url='sofa' />
                </div>
                <div className='flex md:col-span-6 lg:col-span-2 flex-col md:flex-row lg:flex-col gap-2'>
                    {minproducts.map((product, index) => (<ProductBar key={index} data={product} />))}
                </div>
            </div>
        </div>
    )
}

export default TrendingProducts
