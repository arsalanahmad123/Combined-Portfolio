import React from 'react'
import mesh from '../assets/mesh.png'
import mail from '../assets/mail.gif'
import phone from '../assets/call.gif'
import address from '../assets/location.gif'

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
                <div className='flex flex-col  justify-center items-start poppins gap-y-1 mx-auto px-10 py-3 bg-white/10 backdrop-blur-3xl shadow-lg rounded-md md:w-[50%]'>
                    <div className='flex flex-row text-white gap-x-6 justify-between items-center  p-2'>
                        <img
                            src={mail}
                            alt=''
                            className='h-14 w-14 rounded-full'
                        />
                        <span className='text-xl'>6a2e7@example.com</span>
                    </div>
                    <div className='flex flex-row text-white gap-x-6 justify-between items-center p-2'>
                        <img
                            src={phone}
                            className='h-14 w-14 rounded-full'
                            alt=''
                        />
                        <span className='text-xl'>+91 987654321</span>
                    </div>
                    <div className='flex flex-row text-white gap-x-6 justify-between items-center  p-2'>
                        <img
                            src={address}
                            className='h-14 w-14 rounded-full'
                            alt=''
                        />
                        <span className='text-xl'>Mumbai, India</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Information
