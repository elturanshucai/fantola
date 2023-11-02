import React from 'react'
import { motion, inView } from "framer-motion"

export default function SwiperItem({ img }) {
    return (
        <div className='flex items-center justify-center'>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={{
                    visible: { y: 0 },
                    hidden: { y: -100 }
                }}
                transition={{ duration: 0.4 }}
                key={img.title}
            >
                <img className='w-60 max-h-80' src={img.url} alt="image" />
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={{
                    visible: { x: 0 },
                    hidden: { x: 100 }
                }}
                transition={{ duration: 1 }}
            >
                <p className={`font-bold text-2xl ${img.title === 'Red' && 'text-red-600'} ${img.title === 'Blue' && 'text-blue-600'} ${img.title === 'Pink' && 'text-pink-600'} ${img.title === 'Yellow' && 'text-yellow-600'}`}>{img.title} <span className=''>Fantola</span></p>
            </motion.div>
        </div>
    )
}
