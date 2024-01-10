import { Product } from '@/types/Type'

import React from 'react'
import { motion } from 'framer-motion'
import Card from './Card'
import EditButton from './EditButton'

type Props = {
    products: Product[];
    session: boolean;
}

const CardList = (props: Props) => {

    const { products, session } = props;

    return (
        <>
            <div className='flex justify-around'>
                <div className="mx-8 grid gap-4 sm:grid-cols-2 md:gap-6 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
                    {products.map((product, i) => (
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
                            className='relative'
                        >
                            {session && (
                                <div className='absolute mt-3 bottom-12 right-5'>
                                    <EditButton product={product} />
                                </div>
                            )}
                            <Card {...product} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CardList;