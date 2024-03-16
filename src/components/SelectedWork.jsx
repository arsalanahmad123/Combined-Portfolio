import React, { useState } from 'react'
import { motion } from 'framer-motion'
const SelectedWork = () => {
    const [projects, setProjects] = useState([
        {
            name: 'Project 1',
            image: 'https://picsum.photos/id/0/1290/400',
        },
        {
            name: 'Project 2',
            image: 'https://picsum.photos/id/1/1290/400',
        },
    ])

    const [selectedProject, setSelectedProject] = useState(projects[0])

    console.log(selectedProject)

    return (
        <>
            <section
                className='w-full  min-h-screen max-h-[300vh] flex justify-start items-center bg-[#1a2c3a] flex-col py-40 gap-y-28 mb-20 px-20'
                data-scroll
                data-scroll-section
                data-scroll-snap
            >
                <h1>
                    <span className='text-7xl font-semibold tracking-widest poppins bg-clip-text text-white whitespace-nowrap '>
                        Selected Work
                    </span>
                </h1>

                <div
                    className='w-full bg-black min-h-[50vh] shadow-2xl shadow-slate-600 relative h-full'
                    data-scroll
                    data-scroll-snap
                    data-scroll-direction='vertical'
                    data-scroll-speed='-2'
                >
                    <div className='overflow-hidden '>
                        <motion.img
                            key={selectedProject.image}
                            src={selectedProject.image}
                            className='bg-cover h-full w-full object-cover'
                            alt='Project Image'
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 1.5,
                                ease: 'backInOut',
                            }}
                        />
                    </div>
                    <div className='absolute top-0 left-0 h-full w-full bg-black opacity-50 flex justify-center items-center'>
                        <h1 className='text-7xl font-semibold poppins bg-clip-text text-white'>
                            {selectedProject.name}
                        </h1>
                    </div>
                    <div className='absolute -bottom-20 left-0 h-20 w-full bg-white flex justify-center items-center p-2 shadow-inner shadow-black'>
                        {projects.map((project, index) => (
                            <h1
                                className='text-lg font-semibold poppins   border h-full flex justify-center items-center p-2 cursor-pointer'
                                key={index}
                                onClick={() => setSelectedProject(project)}
                            >
                                {project.name}
                            </h1>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default SelectedWork
