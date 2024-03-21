import { motion } from 'framer-motion'
import React from 'react'
import earth from '../assets/earth.png'
import formImage from '../assets/form2.jpg'

const Contact = () => {
    return (
        <>
            <section
                className='min-h-screen mt-44
             w-full flex justify-center items-center relative overflow-hidden'
            >
                <div className='w-full h-full absolute top-0 left-0 -z-10'>
                    <img src={formImage} className='w-full h-[1000px]' alt='' />
                </div>
                <div className='w-full h-full  gap-x-5 md:px-20 px-5 gap-y-5 mt-[520px]'>
                    <div className='flex flex-col gap-y-5 p-10 rounded-lg w-full'>
                        <h1 className='text-gray-800 text-7xl font-bold monster'>
                            GET IN TOUCH
                        </h1>
                        <div>
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
