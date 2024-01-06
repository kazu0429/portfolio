'use client';

import React from 'react';
import { useState, useEffect } from 'react';

import { getBlogs } from '@/lib/supabaseFunction';
import { Blog } from '@/types/Type';
import { Blogs } from '@/lib/database.types';

const BlogCard = () => {

    const [ blogs, setBlogs ] = useState<Blogs[]>();

    useEffect(() => {
        (async() => {
            try{
                const getBlogsData = await getBlogs();
                setBlogs(getBlogsData);
            }catch(err){
                console.log(err);
            }
        })()
    },[])
    
  return (
    <div>
        {blogs?.map((blog) => (
            <div key={blog.id}>
                {blog.title}
            </div>
        ))}
    </div>
  )
}

export default BlogCard;