import React, {useEffect, useState, useRef} from 'react'
import { gsap } from "gsap"; //  , Power4, Expo

import './flipimgpairs.scss'

import Image1 from '../../../static/images/magritte.jpg'
import Image2 from '../../../static/images/tritone.jpg'


const FlipImagePairs = ({flipToggle, modechange}) => {

    let topImage = useRef(null)

    useEffect(()=>{
        // console.log("useEffect ran", modechange)
        gsap.set(topImage, { opacity: 0 })
    
        const tl = gsap.timeline({ defaults: { delay: 0 } })
        tl.to(topImage, { duration: .1, opacity: .7   }, '-=0')
        tl.to(topImage, { duration: 1, opacity: 0   }, '-=0')
        // tl.to(topImage, { duration: 2, opacity: 0   }, '-=0')
    }, [modechange])

    return (
        <>
         <svg className="bot-img" x="0" y="0" viewBox="0 0 700 500" >
            <image width="100%" height="100%" xlinkHref={flipToggle?Image2:Image1}
                preserveAspectRatio="none" />
        </svg>

        <svg className="top-img" x="0" y="0" viewBox="0 0 700 500" >
        {/* <image width="100%" height="100%" xlinkHref={flipToggle?Image1:Image2}
                preserveAspectRatio="none" /> */}
        <image  width="100%" height="100%" xlinkHref={flipToggle?Image1:Image2} preserveAspectRatio="none" />
        <rect id="test1" stroke="red" strokeWidth="15" width="100%" height="100%" fill="lightgreen"   ref={elem => topImage = elem} style={{ mixBlendMode: "screen" }} />
        
            {/* <image className="effect-animating-img" width="100%" height="100%" xlinkHref={flipToggle?Image1:Image2}
                preserveAspectRatio="none" strokeWidth="4" stroke="#fff" /> */}
        </svg>
    </>
        
)}

export default FlipImagePairs;