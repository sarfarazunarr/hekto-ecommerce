import React from 'react'
import Image from 'next/image';
import { BiSearch } from 'react-icons/bi';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { finalPrice, ProductType } from '@/components/mini/ProductCard';
import { client } from '@/sanity/lib/client';

const Sidebar = async () => {
   
    const products: ProductType[] = await client.fetch(
        `
        *[_type=="product" && discount > 0][4..11]{
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
    <div className='flex flex-col gap-5 p-5 md:col-span-3 lg:col-span-2'>
    <div>
        <h2 className='font-semibold font-josefin-sans text-navyBlue text-2xl py-4'>Search</h2>
        <div className='flex justify-between items-center border border-[#BDBDD8] rounded-sm py-2 px-3'>
            <input type="text" className='bg-transparent border-none outline-none w-4/6 placeholder:text-gray-300' placeholder='Search Posts' />
            <button className='bg-transparent text-gray-300 text-xl'><BiSearch /></button>
        </div>
    </div>
    <div>
        <h2 className='font-semibold font-josefin-sans text-navyBlue text-2xl py-4'>Categories</h2>
        <div className='grid grid-cols-2 gap-2'>
            {[0, 1, 2, 3, 4, 5].map((val) => {
                return (
                    <span key={val} className='bg-white text-sm font-josefin-sans text-offBlue hover:bg-pink hover:text-white rounded-sm px-3 py-2'>Women (16)</span>
                )
            })}
        </div>
    </div>

    <div>
        <h2 className='font-semibold font-josefin-sans text-navyBlue text-2xl py-4'>Recent Posts</h2>
        <div className='flex flex-col gap-5'>
            {['/blog1.png', '/blog2.png', '/blog3.png', '/girl.png'].map((val, index) => {
                return (
                    <div key={index} className='flex justify-start items-center w-full gap-4'>
                        <Image src={val} width={70} height={51} alt='blog' />
                        <div className='flex flex-col'>
                            <h3 className='font-josefin-sans text-sm text-navyBlue'>It is a long established fact</h3>
                            <p className='text-gray-400 font-lato text-[11px]'>Aug 09 2021</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>

    <div>
        <h2 className='font-semibold font-josefin-sans text-navyBlue text-2xl py-4'>Sale Product</h2>
        <div className='flex flex-col gap-5'>
            {products.slice(0,3).map((product, index) => {
                const amount = finalPrice(product.discountPercentage, product.price);
                return (
                    <div key={index} className='flex justify-start items-center w-full gap-4'>
                        <Image src={product.image_url} width={70} height={51} alt={product.name} />
                        <div className='flex flex-col'>
                            <h3 className='font-josefin-sans text-sm text-navyBlue'>{product.name}</h3>
                            <p className='text-gray-400 font-lato text-[11px]'>${amount}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
    <div>
        <h2 className='font-semibold font-josefin-sans text-navyBlue text-2xl py-4'>Offer Product</h2>
        <div className='grid grid-cols-2 gap-5'>
            {products.slice(4,8).map((product, index) => {
                const amount = finalPrice(product.discountPercentage, product.price);

                return (
                    <div key={index} className='flex flex-col justify-start items-center gap-2'>
                        <Image src={product.image_url} width={70} height={51} alt={product.name} />  
                        <div className='flex flex-col'>
                            <h3 className='font-josefin-sans text-navyBlue'>{product.name}</h3>
                            <p className='text-gray-400 font-lato text-sm text-center'>${amount}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
    <div>
        <h2 className='font-semibold font-josefin-sans text-navyBlue text-2xl py-4'>Follow</h2>
        <div className='flex justify-start items-center gap-2'>
           <div className='flex justify-center items-center bg-navyBlue size-7 rounded-full text-white'>
            <FaFacebookF />
           </div>
           <div className='flex justify-center items-center bg-pink size-7 rounded-full text-white'>
            <FaInstagram />
           </div>
           <div className='flex justify-center items-center bg-[#37DAF3] size-7 rounded-full text-white'>
            <FaTwitter />
           </div>
        </div>
    </div>

    <div>
        <h2 className='font-semibold font-josefin-sans text-navyBlue text-2xl py-4'>Tags</h2>
        <div className='grid grid-cols-3 gap-2'>
            {[0, 1, 2, 3, 4].map((val) => {
                return (
                    <span key={val} className='bg-white text-sm font-josefin-sans text-offBlue hover:text-pink underline'>Tags (1)</span>
                )
            })}
        </div>
    </div>
</div>
  )
}

export default Sidebar
