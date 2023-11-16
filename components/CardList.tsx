import { Product } from '@/types/product'

import React from 'react'
import { motion } from 'framer-motion'
import Card from './Card'

type Props = {
    products: Product[];
}

const CardList = (props: Props) => {

    const { products } = props;

    return (
        <>
            <div className='mt-8 flex lg:justify-around sm:justify-start'>
                <div className="mx-4 grid gap-4 sm:grid-cols-2 md:gap-6 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
                    {products.map((product, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 1000 }} // 下から1000pxの位置から始まる
                            animate={{ y: 0 }}    // 0pxの位置に移動する
                            transition={{
                                type:"spring",
                                duration: 0.8,
                                delay: i / 10 + 0.1,
                                bounce: 0.3
                            }} // アニメーションの時間とイージングを設定
                        >
                            <Card {...product} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CardList;