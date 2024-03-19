import './App.css'
import Hero from './components/Hero'
import { useEffect, useState } from 'react'
import TextCarousel from './components/TextCarousel'
import About from './components/About'
import Services from './components/Services'
import Solutions from './components/Solutions'
import Loader from './components/Loader'
import SelectedWork from './components/SelectedWork'
import Experience from './components/Experience'

function App() {
    const [loading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    })

    return (
        <>
            <main>
                <Hero />
                <TextCarousel />
                <About />
                <Services />
                <Solutions />
                <SelectedWork />
                <Experience />
                {loading && <Loader />}
                motion
            </main>
        </>
    )
}

export default App
