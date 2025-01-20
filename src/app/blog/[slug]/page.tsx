import MainHeader from '@/components/MainHeader'
import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaInstagram, FaPenNib, FaTwitter } from 'react-icons/fa'
import { SlCalender } from 'react-icons/sl'
import Sidebar from '../Sidebar'
import PRDesignSimple from '@/components/mini/PRDesignSimple'
import Navigator from './Navigator'
import RelatedPostBar from './RelatedPostBar'
import Comment from './Comment'
import Companies from '@/components/Companies'
import { client } from '@/sanity/lib/client'
import { ProductType } from '@/components/mini/ProductCard'

const SingleBlog = async () => {
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
        <div className='w-full'>
            <MainHeader title='Single Blog' prev='Home . Pages . ' current='Single Blog' />
            <div className='w-full px-5 lg:px-40 py-20 grid md:grid-cols-7 gap-10'>
                <div className='col-span-full lg:col-span-5'>
                    <Image src={"/blog4.png"} width={870} height={543} alt='blog' className={` rounded-md object-cover`} />
                    <div className='flex flex-col py-4 px-2 items-start gap-3'>
                        <div className='flex justify-start gap-4'>
                            <div className="flex justify-start items-center gap-1">
                                <FaPenNib className='text-pink size-3' />
                                <p className={`font-josefin-sans text-navyBlue text-sm bg-pink/20 `}>Sarfaraz Unar</p>
                            </div>
                            <div className="flex justify-start items-center gap-1">
                                <SlCalender className='text-[#FFA454] size-3' />
                                <p className={`font-josefin-sans text-navyBlue text-sm bg-pink/20`}>08-12-2024</p>
                            </div>
                        </div>

                        <h4 className={`font-josefin-sans font-bold  text-navyBlue text-3xl `}>Top essential Trends in 2024</h4>
                        <div className='font-lato text-[#8A8FB9] font-normal '>
                            <p>More off this less hello samlande lied much over tightly circa horse taped mightly Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod necessitatibus aliquam obcaecati consequatur! Repellat odio unde natus possimus enim quibusdam perferendis, temporibus numquam, sapiente suscipit dolorem blanditiis quidem dicta vel dolor laborum nesciunt necessitatibus ipsa soluta hic molestias impedit facilis libero? Laborum vitae eius obcaecati.</p>
                            <p className='py-2'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim totam impedit cupiditate! Porro praesentium ipsam modi impedit consequatur laboriosam nobis culpa repellendus et? Aut nobis numquam, sed dolorum amet deleniti.
                            </p>
                            <blockquote className='bg-[#FAFAFB] border-l-2 p-2 my-5 leading-8 text-gray-500 border-red'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nemo iusto sapiente voluptates minima quaerat ipsum aut earum maxime amet deserunt obcaecati cum id reiciendis.
                            </blockquote>
                            <div className='grid md:grid-cols-2 gap-5'>
                                
                                <Image src={"/girl.png"} width={418} height={245} alt='girl' className='rounded-md' />
                                <Image src={"/girl.png"} width={418} height={245} alt='girl' className='rounded-md' />
                            </div>
                            <p className='py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ullam necessitatibus sapiente ducimus labore tenetur quasi harum, sed rem quidem perspiciatis exercitationem in ab aliquid? Praesentium totam beatae molestiae consequuntur.</p>

                            <div className='grid md:grid-cols-3 lg:grid-cols-4 items-center gap-1'>
                                {products.map((product, index) => (

                                <PRDesignSimple key={index} data={product} version={2} />
                                ))}
                            </div>

                            <p className='py-2'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim totam impedit cupiditate! Porro praesentium ipsam modi impedit consequatur laboriosam nobis culpa repellendus et? Aut nobis numquam, sed dolorum amet deleniti.
                            </p>
                            <p className='py-2'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim totam impedit cupiditate! Porro praesentium ipsam modi impedit consequatur laboriosam nobis culpa repellendus et? Aut nobis numquam, sed dolorum amet deleniti.
                            </p>
                        </div>
                        <div className='flex justify-center w-full py-20 items-center gap-2'>
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

                   <Navigator />

                    <div className='w-full flex my-20 flex-col gap-4'>
                        <RelatedPostBar />
                        <RelatedPostBar />
                    </div>
                    <Comment />
                </div>
                <Sidebar />
            </div>
            <Companies />
        </div>
    )
}

export default SingleBlog
