import React, { useEffect, useState, useRef } from 'react'
import { gsap, Back } from "gsap"; //  , Power4, Expo

import './flipimgpairs.scss'

import Image1 from '../../../static/images/magritte.jpg'
import Image2 from '../../../static/images/tritone.jpg'


const FlipImagePairs = ({ flipToggle, modechange }) => {
    const [flipTrigger, setFlipTrigger] = useState(true);
    let topImage = useRef(null)
    let botImage = useRef(null)
    let imgEffect = useRef(null)

    const flipImages=()=>{
        setFlipTrigger(!flipTrigger)
    }
    /* affordance for changing modes */
    useEffect(() => {
        gsap.set(imgEffect, { opacity: 0 })
        const tl = gsap.timeline({ defaults: { delay: 0 } })
        tl.to(imgEffect, { duration: .1, opacity: .7 }, '-=0')
        tl.to(imgEffect, { duration: 1, opacity: 0 }, '-=0')
    }, [modechange])

    /*slide-out animation */
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { delay: 0 } })
        tl
        .to(botImage, { duration: .3,  x: 800 }, '-=0')
        .to(topImage, { duration: .3,  x: -800 }, '-=.5')
        .call(flipImages)
        // .to(botImage, { duration: .5,  x: 0 }, '-=0')
        // .to(topImage, { duration: .5,  x: 0 }, '-=.5')
        
        .to(botImage, { duration: .5, ease: Back.easeInOut.config(1.8) ,  x: 0 }, '-=0')
        .to(topImage, { duration: .5, ease: Back.easeInOut.config(1.8) , x: 0 }, '-=.5')
    }, [flipToggle])

    return (
        <>
            <svg className="bot-img" x="0" y="0" viewBox="0 0 700 500" >
                <image width="100%" height="100%" xlinkHref={flipTrigger ? Image2 : Image1}
                    preserveAspectRatio="none" ref={elem => botImage = elem} />
            </svg>

            <svg className="top-img" x="0" y="0" viewBox="0 0 700 500" >
                <image width="100%" height="100%" xlinkHref={flipTrigger ? Image1 : Image2} preserveAspectRatio="none" ref={elem => topImage = elem} />
                <rect id="test1" stroke="lightgreen" strokeWidth="45" width="100%" height="100%" fill="lightgreen" ref={elem => imgEffect = elem} style={{ mixBlendMode: "screen" }} />
            </svg>
        </>

    )
}

export default FlipImagePairs;