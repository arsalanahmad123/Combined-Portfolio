import React from 'react'
import { motion } from 'framer-motion'
import heroImage from '../assets/hero-image.png'

const Hero = () => {
    const textVariants = {
        initial: { opacity: 0, y: -100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -100 },
    }

    return (
        <>
            <div
                id='hero'
                className='flex md:justify-center justify-start items-center min-h-screen max-h-[120vh] bg-[#1a2c3a] '
            >
                <div className='lg:h-[80vh]  bg-white min-h-screen lg:w-[90%] w-full flex lg:justify-between lg:items-start    lg:rounded-lg md:flex-row flex-col gap-y-10 justify-between items-center lg:mt-20 relative py-20 lg:py-0'>
                    <div className='monster flex flex-col gap-y-2 lg:p-28  px-5 md:w-[50%] '>
                        <motion.div
                            className='md:text-2xl text-lg title font-medium'
                            variants={textVariants}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                            transition={{
                                duration: 1.5,
                                ease: 'backInOut',
                            }}
                        >
                            <span> Hey there 👋 I am</span>
                        </motion.div>
                        <motion.span
                            className='lg:text-7xl text-5xl  font-bold leading-10  flex flex-col py-2'
                            variants={textVariants}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                            transition={{
                                duration: 1.5,
                                ease: 'backInOut',
                                delay: 0.5,
                            }}
                        >
                            <span className=' title'>Noreen Saif</span>
                        </motion.span>
                        <motion.div
                            className=' bg-gradient-to-r from-[#BA909A] to-[#A3BAE0]  text-white mt-5 py-2 text-center font-semibold rounded-md md:text-lg text-sm shadow-2xl px-3 lg:px-0'
                            variants={textVariants}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                            transition={{
                                duration: 1.5,
                                ease: 'backInOut',
                                delay: 1,
                            }}
                        >
                            <span>Graphics Designer</span>
                        </motion.div>
                        <motion.button
                            className='bg-[#1a2c3a]  w-full xl:w-[50%] text-white mt-5 py-3 text-center font-semibold rounded-md lg:text-2xl text-lg shadow-2xl px-3 lg:px-0'
                            variants={textVariants}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                            transition={{
                                duration: 1.5,
                                ease: 'backInOut',
                                delay: 1.5,
                            }}
                        >
                            Contact Me
                        </motion.button>
                    </div>
                    <motion.div
                        className='h-full relative z-50'
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1.5,
                            ease: 'backInOut',
                            delay: 2,
                        }}
                    >
                        <motion.img
                            variants={textVariants}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 1.5,
                                ease: 'backInOut',
                                delay: 2.5,
                            }}
                            src={heroImage}
                            className='z-50 -mt-16 '
                            style={{ objectFit: 'contain' }}
                            alt=''
                            loading='lazy'
                        />
                        <div className='absolute bottom-32 md:right-7 right-5  md:h-96 md:w-96 -z-[10] bg-gradient-to-l from-[#6d86ad] to-[#b89099] h-[20rem] w-[20rem]  rounded-2xl'></div>
                    </motion.div>
                    <div className='md:block absolute hidden top-5 left-5 h-10 w-10 bg-[#6d86ad]  rounded-full'></div>
                    <div className='md:block absolute hidden top-7 right-24 h-16 w-16  bg-[#b89099]  rounded-full'></div>
                    <div className='md:block absolute hidden bottom-0 right-5 h-16 w-16  bg-[#6d86ad] z-50 rounded-full'></div>
                    <div className='md:block absolute hidden bottom-24 left-96 h-10 w-10  bg-[#b89099]  rounded-full z-50'></div>
                    <div className='md:block absolute hidden top-56 left-[600px] h-8 w-8  bg-[#8f9bad]  rounded-full z-50'></div>
                </div>
            </div>
        </>
    )
}

export default Hero
