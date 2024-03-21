import React, { useState } from 'react'
import { motion } from 'framer-motion'
import solution from '../assets/solution.png'
const SelectedWork = () => {
    const [projects, setProjects] = useState([
        {
            name: 'Project 1',
            image: 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            name: 'Project 2',
            image: 'https://images.unsplash.com/photo-1593696954577-ab3d39317b97?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ])

    const [selectedProject, setSelectedProject] = useState(projects[0])

    return (
        <>
            <img src={solution} alt='' />
            <section
                className='w-full  flex justify-start items-center flex-col gap-y-28 mb-20 md:px-20  px-2 relative'
                id='work'
            >
                <h1 className='text-4xl md:text-7xl font-semibold tracking-widest poppins title whitespace-nowrap  shadow-text'>
                    Selected Work
                </h1>
                <motion.div className='grid grid-cols-1 md:grid-cols-3 grid-rows-2 w-full gap-10  poppins'>
                    <div className='flex flex-col justify-start items-start gap-y-5 bg-white  rounded-lg shadow-2xl max-h-[540px]'>
                        <img
                            src='https://images.unsplash.com/photo-1526779259212-939e64788e3c'
                            alt=''
                        />
                        <h1 className='text-3xl mx-4 font-semibold monster'>
                            First Project
                        </h1>
                        <p className='text-lg mx-4'>
                            Lorem ipsum dolor sit amet.
                        </p>
                        <button className='text-base mx-4 px-2 py-1 bg-[#1a2c3a] text-white'>
                            View Project
                        </button>
                    </div>
                    <div className=' bg-white grid grid-rows-4 rounded-lg p-5 gap-y-3 col-span-2 shadow-2xl shadow-[#1a2c3a]'>
                        <div className='flex flex-row justify-start items-star bg-white rounded-lg row-span-2 gap-x-4'>
                            <img
                                src='https://images.unsplash.com/photo-1526779259212-939e64788e3c'
                                className='w-1/2'
                                alt=''
                            />
                            <div className='flex flex-col gap-y-2 mt-1 justify-center'>
                                <h1 className='text-3xl font-semibold monster'>
                                    Second Project
                                </h1>
                                <p className='text-lg'>
                                    Lorem ipsum dolor sit amet.
                                </p>
                                <button className='text-base px-2 py-1 bg-[#1a2c3a] text-white '>
                                    View Project
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-row justify-start items-star bg-white rounded-lg row-span-2 gap-x-4'>
                            <img
                                src='https://images.unsplash.com/photo-1526779259212-939e64788e3c'
                                className='w-1/2'
                                alt=''
                            />
                            <div className='flex flex-col gap-y-2 mt-1 justify-center'>
                                <h1 className='text-3xl font-semibold monster'>
                                    Second Project
                                </h1>
                                <p className='text-lg'>
                                    Lorem ipsum dolor sit amet.
                                </p>
                                <button className='text-base px-2 py-1 bg-[#1a2c3a] text-white '>
                                    View Project
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-start items-start gap-x-4 col-span-3 row-span-4 bg-white rounded-lg max-h-[500px] shadow-2xl shadow-[#6d86ad]'>
                        <img
                            src='https://images.unsplash.com/photo-1526779259212-939e64788e3c'
                            className='w-1/2 h-full'
                            alt=''
                        />
                        <div className='flex flex-col gap-y-2 mt-1 justify-center py-10'>
                            <h1 className='text-5xl font-semibold monster'>
                                Third Project
                            </h1>
                            <p className='text-lg'>
                                Lorem ipsum dolor sit amet.
                            </p>
                            <button className='text-base px-2 py-1 bg-[#1a2c3a] text-white '>
                                View Project
                            </button>
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    )
}

export default SelectedWork
