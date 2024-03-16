import React, { useState } from 'react'
import { motion } from 'framer-motion'
const SelectedWork = () => {
    const [showFirstProject, setShowFirstProject] = useState(false)

    const textVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    }

    return (
        <>
            <section
                className='w-full  h-screen flex justify-start items-center bg-[#1a2c3a] flex-col py-28 gap-y-28 mb-10'
                data-scroll
                data-scroll-section
                data-scroll-snap
            >
                <h1>
                    <span className='text-7xl font-semibold tracking-widest poppins bg-clip-text text-white whitespace-nowrap '>
                        Selected Work
                    </span>
                </h1>
                <div className='flex justify-between items-center gap-x-10 w-full px-10 flex-wrap'>
                    <div
                        className='flex justify-center items-center bg-white  rounded-md w-2/5 relative overflow-hidden group'
                        onMouseOver={() =>
                            setShowFirstProject(!showFirstProject)
                        }
                        onMouseOut={() =>
                            setShowFirstProject(!showFirstProject)
                        }
                    >
                        <img
                            src='https://picsum.photos/400'
                            className='w-full h-full group-hover:scale-105 duration-300 object-cover group-hover:ease-linear group-hover:filter group-hover:brightness-50 group-hover:blur-sm'
                            alt=''
                        />
                        <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center tracking-widest monster text-7xl text-white font-bold '>
                            {showFirstProject &&
                                'Project'.split('').map((letter, index) => (
                                    <motion.span
                                        key={index}
                                        variants={textVariants}
                                        initial='initial'
                                        animate='animate'
                                        exit='exit'
                                        transition={{
                                            duration: index * 0.1,
                                            delay: index * 0.1,
                                            ease: 'easeInOut',
                                            damping: 0.5,
                                            mass: 0.5,
                                            type: 'tween',
                                            stagger: 0.1,
                                        }}
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                        </div>
                    </div>
                    <div className='flex justify-center items-center bg-white  rounded-md w-2/5 relative'>
                        <img
                            src='https://picsum.photos/400'
                            alt=''
                            className='w-full h-full'
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default SelectedWork
