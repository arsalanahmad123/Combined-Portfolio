import React from 'react'
import background from '../assets/background.svg'
import { motion } from 'framer-motion'

const Background = () => {
    return (
        <>
            <div>
                <motion.img
                    src={background}
                    alt='background'
                    className={`w-20 h-20 object-cover fixed bottom-0 left-0 `}
                    initial={{ left: 0, rotate: 0 }}
                    animate={{ left: 1480, rotate: 360 }}
                    transition={{
                        duration: 7,
                        ease: 'backInOut',
                        repeat: Infinity,
                        repeatType: 'mirror',
                    }}
                />
            </div>
        </>
    )
}

export default Background
