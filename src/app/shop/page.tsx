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
      <div className='w-full px-40 py-20 flex justify-between items-center'>
       <StoreDatahandler />

        <div className='flex justify-start items-center gap-5'>
            <div className='flex items-center justify-start gap-2'>
                <label htmlFor="perpage" className='text-offBlue font-lato'>Per Page:</label>
                <input type="text" className='w-14 h-7 rounded-sm border border-gray-300 focus:border-navyBlue outline-none text-gray-700 px-2' />
            </div>
            <div className='flex items-center justify-start gap-2'>
                <label htmlFor="perpage" className='text-offBlue font-lato font-medium'>Sort By: </label>
                <select className='h-7 rounded-sm border border-gray-300 focus:border-navyBlue outline-none text-gray-500'>
                    <option value="best">Best Match</option>
                    <option value="all">All Results</option>
                </select>
            </div>
            <div className='flex items-center justify-start gap-2'>
                <label htmlFor="perpage" className='text-offBlue font-lato flex justify-start items-center gap-3'>View: <IoGrid size={15} className='text-navyBlue' />
                <FaList size={15} className='text-navyBlue' />
                </label>
                <input type="text" className='w-14 h-7 rounded-sm border border-gray-300 focus:border-navyBlue outline-none text-gray-700 px-2' />
            </div>
        </div>
      </div>

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
