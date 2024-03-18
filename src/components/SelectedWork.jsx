import React, { useState } from 'react'
import { motion } from 'framer-motion'
const SelectedWork = () => {
    const [projects, setProjects] = useState([
        {
            name: 'Project 1',
            image: 'https://picsum.photos/id/0/1290/600',
        },
        {
            name: 'Project 2',
            image: 'https://picsum.photos/id/1/1290/600',
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
                <h1>
                    <span className='text-5xl md:text-7xl font-semibold tracking-widest poppins bg-clip-text text-white whitespace-nowrap '>
                        Selected Work
                    </span>
                </h1>

                <div
                    className='w-full flex flex-col md:flex-row justify-between items-start  min-h-[70vh]   h-full'
                    data-scroll
                    data-scroll-snap
                    data-scroll-direction='vertical'
                    data-scroll-speed='-2'
                >
                    <div className='h-full md:w-2/3 block'>
                        <div className='overflow-hidden block relative'>
                            <motion.img
                                key={selectedProject.image}
                                src={selectedProject.image}
                                className=' h-full w-full object-cover shadow-2xl'
                                alt='Project Image'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 1.5,
                                    ease: 'backInOut',
                                }}
                            />
                            <motion.h1
                                key={selectedProject.name}
                                className='md:text-7xl text-5xl font-semibold poppins bg-clip-text text-white hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 1.5,
                                    ease: 'backInOut',
                                    delay: 0.5,
                                }}
                            >
                                {selectedProject.name}
                            </motion.h1>
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
