import React, { useState } from 'react'
import arrow from '../assets/arrow.gif'
import { VictoryPie } from 'victory'

const Experience = () => {
    const [selected, setSelected] = useState({
        label: 'React',
        value: 80,
    })

    const handleItemClick = (label, value) => {
        setSelected({
            label,
            value,
        })
    }

    const chartData = selected
        ? [{ y: selected.value }, { x: '-', y: 100 - selected.value }]
        : [{ y: 12 }]

    return (
        <section
            className='w-full min-h-screen flex flex-col justify-start items-center'
            id='experience'
        >
            <h1 className='md:text-7xl text-4xl text-gray-800 monster font-bold'>
                MY EXPERIENCE
            </h1>
            <div className='relative'>
                <img src={arrow} className='w-40 transform rotate-90' alt='' />
                <span className='absolute bottom-2 left-0 md:text-2xl poppins  transform -rotate-[55deg] w-full text-[20px] text-orange-500'>
                    Click to view
                </span>
            </div>
            <div className='flex justify-between flex-col md:flex-row items-center mt-20 w-full md:px-20 px-3'>
                <ul
                    className=' text-2xl font-bold monster italic text-[#1a2c3a]
                    bg-slate-200 py-5 px-4
                    '
                >
                    <li
                        className={`hover:underline cursor-pointer pl-1 p-1 ${
                            selected.label === 'React' &&
                            'underline  bg-[#1a2c3a] text-white rounded-md border-l-8 border-[#c2b4b4]'
                        }`}
                        onClick={() => handleItemClick('React', 80)}
                    >
                        React
                    </li>
                    <li
                        className={`hover:underline cursor-pointer pl-1 p-1 ${
                            selected.label === 'JavaScript' &&
                            'underline  bg-[#1a2c3a] text-white rounded-md border-l-8 border-[#c2b4b4]'
                        }`}
                        onClick={() => handleItemClick('JavaScript', 70)}
                    >
                        JavaScript
                    </li>
                    <li
                        className={`hover:underline cursor-pointer pl-1 p-1 ${
                            selected.label === 'HTML' &&
                            'underline  bg-[#1a2c3a] text-white rounded-md border-l-8 border-[#c2b4b4]'
                        }`}
                        onClick={() => handleItemClick('HTML', 90)}
                    >
                        HTML
                    </li>
                    <li
                        className={`hover:underline cursor-pointer pl-1 p-1 ${
                            selected.label === 'CSS' &&
                            'underline  bg-[#1a2c3a] text-white rounded-md border-l-8 border-[#c2b4b4]'
                        }`}
                        onClick={() => handleItemClick('CSS', 70)}
                    >
                        CSS
                    </li>
                </ul>
                <h3 className='text-5xl font-bold monster text-[orangered]'>
                    {' '}
                    {selected.label}
                </h3>
                <div>
                    <VictoryPie
                        data={chartData}
                        innerRadius={100}
                        colorScale={['#1a2c3a', '#f3f3f3']}
                        animate={{ duration: 2000 }}
                        labelRadius={150}
                        labelComponent={false}
                        style={{
                            labels: {
                                fill: '#1a2c3a',
                                fontSize: 16,
                                fontWeight: 600,
                                fontFamily: 'Poppins',
                                padding: 10,
                            },
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default Experience
