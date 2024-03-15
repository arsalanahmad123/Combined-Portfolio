import React, { useState } from 'react'
import { LuMenu as MenuIcon } from 'react-icons/lu'
import { IoClose as CloseIcon } from 'react-icons/io5'
import NavMenu from './NavMenu'

const Navigation = () => {
    const [active, setIsActive] = useState(false)
    return (
        <div>
            <div
                className={` fixed top-2 right-2 poppins font-semibold rounded-md  transition-all duration-500 ease-in-out text-center bg-white shadow-2xl ${
                    active
                        ? 'xl:h-[11vh] xl:w-[40vw] h-[20vh] w-[50vw] md:h-[10vh] md:w-[50vw]'
                        : 'w-0 h-0'
                }`}
                style={{ zIndex: 10 }}
            >
                {active && <NavMenu />}
                {!active ? (
                    <button
                        className='flex justify-center items-center gap-x-1 text-gray-800 fixed top-2 right-2 p-2 cursor-pointer lg:text-5xl text-3xl bg-white shadow-2xl shadow-black rounded-md transition-all duration-500 ease-in-out'
                        onClick={() => setIsActive(!active)}
                    >
                        <MenuIcon />
                    </button>
                ) : (
                    <button
                        className='flex justify-center items-center gap-x-1 text-gray-800 fixed right-2 top-2 p-2 cursor-pointer lg:text-5xl text-3xl bg-white shadow-2xl shadow-black rounded-md transition-all duration-500 ease-in-out '
                        onClick={() => setIsActive(!active)}
                    >
                        <CloseIcon />
                    </button>
                )}
            </div>
        </div>
    )
}

export default Navigation
