import React from 'react'
import { motion } from 'framer-motion'
const TextCarousel = () => {
    return (
        <section className='w-full py-1  bg-[#1a2c3a]' data-scroll-section>
            <div className=' poppins text-white flex whitespace-nowrap overflow-hidden border-t-2 border-b-2'>
                <motion.h1
                    className='leading-none font-semibold uppercase lg:text-[16vw] md:text-[20vw] text-[24vw] pr-20'
                    initial={{ x: '0%' }}
                    animate={{ x: '-100%' }}
                    transition={{
                        repeat: Infinity,
                        ease: 'linear',
                        duration: 20,
                    }}
                >
                    GRAPHICS DESIGNER
                </motion.h1>
                <motion.h1
                    className='leading-none font-semibold uppercase lg:text-[16vw] md:text-[20vw] text-[24vw] pr-20'
                    initial={{ x: '0%' }}
                    animate={{ x: '-100%' }}
                    transition={{
                        repeat: Infinity,
                        ease: 'linear',
                        duration: 20,
                    }}
                >
                    GRAPHICS DESIGNER
                </motion.h1>
            </div>
        </section>
    )
}

export default TextCarousel
