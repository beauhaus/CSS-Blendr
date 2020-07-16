import React, { useEffect, useRef } from "react";
import styled from 'styled-components'
import { gsap, Power1, Power4 } from "gsap";


const StyledPaintIcon = styled.svg`
    opacity: 1;
    width: 100%;
    height: 100%;
    .inner-shadow {
        opacity: .3;
    }
`

const PaintIcon = ({toggle}) => {
    let brushShadRef = useRef(null);
    let trimRef = useRef(null);
    let handleRef = useRef(null);
    let brushDRef = useRef(null)
    let brushCRef = useRef(null)
    let brushBRef = useRef(null)
    let brushARef = useRef(null)
    
    useEffect(() => {
        gsap.set(brushShadRef, { opacity: 0 })
        gsap.set(trimRef, { opacity: 0 })
        gsap.set(handleRef, { attr: {stroke: 'transparent'} })
        
        const tl = gsap.timeline();
        if (!toggle) {
            // gsap.set(mtnRef, { y: 0, x: 0, scaleX: 1 }, '-=1')
               tl
               .to(brushARef, .2, { fill:'var(--idle-lt-grey)', ease: Power4.easeInOut },'-=0')
               .to(brushBRef, .2, { fill:'var(--idle-lt-grey)', ease: Power4.easeInOut },'-=.2')
               .to(brushCRef, .2, { fill:'var(--idle-lt-grey)', ease: Power4.easeInOut },'-=.2')
               .to(brushDRef, .2, { fill:'var(--idle-lt-grey)', ease: Power4.easeInOut },'-=.2')
               .to(brushShadRef, .5, { opacity:0, ease: Power4.easeInOut })
               
        } else if (toggle) {
            tl
            .to(brushARef, .1, { fill:'#ff6e05', ease: Power1.easeInOut },'-=0')
            .to(brushARef, .1, { fill:'#d0d1d2', ease: Power1.easeInOut },'-=0')

            .to(brushBRef, .1, { fill:'#15ff21', ease: Power1.easeInOut },'-=.2')
            .to(brushBRef, .1, { fill:'#919293', ease: Power1.easeInOut },'-=0')
            
            .to(brushCRef, .1, { fill:'#4aecff', ease: Power1.easeInOut },'-=.2')
            .to(brushCRef, .1, { fill:'#77787a', ease: Power1.easeInOut },'-=0')
            
            .to(brushDRef, .1, { fill:'#ff4f76', ease: Power1.easeInOut },'-=.2')
            .to(brushDRef, .1, { fill:'#505051', ease: Power1.easeInOut },'-=0')
            
            .to(handleRef, 1, { attr: {stroke: '#c5ebfd'}, ease: Power4.easeInOut },'-=1')
            .to(trimRef, 1, { opacity:1, ease: Power4.easeInOut },'-=1')
            .to(brushShadRef, 2, { opacity:1, ease: Power4.easeInOut },'-=1')
        }

    }, [toggle]);

    return (
        <StyledPaintIcon
        className={toggle ? 'active-btn': 'idle-btn'}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 400 400" 
        preserveAspectRatio="none">
        <path className="brush-shadow" 
            d="M341.07 223.43h-1.46V31.58H70.9V223.43h-1.46v5.09h1.46v10.26c0 17.05 12.67 31.01 28.16 31.01h68.56v72.73c0 .89.03 1.79.09 2.67 1.4 18.71 17.33 33.47 36.78 33.47s35.38-14.75 36.78-33.47c.06-.88.09-1.77.09-2.67v-72.73h70.07c15.5 0 28.17-13.95 28.17-31.01v-10.26h1.46v-5.09z"
            ref={elem => (brushShadRef = elem)}
        />
        
        <g id="bristles">
          <path id="brushA" fill="#d0d1d2" 
          d="M62.96 19.31h67.18v196.3H62.96z" 
          ref={elem => (brushARef = elem)}
          />
          <path id="brushB" fill="#919293" 
          d="M130.14 19.31h67.18v196.3h-67.18z" 
          ref={elem => (brushBRef = elem)}
          />
          <path id="brushC" fill="#77787a" 
          d="M197.32 19.31h67.18v196.3h-67.18z" 
          ref={elem => (brushCRef = elem)}
          />
          <path id="brushD" fill="#505051" 
          d="M264.5 19.31h67.18v196.3H264.5z" 
          ref={elem => (brushDRef = elem)}
          />
        </g>
        <path id="handle" fill="#9a9a9a" stroke="#c6ebfd" strokeWidth="4" 
        d="M331.67 195.67V229c0 17.05-12.67 31.01-28.17 31.01h-70.07v72.73c0 .89-.03 1.79-.09 2.67-1.4 18.71-17.33 33.47-36.78 33.47s-35.38-14.75-36.78-33.47c-.06-.88-.09-1.77-.09-2.67v-72.73H91.12c-15.49 0-28.16-13.95-28.16-31.01v-33.34c133.59.01 134.36.01 268.71.01z"
        ref={elem => (handleRef = elem)}
        />
        <path id="trim" fill="#c5ebfd" d="M61.5 213.65h271.64v5.09H61.5z"
            ref={elem => (trimRef = elem)}
        />



        <linearGradient id="innershad" x1="2780" x2="3180" y1="3080" y2="3080" gradientTransform="rotate(-90 150 3030)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopOpacity=".5"/>
          <stop offset=".1" stopOpacity="0"/>
          <stop offset=".9" stopOpacity="0"/>
          <stop offset="1" stopOpacity=".5"/>
        </linearGradient>
        <path className="inner-shadow" fill="url(#innershad)" d="M400 0v400H0V0z"/>
        <linearGradient id="innershad2" x1="0" x2="400" y1="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopOpacity=".5"/>
          <stop offset=".1" stopOpacity="0"/>
          <stop offset=".9" stopOpacity="0"/>
          <stop offset="1" stopOpacity=".5"/>
        </linearGradient>
        <path className="inner-shadow" fill="url(#innershad2)" d="M0 0h400v400H0z"/>
         </StyledPaintIcon>
    )
}
export default PaintIcon;



