import React from 'react'
import './flipimgpairs.scss'


const FlipImagePairs = () => (
    <>
        <svg className="bot-img" x="0" y="0" viewBox="0 0 700 500" >
            <image width="100%" height="100%" xlinkHref="http://placecorgi.com/700/500"
                preserveAspectRatio="none" />
            <rect width="100%" height="100%" fillOpacity="0.3" fill="#000" strokeWidth="4" stroke="teal" />
        </svg>

        <svg className="top-img" x="0" y="0" viewBox="0 0 700 500" >
            <image width="100%" height="100%" xlinkHref="http://placecorgi.com/600/560"
                preserveAspectRatio="none" />
            <rect width="100%" height="100%" fill="transparent" stroke="orange" strokeWidth="15" />

        </svg>
    </>
)

export default FlipImagePairs;