import React from 'react'
import Layout from './Layout'
import { motion } from 'framer-motion'

const Hero = () => {
    const containerVariants = {
        initial: { y: '100%' },
        animate: { y: 0 },
        transition: {
            duration: 1.5,
            ease: 'backInOut',
        },
    }

    const textVariants = {
        initial: { opacity: 0, y: -100 },
        animate: { opacity: 1, y: 0 },
    }

    return (
        <>
            <motion.div
                className='flex justify-center items-center h-screen bg-[#1a2c3a] relative'
                initial='initial'
                animate='animate'
                variants={containerVariants}
                transition={{ duration: 1.5, ease: 'backInOut' }}
                data-scroll
                data-scroll-section
                data-scroll-snap
            >
                <div className='absolute top-0 left-96 h-24 w-24 bg-[#c3fafc]  rounded-full'></div>
                <div className='absolute top-0 right-5 h-24 w-24  bg-[#b89099]  rounded-full'></div>
                <div className='absolute bottom-0 right-5 h-24 w-24  bg-[#6d86ad] z-50 rounded-full'></div>
                <div className='absolute bottom-0 left-5 h-24 w-24  bg-[#c3fafc]  rounded-full z-50'></div>

                <div className='lg:h-[80vh]  bg-white min-h-screen lg:w-[90%] w-full flex lg:justify-between lg:items-start    lg:rounded-lg md:flex-row flex-col gap-y-10 justify-between items-center lg:mt-20 relative py-20 lg:py-0'>
                    <div className='monster flex flex-col gap-y-2 lg:p-28  px-5 md:w-[50%] '>
                        <motion.span
                            className='md:text-2xl text-lg title font-medium'
                            variants={textVariants}
                            transition={{
                                duration: 1.5,
                                ease: 'backInOut',
                                delay: 1,
                            }}
                        >
                            Hey there 👋 I am
                        </motion.span>
                        <motion.span
                            className='lg:text-7xl text-5xl  font-bold leading-none title flex flex-col'
                            variants={textVariants}
                            transition={{
                                duration: 1.5,
                                ease: 'backInOut',
                                delay: 1.5,
                            }}
                        >
                            <span>Arsalan</span>
                            <span className='md:ml-20 ml-10'>Ahmad</span>
                        </motion.span>
                        <motion.div
                            className=' bg-gradient-to-r from-[#BA909A] to-[#A3BAE0]  text-white mt-5 py-2 text-center font-semibold rounded-md md:text-lg text-sm shadow-2xl px-3 lg:px-0'
                            variants={textVariants}
                            transition={{
                                duration: 1.5,
                                ease: 'backInOut',
                                delay: 2,
                            }}
                        >
                            <span>Graphics Designer</span>
                        </motion.div>
                        <motion.button
                            className='bg-[#1a2c3a]  w-full xl:w-[50%] text-white mt-5 py-3 text-center font-semibold rounded-md lg:text-2xl text-lg shadow-2xl px-3 lg:px-0'
                            variants={textVariants}
                            transition={{
                                duration: 1.5,
                                ease: 'backInOut',
                                delay: 2.5,
                            }}
                        >
                            Contact Me
                        </motion.button>
                    </div>
                    <motion.div
                        className='h-full '
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1.5,
                            ease: 'backInOut',
                            delay: 3,
                        }}
                    >
                        <img
                            src='/src/assets/hero-image.png'
                            className=''
                            alt=''
                        />
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}

export default Layout()(Hero)
