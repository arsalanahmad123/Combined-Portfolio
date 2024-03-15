import React from 'react'
import Navigation from './Navigation'

const Layout = () => (Wrappedcomponents) => {
    return (props) => {
        return (
            <>
                <Navigation />
                <Wrappedcomponents {...props} />
            </>
        )
    }
}

export default Layout
