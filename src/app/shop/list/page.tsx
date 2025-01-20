"use client";
import Companies from '@/components/Companies'
import MainHeader from '@/components/MainHeader'
import Loader from '@/components/mini/Loader';
import ProductCard, { ProductType } from '@/components/mini/ProductCard'
import StoreDatahandler from '@/components/mini/StoreDatahandler'
import { client } from '@/sanity/lib/client';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState, Suspense } from 'react'

interface ShopListContentProps {
  products: ProductType[] | undefined;
  setProducts: (products: ProductType[]) => void;
  itemsPerPage: number;
  setItemsPerPage: (itemsPerPage: number) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const ShopList = () => {
  const [products, setProducts] = useState<ProductType[]>();
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopListContent
        products={products}
        setProducts={setProducts}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        loading={loading}
        setLoading={setLoading}
      />
    </Suspense>
  );
};

const ShopListContent = ({
  products,
  setProducts,
  itemsPerPage,
  setItemsPerPage,
  loading,
  setLoading,
}: ShopListContentProps) => {
  const searchparams = useSearchParams();
  const getData = async () => {
    setLoading(true)
    try {
      const query = searchparams.get('search');
      let queryString = `*[_type == "product"][0..${itemsPerPage - 1}]{
        _id,
        name,
      description,
      stockLevel,
      discountPercentage,
      price,
      "image_url":image.asset->url,
      "slug": slug.current
        }`

      if(query){
        queryString = `*[(_type == "product")
      && (pt::text(name) match "${query}*" || description match "${query}*")] | score(pt::text(name) match "${query}*", boost(description match "${query}*", 3))[0..${itemsPerPage - 1}]
      {
        name,
      description,
      stockLevel,
      discountPercentage,
      price,
      "image_url":image.asset->url,
      "slug": slug.current,
        _score
        }`
      }
      
      const productsdata = await client.fetch(queryString);
      setProducts(productsdata);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, [itemsPerPage, searchparams]);

  return (
    <>
      <MainHeader title='Search Results' prev='Home . Pages . ' current={`Search Results of: ${searchparams.get('search')}`} />
      <StoreDatahandler itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} />
      <div className="px-5 md:px-10 lg:px-40 w-full py-10">
        {loading && (
          <Loader />
        )}
        {(!products || products?.length == 0) && (
          <div className='w-full py-10 flex justify-center flex-col items-center'>
            <h3 className='text-3xl font-bold text-center text-gray-700 pt-10'>No Products Available!</h3>
          </div>
        )}
        {products && products.map((product: ProductType, index: number) => (<ProductCard key={index} data={product} designType='BAR' showDots={true} />))}

      </div>
      <Companies />
    </>
  );
};

export default ShopList;