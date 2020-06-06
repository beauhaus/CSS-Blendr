import React, { useEffect, useRef, useContext } from 'react'
import { gsap } from "gsap"; //  , Power4, Expo
import { ModeContext } from '../../pages/page-a'
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components'


const VertGlitchContainer = styled.div`
width: 50vw;
height: 50vw;
border: 1px dashed fuchsia;
opacity: 1;
    overflow-y: hidden;
 image {
     height: 100%;
     width: 100%;
     transform: translate(0, 0);
     animation: glitcher 5s steps(9) infinite;
 }
 @keyframes glitcher {
  
  0% {
      background-position: 0 0;
  }
  100% {
    transform: translate(-100%, 0);
  }
}
`
const VertGlitch = () => {
    const data = useStaticQuery(graphql`
        {
            file(relativeDirectory: {eq: "images_util"}, name: {eq: "glitchsprite"}) {
            image: childImageSharp {
                fixed(width: 2700) {
                src
                }
            }
            }
        }       
    `)



    console.log("imgObj: ", data.file.image.fixed);
    const testGlitch = data.file.image.fixed;

    // const { mode } = useContext(ModeContext)
    let tailGlitch = useRef(null) // 0%
    let centerGlitch = useRef(null) // 10%
    let headGlitch = useRef(null) // 20%
    // let glitchImage = useRef(null) // 20%

    // useEffect(() => {
    //     gsap.set(tailGlitch, { attr: { 'offset': '0%' } })
    //     gsap.set(centerGlitch, { attr: { 'offset': '5%' } })
    //     gsap.set(headGlitch, { attr: { 'offset': '10%' } })
    //     gsap.set(glitchImage, { opacity: 0 })
    //     const tl = gsap.timeline({ defaults: { delay: 0 } })
    //     tl
    //         .to(glitchImage, { duration: 0, opacity: .6 })
    //         .to(headGlitch, { duration: .3, attr: { 'offset': '100%' } }, '-=0')
    //         .to(centerGlitch, { duration: .3, attr: { 'offset': '95%' } }, '-=0.3')
    //         .to(tailGlitch, { duration: .3, attr: { 'offset': '90%' } }, '-=.3')
    //         .to(glitchImage, { duration: .4, opacity: 0 }, '-=0')
    // }, [mode])

    return (
        <VertGlitchContainer className="container-x">

            {/* <svg className="vert-test-glitch"
            viewBox="0 0 300 300"
            xmlns="https//www.w3.org/2000/svg"
            width="100%"
            height="100%"
            preserveAspectRatio="none"> */}

            {/* <linearGradient id="vertGrad" x1="50%" x2="50%" y1="100%" y2="0" gradientUnits="userSpaceOnUse"> */}
            {/* <stop offset="0%" stopColor="#050" id="leftstop" /> */}
            {/* <stop offset="0%" stopColor="#050" stopOpacity="1" ref={elem => tailGlitch = elem} />
                <stop offset="5%" stopColor="#fff" stopOpacity="1" ref={elem => centerGlitch = elem} />
                <stop offset="10%" stopColor="#050" stopOpacity="1" ref={elem => headGlitch = elem} /> */}
            {/* <stop offset="100%" stopColor="#050" id="rightstop" /> */}
            {/* </linearGradient> */}

            {/* <mask id="Mask">
                <rect x="-300" y="0" width="1200" height="600" fill="url(#vertGrad)" />
            </mask> */}
            {/* <BackgroundGlitch Tag="image" fluid={fluid.image.sharp} */}

            {/* <image className="img-glitch" xlinkHref={GlitchGif} width="100%" height="100%" preserveAspectRatio="none" style={{ mixBlendMode: 'difference' }} mask="url(#Mask)" ref={elem => glitchImage = elem} /> */}
            {/* <image className="test-glitch" xlinkHref={testGlitch} width="100%" height="100%" preserveAspectRatio="none"  />
            </svg> */}
            {/* <img src={testGlitch} alt="blag" /> */}
            <svg width="100%" height="100%" >
                <image className="test-glitch" xlinkHref={testGlitch.src} />
            </svg>
        </VertGlitchContainer>

    );
}

export default VertGlitch; 