'use client'
import CardList from '@/components/CardList';
import { getProducts } from '@/lib/supabaseFunction'
import React, { useEffect, useState } from 'react'
import { Session } from '@supabase/auth-helpers-nextjs'


const ProductsDisplay = ({ session }: { session: Session | null }) => {

    const [ products, setProducts ] = useState<any>([]);

    useEffect(() => {
        (async() => {
            try{
                const getProductsData = await getProducts();
                setProducts(getProductsData);
            }catch(err){
                console.log(err)
            }
        })()
    },[])

    return (
        <>
        <div className='m-5 flex flex-col gap-y-3'>
            <div className='flex flex-col justify-left item-left pl-2 text-left'>
                <div className='flex justify-between items-center'>
                    <div className='h-16 m-4 flex items-center border-l-2 border-black pl-4'>
                        <div className='font-bold text-4xl'>
                            Products
                        </div>
                    </div>
                    <div className='mr-5 font-bold'>
                        {session && (
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 hover:text-indigo-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                        </div>)}
                    </div>
                </div>
            </div>
            <div>
                <CardList products={products}/>
            </div>
        </div>
        </>
    )
}

export default ProductsDisplay
