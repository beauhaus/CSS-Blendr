import React from 'react'
import './flipimgpairs.scss'

import Image1 from '../../../static/images/magritte.jpg'
import Image2 from '../../../static/images/tritone.jpg'


const FlipImagePairs = ({flipToggle}) => {
    return (flipToggle?
        <>
         <svg className="bot-img" x="0" y="0" viewBox="0 0 700 500" >
            <image width="100%" height="100%" xlinkHref={Image2}
                preserveAspectRatio="none" />
            {/* <rect width="100%" height="100%" fillOpacity="0.3" fill="#000" strokeWidth="4" stroke="teal" /> */}
        </svg>

        <svg className="top-img" x="0" y="0" viewBox="0 0 700 500" >
            <image width="100%" height="100%" xlinkHref={Image1}
                preserveAspectRatio="none" />
            {/* <rect width="100%" height="100%" /> */}

        </svg>
        </>:
        <>
        <svg className="bot-img" x="0" y="0" viewBox="0 0 700 500" >
            <image width="100%" height="100%" xlinkHref={Image1}
                preserveAspectRatio="none" />
            {/* <rect width="100%" height="100%" fillOpacity="0.3" fill="#000" strokeWidth="4" stroke="teal" /> */}
        </svg>

        <svg className="top-img" x="0" y="0" viewBox="0 0 700 500" >
            <image width="100%" height="100%" xlinkHref={Image2}
                preserveAspectRatio="none" />
            {/* <rect width="100%" height="100%" /> */}

        </svg>
    </>
        
)}

export default FlipImagePairs;