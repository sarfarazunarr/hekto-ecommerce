import Companies from '@/components/Companies'
import MainHeader from '@/components/MainHeader'
import ProductCard from '@/components/mini/ProductCard'
import StoreDatahandler from '@/components/mini/StoreDatahandler'
import React from 'react'
import { FaList } from 'react-icons/fa'
import { IoGrid } from 'react-icons/io5'

const ShopGrid = () => {
  return (
    <>
      <MainHeader title='Shop Grid Default' prev='Home . Pages . ' current='Shop Grid Default' />
       <StoreDatahandler />

      <div className="px-40 grid grid-cols-4 gap-10  py-10">
        <ProductCard designType='SIMPLEST' showDots={true} />
        <ProductCard designType='SIMPLEST' showDots={true} />
        <ProductCard designType='SIMPLEST' showDots={true} />
        <ProductCard designType='SIMPLEST' showDots={true} />
        <ProductCard designType='SIMPLEST' showDots={true} />
        <ProductCard designType='SIMPLEST' showDots={true} />
        <ProductCard designType='SIMPLEST' showDots={true} />
        <ProductCard designType='SIMPLEST' showDots={true} />
        <ProductCard designType='SIMPLEST' showDots={true} />
        <ProductCard designType='SIMPLEST' showDots={true} />
        <ProductCard designType='SIMPLEST' showDots={true} />
        <ProductCard designType='SIMPLEST' showDots={true} />
      </div>
        <Companies />
    </>
  )
}

export default ShopGrid
