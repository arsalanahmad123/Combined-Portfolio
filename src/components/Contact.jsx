import React from 'react'
import video from '../assets/video.mp4'
import phone from '../assets/phone.png'

const Contact = () => {
    return (
        <>
            <section className='min-h-screen w-full flex justify-center items-center relative'>
                <video
                    src={video}
                    autoPlay
                    loop
                    muted
                    className='w-full h-full object-cover'
                ></video>

                <div className='w-full h-full bg-black bg-opacity-70 absolute top-0 left-0 monster'>
                    <div className='w-full h-full flex lg:flex-row flex-col justify-between items-center gap-x-5 md:px-20 px-5'>
                        <div className='flex flex-col gap-y-5'>
                            <h1 className='text-white text-5xl font-bold'>
                                GET IN TOUCH
                            </h1>
                            <form className='flex flex-col'>
                                <input
                                    type='text'
                                    placeholder='Name'
                                    className='bg-white text-[#1a2c3a] w-full p-3 my-2 rounded-md'
                                />
                                <input
                                    type='email'
                                    placeholder='Email'
                                    className='bg-white text-[#1a2c3a] w-full p-3 my-2 rounded-md'
                                />
                                <textarea
                                    className='bg-white text-[#1a2c3a] w-full p-3 my-2 rounded-md'
                                    placeholder='Message'
                                ></textarea>
                                <button
                                    type='submit'
                                    className='bg-white text-[#1a2c3a] font-bold w-full p-3 my-2 rounded-md'
                                >
                                    SEND
                                </button>
                            </form>
                        </div>
                        <img src={phone} alt='' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
