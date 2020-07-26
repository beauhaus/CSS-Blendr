import React, { useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import {AppContext} from '../../../pages/page-b'
import { gsap, Back } from "gsap"; //  , Power4, Expo


const StyledFlipEffectsContainer = styled.div`
        position: relative;
        width: 48vw;
        height: 100%;
        margin: auto;
        display:grid;
        border-radius: 22px;
        overflow: hidden;
        background: linear-gradient(90deg, #2C3021 0%, #545D49 50%, #5F6B57 100%);
        .flip-arrows {
            fill: var(--active-blue);
        }
        #arrow-glow {
            fill: var(--active-blue);
            stroke: var(--active-blue);
        }
        .arrows-second-task {
            stroke: var(--active-blue);
            stroke-width: 2;
            fill:#000;
        }
`


const FlipEffectsContainer = (props) => {
    const {
        addImageMode,
        currentTop,
        flipTriggerVal
    } = useContext(AppContext);

    let flipArrows = useRef(null);
    let arrowGlow = useRef(null);
    let secondaryTrimBot = useRef(null);
    let secondaryTrimTop = useRef(null);
    let secondaryTrimRight = useRef(null);
    let secondaryTrimLeft = useRef(null);

    useEffect(() => {
        gsap.set(flipArrows, { opacity: 1, fillOpacity: 1 })
        gsap.set(arrowGlow, { opacity: 1, fillOpacity: 1 })
        const tl = gsap.timeline()
        tl
            .to(flipArrows, { duration: 1, opacity: 1, fillOpacity: .3 }, '-=0')
            .to(arrowGlow, { duration: .8, opacity: 0, fillOpacity: 0 }, '-=.8')
    }, [flipTriggerVal])


    useEffect(() => {
        const tl = gsap.timeline()
        gsap.set(secondaryTrimTop, { stopOpacity: 0 })
        gsap.set(secondaryTrimBot, { stopOpacity: 0 })
        gsap.set(secondaryTrimRight, { stopOpacity: 0 })
        gsap.set(secondaryTrimLeft, { stopOpacity: 0 })
        if (addImageMode) {
                tl
                .to(secondaryTrimBot,1, { stopOpacity: 1 }, '-=0' )
                .to(secondaryTrimTop,1, { stopOpacity: 1 }, '-=1' )
                .to(secondaryTrimRight,1, { stopOpacity: 1 }, '-=1' )
                .to(secondaryTrimLeft,1, { stopOpacity: 1 }, '-=1' )
                .to(secondaryTrimBot,1, { stopOpacity: 0 }, '-=0' )
                .to(secondaryTrimTop,1, { stopOpacity: 0 }, '-=1' )
                .to(secondaryTrimRight,1, { stopOpacity: 0 }, '-=1' )
                .to(secondaryTrimLeft,1, { stopOpacity: 0 }, '-=1' )
        } else if (!addImageMode) {
            tl
            .to(secondaryTrimBot,.5, { stopOpacity: 0 }, '-=0' )
            .to(secondaryTrimTop,.5, { stopOpacity: 0 }, '-=.5' )
        }
    }, [ currentTop])

    return (

        <StyledFlipEffectsContainer className="flip-effects-container">
                <svg xmlns="http://www.w3.org/2000/svg"
                    className="scrn-line-grid"
                    width="100%"
                    height="100%"
                    viewBox="0 0 300 300"
                    overflow="hidden"
                    preserveAspectRatio="none">
                    <filter id="arrow-glow-blur">
                        <feGaussianBlur stdDeviation="6"></feGaussianBlur>
                    </filter>
                    <g className="lines">
                        <path d="M37.5 0v300" className="st1" />
                        <path d="M74.5 0v300" className="st1" />
                        <path d="M111.5 0v300" className="st1" />
                        <path d="M148.5 0v300" className="st1" />
                        <path d="M185.5 0v300" className="st1" />
                        <path d="M222.5 0v300" className="st1" />
                        <path d="M259.5 0v300" className="st1" />
                        <path d="M0 36.5h300" className="st1" />
                        <path d="M0 73.5h300" className="st1" />
                        <path d="M0 110.5h300" className="st1" />
                        <path d="M0 147.5h300" className="st1" />
                        <path d="M0 184.5h300" className="st1" />
                        <path d="M0 221.5h300" className="st1" />
                        <path d="M0 258.5h300" className="st1" />
                    </g>
                    <path className={addImageMode ? 'arrows-second-task' : 'flip-arrows'}
                        ref={elem => flipArrows = elem}
                        d="M257.21 45.61s16.29 7.89 23.23 27.15c.06-16.26 7.45-37.67 7.45-37.67l-10.68 3.58-.06.02c-7.24-20.05-24.64-23.19-43.57-22.34 16.93-1.85 28.91 10.52 34.37 25.66l-10.74 3.6zM46.26 251.94s-17.61-4.21-28.52-21.53c3.43 15.9.81 38.39.81 38.39l9.67-5.79.05-.03c11.37 18.03 29.05 17.36 47.35 12.46-16.14 5.44-30.49-4.07-39.08-17.68l9.72-5.82z" />

                    <path filter="url(#arrow-glow-blur)"
                        id="arrow-glow"
                        ref={elem => arrowGlow = elem}
                        d="M257.21 45.61s16.29 7.89 23.23 27.15c.06-16.26 7.45-37.67 7.45-37.67l-10.68 3.58-.06.02c-7.24-20.05-24.64-23.19-43.57-22.34 16.93-1.85 28.91 10.52 34.37 25.66l-10.74 3.6zM46.26 251.94s-17.61-4.21-28.52-21.53c3.43 15.9.81 38.39.81 38.39l9.67-5.79.05-.03c11.37 18.03 29.05 17.36 47.35 12.46-16.14 5.44-30.49-4.07-39.08-17.68l9.72-5.82z" />

                    <linearGradient id="vert-grad" x1="0" x2="300" y1="150" y2="150" gradientUnits="userSpaceOnUse">
                        <stop offset="0" ref={elem => secondaryTrimRight = elem}  stopColor="#fbb03b" />
                        <stop offset=".1" stopColor="#fbb03b" stopOpacity="0" />
                        <stop offset=".9" stopColor="#fbb03b" stopOpacity="0" />
                        <stop offset="1" ref={elem => secondaryTrimLeft = elem}  stopColor="#fbb03b" />
                    </linearGradient>
                    <linearGradient id="horiz-grad" x1="150" x2="150" y1="300" y2="0" gradientUnits="userSpaceOnUse">
                        <stop offset="0" ref={elem => secondaryTrimBot = elem} stopColor="#fbb03b" />
                        <stop offset=".1"  stopColor="#fbb03b" stopOpacity="0" />
                        <stop offset=".9"  stopColor="#fbb03b" stopOpacity="0" />
                        <stop offset="1" ref={elem => secondaryTrimTop = elem} stopColor="#fbb03b" />
                    </linearGradient>
                    {addImageMode && <g className="secondary-gradient">
                        <rect rx="30" ry="30" x="8" y="8" fill="url(#vert-grad)" width="284" height="284" />
                        <rect rx="30" ry="30" x="8" y="8" fill="url(#horiz-grad)" width="284" height="284" />
                    </g>}

                </svg>

        </StyledFlipEffectsContainer>
    )
};

export default FlipEffectsContainer; 

/************ORIGINAL FILE
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 

const StyledBlendControls = styled.div`
    grid-row: 4;
    width: 96vw;
    height: 100%;
    margin:auto;
    display: flex;
    justify-content: center;
    

    .flip-effects-container {
        position: relative;
        width: 48vw;
        height: 100%;
        margin: auto;
        display:grid;
        border-radius: 22px;
        overflow: hidden;
        background: linear-gradient(90deg, #2C3021 0%, #545D49 50%, #5F6B57 100%);
    }
   
    .lines {
            fill:none;
            stroke:#7FB0E4;
            stroke-width:1;
            mix-blend-mode: overlay;
            overflow: hidden;
         }
        .flip-arrows {
            fill: var(--active-blue);
        }
        #arrow-glow {
            fill: var(--active-blue);
            stroke: var(--active-blue);
        }
        .arrows-second-task {
            stroke: var(--active-blue);
            stroke-width: 2;
            fill:#000;
        }
`

const BlendControls = (props) => {
    const {
        addImageMode,
        currentTop,
        flipTriggerVal
    } = useContext(AppContext);

    let flipArrows = useRef(null);
    let arrowGlow = useRef(null);
    let secondaryTrimBot = useRef(null);
    let secondaryTrimTop = useRef(null);
    let secondaryTrimRight = useRef(null);
    let secondaryTrimLeft = useRef(null);


    useEffect(() => {
        gsap.set(flipArrows, { opacity: 1, fillOpacity: 1 })
        gsap.set(arrowGlow, { opacity: 1, fillOpacity: 1 })
        const tl = gsap.timeline()
        tl
            .to(flipArrows, { duration: 1, opacity: 1, fillOpacity: .3 }, '-=0')
            .to(arrowGlow, { duration: .8, opacity: 0, fillOpacity: 0 }, '-=.8')
    }, [flipTriggerVal, currentTop])


    useEffect(() => {
        const tl = gsap.timeline()
        gsap.set(secondaryTrimTop, { stopOpacity: 0 })
        gsap.set(secondaryTrimBot, { stopOpacity: 0 })
        gsap.set(secondaryTrimRight, { stopOpacity: 0 })
        gsap.set(secondaryTrimLeft, { stopOpacity: 0 })
        if (addImageMode) {
                tl
                .to(secondaryTrimBot,1, { stopOpacity: 1 }, '-=0' )
                .to(secondaryTrimTop,1, { stopOpacity: 1 }, '-=1' )
                .to(secondaryTrimRight,1, { stopOpacity: 1 }, '-=1' )
                .to(secondaryTrimLeft,1, { stopOpacity: 1 }, '-=1' )
        } else if (!addImageMode) {
            tl
            .to(secondaryTrimBot,.5, { stopOpacity: 0 }, '-=0' )
            .to(secondaryTrimTop,.5, { stopOpacity: 0 }, '-=.5' )
        }
    }, [ currentTop])
    console.log(addImageMode ? "AddImgMode True" : "AddImgMode FALSE");
    return (
        <StyledBlendControls className="blend-controls">
            <div className="flip-effects-container">
                <svg xmlns="http://www.w3.org/2000/svg"
                    className="scrn-line-grid"
                    width="100%"
                    height="100%"
                    viewBox="0 0 300 300"
                    overflow="hidden"
                    preserveAspectRatio="none">
                    <filter id="arrow-glow-blur">
                        <feGaussianBlur stdDeviation="6"></feGaussianBlur>
                    </filter>
                    <g className="lines">
                        <path d="M37.5 0v300" className="st1" />
                        <path d="M74.5 0v300" className="st1" />
                        <path d="M111.5 0v300" className="st1" />
                        <path d="M148.5 0v300" className="st1" />
                        <path d="M185.5 0v300" className="st1" />
                        <path d="M222.5 0v300" className="st1" />
                        <path d="M259.5 0v300" className="st1" />
                        <path d="M0 36.5h300" className="st1" />
                        <path d="M0 73.5h300" className="st1" />
                        <path d="M0 110.5h300" className="st1" />
                        <path d="M0 147.5h300" className="st1" />
                        <path d="M0 184.5h300" className="st1" />
                        <path d="M0 221.5h300" className="st1" />
                        <path d="M0 258.5h300" className="st1" />
                    </g>
                    <path className={addImageMode ? 'arrows-second-task' : 'flip-arrows'}
                        ref={elem => flipArrows = elem}
                        d="M257.21 45.61s16.29 7.89 23.23 27.15c.06-16.26 7.45-37.67 7.45-37.67l-10.68 3.58-.06.02c-7.24-20.05-24.64-23.19-43.57-22.34 16.93-1.85 28.91 10.52 34.37 25.66l-10.74 3.6zM46.26 251.94s-17.61-4.21-28.52-21.53c3.43 15.9.81 38.39.81 38.39l9.67-5.79.05-.03c11.37 18.03 29.05 17.36 47.35 12.46-16.14 5.44-30.49-4.07-39.08-17.68l9.72-5.82z" />

                    <path filter="url(#arrow-glow-blur)"
                        id="arrow-glow"
                        ref={elem => arrowGlow = elem}
                        d="M257.21 45.61s16.29 7.89 23.23 27.15c.06-16.26 7.45-37.67 7.45-37.67l-10.68 3.58-.06.02c-7.24-20.05-24.64-23.19-43.57-22.34 16.93-1.85 28.91 10.52 34.37 25.66l-10.74 3.6zM46.26 251.94s-17.61-4.21-28.52-21.53c3.43 15.9.81 38.39.81 38.39l9.67-5.79.05-.03c11.37 18.03 29.05 17.36 47.35 12.46-16.14 5.44-30.49-4.07-39.08-17.68l9.72-5.82z" />

                    <linearGradient id="vert-grad" x1="0" x2="300" y1="150" y2="150" gradientUnits="userSpaceOnUse">
                        <stop offset="0" ref={elem => secondaryTrimRight = elem}  stopColor="#fbb03b" />
                        <stop offset=".1" stopColor="#fbb03b" stopOpacity="0" />
                        <stop offset=".9" stopColor="#fbb03b" stopOpacity="0" />
                        <stop offset="1" ref={elem => secondaryTrimLeft = elem}  stopColor="#fbb03b" />
                    </linearGradient>
                    <linearGradient id="horiz-grad" x1="150" x2="150" y1="300" y2="0" gradientUnits="userSpaceOnUse">
                        <stop offset="0" ref={elem => secondaryTrimBot = elem} stopColor="#fbb03b" />
                        <stop offset=".1"  stopColor="#fbb03b" stopOpacity="0" />
                        <stop offset=".9"  stopColor="#fbb03b" stopOpacity="0" />
                        <stop offset="1" ref={elem => secondaryTrimTop = elem} stopColor="#fbb03b" />
                    </linearGradient>
                    {addImageMode && <g className="secondary-gradient">
                        <rect rx="30" ry="30" x="8" y="8" fill="url(#vert-grad)" width="284" height="284" />
                        <rect rx="30" ry="30" x="8" y="8" fill="url(#horiz-grad)" width="284" height="284" />
                    </g>}

                </svg>
                <FlipImageBtn />

            </div>
            <div className="cycle-btn-container">
                <CycleModeBtn />
            </div>
        </StyledBlendControls>
    )
};

export default BlendControls; 
 */