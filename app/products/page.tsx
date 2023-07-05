'use client'
import CardList from '@/components/CardList';
import { getProducts } from '@/utils/supabaseFunction'
import React, { useEffect, useState } from 'react'

const Products = () => {

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
                <div className='flex justify-left'>
                    <div className='h-16 m-4 flex items-center border-l-2 border-black pl-4'>
                        <div className='font-bold text-4xl'>
                            Products
                        </div>
                    </div>
                </div>
            </div>
            <CardList products={products}/>
        </div>
        </>
    )
}

export default Products;