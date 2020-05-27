import React from 'react'
import './modedirectory.scss'
// import {ModeContext} from '???'

const ModeDirectory = ({mode, idx}) => {
    // const {mode,idx} = useContext(ModeContext);

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