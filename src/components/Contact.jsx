import React from 'react'
// import formImage from '../assets/form2.jpg'
import formImage from '../assets/get-in-touch.png'

import solution from '../assets/solution.png'

import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <>
            <img src={solution} alt='' />
            <section
                className=' mt-16
             w-full flex justify-center items-center relative overflow-hidden'
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
                    className='md:block md:absolute top-0 right-20 hidden   bg-[#6d86ad] h-20 w-20 clip-path'
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
                <div className=' flex justify-between items-center lg:flex-row-reverse  gap-x-5 md:px-20 px-5 gap-y-5 flex-col'>
                    <img src={formImage} className='w-[45%]' alt='' />
                    <div className='flex flex-col gap-y-5 p-10 rounded-lg'>
                        <h1 className='text-gray-800 md:text-7xl font-bold monster text-center text-3xl'>
                            GET IN TOUCH
                        </h1>
                        <div>
                            <form className='flex flex-col poppins justify-center items-centers '>
                                <input
                                    type='text'
                                    placeholder='Name'
                                    className='bg-slate-200 text-[#1a2c3a] w-full p-3 my-2 rounded-md placeholder:text-[#1a2c3a]'
                                />
                                <input
                                    type='email'
                                    placeholder='Email'
                                    className='bg-slate-200 text-[#1a2c3a] w-full p-3 my-2 rounded-md placeholder:text-[#1a2c3a]'
                                />
                                <textarea
                                    className='bg-slate-200 text-[#1a2c3a] w-full p-3 my-2 rounded-md placeholder:text-[#1a2c3a] resize-none'
                                    placeholder='Message'
                                ></textarea>
                                <button
                                    type='submit'
                                    className='bg-slate-200 text-[#1a2c3a] w-full p-3 my-2 rounded-md placeholder:text-[#1a2c3a] font-semibold'
                                >
                                    SEND
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
