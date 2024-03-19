import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
import { useEffect } from 'react'

const Scroll = () => {
    const options = {
        damping: 0.03,
    }

    useEffect(() => {
        Scrollbar.init(document.body, options)

        return () => {
            if (Scrollbar) Scrollbar.destroy(document.body)
        }
    })

    return null
}

export default Scroll
