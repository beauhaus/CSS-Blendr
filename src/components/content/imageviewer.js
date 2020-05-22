import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap"; //  , Power4, Expo
import styled from 'styled-components'

import Image1 from '../../../static/images/magritte.jpg'
import Image2 from '../../../static/images/tritone.jpg'
import VertGlitch from './vertglitch'

const ImageViewerWrapper = styled.div`
        background: #f0ebe8;
        /* --base-btn-color: */
        width: 96%;
        grid-column: 1;
        grid-row: 1;
        border-radius: 12px;
        background: var(--base-btn-color);
        box-shadow: inset 1px 1px 2px 0 #000,
        1px 1px 2px 0 #fff,
        -1px -1px 2px 0 #000;

        margin: 1vh auto;
        display: grid;
        overflow: hidden;
        position: relative;
        padding: 0;
        z-index: 1;

        &:after {
            content: '';
            border-radius: 12px;
            position: absolute;
            box-shadow: inset 1px 1px 3px 0 #000,
            inset -1px -1px 3px 0 #000;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        svg .image-container { 
            position: absolute;
            top: 0;
            left: 0;
            z-index: -2;
            ${'' /* margin: auto; */}
            width: 100%;
            height: auto;
        }
        .vert-glitch {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
        }
        .img-front {
            ${'' /* opacity: 0; */}
        }
`

const ImageViewer = ({ mode, flipToggle }) => {

    let tailGlitch = useRef(null)
    let headGlitch = useRef(null)
    let backImage = useRef(null)
    let frontImage = useRef(null)

    useEffect(() => {

        gsap.set(tailGlitch, { attr: { 'offset': '-10%' } })
        gsap.set(headGlitch, { attr: { 'offset': '-5%' } })
        gsap.set(backImage, { opacity: 0 })
        gsap.set(frontImage, { opacity: 0 })
    
        const tl = gsap.timeline({ defaults: { delay: .5 } })
        tl
        .to(backImage, { duration: .1, opacity:1 }, '-=0')
        .to(frontImage, { duration: .1, opacity:1 }, '-=0')
        .to(headGlitch, { duration: .5, attr: { 'offset': '105%' } }, '-=.5')
        .to(tailGlitch, { duration: .5, attr: { 'offset': '100%' } }, '-=1')
        
      }, [flipToggle])

    return (
        <ImageViewerWrapper className="img-viewer">
            <svg className="image-container" viewBox="0 0 400 400" width="100%" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none">
                <linearGradient id="horizGrad">
          <stop offset="0%" stopColor="#fff" id="leftstop" />
          <stop offset="0%" stopColor="#fff" stopOpacity="1" ref={elem => tailGlitch = elem} />
          <stop offset="5%" stopColor="#000" stopOpacity="1" ref={elem => headGlitch = elem} />
          <stop offset="100%" stopColor="#000" id="rightstop" />
        </linearGradient>
                <mask id="horiz-roll-mask">
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#horizGrad)" />
                </mask>
                <g>
                    <image className="img-back" xlinkHref={flipToggle ? Image2 : Image1} ref={elem => backImage = elem} />
                    <image className="img-front" xlinkHref={flipToggle ? Image1 : Image2} 
                    style={{ mixBlendMode: mode }} 
                    mask="url(#horiz-roll-mask)"
                    ref={elem => frontImage = elem} 
                     />
                     
                </g>
                     {/* <rect className="cover-rect" fill="#bcbcbc" width="100%" height="100%" ref={elem => topImage = elem}/> */}
            </svg>
            <VertGlitch mode={mode} />

        </ImageViewerWrapper>)
}

export default ImageViewer;

