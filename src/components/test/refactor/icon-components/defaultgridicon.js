import React, { useEffect, useRef } from "react";
import styled from 'styled-components'
import { gsap, Power4,Power1 } from "gsap";

const StyledDefaultGridIcon = styled.svg`
    width: 100%;
    height: 100%;
    .inner-shadow {
        opacity: .2;
    }
    .st0{
        fill:#828282;
        
    }
    .st1{
        fill:var(--idle-lt-grey);
    }
    .selected-anim {
        fill: transparent;
        stroke: var(--idle-lt-grey-2);
        stroke-width: 20;
    }
`
 
const DefaultGridIcon = ({toggle}) => {
    // console.log(toggle? "dgtrue": "dgfalse");
    let gradientRef = useRef(null);
    let maskRef = useRef(null);
    let selectedCardA = useRef(null);
    let selectedCardB = useRef(null);
    let selectedCardC = useRef(null);
    let selectedCardD = useRef(null);

    useEffect(() => {
        gsap.set(gradientRef, { x: -600 })
        gsap.set(selectedCardA, { opacity: 0 })
        gsap.set(selectedCardB, { opacity: 0 })
        gsap.set(selectedCardC, { opacity: 0 })
        gsap.set(selectedCardD, { opacity: 0 })
        const tl = gsap.timeline();
        if (!toggle) {
            tl
            .to(gradientRef, 0, { x: -600})
            .to(maskRef, 1, { opacity: 1, ease: Power4.easeInOut }, '-=.5')
            .to(selectedCardA, 1, {opacity: 0})
            .to(selectedCardB, 1, {opacity: 0})
            .to(selectedCardC, 1, {opacity: 0})
            .to(selectedCardD, 1, {opacity: 0})

        } else if (toggle) {
            tl
            // .to(selectedCard, 0, { fill: 'var(--idle-lt-grey)', ease: Power4.easeInOut }, '-=.5')
            .to(gradientRef, 1, { x: 250, ease: Power4.easeInOut }, '-=0')
            .to(maskRef, .8, { opacity: 0, ease: Power4.easeInOut }, '-=.5')
            .to(selectedCardA, .2, {opacity: 1}, '-=0')
            .to(selectedCardA, .2, {opacity: 0}, '-=0')
            .to(selectedCardB, .3, {opacity: 1}, '-=.2')
            .to(selectedCardB, .3, {opacity: 0}, '-=0')
            .to(selectedCardC, .4, {opacity: 1}, '-=.3')
            .to(selectedCardC, .4, {opacity: 0}, '-=0')
            .to(selectedCardD, .5, {opacity: 1}, '-=.4')
        }

    }, [toggle]);
    return (
        <StyledDefaultGridIcon
        className={toggle ? 'active-btn': 'idle-btn'}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 400 400"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"

                >
                    <filter id="grid-icon-shadow">
                        <feDropShadow dx="14" dy="14" stdDeviation="8" floodColor="#000" />
                    </filter>
                    <mask id="grid-icon-mask">
                        <path id="mask_1_" d="M219.67 219.67h134v134h-134zM219.67 46.33h134v134h-134zM46.33 46.33h134v134h-134zM46.33 219.67h134v134h-134z" fill="#fff"/>
                    </mask>
                    <linearGradient id="grid-gradient" x1="0" x2="700" y1="0" y2="400" gradientUnits="userSpaceOnUse">
                        <stop offset=".40" stopColor="#fff" stopOpacity="0"/>
                        <stop offset=".5" stopColor="#fff"/>
                        <stop offset=".60" stopColor="#fff" stopOpacity="0"/>
                    </linearGradient>
                    <path id="background_1_" d="M0 0h400v400H0z" className="st0"/>
                    <g filter="url(#grid-icon-shadow)">
                    <rect
                    className="st1"
                    width="130" 
                    height="130" 
                    fill="purple"
                    y="50"
                    x="50" 
                     />
                     <rect
                     className="st1"
                    width="130" 
                    height="130" 
                    y="220"
                    x="50" 
                     />
                      <rect
                     className="st1"
                    width="130" 
                    height="130" 
                    x="220"
                    y="50" 
                     />

                    <rect
                    className="st1"
                    width="130" 
                    height="130" 
                    y="220"
                    x="220"
                     />
                      <rect
                    className="selected-anim"
                    width="130" 
                    height="130" 
                    y="50"
                    x="50" 
                    fill="var(--active-lt-grey-1)"
                    ref={elem => selectedCardA = elem} 
                     />
                    <rect
                    className="selected-anim"
                    width="130" 
                    height="130" 
                    x="50"
                    y="220" 
                    ref={elem => selectedCardC = elem} 
                     />
                    <rect
                    className="selected-anim"
                    width="130" 
                    height="130" 
                    y="50"
                    x="220" 
                    ref={elem => selectedCardB = elem} 
                     />
                     <rect
                    className="selected-anim"
                    width="130" 
                    height="130" 
                    y="220"
                    x="220"
                    ref={elem => selectedCardD = elem} 
                     />

          </g>
                   
  
  <rect  fill="url(#grid-gradient)" 
                    width="200%" 
                    height="200%" 
                    y="-400" 
                    ref={elem => gradientRef = elem}
                     />
                  <path fill="#828282" d="M0 0v400h400V0H0zm180.33 353.67h-134v-134h134v134zm0-173.34h-134v-134h134v134zm173.34 173.34h-134v-134h134v134zm0-173.34h-134v-134h134v134z"
                      ref={elem => maskRef = elem} 
                  />
                 </StyledDefaultGridIcon>
    )
}
export default DefaultGridIcon;
