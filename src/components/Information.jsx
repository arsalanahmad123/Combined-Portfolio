import React from 'react'

const Information = () => {
    return (
        <>
            <div
                className='w-full min-h-screen relative pt-20'
                id='contact-details'
            >
                <h1 className='md:text-7xl text-4xl text-gray-800 font-bold text-center monster'>
                    {' '}
                    Contact Details
                </h1>
                <div className='flex flex-col  justify-center items-start w-full md:mt-64 mt-72 poppins gap-y-1 md:w-[25%] mx-auto px-1 md:px-0'>
                    <div className='flex flex-row text-white gap-x-6 justify-between items-end border-b border-dashed'>
                        <span className='md:text-4xl text-2xl font-semibold'>
                            Email:
                        </span>
                        <span className='text-xl'>6a2e7@example.com</span>
                    </div>
                    <div className='flex flex-row text-white gap-x-6 justify-between items-end border-b border-dashed'>
                        <span className='md:text-4xl text-2xl font-semibold'>
                            Phone:
                        </span>
                        <span className='text-xl'>+91 987654321</span>
                    </div>
                    <div className='flex flex-row text-white gap-x-6 justify-between items-end border-b border-dashed'>
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
