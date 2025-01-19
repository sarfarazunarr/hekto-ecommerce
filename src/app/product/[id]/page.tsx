import Companies from '@/components/Companies'
import MainHeader from '@/components/MainHeader'
import CartBtns from '@/components/mini/CartBtns'
import PRDesignSimple from '@/components/mini/PRDesignSimple'
import { finalPrice, ProductType } from '@/components/mini/ProductCard'
import WishListBtns from '@/components/mini/WishListBtns'
import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import React from 'react'
import {  FaStar } from 'react-icons/fa'


const ProductDetail = async ({ params }: { params: { id: string } }) => {


    const product: ProductType = await client.fetch(`*[_type == "product" && slug.current == "${params.id}"][0]{
        _id,
        name,
        description,
        stockLevel,
        discountPercentage,
        price,
        "image_url":image.asset->url,
        category,

    }`);
    const amount = finalPrice(product.discountPercentage, product.price);

    const relatedProduct: ProductType[] = await client.fetch(`*[_type == "product" && category == "${product.category}"][0..3]{name,
        description,
        stockLevel,
        discountPercentage,
        price,
        "image_url":image.asset->url,
        category,}`)
    return (
        <div className='w-full'>
            <MainHeader title='Product Details' current='Product Details' prev='Home . Pages . ' />
            <div className='w-full px-5 lg:px-56 py-20'>
                <div className="grid grid-cols-3 md:grid-cols-7 gap-3 rounded-md shadow-lg shadow-gray-200">
                    <div className="flex flex-col gap-2">
                        <Image src={"/productMain39.png"} width={151} height={155} alt='product' />
                        <Image src={"/productMain40.png"} width={151} height={155} alt='product' />
                        <Image src={"/productMain41.png"} width={151} height={155} alt='product' />
                    </div>
                    <div className='col-span-2 flex justify-center items-center bg-skyBlue'>
                        <Image src={product.image_url} width={375} height={487} alt={product.name} className='col-span-2' />
                    </div>
                    <div className=' flex flex-col gap-3 p-5 col-span-4'>
                        <h2 className='text-4xl text-[#0D134E] font-semibold font-josefin-sans'>{product.name}</h2>
                        <div className='flex justify-start items-center gap-2'>
                            <div className="flex justify-start items-center gap-1 text-sm">
                                <FaStar className='text-[#FFC416]' />
                                <FaStar className='text-[#FFC416]' />
                                <FaStar className='text-[#FFC416]' />
                                <FaStar className='text-[#FFC416]' />
                                <FaStar className='text-gray-400' />
                                <p className='text-black text-sm font-josefin-sans'>(22)</p>
                            </div>
                        </div>
                        <p className='font-josefin-sans text-navyBlue flex justify-start items-center gap-3'>${amount} {product.discountPercentage > 0 && <span className='text-red line-through'>${product.price}</span>}</p>

                        <p className='text-gray-400 font-semibold font-josefin-sans'>{product.description}</p>
                        <div className='flex justify-start items-center'>
                            <CartBtns varation={2} amount={amount} data={product} />
                            <WishListBtns varation={2} data={product} />
                        </div>
                        <div className='flex justify-start items-center gap-3'>
                            <p className='font-semibold text-navyBlue font-josefin-sans'>Category:</p>
                            <p className='font-semibold text-gray-700 font-josefin-sans'>{product.category}</p>
                        </div>
                        <div className='flex justify-start items-center gap-3'>
                            <p className='font-semibold text-navyBlue font-josefin-sans'>Tags:</p>
                            <div className='flex justify-start items-center gap-2'>
                                <span className='px-2 py-1 bg-gray-200 rounded-sm'>{product.category}</span>
                                <span className='px-1 py-1 bg-gray-100 rounded-sm'>High Quality {product.category}</span>
                                <span className='px-1 py-1 bg-gray-100 rounded-sm'>Affordable {product.category}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-skyBlue w-full px-5 md:px-10 lg:px-40 py-10'>
                <div className='flex flex-wrap gap-3 md:gap-7 justify-start items-center lg:gap-20'>
                    <h3 className='text-2xl text-[#0D134E] font-semibold font-josefin-sans underline'>Description</h3>
                    <h3 className='text-2xl text-[#0D134E] font-semibold font-josefin-sans'>Additional Info</h3>
                    <h3 className='text-2xl text-[#0D134E] font-semibold font-josefin-sans'>Reviews</h3>
                    <h3 className='text-2xl text-[#0D134E] font-semibold font-josefin-sans'>Video</h3>
                </div>
                <div className='py-5'>
                    <p className='text-gray-600 font-normal'>{product.description}</p>

                </div>
            </div>
            <div className='bg-white w-full px-5 lg:px-40 py-10'>
                <h1 className='text-4xl font-semibold text-navyBlue font-josefin-sans py-10 pb-20'>Related Products</h1>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {relatedProduct.map((product, index)=> (
                    <PRDesignSimple key={index} data={product} />
                    ))}
                    
                </div>
            </div>
            <Companies />
        </div>
    )
}

export default ProductDetail
