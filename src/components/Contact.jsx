import React from 'react'
import formImage from '../assets/form2.jpg'

import solution from '../assets/solution.png'

const Contact = () => {
    return (
        <>
            <img src={solution} alt='' />
            <section
                className='min-h-screen mt-16
             w-full flex justify-center items-center relative overflow-hidden'
            >
                <div className='w-full h-full absolute top-0 left-0 -z-10'>
                    <img src={formImage} className='w-full h-[1000px]' alt='' />
                </div>
                <div className='w-full h-full  gap-x-5 md:px-20 px-5 gap-y-5 mt-[520px]'>
                    <div className='flex flex-col gap-y-5 p-10 rounded-lg w-full'>
                        <h1 className='text-gray-800 md:text-7xl font-bold monster text-center text-3xl'>
                            GET IN TOUCH
                        </h1>
                        <div>
                            <form className='flex flex-col poppins justify-center items-centers md:px-44'>
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
                                    className='bg-slate-200 text-[#1a2c3a] w-full p-3 my-2 rounded-md placeholder:text-[#1a2c3a]'
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
