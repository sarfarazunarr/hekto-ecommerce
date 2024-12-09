import Companies from '@/components/Companies'
import MainHeader from '@/components/MainHeader'
import PRDesignSimple from '@/components/mini/PRDesignSimple'
import Image from 'next/image'
import React from 'react'
import { FaArrowRight, FaCircle, FaHeart, FaStar } from 'react-icons/fa'

const ProductDetail = () => {
    return (
        <div className='w-full'>
            <MainHeader title='Product Details' current='Product Details' prev='Home . Pages . ' />
            <div className='w-full px-5 lg:px-56 py-20'>
                <div className="grid grid-cols-3 md:grid-cols-7 gap-3 rounded-md shadow-lg shadow-gray-200">
                    <div className="flex flex-col gap-2">
                        <Image src={"/product1.png"} width={151} height={155} alt='product' />
                        <Image src={"/product1.png"} width={151} height={155} alt='product' />
                        <Image src={"/product1.png"} width={151} height={155} alt='product' />
                    </div>
                    <div className='col-span-2 flex justify-center items-center bg-skyBlue'>
                        <Image src={"/product1.png"} width={375} height={487} alt='product' className='col-span-2' />
                    </div>
                    <div className=' flex flex-col gap-3 p-5 col-span-4'>
                        <h2 className='text-4xl text-[#0D134E] font-semibold font-josefin-sans'>Playwood arm chair</h2>
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
                        <p className='font-josefin-sans text-navyBlue flex justify-start items-center gap-3'>$32.00 <span className='text-red line-through'>$64.00</span></p>
                        <p className='flex justify-start items-center gap-3 font-semibold text-navyBlue font-josefin-sans'>Color: <span className='flex justify-start items-center gap-2'><FaCircle size={15} color={"pink"} /><FaCircle size={15} color={"red"} /><FaCircle size={15} color={"green"} /></span></p>
                        <p className='text-gray-400 font-semibold font-josefin-sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
                        <div className='flex justify-start items-center'>
                            <button className='px-6 py-2 text-navyBlue font-semibold bg-white rounded-md hover:bg-navyBlue hover:text-white'>Add to Cart</button>
                            <button className='px-6 py-2 text-navyBlue font-semibold bg-white rounded-md hover:bg-pink hover:text-white'><FaHeart /></button>
                        </div>
                        <div className='flex justify-start items-center gap-3'>
                            <p className='font-semibold text-navyBlue font-josefin-sans'>Categories:</p>
                            <p className='font-semibold text-gray-700 font-josefin-sans'>Bags</p>
                        </div>
                        <div className='flex justify-start items-center gap-3'>
                            <p className='font-semibold text-navyBlue font-josefin-sans'>Tags:</p>
                            <div className='flex justify-start items-center gap-2'>
                                <span className='px-2 py-1 bg-gray-200 rounded-sm'>Bags</span>
                                <span className='px-1 py-1 bg-gray-100 rounded-sm'>Fashion</span>
                                <span className='px-1 py-1 bg-gray-100 rounded-sm'>Women</span>
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
                    <h2 className='text-2xl text-[#0D134E] font-semibold font-josefin-sans py-3'>Lorem, ipsum.</h2>
                    <p className='text-gray-600 font-normal'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. </p>
                    <h2 className='text-2xl text-[#0D134E] font-semibold font-josefin-sans py-3'>More Details</h2>
                    <div className='flex justify-start items-center gap-2'>
                        <FaArrowRight size={16}  className='text-gray-700 hover:text-navyBlue' />
                        <p className="text-gray-500">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. </p>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <FaArrowRight size={16}  className='text-gray-700 hover:text-navyBlue' />
                        <p className="text-gray-500">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. </p>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <FaArrowRight size={16}  className='text-gray-700 hover:text-navyBlue' />
                        <p className="text-gray-500">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. </p>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <FaArrowRight size={16}  className='text-gray-700 hover:text-navyBlue' />
                        <p className="text-gray-500">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. </p>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <FaArrowRight size={16}  className='text-gray-700 hover:text-navyBlue' />
                        <p className="text-gray-500">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. </p>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <FaArrowRight size={16} className='text-gray-700 hover:text-navyBlue' />
                        <p className="text-gray-500">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.</p>
                    </div>

                </div>
            </div>
            <div className='bg-white w-full px-5 lg:px-40 py-10'>
                <h1 className='text-4xl font-semibold text-navyBlue font-josefin-sans py-10 pb-20'>Related Products</h1>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10">
                    <PRDesignSimple />
                    <PRDesignSimple />
                    <PRDesignSimple />
                    <PRDesignSimple />
                </div>
            </div>
            <Companies />
        </div>
    )
}

export default ProductDetail
