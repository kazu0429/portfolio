import React from 'react'
import BlogCard from './_components/BlogCard';

const BlogPage = () => {
    return (
        <div className='h-full m-5 flex flex-col gap-y-3'>
            <div className='flex flex-col justify-left item-left pl-2 text-left'>
                <div className='flex justify-between items-center'>
                    <div className='h-16 m-4 flex items-center border-l-2 pl-4'>
                        <div className='font-bold text-4xl'>
                            Blogs
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <BlogCard />
            </div>
        </div>
    )
}

export default BlogPage;