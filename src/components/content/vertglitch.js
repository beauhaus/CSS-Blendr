import React, { useEffect, useRef, useContext } from 'react'
import { gsap, SteppedEase } from "gsap"; //  , Power4, Expo
import { ModeContext } from '../../pages/page-a'
import GlitchGif from '../../../static/images/glitchgif.gif'
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components'


const VertGlitchContainer = styled.svg`
width: 100%;
height: 100%;
mix-blend-mode: exclusion;
opacity: .7;
 image {
     transform: translate(0, 0);
     animation: glitcher 200ms steps(10) infinite;

 }
 @keyframes glitcher {
	from { transform: translate(0%, 0%) }
	to { transform: translate(-100%, 0%)}  
}
`

const VertGlitch = () => {
    const data = useStaticQuery(graphql`
    {
        file(relativeDirectory: {eq: "images_util"}, name: {eq: "newglitch2"}) {
          image: childImageSharp {
            fixed(width: 2700) {
              src
            }
          }
        }
      }
    `)

    const glitchAnimImage = data.file.image.fixed;

    const { mode } = useContext(ModeContext)
    let botGlitch = useRef(null) // 0%
    let centerGlitch = useRef(null) // 10%
    let topGlitch = useRef(null) // 20%

    useEffect(() => {
        gsap.set(botGlitch, { attr: { 'offset': '-20%' } })
        gsap.set(centerGlitch, { attr: { 'offset': '10%' } })
        gsap.set(topGlitch, { attr: { 'offset': '0%' } })
        const tl = gsap.timeline({ defaults: { delay: 0 } })
        tl
            .to(topGlitch, { duration: .4, attr: { 'offset': '110%' } }, '-=0')
            .to(centerGlitch, { duration: .4, attr: { 'offset': '110%' } }, '-=.4')
            .to(botGlitch, { duration: .5, attr: { 'offset': '100%' } }, '-=.4')
    }, [mode])

    return (
        <VertGlitchContainer className="vert-glitch"
            xmlns="https//www.w3.org/2000/svg"
            viewBox="0 0 300 300"
            width="100%"
            preserveAspectRatio="none"

        >

            <linearGradient id="vertGrad" x1="50%" x2="50%" y1="100%" y2="0" >
                <stop offset="0%" stopColor="#000" id="bottom" />
                <stop offset="-20%" stopColor="#000" ref={elem => botGlitch = elem} />
                <stop offset="-10%" stopColor="#fff" ref={elem => centerGlitch = elem} />
                <stop offset="0%" stopColor="#000" ref={elem => topGlitch = elem} />
                <stop offset="100%" stopColor="#000" id="top" />
            </linearGradient>




            <svg
                // viewBox="0 0 300 25"
                preserveAspectRatio="xMinYMid slice"
                height="100%"
                width="1000%"
            >
                <mask id="glitch-mask">
                    <rect x="-300" y="0" width="100%" height="100%"
                        fill="url(#vertGrad)"
                    />
                </mask>
                <image xlinkHref={glitchAnimImage.src} width="100%" height="100%" mask="url(#glitch-mask)" />
            </svg>


        </VertGlitchContainer>
    );
}

export default VertGlitch; 