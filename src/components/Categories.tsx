import React from 'react'
import Heading from './mini/Heading'
import ProductCard, { ProductType } from './mini/ProductCard'

const Categories = () => {
  const products: ProductType[] = [{title: "Mini LCW Chair", image:'/product1.png', price: 56.00}, {title: "Mini LCW Chair", image:'/product4.png', price: 56.00}, {title: "Mini LCW Chair", image:'/product4cat.png', price: 56.00}, {title: "Mini LCW Chair", image:'/product5.png', price: 56.00}]
  return (
    <div className='w-full px-5 lg:px-40 py-10'>
        <Heading text='Top Categories' />
        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-10'>
          {products.map((product, index) => (<ProductCard key={index} data={product} designType='CATEGORY PRODUCT' />))}
        </div>
    </div>
  )
}

export default Categories
