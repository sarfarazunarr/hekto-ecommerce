import React from 'react'
import Heading from './mini/Heading'
import BlogCard from './mini/BlogCard'

const LatestBlogs = () => {
  return (
    <div className='w-full px-40 py-10'>
    <Heading text='Latest Blogs' />
    <div className='grid grid-cols-3 gap-10'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
    </div>
</div>
  )
}

export default LatestBlogs
