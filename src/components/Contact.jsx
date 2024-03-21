import { motion } from 'framer-motion'
import React from 'react'
import phone from '../assets/phone.png'

const Contact = () => {
    return (
        <>
            <section className='min-h-screen w-full flex justify-center items-center relative'>
                <div className='w-full h-full flex lg:flex-row flex-col justify-between items-center gap-x-5 md:px-20 px-5'>
                    <motion.div
                        className='flex flex-col gap-y-5 p-10 bg-white  rounded-lg '
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        whileHover={{ boxShadow: '0 0 10px #1a2c3a' }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                        <h1 className='text-gray-800 text-5xl font-bold monster'>
                            GET IN TOUCH
                        </h1>
                        <form className='flex flex-col poppins'>
                            <input
                                type='text'
                                placeholder='Name'
                                className='bg-[#1a2c3a] text-white w-full p-3 my-2 rounded-md placeholder:text-white'
                            />
                            <input
                                type='email'
                                placeholder='Email'
                                className='bg-[#1a2c3a] text-white w-full p-3 my-2 rounded-md placeholder:text-white'
                            />
                            <textarea
                                className='bg-[#1a2c3a] text-white w-full p-3 my-2 rounded-md placeholder:text-white'
                                placeholder='Message'
                            ></textarea>
                            <button
                                type='submit'
                                className='bg-[#1a2c3a] text-white w-full p-3 my-2 rounded-md placeholder:text-white'
                            >
                                SEND
                            </button>
                        </form>
                    </motion.div>
                    <img src={phone} alt='' />
                </div>
            </section>
        </>
    )
}

export default Contact
