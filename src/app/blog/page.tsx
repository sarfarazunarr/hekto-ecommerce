import MainHeader from '@/components/MainHeader'
import BlogCard from '@/components/mini/BlogCard'
import React from 'react'
import Sidebar from './Sidebar';

const Blogs = () => {
    const content = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, ipsam natus. Excepturi, modi fuga natus repellat illum placeat facilis alias quis";
    return (
        <div className='w-full'>
            <MainHeader title='Blog Page' prev='Home . Pages . ' current='Blog Page' />
            <div className='w-full px-5 lg:px-40 py-20 grid md:grid-cols-6 gap-10'>
                <div className='flex flex-col gap-5 md:col-span-3 lg:col-span-4'>
                    <BlogCard size='LARGE' content={content} />
                    <BlogCard size='LARGE' content={content} />
                </div>
                <Sidebar />
            </div>

        </div>
    )
}

export default Blogs
