import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
const SelectedWork = () => {
    const [showFirstProject, setShowFirstProject] = useState(false)
    const [showSecondProject, setShowSecondProject] = useState(false)

    const textVariants = {
        initial: { opacity: 0, y: -100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -100 },
    }

    return (
        <>
            <section
                className='w-full  min-h-screen max-h-[300vh] flex justify-start items-center bg-[#1a2c3a] flex-col py-28 gap-y-28 mb-10'
                data-scroll
                data-scroll-section
                data-scroll-snap
            >
                <h1>
                    <span className='text-7xl font-semibold tracking-widest poppins bg-clip-text text-white whitespace-nowrap '>
                        Selected Work
                    </span>
                </h1>
                <div className='flex justify-between items-center  w-full px-10 flex-row  relative  gap-x-5'>
                    <div
                        className=' md:w-[50%] rounded-md  group overflow-hidden'
                        data-scroll
                        data-scroll-direction='horizontal'
                        data-scroll-speed='0.5'
                        onMouseOver={() =>
                            setShowFirstProject(!showFirstProject)
                        }
                        onMouseOut={() =>
                            setShowFirstProject(!showFirstProject)
                        }
                    >
                        <img
                            src='https://picsum.photos/400'
                            className='w-full h-full group-hover:scale-105 duration-300 object-cover group-hover:ease-linear group-hover:filter group-hover:brightness-50 '
                            alt=''
                        />
                    </div>
                    <motion.div
                        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  tracking-widest monster text-8xl text-white font-bold shadow-xl'
                        style={{ zIndex: 1100 }}
                    >
                        {showFirstProject &&
                            'FIRST'.split('').map((letter, index) => (
                                <motion.span
                                    key={index}
                                    variants={textVariants}
                                    initial='initial'
                                    animate='animate'
                                    exit='exit'
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        {showSecondProject &&
                            'SECOND'.split('').map((letter, index) => (
                                <motion.span
                                    key={index}
                                    variants={textVariants}
                                    initial='initial'
                                    animate='animate'
                                    exit='exit'
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                    </motion.div>
                    <div
                        className=' md:w-[50%] rounded-md  group overflow-hidden'
                        data-scroll
                        data-scroll-direction='horizontal'
                        data-scroll-speed='0.5'
                        onMouseOver={() =>
                            setShowSecondProject(!showSecondProject)
                        }
                        onMouseOut={() =>
                            setShowSecondProject(!showSecondProject)
                        }
                    >
                        <img
                            src='https://picsum.photos/400'
                            className='w-full h-full group-hover:scale-105 duration-300 object-cover group-hover:ease-linear group-hover:filter group-hover:brightness-50 '
                            alt=''
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default SelectedWork
