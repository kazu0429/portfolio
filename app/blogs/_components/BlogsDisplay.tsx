'use client';

import React from 'react'
import BlogCard from './BlogCard';
import { useState, useEffect } from 'react';
import type { Blog } from '@/types/Type';
import { getBlogs } from '@/lib/supabaseFunction';
import { motion } from 'framer-motion';

const BlogsDisplay = () => {

    const [blogs, setBlogs] = useState<Blog[]>();

    useEffect(() => {
        (async () => {
            try {
                const getBlogsData = await getBlogs();
                setBlogs(getBlogsData);
            } catch (err) {
                console.log(err);
            }
        })()
    }, [])

    return (
        <div className='h-full mx-5 flex flex-col gap-y-3'>
            <div className='flex flex-col justify-left item-left pl-2 text-left'>
                <div className='flex justify-between items-center'>
                    <div className='h-16 m-4 flex items-center border-l-2 pl-4'>
                        <div className='font-bold text-4xl'>
                            Blogs
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-4 flex justify-around'>
                <div className='mx-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 xl:gap-8'>
                    {blogs?.map((blog, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 1000 }} // 下から1000pxの位置から始まる
                            animate={{ y: 0 }}    // 0pxの位置に移動する
                            transition={{
                                type: "spring",
                                duration: 0.8,
                                delay: i / 10 + 0.1,
                                bounce: 0.3
                            }} // アニメーションの時間とイージングを設定
                        >
                            <BlogCard blog={blog} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogsDisplay;