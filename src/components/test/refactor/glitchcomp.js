import React, { useContext, useRef, useEffect } from 'react';
import { gsap } from "gsap"; //  , Power4, Expo
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { AppContext } from '../../../pages/page-b'
import { threee2DigitRand } from './hooks/app-utils'

const VertGlitchContainerB = styled.svg`
 .glitch-img-container {
   width: 100%;
   height: 100%;
   #glitch-img2 {
    animation: glitchAnim 1s 0s 1 steps(10) both;
    mix-blend-mode: exclusion;
    opacity:0.5;
   }
 }

`

const VertGlitchContainerA = styled.svg`
 .glitch-img-container {
   width: 100%;
   height: 100%;
   #glitch-img {
    animation: glitchAnim 1s 0s 1 steps(10) both;
 mix-blend-mode: exclusion;
    opacity:0.5;

   }
 }
`

const GlitchComp = () => {
  const {
    mixModeNum
  } = useContext(AppContext);
  const data = useStaticQuery(graphql`
    {
        file(relativeDirectory: {eq: "images_util"}, name: {eq: "glitchcelanim"}) {
          image: childImageSharp {
            fixed(width: 3000) {
              src
            }
          }
        }
      }
    `)

  const glitchAnimImage = data.file.image.fixed;


  let botGlitch = useRef(null) // 0%
  let centerGlitch = useRef(null) // 10%
  let topGlitch = useRef(null) // 20%
  useEffect(() => {
    console.log("2dig: ", threee2DigitRand())
    let randPos = threee2DigitRand()
    gsap.set(topGlitch, { attr: { 'offset': '0%' } })
    gsap.set(centerGlitch, { attr: { 'offset': '10%' } })
    gsap.set(botGlitch, { attr: { 'offset': '-20%' } })
    const tl = gsap.timeline({ defaults: { delay: 0 } })
    tl
      // .to(topGlitch, { duration: .2, attr: { 'offset': '110%' } }, '-=0')
      // .to(centerGlitch, { duration: .2, attr: { 'offset': '110%' } }, '-=.2')
      // .to(botGlitch, { duration: .3, attr: { 'offset': '100%' } }, '-=.2')
      // .to(topGlitch, { duration: .2, attr: { 'offset': '10%' } }, '-=0')
      // .to(centerGlitch, { duration: .2, attr: { 'offset': '0%' } }, '-=.2')
      // .to(botGlitch, { duration: .2, attr: { 'offset': '-10%' } }, '-=.2')

      .to(topGlitch, { duration: .1, attr: { 'offset': `${randPos[0] + 10}%` } }, '-=0')
      .to(centerGlitch, { duration: .1, attr: { 'offset': `${randPos[0]}%` } }, '-=.1')
      .to(botGlitch, { duration: .2, attr: { 'offset': `${randPos[0] - 10}%` } }, '-=.1')
      .to(topGlitch, { duration: .1, attr: { 'offset': `${randPos[1] + 10}%` } }, '-=0')
      .to(centerGlitch, { duration: .1, attr: { 'offset': `${randPos[1]}%` } }, '-=.1')
      .to(botGlitch, { duration: .1, attr: { 'offset': `${randPos[1] - 10}%` } }, '-=.1')
      .to(topGlitch, { duration: .1, attr: { 'offset': `${randPos[2] + 10}%` } }, '-=0')
      .to(centerGlitch, { duration: .1, attr: { 'offset': `${randPos[2]}%` } }, '-=.1')
      .to(botGlitch, { duration: .1, attr: { 'offset': `${randPos[2] - 10}%` } }, '-=.1')
  }, [mixModeNum, threee2DigitRand])
  // this ternary allows for rerender upon each click of modecyclebtn
  return (
    mixModeNum % 2 ?
      <VertGlitchContainerA className="vert-glitch"
        xmlns="https//www.w3.org/2000/svg"
        viewBox="0 0 300 300"
        width="100%"
        preserveAspectRatio="none"
      >
        <svg
          className="glitch-img-container"
          preserveAspectRatio="xMinYMid slice"
          height="100%"
          width="1000%"
        >
          <linearGradient id="vertGrad" x1="50%" x2="50%" y1="100%" y2="0" >
            <stop offset="0%" stopColor="#000" id="bottom" />
            <stop offset="20%" stopColor="#000" ref={elem => botGlitch = elem} />
            <stop offset="30%" stopColor="#fff" ref={elem => centerGlitch = elem} />
            <stop offset="90%" stopColor="#000" ref={elem => topGlitch = elem} />
            <stop offset="100%" stopColor="#000" id="top" />
          </linearGradient>
          <mask id="glitch-mask">
            <rect x="-300" y="0" width="100%" height="100%"
              fill="url(#vertGrad)"
            />
          </mask>
          <image id="glitch-img" xlinkHref={glitchAnimImage.src} width="100%" height="100%" mask="url(#glitch-mask)" />
        </svg>
      </VertGlitchContainerA>
      :
      <VertGlitchContainerB className="vert-glitch"
        xmlns="https//www.w3.org/2000/svg"
        viewBox="0 0 300 300"
        width="100%"
        preserveAspectRatio="none"
      >

        <svg
          className="glitch-img-container"
          preserveAspectRatio="xMinYMid slice"
          height="100%"
          width="1000%"
        >

          <linearGradient id="vertGrad" x1="50%" x2="50%" y1="100%" y2="0" >
            <stop offset="0%" stopColor="#000" id="bottom" />
            <stop offset="20%" stopColor="#000" ref={elem => botGlitch = elem} />
            <stop offset="30%" stopColor="#fff" ref={elem => centerGlitch = elem} />
            <stop offset="90%" stopColor="#000" ref={elem => topGlitch = elem} />
            <stop offset="100%" stopColor="#000" id="top" />
          </linearGradient>
          <mask id="glitch-mask">
            <rect x="-300" y="0" width="100%" height="100%"
              fill="url(#vertGrad)"
            />
          </mask>
          <image id="glitch-img2" xlinkHref={glitchAnimImage.src} width="100%" height="100%" mask="url(#glitch-mask)" />
        </svg>
      </VertGlitchContainerB>
  )
};


export default GlitchComp;
