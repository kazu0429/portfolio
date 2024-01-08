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
            <div className='border-2 rounded-lg transition duration-200 hover:scale-105'>
                <Image
                    className='rounded-t-md w-full'
                    src={blog.thumbnail}
                    alt={blog.title}
                    width={400}
                    height={300}
                />
                <div className='m-2'>
                    <div className='font-bold'>
                        {blog.title}
                    </div>
                    <div className='mx-3 flex justify-between items-center'>
                        <div className='flex items-center gap-x-2'>
                            <Image src='https://zenn.dev/images/logo-transparent.png' width={20} height={20} alt='zenn' />
                            <span>zenn.dev</span>
                        </div>
                        <div className='my-2 text-zinc-500'>
                            {extractDate(blog.createdAt)}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard;