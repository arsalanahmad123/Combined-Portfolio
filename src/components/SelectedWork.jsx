import React, { useState } from 'react'
import { motion } from 'framer-motion'
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
            <section
                className='w-full  min-h-screen max-h-[300vh] flex justify-start items-center bg-[#1a2c3a] flex-col py-40 gap-y-28 mb-20 px-20'
                data-scroll
                data-scroll-section
                data-scroll-snap
            >
                <h1
                    className='text-5xl md:text-7xl font-semibold tracking-widest poppins bg-clip-text text-white whitespace-nowrap '
                    data-scroll
                    data-scroll-snap
                    data-scroll-direction='vertical'
                    data-scroll-speed='-2'
                >
                    Selected Work
                </h1>

                <div
                    className='w-full flex flex-col md:flex-row justify-start items-start  md:max-h-[100vh]   h-full max-h-[60vh]'
                    data-scroll
                    data-scroll-snap
                    data-scroll-direction='vertical'
                    data-scroll-speed='-2'
                >
                    <div className='max-h-full md:w-2/3 bg-white bg-opacity-60'>
                        <div className='overflow-hidden  relative group'>
                            <motion.img
                                key={selectedProject.image}
                                src={selectedProject.image}
                                className=' h-[50vh] md:h-[90vh] w-full object-cover shadow-2xl  group-hover:scale-110 transition-all duration-500 ease-in-out '
                                alt='Project Image'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 1.5,
                                    ease: 'backInOut',
                                }}
                                loading='lazy'
                            />
                            <motion.div
                                key={selectedProject.name}
                                className=' poppins  text-white hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:block group-hover:opacity-100 opacity-0 transition-all duration-500 ease-in-out bg-black md:px-40 w-full md:py-32 bg-opacity-75 py-60 px-2'
                            >
                                <h1 className='md:text-6xl text-4xl font-semibold'>
                                    {selectedProject.name}
                                </h1>
                                <p className='text-lg mt-2'>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nostrum, quidem!
                                </p>
                            </motion.div>
                        </div>
                    </div>
                    <div className='w-full flex flex-row md:flex-col bg-white md:w-1/3 overflow-hidden h-full'>
                        {projects.map((project, index) => (
                            <motion.h1
                                className={`text-lg font-semibold poppins  h-full flex justify-center items-center cursor-pointer `}
                                key={index}
                                onClick={() => {
                                    setSelectedProject({
                                        name: project.name,
                                        image: project.image,
                                    })
                                }}
                                whileHover={{
                                    backgroundColor: '#6d86ad',
                                    color: '#ffffff', // Convert text color to hex format
                                }}
                                whileTap={{
                                    scale: 0.5,
                                    backgroundColor: '#6d86ad',
                                    color: '#ffffff', // Convert text color to hex format
                                }}
                                transition={{
                                    duration: 0.2,
                                }}
                            >
                                <span
                                    className={` p-2 w-full text-center transition-all duration-500 ease-in-out ${
                                        selectedProject.name === project.name
                                            ? 'bg-[#6d86ad] text-white'
                                            : 'bg-white text-black'
                                    }`}
                                >
                                    {project.name}
                                </span>
                            </motion.h1>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default SelectedWork
