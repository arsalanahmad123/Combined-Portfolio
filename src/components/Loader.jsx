import React from 'react'
import HashLoader from 'react-spinners/HashLoader'

const Loader = () => {
    return (
        <div className='h-screen w-full flex justify-center items-center bg-[#1a2c3a] p-10 bg-opacity-90 absolute top-0 left-0'>
            <HashLoader color='#36d7b7' size={100} />
        </div>
    )
}

export default Loader
