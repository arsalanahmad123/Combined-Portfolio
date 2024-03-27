import React from 'react'
import { motion } from 'framer-motion'
import aboutImage from '../assets/about.png'

const About = () => {
    return (
        <section
            className='min-h-screen md:max-h-[120vh] flex justify-around items-center w-full monster  bg-white title poppins md:pt-20 flex-col-reverse lg:flex-row relative pt-28 px-5 md:px-0'
            id='about'
        >
            <motion.div
                className='md:block md:absolute md:top-0 hidden left-5 bg-[#b89099]  h-20 w-20 clip-path'
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    repeatDelay: 1,
                    repeatType: 'mirror',
                    duration: 1.5,
                    ease: 'backInOut',
                }}
            ></motion.div>
            <motion.div
                className='md:block md:absolute bottom-10 hidden left-[30rem]  bg-[#6d86ad] h-20 w-20 clip-path'
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    repeatDelay: 1,
                    repeatType: 'mirror',
                    duration: 1.5,
                    ease: 'backInOut',
                }}
            ></motion.div>
            <motion.div
                data-scroll
                data-scroll-direction='horizontal'
                data-scroll-speed='3'
                className='bg-[#1a2c3a] rounded-3xl lg:h-[500px] mb-10'
            >
                <img
                    src={aboutImage}
                    loading='lazy'
                    className='bg-contain bg-center bg-no-repeat h-full w-full rounded-3xl'
                    alt=''
                />
            </motion.div>
            <motion.div
                className='flex justify-start items-start flex-col md:w-[50%] gap-y-4 h-full'
                data-scroll
                data-scroll-direction='vertical'
                data-scroll-speed='3'
            >
                <h3 className='text-6xl font-bold'>How About Me?</h3>
                <p className='text-2xl'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus nostrum reprehenderit aliquid dignissimos
                    doloremque accusamus rem sunt excepturi facilis soluta!
                </p>
                <span className='text-[18px] poppins italic mt-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas, debitis! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quia, Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Eos, eum!
                </span>
            </motion.div>
        </section>
    )
}

export default About
