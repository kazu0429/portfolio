import { Product } from '@/types/product'
import React from 'react'



type Props = {
    products: Product[];
}


const CardList = (props: Props) => {

    const { products } = props;

    const formatData = (date:Date) => {
        const formattedDate = new Date(date).toLocaleDateString('en-US');
        return formattedDate
    }

    return (
        <>
            <div className='mt-8 flex lg:justify-around sm:justify-start'>
                <div className="flex justify-arounded mx-4 grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
                    {products?.map((product) => (
                        <div key={product.id} className="flex flex-col items-center overflow-hidden rounded-lg border bg-white">
                            <a href="#" className="group relative block h-64 overflow-hidden bg-gray-100 w-52 h-48">
                                <img src={product.images.url} loading="lazy" alt={product.images.name} className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                            </a>
                            <div className="flex flex-1 flex-col p-4 sm:p-6 lg:p-4 flex-wrap">
                                <h2 className="mb-2 text-lg font-semibold text-gray-800">
                                    <a href={product.url} target='_brank' className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">{product.title}</a>
                                </h2>
                                <p className="text-gray-500">{product.description}</p>
                                <div className="mt-auto flex items-end justify-between">
                                    <div className="flex items-center gap-x-2">
                                        <div>
                                            <span className="block text-sm text-gray-400">{formatData(product.created_at)}</span>
                                        </div>
                                    </div>
                                    <span className="rounded border px-2 py-1 text-sm text-gray-500">{product.tag}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CardList;