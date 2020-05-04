import React from 'react'
import './modedirectory.scss'

const ModeDirectory = ({mode, idx}) => {

// console.log("md: ", mode)
    return (
        <>

            <h3>{idx+1}) {mode.title}</h3>
            {/* <h4>{mode.subtitle}</h4> */}
            <p>{mode.excerpt}</p>
        </>
    )
}

export default ModeDirectory;