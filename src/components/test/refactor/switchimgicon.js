import React, { useContext, useEffect, useRef } from 'react'
import { gsap, Power1 } from "gsap"; //  , Power4, Expo
import styled from 'styled-components'
import { AppContext } from '../../../pages/page-b'

const StyledSwitchImgIcon = styled.div`
        backgound: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
svg {
    width: 7vh;
    height: 7vh;
    margin: auto;
    path {
        transform-origin: 50% 50%;      
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }
}
    #frame {
        opacity: 0;
    }
`

const SwitchImgIcon = () => {
    const { 
        addImageMode
    } =useContext(AppContext);

    let switchIcon = useRef(null)
    let switchIconFrame = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { rotate: 0 , attr: { stroke: '#fff' }} })
        gsap.set(switchIcon, { transformOrigin: '50% 50%' })

        addImageMode ? 
        tl.to(switchIcon, { duration: .5, ease: Power1.easeInOut, rotate: 135, attr: { stroke: '#beecff' }}, '-=0')
          .to(switchIconFrame, { duration: .5, ease: Power1.easeInOut, opacity: 1, attr: { stroke: '#beecff' }}, '-=0')
        :
        tl.to(switchIcon, { duration: .5, ease: Power1.easeInOut, rotate: 0, attr: { stroke: '#fff' }}, '-=0')
          .to(switchIconFrame, { duration: .5, ease: Power1.easeInOut, opacity: 0}, '-=0.5')
    }, [addImageMode])
    
    return (
        <StyledSwitchImgIcon className="image-switch-icon" >
        <svg className="image-switch-icon" viewBox="0 0 300 300" width="100%" height="100%" >
        <filter id="switch-shad-blur">
                <feGaussianBlur stdDeviation="6"></feGaussianBlur>
            </filter>
          {/* <rect height="100%" width="100%" rx="8" ry="8" strokeWidth="2" stroke="#beecff" fill="transparent"/>
          <path d="M300 148H152V0h-4v148H0v4h148v148h4V152h148z"  ref={elem => switchIcon = elem} /> */}
          <g className="cross" ref={elem => switchIcon = elem} >
            <path id="cross-shad" d="M297.5 150.57H154.43V7.5h-3.86v143.07H7.5v3.86h143.07V297.5h3.86V154.43H297.5z" 
                 strokeWidth="12"
                 stroke="#000"
                filter="url(#switch-shad-blur)"
                opacity="0.5"
            />
            <path id="cross"  d="M295 148.07H151.93V5h-3.86v143.07H5v3.86h143.07V295h3.86V151.93H295z" 
                 strokeWidth="6"
                ref={elem => switchIcon = elem} 
            />
            </g>
            <path ref={elem => switchIconFrame = elem} id="frame" fill="#beecff" stroke="#beecff" strokeWidth="3"  d="M250 4c25.41 0 46 20.59 46 46v200c0 25.41-20.59 46-46 46H50c-25.41 0-46-20.59-46-46V50C4 24.59 24.59 4 50 4h200m0-4H50C22.43 0 0 22.43 0 50v200c0 27.57 22.43 50 50 50h200c27.57 0 50-22.43 50-50V50c0-27.57-22.43-50-50-50z"/>
          </svg>
          </StyledSwitchImgIcon>
    )
}
export default SwitchImgIcon;
