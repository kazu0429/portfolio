'use client'
import CardList from '@/app/products/_componetns/CardList';
import ProductPostButton from './ProductPostButton';
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
        <div className='mx-5 flex flex-col gap-y-3'>
            <div className='flex flex-col justify-left item-left pl-2 text-left'>
                <div className='flex justify-between items-center'>
                    <div className='h-16 m-4 flex items-center border-l-2 pl-4'>
                        <div className='font-bold text-4xl'>
                            Products
                        </div>
                    </div>
                    <div className='mr-5'>
                        {session && (
                            <ProductPostButton />
                        )}
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

export default ProductsDisplay;
