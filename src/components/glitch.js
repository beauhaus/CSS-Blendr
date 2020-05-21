import React, { useEffect, useRef} from 'react'
// import styled from 'styled-components';
// import {Link} from 'gatsby'
import { gsap } from "gsap"; //  , Power4, Expo

// import School from '../../static/school.jpg'
// import Listen from '../../static/listening.jpg'
import Image1 from '../../static/images/magritte.jpg'
import Image2 from '../../static/images/tritone.jpg'

import Glitchy from '../../static/images/glitchgif.gif'


const VertRollGlitch = ({ toggle }) => {
    console.log("from slider: toggle=", toggle)

    let tailGlitch = useRef(null) // 0%
    let centerGlitch = useRef(null) // 10%
    let headGlitch = useRef(null) // 20%
    let glitchImage = useRef(null) // 20%

    useEffect(() => {

        gsap.set(tailGlitch, { attr: { 'offset': '0%' } })
        gsap.set(centerGlitch, { attr: { 'offset': '5%' } })
        gsap.set(headGlitch, { attr: { 'offset': '10%' } })
        gsap.set(glitchImage, { opacity: 0})

        const tl = gsap.timeline({ defaults: { delay: 0 } })
        tl
        .to(glitchImage, {duration: .3, opacity: .5})
            .to(headGlitch, { duration: .2, attr: { 'offset': '100%' } }, '-=0')
            .to(centerGlitch, { duration: .2, attr: { 'offset': '95%' } }, '-=0.2')
            .to(tailGlitch, { duration: .2, attr: { 'offset': '90%' } }, '-=.2')
          
            .to(glitchImage, {duration: .4, opacity: 0}, '-=0')
    }, [toggle])
    return (
        <div className="glitch-container">
            <svg
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

           
                <image className="img-glitch" xlinkHref={Glitchy} width="100%" height="100%" preserveAspectRatio="none" style={{ mixBlendMode: 'difference' }}  mask="url(#Mask)"  ref={elem => glitchImage = elem} />

            </svg>
        </div>
    );
}

export default VertRollGlitch; 