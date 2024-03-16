import React from 'react'
import { motion } from 'framer-motion'

const NavMenu = () => {
    return (
        <>
            <motion.div
                className='p-5 rounded-md   h-full w-full flex justify-start items-start  bg-white md:flex-row flex-col text-lg'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 1.5,
                    ease: 'backIn',
                }}
                delay={2}
            >
                <ul className='flex  md:flex-row gap-x-5 flex-col gap-y-1'>
                    <li className='cursor-pointer text-left relative'>
                        <a href='#hero'>Home</a>
                    </li>
                    <li className='cursor-pointer text-left relative'>
                        <a href='#about'>About</a>
                    </li>
                    <li className='cursor-pointer text-left relative'>
                        Skills
                    </li>
                    <li className='cursor-pointer text-left relative'>
                        Projects
                    </li>
                    <li className='cursor-pointer text-left relative'>
                        Contact
                    </li>
                </ul>
            </motion.div>
        </>
    )
}

export default NavMenu
