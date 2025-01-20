"use client";
import Companies from '@/components/Companies'
import MainHeader from '@/components/MainHeader'
import Loader from '@/components/mini/Loader';
import ProductCard, { ProductType } from '@/components/mini/ProductCard'
import StoreDatahandler from '@/components/mini/StoreDatahandler'
import { client } from '@/sanity/lib/client';
import React, { useEffect, useState } from 'react'



const Category = ({params}: {params: {slug: string}}) => {
  const [products, setProducts] = useState<ProductType[]>();
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true)
    try {
      
      const query = `*[_type == "product" && category == "${params.slug}"][0..${itemsPerPage}]{_id, name, description, stockLevel, discountPercentage, price, "image_url": image.asset->url, "slug": slug.current}`;
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
  }, [itemsPerPage]);
  return (
    <>
      <MainHeader title={`Browse ${params.slug} category`} prev='Home . Pages . ' current={`Category . ${params.slug}`} />
      <StoreDatahandler itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} />
      <div className="px-5 md:px-10 lg:px-40 w-full py-10">
        {loading && (
          <Loader />
        )}
      </div>
      {(!products || products?.length == 0) && (
        <div className='w-full h-screen flex justify-center flex-col items-center'>
          <h3 className='text-3xl font-bold text-center text-gray-700 pt-10'>No Products Available!</h3>
        </div>
      )}
      <div className={"grid grid-cols-4 px-20 gap-4"}>
        {products && products.map((product, index) => (<ProductCard key={index} data={product} designType='SIMPLEST' />))}
      </div>
      <Companies />
    </>
  )
}

export default Category;
