import React from 'react'
import { motion } from 'framer-motion'
import { FaLaptopCode as CodeIcon } from 'react-icons/fa'
import { SiAdobeindesign as DesignIcon } from 'react-icons/si'
const Services = () => {
    const cardsVariants = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        exit: { opacity: 0 },
    }

    return (
        <>
            <section
                className='bg-[#1a2c3a] poppins text-white flex justify-center items-center py-52 min-h-[150vh] max-h-[300vh] w-full  flex-col gap-y-10 overflow-hidden'
                id='services'
            >
                <motion.div
                    className='flex flex-col md:flex-row justify-between items-center px-5
                    gap-y-10 
                    '
                >
                    <h3 className='md:text-6xl text-4xl font-semibold bg-gradient-to-t from-primary to-secondary bg-clip-text text-transparent tracking-widest'>
                        SERVICES & DISCUSSIONS
                    </h3>
                    <p className='text-lg mb-10 text-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nam, atque?
                    </p>
                </motion.div>
                <motion.div className='w-[80%] mx-auto bg-white mt-20 rounded-md md:h-[400px] flex flex-col md:flex-row  justify-center items-center p-2 gap-x-2 monster gap-y-2'>
                    <motion.div
                        className=' h-full w-full rounded-md flex justify-center items-center bg-white text-[#1a2c3a] transition-all duration-500 ease-in-out border-2 shadow-inner relative overflow-hidden group'
                        variants={cardsVariants}
                        initial='initial'
                        whileInView='whileInView'
                        exit='exit'
                        transition={{
                            duration: 0.5,
                            ease: 'backInOut',
                        }}
                    >
                        <motion.div className='absolute  -top-2 -left-2 bg-tertiary rounded-md h-10 w-10   group-hover:h-[200%] group-hover:w-[160%]  transition-all duration-500 ease-linear z-10  '></motion.div>
                        <div
                            className='flex flex-col w-fit justify-center items-center gap-y-7
                        z-50'
                        >
                            <div className='bg-white  title p-3 rounded-md'>
                                <CodeIcon size={80} />
                            </div>
                            <h4 className='text-xl font-semibold group-hover:text-white transition-colors duration-500 ease-linear'>
                                Programming
                            </h4>
                        </div>
                    </motion.div>
                    <motion.div
                        className='h-full w-full rounded-md flex justify-center items-center bg-white text-[#1a2c3a] transition-all duration-500 ease-in-out border-2  shadow-inner relative overflow-hidden group'
                        variants={cardsVariants}
                        initial='initial'
                        whileInView='whileInView'
                        exit='exit'
                        transition={{
                            duration: 1,
                            ease: 'backInOut',
                        }}
                    >
                        <motion.div className='absolute  -top-2 -left-2 bg-tertiary rounded-md h-10 w-10   group-hover:h-[200%] group-hover:w-[160%]  transition-all duration-500 ease-linear z-10  '></motion.div>

                        <motion.div
                            className='flex flex-col w-fit justify-center items-center gap-y-7
                        z-50
                        '
                        >
                            <div className='bg-white title p-3 rounded-md'>
                                <DesignIcon size={80} />
                            </div>
                            <h4 className='text-xl font-semibold group-hover:text-white transition-colors duration-500 ease-linear'>
                                Programming
                            </h4>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className='h-full w-full rounded-md flex justify-center items-center bg-white text-[#1a2c3a] transition-all duration-500 ease-in-out border-2  shadow-inner relative overflow-hidden group'
                        variants={cardsVariants}
                        initial='initial'
                        whileInView='whileInView'
                        exit='exit'
                        transition={{
                            duration: 1.5,
                            ease: 'backInOut',
                        }}
                    >
                        <motion.div className='absolute  -top-2 -left-2 bg-tertiary rounded-md h-10 w-10   group-hover:h-[200%] group-hover:w-[160%]  transition-all duration-500 ease-linear z-10  '></motion.div>

                        <motion.div
                            className='flex flex-col w-fit justify-center items-center gap-y-7
                        z-50
                        '
                        >
                            <div className='bg-white title p-3 rounded-md'>
                                <DesignIcon size={80} />
                            </div>
                            <h4 className='text-xl font-semibold group-hover:text-white transition-colors duration-500 ease-linear'>
                                Programming
                            </h4>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className='h-full w-full rounded-md flex justify-center items-center bg-white text-[#1a2c3a] transition-all duration-500 ease-in-out border-2  shadow-inner relative overflow-hidden group'
                        variants={cardsVariants}
                        initial='initial'
                        whileInView='whileInView'
                        exit='exit'
                        transition={{
                            duration: 2,
                            ease: 'backInOut',
                        }}
                    >
                        <motion.div className='absolute  -top-2 -left-2 bg-tertiary rounded-md h-10 w-10   group-hover:h-[200%] group-hover:w-[160%]  transition-all duration-500 ease-linear z-10  '></motion.div>

                        <motion.div
                            className='flex flex-col w-fit justify-center items-center gap-y-7
                        z-50
                        '
                        >
                            <div className='bg-white title p-3 rounded-md'>
                                <DesignIcon size={80} />
                            </div>
                            <h4 className='text-xl font-semibold group-hover:text-white transition-colors duration-500 ease-linear'>
                                Programming
                            </h4>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>
        </>
    )
}

export default Services
