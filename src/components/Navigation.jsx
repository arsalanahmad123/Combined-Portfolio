import React, { useState } from 'react'
import { LuMenu as MenuIcon } from 'react-icons/lu'
import { IoClose as CloseIcon } from 'react-icons/io5'
import NavMenu from './NavMenu'
import { motion } from 'framer-motion'

const Navigation = () => {
    const [active, setIsActive] = useState(false)

    return (
        <div>
            <div
                className={`fixed top-2 right-2 poppins font-semibold rounded-md transition-all duration-500 ease-in-out text-center bg-white bg-opacity-80 shadow-2xl shadow-black min-h-screen ${
                    active ? 'w-52 h-screen' : 'w-0'
                }`}
                style={{ zIndex: 1100 }}
            >
                {active && <NavMenu />}
                {!active ? (
                    <button
                        className='flex justify-center items-center gap-x-1 text-gray-800 fixed top-2 right-5 p-2 cursor-pointer lg:text-5xl text-3xl bg-white shadow-2xl shadow-black rounded-md transition-all duration-500 ease-in-out'
                        onClick={() => setIsActive(!active)}
                    >
                        <MenuIcon />
                    </button>
                ) : (
                    <button
                        className='flex justify-center items-center gap-x-1 text-gray-800 fixed right-5 top-2 p-2 cursor-pointer lg:text-5xl text-3xl bg-white bg-opacity-80 rounded-md transition-all duration-500 ease-in-out '
                        onClick={() => setIsActive(!active)}
                    >
                        <CloseIcon />
                    </button>
                )}
            </div>

            <motion.button
                className='fixed bottom-2 left-1 px-3 py-2 rounded-md bg-[orangered] text-white shadow-lg shadow-[orangered] monster font-semibold'
                style={{ zIndex: 1100 }}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
            >
                Download Resume
            </motion.button>
        </div>
    )
}

export default Navigation
