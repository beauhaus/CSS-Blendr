import React, { useEffect, useRef, useContext } from "react";
import styled from 'styled-components'
import { gsap, Power4 } from "gsap";
import { AppContext } from '../../../../pages/page-b'

const StyledImageUploadIcon = styled.svg`
    width: 100%;
    height: 100%;
    .inner-shadow {
        opacity: .2;
    }
    .plus {
       stroke-width: 2;
       stroke: var(--idle-lt-grey-2); 
       fill: var(--idle-lt-grey-2);
    }
    .cloud {
        stroke-width: 0;
        fill: var(--active-lt-grey-1);
        stroke: var(--active-lt-grey-1);           
    }
`

const ImageUploadIcon = () => {
    const {
        addImageMode,
        usrImgMode
    } = useContext(AppContext);

    let plusRef = useRef(null);
    let mtnRef = useRef(null);
    let cloudRef = useRef(null);

    useEffect(() => {
       const tl = gsap.timeline({delay: 1});
       if (!usrImgMode) {
            tl
                .to(cloudRef, 0, { y: 0, fillOpacity: 0, ease: "Elastic.easeInOut(1.2, .5)" }, '-=0')
                .to(cloudRef, .5, { y: -350, ease: "Elastic.easeInOut(1.2, .5)" }, '-=0')
                .to(plusRef, .4, { opacity: 1 }, '-=.4')
                .to(plusRef, .4, { attr: { points: "280,40 320,40 320,80 360,80 360,120 320,120 320,160 280,160 280,120 240,120 240,80 280,80" }, ease: Power4.easeInOut }, '-=.4')
                .to(mtnRef, .4, { x: 0, y: 0, scaleX: 1, ease: Power4.easeInOut }, '-=.4')
        } else if (usrImgMode) {
            tl
                .to(mtnRef, .7, { x: -600, y: 400, scaleX: 2, ease: Power4.easeInOut }, '-=0')
                .to(plusRef, .4, { attr: { points: "200,160 200,160 240,200 280,240 280,240 240,240 240,320 160,320 160,240 120,240 120,240 160,200" }, ease: Power4.easeInOut }, '-=.5')
                .to(cloudRef, .4, { y: 0, ease: "Elastic.easeInOut(1.2, .5)" }, '-=.3')
                .to(plusRef, .3, { opacity: 0 }, '-=.1')
                .to(cloudRef, .2, { fillOpacity: 1 }, '-=.2')
        }

    }, [usrImgMode]);

    // only executes on initial load (i.e. sets default positions)
    useEffect(() => {
        const tl = gsap.timeline();
        gsap.set(mtnRef, { y: 0, x: 0, scaleX: 1 })
        gsap.set(plusRef, { attr: { points: "280,40 320,40 320,80 360,80 360,120 320,120 320,160 280,160 280,120 240,120 240,80 280,80" } })
        gsap.set(mtnRef, { y: 0, x: 0, scaleX: 1 })
        gsap.set(cloudRef, { y: -350, fillOpacity: 0 })
    }, [])

    return (
        <StyledImageUploadIcon 
        className={usrImgMode ? 'active-btn': 'idle-btn'}
        viewBox="0 0 400 400"
        width="100%"
        height="100%"
        preserveAspectRatio="none">
            <filter id="upload-shadow">
                <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" />
            </filter>
            <rect fill="#000" width="100%" opacity="0.2" />
            <linearGradient id="SVGID_1_" x1="0" x2="400" y1="200" y2="200" gradientTransform="rotate(-90 200 200)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopOpacity=".5" />
                <stop offset=".1" stopOpacity="0" />
                <stop offset=".9" stopOpacity="0" />
                <stop offset="1" stopOpacity=".5" />
            </linearGradient>
            <rect width="100%" className="inner-shadow" fill="url(#SVGID_1_)" />
            <linearGradient id="SVGID_2_" x1="0" x2="400" y1="200" y2="200" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopOpacity=".5" />
                <stop offset=".1" stopOpacity="0" />
                <stop offset=".9" stopOpacity="0" />
                <stop offset="1" stopOpacity=".5" />
            </linearGradient>
            <rect className="inner-shadow" fill="url(#SVGID_2_)" width="100%" />
            <polygon
                filter="url(#upload-shadow)"
                className="plus"
                ref={elem => (plusRef = elem)}
                fillOpacity="1"
            />
            <path
                filter="url(#upload-shadow)"
                className="cloud"
                d="M395 251.57c0 37.89-29.94 68.43-66.88 68.43H240v-80h40l-80-80-80 80h40v80s-77.22.26-79.78 0C38.04 315.97 5 279.35 5 235.02c0-42.98 31.03-78.52 71.34-84.34 14.84-56.43 65.1-97.96 124.81-97.96 70.64 0 128.08 58.15 129.24 130.33 35.89 1.18 64.61 31.42 64.61 68.52z"
                ref={elem => (cloudRef = elem)} />
            <path
                className="mtn"
                fill="none"
                stroke="var(--idle-lt-grey-2)"
                strokeWidth="8"
                d="M1.91 207.55L101.1 90.52l138.49 179.66 80.47-72.99 82.35 112.29"
                ref={elem => (mtnRef = elem)}
            />
        </StyledImageUploadIcon>
    )
}
export default ImageUploadIcon;
