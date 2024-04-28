'use client';

import React from 'react';
import Image from 'next/image';

import Link from 'next/link';
import { Blog } from '@/types/Type';

const BlogCard = ({ blog }: { blog: Blog }) => {

    function extractDate(dateTimeString: string): string {
        const date = new Date(dateTimeString);
        const formattedDate = date.toISOString().split('T')[0];
        return formattedDate;
    }

    return (
        <Link href={blog.url} target='_blank'>
            <div className='border-zinc-200 dark:border-zinc-700 border rounded-lg transition duration-200 hover:scale-105'>
                <Image
                    className='rounded-t-md w-full'
                    src={blog.thumbnail}
                    alt={blog.title}
                    width={400}
                    height={300}
                />
                <div className='m-2'>
                    <div className='w-full font-bold truncate'>
                        {blog.title}
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-x-2'>
                            <Image src={`${blog.favicon}`} width={20} height={20} alt={`${blog.type}`} />
                            <span className='font-bold'>{blog.type}</span>
                        </div>
                        <div className='my-2 text-zinc-500'>
                            {extractDate(blog.date)}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard;