'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const notFound = () => {
    const router = useRouter();
    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center'>
            <h1 className='text-4xl'>This page is not available</h1>
            <button onClick={() => router.push("/")} className='mt-8 hover:text-indigo-500 flex flex-row gap-x-2' >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
                Home
            </button>
        </div>
    )
}

export default notFound;