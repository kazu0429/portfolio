'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from "next/navigation"

export default function MotionWrapper({
    children
}: {
    children: React.ReactNode
}) {
    const pathName = usePathname();

    return (
        <AnimatePresence>
           <motion.div
            key={pathName}
            initial={{ opacity: 0 }} //　初期状態
            animate={{ opacity: 1 }} // マウント時
            transition={{duration:0.5 ,delay:0.2}}
        >
            {children}
        </motion.div> 
        </AnimatePresence>
        
    )
}