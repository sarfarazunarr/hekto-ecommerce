import MainHeader from '@/components/MainHeader'
import BlogCard, { BlogContent } from '@/components/mini/BlogCard'
import React from 'react'
import Sidebar from './Sidebar';

const Blogs = () => {
    const content = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, ipsam natus. Excepturi, modi fuga natus repellat illum placeat facilis alias quis";
    const blogs: BlogContent[] = [
        {title: "Mauris at orci non vulputate diam tincidunt nec.", content: content, date: "12 Aug 2021", image: "/blog4.png"},
        {title: "Ediam tincidunt nec Mauris at orci non vulputat", content: content, date: "12 Aug 2021", image: "/blog5.png"},
        {title: "Vulputate diam tincidunt Mauris at orci non  nec.", content: content, date: "12 Aug 2021", image: "/blog6.png"},
    ]
    return (
        <div className='w-full'>
            <MainHeader title='Blog Page' prev='Home . Pages . ' current='Blog Page' />
            <div className='w-full px-5 lg:px-40 py-20 grid md:grid-cols-6 gap-10'>
                <div className='flex flex-col gap-5 md:col-span-3 lg:col-span-4'>
                    {blogs.map((blog, index) => (

                    <BlogCard key={index} size='LARGE' data={blog} />
                    ))}
                </div>
                <Sidebar />
            </div>

        </div>
    )
}

export default Blogs
