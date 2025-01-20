"use client";
import Companies from '@/components/Companies'
import MainHeader from '@/components/MainHeader'
import ProductCard, { ProductType } from '@/components/mini/ProductCard'
import StoreDatahandler from '@/components/mini/StoreDatahandler'
import React, { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client';
import Loader from '@/components/mini/Loader';

const Sidebar = () => {
    const [isActive, setIsActive] = useState(false);


    const [products, setProducts] = useState<ProductType[]>();
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState('instock');
    const [offer, setOffer] = useState(0);
    const [price, setPrice] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        setLoading(true)
        try {
            const query = `*[_type == "product"${category ? ` && category == "${category}"` : ''}${offer > 0 ? ` && discountPercentage <= ${offer}` : ''}${price > 0 ? ` && price <= '${price}'` : ''}][0..${itemsPerPage}]{_id, name, description, stockLevel, discountPercentage, price, "image_url": image.asset->url, "slug": slug.current}`;
            const product = await client.fetch(query);
            setProducts(product);
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.error(error);
        }
    };

    useEffect(() => {
        getData();
    }, [category, offer, itemsPerPage, stock]);
    return (
        <div>

            <MainHeader title='Shop' prev='Home . Pages . Shop . ' current='Shop' />

            <StoreDatahandler itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} />
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

                    <div className='flex flex-col gap-3 py-2'>
                        <h3 className='font-bold underline pb-2 font-josefin-sans text-offBlue text-xl'>Categories</h3>
                        <div className='flex flex-col gap-1'>
                            <select value={category} className='px-3 mr-2 py-2 rounded-sm border border-gray-300 text-black placeholder:text-gray-200' onChange={(e) => setCategory(e.target.value)}>
                                <option defaultValue={""} disabled>Select Category</option>
                                <option value={"Chair"}>Chair</option>
                                <option value={"Sofa"}>Sofa</option>
                            </select>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3 py-2'>
                        <h3 className='font-bold underline pb-2 font-josefin-sans text-offBlue text-xl'>Discount Offer</h3>
                        <div className='flex flex-col gap-1'>
                            <select value={offer} className='px-3 mr-2 py-2 rounded-sm border border-gray-300 text-black placeholder:text-gray-200' onChange={(e) => setOffer(parseInt(e.target.value, 10))}>
                                <option value={5}>5%</option>
                                <option value={10}>10%</option>
                                <option value={15}>15%</option>
                                <option value={20}>20%</option>
                                <option value={25}>25%</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 py-2'>
                        <h3 className='font-bold underline pb-2 font-josefin-sans text-offBlue text-xl'>Stock Availability</h3>
                        <div className='flex flex-col gap-1'>
                            <select value={stock} className='px-3 mr-2 py-2 rounded-sm border border-gray-300 text-black placeholder:text-gray-200' onChange={(e) => setStock(e.target.value)}>
                                <option value={"instock"}>In Stock</option>
                                <option value={"outstock"}>Out of Stock</option>
                            </select>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3 py-2'>
                        <h3 className='font-bold underline pb-2 font-josefin-sans text-offBlue text-xl'>Price Filter</h3>
                        <div className='flex flex-col gap-1'>
                            <input type="number" value={price} className='px-3 mr-2 py-2 rounded-sm border border-gray-300 text-black placeholder:text-gray-200' placeholder='$10 - $20000' onChange={(e) => setPrice(parseInt(e.target.value, 10))} />
                            <button className='px-3 mr-2 py-2 rounded-sm border border-gray-300 text-white bg-black  hover:bg-gray-800' onClick={() => getData()}>Filter with Price</button>
                        </div>
                    </div>

                </div>
                <div className=" py-10 col-span-full lg:col-span-3">
                    {loading && (
                        <Loader />
                    )}
                    {products?.length == 0 && (
                        <div className='w-full h-screen flex justify-center flex-col items-center'>
                            <h3 className='text-3xl font-bold text-center text-gray-700 pt-10'>No Products Available!</h3>
                            <button className='px-4 py-2 rounded-md bg-offBlue text-white hover:bg-black' onClick={() => {
                                setCategory('');
                                setPrice(0);
                                setOffer(0);
                                setItemsPerPage(10);
                            }}>Reset Filters</button>
                        </div>
                    )}
                    {products?.map((product, index) => (
                        <ProductCard key={index} designType='BAR' data={product} showDots={true} />
                    ))}


                </div>
            </div>

            <Companies />

        </div>
    )
}

export default Sidebar
