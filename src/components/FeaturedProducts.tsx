import React from 'react'
import Heading from './mini/Heading'
import ProductCard from './mini/ProductCard'

const FeaturedProducts = () => {
  return (
    <div className='w-full px-40 py-10'>
        <Heading text='Featured Products' />
        <div className='grid grid-cols-4 gap-10'>
            <ProductCard designType='SIMPLE 1/4' />
            <ProductCard designType='SIMPLE 1/4' />
            <ProductCard designType='SIMPLE 1/4' />
            <ProductCard designType='SIMPLE 1/4' />
        </div>
    </div>
  )
}

export default FeaturedProducts
