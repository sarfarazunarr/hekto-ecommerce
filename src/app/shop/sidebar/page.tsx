"use client";
import Companies from '@/components/Companies'
import MainHeader from '@/components/MainHeader'
import ProductCard from '@/components/mini/ProductCard'
import StoreDatahandler from '@/components/mini/StoreDatahandler'
import React, { useState } from 'react'
import Checkbox from './components/Checkbox'
import { FaCircle } from 'react-icons/fa'

const Sidebar = () => {

    const [isActive, setIsActive] = useState(false)

    const brand = ["Coaster Furniture",
        "Fusion Dot High Fusion",
        "Unique Furniture Restore",
        "Dream Furniture Flipping",
        "Young Reparposed",
        "Green DIY Furniture",]
    const offers = ["20% Cashback",
        "3% Cashback Offer",
        "25% Discount Offer"]

    const categories = ["Prestashop",
        "Magento",
        "Bigcommerce",
        "osCommerce",
        "3dcart",
        "Bags",
        "Accessories",
        "Jewellery",
        "Watches"]

    const priceRanges = ["$0.00 - $150.00",
        "$150.00 - $350.00",
        "$150.00 - $504.00",
        "$450.00+"]
    const colors = [
        "Blue",
        "Orange",
        "Brown",
        "Green",
        "Purple", "Sky"
    ]

    return (
        <div>

            <MainHeader title='Shop Left Sidebar' prev='Home . Pages . Shop . ' current='Shop Left Sidebar' />

            <StoreDatahandler />
            <div className='flex md:hidden p-5 justify-start items-center gap-1'>
                <p className='text-lg font-lato text-navyBlue font-normal'>Filters</p>
                <div className='flex justify-end items-center px-5'>
                    <div className={`w-8 md:hidden flex flex-col justify-center gap-1 ${isActive ? 'cross' : ''}`} onClick={() => setIsActive(!isActive)}>
                        <div className="w-full h-1 bg-gray-700 transition-transform duration-500 ease-in-out"></div>
                        <div className="w-full h-1 bg-gray-700 transition-transform duration-500 ease-in-out"></div>
                        <div className="w-full h-1 bg-gray-700 transition-transform duration-500 ease-in-out"></div>
                    </div>
                </div>
            </div>
            <div className='px-5 lg:px-40 w-full grid md:grid-cols-4'>
                <div className={`flex ${isActive ? 'block md:block' : 'hidden md:block'} bg-white flex-col gap-3 px-3`}>
                    <div className='flex flex-col gap-3'>
                        <h3 className='font-bold underline pb-2 font-josefin-sans text-offBlue text-xl'>Product Brand</h3>
                        <div className='flex flex-col gap-1'>
                            {brand.map((br, index) => {
                                return (
                                    <Checkbox key={index} name={br} label={br} color='checked:accent-navyBlue' />
                                )
                            })}
                        </div>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <h3 className='font-bold underline pb-2 font-josefin-sans text-offBlue text-xl'>Discount Offer</h3>
                        <div className='flex flex-col gap-1'>
                            {offers.map((offer, index) => {
                                return (
                                    <Checkbox key={index} name={offer} label={offer} color='checked:accent-[#FF3EB2]' />
                                )
                            })}
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h3 className='font-bold underline pb-2 font-josefin-sans text-offBlue text-xl'>Categories</h3>
                        <div className='flex flex-col gap-1'>
                            {categories.map((category, index) => {
                                return (
                                    <Checkbox key={index} name={category} label={category} color='checked:accent-[#FF3EB2]' />
                                )
                            })}
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h3 className='font-bold underline pb-2 font-josefin-sans text-offBlue text-xl'>Price Filter</h3>
                        <div className='flex flex-col gap-1'>
                            {priceRanges.map((price, index) => {
                                return (
                                    <Checkbox key={index} name={price} label={price} color='checked:accent-[#FF3EB2]' />
                                )
                            })}
                            <input type="text" className='px-3 mr-2 py-2 rounded-sm border border-gray-300 text-black placeholder:text-gray-200' placeholder='$10 - $20000' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h3 className='font-bold underline pb-2 font-josefin-sans text-offBlue text-xl'>Filter By Color</h3>
                        <div className='grid grid-cols-3 gap-2'>
                            {colors.map((color, index) => {
                                return (
                                    <div key={index} className='flex gap-2 items-center justify-start'>
                                        <FaCircle size={15} color={color} />
                                        <p className='text-gray-500 font-lato'>{color}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className=" py-10 col-span-full lg:col-span-3">
                    <ProductCard designType='BAR' showDots={true} />
                    <ProductCard designType='BAR' showDots={true} />
                    <ProductCard designType='BAR' showDots={true} />
                    <ProductCard designType='BAR' showDots={true} />
                    <ProductCard designType='BAR' showDots={true} />
                    <ProductCard designType='BAR' showDots={true} />
                    <ProductCard designType='BAR' showDots={true} />
                    <ProductCard designType='BAR' showDots={true} />

                </div>
            </div>

            <Companies />

        </div>
    )
}

export default Sidebar
