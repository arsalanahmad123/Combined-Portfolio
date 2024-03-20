import React from 'react'
import arrow from '../assets/arrow.gif'
import heroImage from '../assets/about.png'
import { motion } from 'framer-motion'

const Range = ({ width, label }) => {
    return (
        <div className='flex flex-col gap-y-1'>
            <p className='text-xl poppins text-[#1a2c3a]'>{label}</p>
            <div className='flex flex-row justify-center items-center gap-x-3'>
                <div className='w-full h-3 bg-slate-200 rounded-lg'>
                    <div
                        className='h-3 bg-[#1a2c3a] rounded-lg'
                        style={{ width }}
                    ></div>
                </div>
                <p className='text-xl poppins text-[orangered]'>{width}</p>
            </div>
        </div>
    )
}

const Experience = () => {
    return (
        <section
            className='w-full min-h-screen flex flex-col justify-start items-center'
            id='experience'
        >
            <h1 className='md:text-7xl text-4xl text-gray-800 monster font-bold'>
                MY EXPERIENCE
            </h1>
            <img
                src={arrow}
                className='w-40 transform rotate-[-30deg]'
                alt=''
            />
            <div className='flex flex-col md:flex-row  justify-between items-start w-full lg:px-44 px-5'>
                <div className='relative'>
                    <img src={heroImage} alt='' className='z-50' />
                    <motion.div
                        className='absolute md:top-0 md:right-5 lg:right-0 bg-gradient-to-l from-[#b89099] to-[#6d86ad] lg:w-96 lg:h-96 md:w-80 md:h-80  z-[-1] top-20 right-10 h-80 w-80 rounded-lg'
                        initial={{ rotate: 0 }}
                        animate={{ rotate: -360 }}
                        transition={{
                            repeat: Infinity,
                            repeatDelay: 2,
                            repeatType: 'mirror',
                            duration: 3.5,
                            ease: 'backInOut',
                        }}
                    ></motion.div>
                </div>
                <div className='flex flex-col gap-y-8 pt-20'>
                    <h4 className='text-3xl poppins text-[#1a2c3a]'>
                        My Personal Experties
                    </h4>
                    <p className='text-lg text-[#1a2c3a] monster max-w-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio corrupti consectetur, odio reprehenderit iste
                        dolorem.
                    </p>
                    <div className='flex flex-col gap-y-1'>
                        <Range width='80%' label={'Web Development'} />
                        <Range width='80%' label={'Web Development'} />
                        <Range width='80%' label={'Web Development'} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
