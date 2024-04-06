import React from 'react'
import mesh from '../assets/mesh.png'

const Information = () => {
    return (
        <>
            <div className='w-full min-h-screen relative  bg-[#1a2c3a] mt-20 flex justify-start items-center flex-col gap-y-20 overflow-hidden pb-10'>
                <img
                    src={mesh}
                    alt=''
                    className='w-full h-[700px]  transform rotate-[180deg]'
                />
                <h1 className='md:text-7xl text-4xl text-white font-bold text-center monster -mt-96'>
                    Contact Details
                </h1>
                <div className='flex flex-col  justify-center items-start w-full poppins gap-y-1 md:w-[40%] mx-auto px-1 md:px-0 bg-white shadow-2xl rounded-md'>
                    <div className='flex flex-row text-black gap-x-6 justify-between items-end border-b border-dashed p-2'>
                        <span className='md:text-4xl text-2xl font-semibold'>
                            Email:
                        </span>
                        <span className='text-xl'>6a2e7@example.com</span>
                    </div>
                    <div className='flex flex-row text-black gap-x-6 justify-between items-end border-b border-dashed p-2'>
                        <span className='md:text-4xl text-2xl font-semibold'>
                            Phone:
                        </span>
                        <span className='text-xl'>+91 987654321</span>
                    </div>
                    <div className='flex flex-row text-black gap-x-6 justify-between items-end border-b border-dashed p-2'>
                        <span className='md:text-4xl text-2xl font-semibold'>
                            Location:
                        </span>
                        <span className='text-xl'>Mumbai, India</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Information
