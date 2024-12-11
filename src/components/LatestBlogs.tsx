import React from 'react'
import Heading from './mini/Heading'
import BlogCard, { BlogContent } from './mini/BlogCard'

const LatestBlogs = () => {
  const blogs: BlogContent[] = [
    {title: "Top essential trends in 2021", content: "More off this less hello samlande lied much over tightly circa horse taped mightly", image: "/blog1.png", date: "20th Dec 2021"},
    {title: "Top essential trends in 2021", content: "More off this less hello samlande lied much over tightly circa horse taped mightly", image: "/blog2.png", date: "20th Dec 2021"},
    {title: "Top essential trends in 2021", content: "More off this less hello samlande lied much over tightly circa horse taped mightly", image: "/blog3.png", date: "20th Dec 2021"},
  ]
  return (
    <div className='w-full px-5 lg:px-40 py-10'>
    <Heading text='Latest Blogs' />
    <div className='grid md:grid-cols-3 md:gap-4 lg:gap-10'>
        {blogs.map((blog, index) => (<BlogCard key={index} data={blog} />))}
    </div>
</div>
  )
}

export default LatestBlogs
