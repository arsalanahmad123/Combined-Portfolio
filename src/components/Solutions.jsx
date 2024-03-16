import React from 'react'
import { motion } from 'framer-motion'
import hands from '../assets/hands.png'

const Solutions = () => {
    console.log('Solutions rendered')
    return (
        <>
            <div
                className='bg-white p-10 min-h-screen max-h-[200vh] w-full flex justify-center items-center  flex-col cursive relative'
                data-scroll
                data-scroll-section
            >
                <motion.div
                    className='absolute top-0 left-0 bg-[#b89099] rounded-full h-16 w-16 border-8 border-spacing-10 border-slate-200 '
                    initial={{ scale: 0, rotate: 0, x: 10, y: 10 }}
                    animate={{
                        scale: 1,
                        rotate: 360,
                        x: 900,
                        y: 300,
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: 'mirror',
                        duration: 2.5,
                        ease: 'backInOut',
                    }}
                ></motion.div>
                <motion.div
                    className='absolute top-0 right-0 bg-[#6d86ad] rounded-full h-16 w-16 border-8 border-spacing-10 border-slate-200 '
                    initial={{ scale: 0, rotate: 0, x: -10, y: -10 }}
                    animate={{
                        scale: 1,
                        rotate: 360,
                        x: -900,
                        y: 300,
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: 'mirror',
                        duration: 2.5,
                        ease: 'backInOut',
                    }}
                ></motion.div>
                <img
                    src={hands}
                    loading='lazy'
                    alt=''
                    id='hands'
                    data-scroll
                    data-scroll-direction='vertical'
                    data-scroll-speed='10'
                />
                <h1
                    className='text-6xl italic tracking-widest'
                    data-scroll
                    data-scroll-direction='vertical'
                    data-scroll-speed='-1'
                >
                    I craft{' '}
                    <span
                        data-scroll
                        data-scroll-direction='horizontal'
                        data-scroll-speed='5'
                        className='solutions relative text-white z-50 font-bold px-5'
                    >
                        Solutions
                    </span>
                    , Not just Designs
                </h1>
            </div>
        </>
    )
}

export default Solutions
