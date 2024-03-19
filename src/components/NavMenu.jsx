import React from 'react'
import { motion } from 'framer-motion'

const NavMenu = () => {
    return (
        <>
            <motion.div
                className='p-5 rounded-md   h-full w-full flex justify-start pt-32 items-start navigation flex-col text-lg'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 1.5,
                    ease: 'backIn',
                }}
                delay={2}
            >
                <ul className='flex  flex-col gap-y-3 text-2xl'>
                    <li className='cursor-pointer text-left relative'>
                        <a href='#hero'>Home</a>
                    </li>
                    <li className='cursor-pointer text-left relative'>
                        <a href='#about'>About</a>
                    </li>
                    <li className='cursor-pointer text-left relative'>
                        <a href='#services'>Services</a>
                    </li>
                    <li className='cursor-pointer text-left relative'>
                        <a href='#work'>Work</a>
                    </li>
                    <li className='cursor-pointer text-left relative'>
                        <a href='#solutions'>Solutions</a>
                    </li>
                </ul>
            </motion.div>
        </>
    )
}

export default NavMenu
