import React, { useEffect, useRef} from 'react'
import { gsap } from "gsap"; //  , Power4, Expo

import Image1 from '../../static/images/gallery-images/magritte.jpg'
import Image2 from '../../static/images/gallery-images/tritone.jpg'

// TODO: scrap this file?
const HorizRoll = ({ toggle }) => {
  // console.log("from slider: toggle=", toggle)

  let tailGlitch = useRef(null) // 0%
  let headGlitch = useRef(null) // 20%

  useEffect(() => {

    gsap.set(tailGlitch, { attr: { 'offset': '0%' } })
    gsap.set(headGlitch, { attr: { 'offset': '2%' } })

    const tl = gsap.timeline({ defaults: { delay: 0 } })
    tl
      .to(headGlitch, { duration: 2, attr: { 'offset': '95%' } }, '-=0')
      .to(tailGlitch, { duration: 2, attr: { 'offset': '90%' } }, '-=2')

  }, [toggle])

  return (
    <div className="img-container">

      <svg 
      viewBox="0 0 600 600" 
      xmlns="https//www.w3.org/2000/svg" 
      width="100%" 
      height="100%"
      preserveAspectRatio="none">
        
        <linearGradient id="horizGrad">
          <stop offset="0%" stopColor="#fff" id="leftstop" />
          <stop offset="0%" stopColor="#fff" stopOpacity="1" ref={elem => tailGlitch = elem} />
          <stop offset="5%" stopColor="#000" stopOpacity="1" ref={elem => headGlitch = elem} />
          <stop offset="100%" stopColor="#000" id="rightstop" />
        </linearGradient>

        <mask id="horiz-roll-mask">
          <rect x="-300" y="0" width="1200" height="600" fill="url(#horizGrad)" />
        </mask>

        <image className="img-back" xlinkHref={Image1} width="100%" height="100%" preserveAspectRatio="none" />
        <image className="img-front" xlinkHref={Image2} width="100%" height="100%" preserveAspectRatio="none" mask="url(#horiz-roll-mask)" />

      </svg>
    </div>

  );
}

export default HorizRoll; 