import React, { useEffect, useRef} from 'react'
import styled from 'styled-components';
import { gsap } from "gsap"; //  , Power4, Expo

import Image1 from '../../../static/images/magritte.jpg'
import Image2 from '../../../static/images/tritone.jpg'


const HorizRollWrap = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
svg {
  position: absolute;
}
.top-img, .bot-img {
  position: absolute;
  width: 30vw;
  height: 13vh;
  transform: skew(0deg, 0deg) rotateX(46deg);
  // mix-blend-mode: luminosity;
  // filter: ;
  filter: invert(10%);
}
.top-img {
top: 1vh;
left: 4.5vw;
transform: skew(0deg, 0deg) rotateX(45deg);
rect {
  stroke-dasharray: 40 20;
  stroke: #fff;
  fill:transparent;
  stroke-width:4;
  
}

}
.bot-img {
  top: 6vh;
  right: 5vw;
  rect {
    stroke-dasharray: 40 20;
    stroke: #fff;
    fill: #000;
    fill-opacity: 0.4;
    stroke-width:3;
  }
}
`


const HorizRoll = ({ flipToggle }) => {
  // console.log("from slider: toggle=", toggle)

  // let tailGlitch = useRef(null) // 0%
  // let headGlitch = useRef(null) // 20%

//   useEffect(() => {
// console.log("useeffect")
//     gsap.set(tailGlitch, { attr: { 'offset': '0%' } })
//     gsap.set(headGlitch, { attr: { 'offset': '2%' } })

//     const tl2 = gsap.timeline({ defaults: { delay: 0 } })
//     tl2
//       .to(headGlitch, { duration: 2, attr: { 'offset': '95%' } }, '-=0')
//       .to(tailGlitch, { duration: 2, attr: { 'offset': '90%' } }, '-=2')


//   }, [flipToggle])
  return (
    // flipToggle?
    <HorizRollWrap>


      <svg className="bot-img" x="0" y="0" viewBox="0 0 700 500" >
      
         <image width="100%" height="100%" xlinkHref={Image2}
             preserveAspectRatio="none" />
     </svg>

     <svg className="top-img" x="0" y="0" viewBox="0 0 700 500" >
     <linearGradient id="horizGrad">
          <stop offset="0%" stopColor="#fff" id="leftstop" />
           {/* <stop offset="0%" stopColor="#fff" stopOpacity="0" ref={elem => tailGlitch = elem} /> 
           <stop offset="5%" stopColor="#000" stopOpacity="0" ref={elem => headGlitch = elem} />  */}
           <stop offset="80%" stopColor="#000" stopOpacity="1"/>
          <stop offset="100%" stopColor="000" id="rightstop" />
        </linearGradient>
        <mask id="horiz-roll-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#horizGrad)" />
        </mask>
         <image width="100%" height="100%" xlinkHref={Image1}
             preserveAspectRatio="none" mask="url(#horiz-roll-mask)"/>
     </svg>
     </HorizRollWrap>
//      :
//      <>
//      <svg className="bot-img" x="0" y="0" viewBox="0 0 700 500" >
//          <image width="100%" height="100%" xlinkHref={Image1}
//              preserveAspectRatio="none" />
//      </svg>

//      <svg className="top-img" x="0" y="0" viewBox="0 0 700 500" >
//          <image width="100%" height="100%" xlinkHref={Image2}
//              preserveAspectRatio="none" mask="url(#horiz-roll-mask)" />
//      </svg>
//  </>
  );
}

export default HorizRoll; 
/* <svg 
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

      </svg> */