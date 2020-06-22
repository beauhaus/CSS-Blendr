import React, { useEffect, useRef, useContext } from 'react'
import { gsap, Back } from "gsap"; //  , Power4, Expo
import { ModeContext } from '../../pages/page-a'

import './flipimgpairs.scss'

const FlipImagePairs = () => {
    const { mode, flipTriggerVal, selBot, imgFlipper, selTop,topAlphaVal, alphaToggle } = useContext(ModeContext);
    let topImage = useRef(null)
    let botImage = useRef(null)
    let imgEffect = useRef(null)


    /* affordance animation (arrows) for changing modes */
    useEffect(() => {
        gsap.set(imgEffect, { opacity: 0 })
        const tl = gsap.timeline({ defaults: { delay: 0 } })
        tl.to(imgEffect, { duration: .1, opacity: .7 }, '-=0')
        tl.to(imgEffect, { duration: 1, opacity: 0 }, '-=0')
    }, [mode])

    /*slide-out animation */
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { delay: 0 } })
        tl
            .to(botImage, { duration: .3, x: 800 }, '-=0')
            .to(topImage, { duration: .3, x: -800 }, '-=.3')
            .call(imgFlipper)
            .to(botImage, { duration: .5, ease: Back.easeInOut.config(1.8), x: 0 }, '-=0')
            .to(topImage, { duration: .5, ease: Back.easeInOut.config(1.8), x: 0 }, '-=.5')
    }, [flipTriggerVal])
    
    return (
        <>
            <svg className="bot-img" x="0" y="0" viewBox="0 0 700 500" >
                <image width="100%" height="100%" xlinkHref={selBot.url} preserveAspectRatio="none" ref={elem => botImage = elem} />
            </svg>
            <svg className="top-img" x="0" y="0" viewBox="0 0 700 500" >
                <image opacity={topAlphaVal/100} width="100%" height="100%" xlinkHref={selTop.url} preserveAspectRatio="none" ref={elem => topImage = elem} />
                <rect  stroke="lightgreen" strokeWidth="45" width="100%" height="100%" fill="lightgreen" ref={elem => imgEffect = elem} style={{ mixBlendMode: "screen" }} />
                {alphaToggle &&<text x="150" y="350" width="100%" height="100%" className="flip-scrn-top-alpha-display">{topAlphaVal}%</text>}
            </svg>
        </>

    )
}

export default FlipImagePairs;