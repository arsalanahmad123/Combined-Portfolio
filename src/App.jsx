import './App.css'
import Hero from './components/Hero'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useEffect, useRef, useState } from 'react'
import TextCarousel from './components/TextCarousel'
import About from './components/About'
import Services from './components/Services'
import Solutions from './components/Solutions'
import Loader from './components/Loader'
import SelectedWork from './components/SelectedWork'

function App() {
    const [loading, setIsLoading] = useState(true)
    const ref = useRef(null)
    const options = {
        smooth: true,
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    })

    return (
        <>
            <LocomotiveScrollProvider options={options} containerRef={ref}>
                <main data-scroll-container ref={ref}>
                    <Hero />
                    <TextCarousel />
                    <About />
                    <Services />
                    <Solutions />
                    <SelectedWork />
                    {loading && <Loader />}
                </main>
            </LocomotiveScrollProvider>
        </>
    )
}

export default App
