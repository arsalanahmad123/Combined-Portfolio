import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
import { useEffect } from 'react'

const Scroll = () => {
    const overscrollOptions = {
        enable: true,
        effect: 'glow',
        damping: 0.1,
        maxOverscroll: 200,
        glowColor: '#222a2d',
    }
    const options = {
        damping: 0.03,
        plugins: {
            overscroll: { ...overscrollOptions },
        },
    }

    useEffect(() => {
        Scrollbar.use(OverscrollPlugin)
        Scrollbar.init(document.body, options)

        return () => {
            if (Scrollbar) Scrollbar.destroy(document.body)
        }
    })

    return null
}

export default Scroll
