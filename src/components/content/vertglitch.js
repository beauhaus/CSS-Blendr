import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap"; //  , Power4, Expo

import GlitchGif from '../../../static/images/glitchgif.gif'


const VertGlitch = ({ mode }) => {
    console.log("from slider: mode=", mode)

    let tailGlitch = useRef(null) // 0%
    let centerGlitch = useRef(null) // 10%
    let headGlitch = useRef(null) // 20%
    let glitchImage = useRef(null) // 20%

    useEffect(() => {
        gsap.set(tailGlitch, { attr: { 'offset': '0%' } })
        gsap.set(centerGlitch, { attr: { 'offset': '5%' } })
        gsap.set(headGlitch, { attr: { 'offset': '10%' } })
        gsap.set(glitchImage, { opacity: 0 })
        const tl = gsap.timeline({ defaults: { delay: 0 } })
        tl
            .to(glitchImage, { duration: 0, opacity: .3 })
            .to(headGlitch, { duration: .3, attr: { 'offset': '100%' } }, '-=0')
            .to(centerGlitch, { duration: .3, attr: { 'offset': '95%' } }, '-=0.3')
            .to(tailGlitch, { duration: .3, attr: { 'offset': '90%' } }, '-=.3')
            .to(glitchImage, { duration: .4, opacity: 0 }, '-=0')
    }, [mode])
    return (
        <svg className="vert-glitch"
            viewBox="0 0 600 600"
            xmlns="https//www.w3.org/2000/svg"
            width="100%"
            height="100%"
            preserveAspectRatio="none">

            <linearGradient id="vertGrad" x1="50%" x2="50%" y1="100%" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#050" id="leftstop" />
                <stop offset="0%" stopColor="#050" stopOpacity="1" ref={elem => tailGlitch = elem} />
                <stop offset="5%" stopColor="#fff" stopOpacity="1" ref={elem => centerGlitch = elem} />
                <stop offset="10%" stopColor="#050" stopOpacity="1" ref={elem => headGlitch = elem} />
                <stop offset="100%" stopColor="#050" id="rightstop" />
            </linearGradient>

            <mask id="Mask">
                <rect x="-300" y="0" width="1200" height="600" fill="url(#vertGrad)" />
            </mask>
            <image className="img-glitch" xlinkHref={GlitchGif} width="100%" height="100%" preserveAspectRatio="none" style={{ mixBlendMode: 'difference' }} mask="url(#Mask)" ref={elem => glitchImage = elem} />
        </svg>

    );
}

export default VertGlitch; 