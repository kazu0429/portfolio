'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from "next/navigation"

export default function MotionWrapper({
    children
}: {
    children: React.ReactNode
}) {
    const pathName = usePathname();

    const vatiants = {
        initial: {
            height: "100vh",
            buttom: 0
        },
        animate: {
            height: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.87, 0, 0.13, 1]
            }
        }
    }

    return (
        <AnimatePresence>
            <div className='mt-16' >
                <motion.div
                    key={pathName}
                    initial="initial" //　初期状態
                    animate="animate" // マウント時
                    variants={vatiants}
                    transition={{ duration: 0.5, delayChildren: 0.3 }}
                    className=' bg-black dark:bg-white'
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}