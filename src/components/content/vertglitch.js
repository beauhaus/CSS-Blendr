import React, { useEffect, useRef,useContext } from 'react'
import { gsap } from "gsap"; //  , Power4, Expo
import {ModeContext} from '../../pages/page-a'
import GlitchGif from '../../../static/images/glitchgif.gif'
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components'


const VertGlitchContainer = styled.svg`
width: 100%;
height: 100%;
overflow-y: hidden;
mix-blend-mode: difference;
${'' /* opacity: 0; */}
 image {
     ${'' /* height: 100%;
     width: 100%; */}
     transform: translate(0, 0);
     animation: glitcher 100ms steps(9) infinite;
     ;
 }
 @keyframes glitcher {
  
  0% {
      background-position: 0 0;
  }
  100% {
    transform: translate(-900%, 0);
  }
}
`




const VertGlitch = () => {
    const data = useStaticQuery(graphql`
    {
        file(relativeDirectory: {eq: "images_util"}, name: {eq: "newglitch"}) {
        image: childImageSharp {
            fixed(width: 2700) {
            src
            }
        }
        }
    }       
`)

const glitchAnimImage = data.file.image.fixed;

const {mode} = useContext(ModeContext)
let tailGlitch = useRef(null) // 0%
let centerGlitch = useRef(null) // 10%
let headGlitch = useRef(null) // 20%
let glitchImage = useRef(null) // 20%

useEffect(() => {
    gsap.set(tailGlitch, { attr: { 'offset': '-10%' } })
    gsap.set(centerGlitch, { attr: { 'offset': '0%' } })
    gsap.set(headGlitch, { attr: { 'offset': '10%' } })
    gsap.set(glitchImage, { opacity: 0 })
    const tl = gsap.timeline({ defaults: { delay: 0 } })
    tl
        .to(glitchImage, { duration: 0, opacity: .5 })
        .to(headGlitch, { duration: .3, attr: { 'offset': '110%' } }, '-=0')
        .to(centerGlitch, { duration: .3, attr: { 'offset': '100%' } }, '-=.3')
        .to(tailGlitch, { duration: .3, attr: { 'offset': '90%' } }, '-=.3')
        .to(glitchImage, { duration: .4, opacity: 0 }, '-=0')
}, [mode])
    
    return (
        <VertGlitchContainer className="vert-glitch"
            xmlns="https//www.w3.org/2000/svg"
            viewBox="0 0 300 300"
            // width="150%"
            // height="110%"
            preserveAspectRatio="none"
            >
 
            <linearGradient id="vertGrad" x1="50%" x2="50%" y1="100%" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#020" id="leftstop" />
                <stop offset="0%" stopColor="#050"  ref={elem => tailGlitch = elem} />
                <stop offset="5%" stopColor="#fff"  ref={elem => centerGlitch = elem} />
                <stop offset="10%" stopColor="#050"  ref={elem => headGlitch = elem} />
                <stop offset="100%" stopColor="#020" id="rightstop" />
            </linearGradient>

            <mask id="glitch-mask">
                <rect x="-300" y="0" width="600" height="300" fill="url(#vertGrad)" />
            </mask>
            
       {/*     <image className="img-glitch" xlinkHref={GlitchGif} width="100%" height="100%" preserveAspectRatio="none" style={{ mixBlendMode: 'difference' }} mask="url(#glitch-mask)" ref={elem => glitchImage = elem}/> */}

       {/* <image xlinkHref={glitchAnimImage.src}   height="100%"  mask="url(#glitch-mask)" ref={elem => glitchImage = elem}/> */}
       {/* <rect fill="fuchsia" width="100%" ref={elem => glitchImage = elem}  mask="url(#glitch-mask)"/> */}
        <image xlinkHref={glitchAnimImage.src}   height="100%"  ref={elem => glitchImage = elem} mask="url(#glitch-mask)"/> 


            {/* <VertGlitchContainer viewBox="0 0 300 300"
            width="100%"
            height="100%"
            preserveAspectRatio="none"> */}
            {/* </VertGlitchContainer> */}

        </VertGlitchContainer>

    );
}

export default VertGlitch; 