import React, { useEffect, useRef, useContext, useState } from 'react';
import { gsap, Back } from "gsap"; //  , Power4, Expo
import styled from 'styled-components'
import ModeNameDisplay from './modenamedisplay'
import { ModeContext } from '../../pages/page-a'

import VertGlitch from './vertglitch'
import PhotoGallery from './photogallery'
import AlphaSlider from './alphaslider';


const ImageViewerWrapper = styled.div`
        background: #f0ebe8;
        /* --base-btn-color: */
        width: 96%;
        height: 96%;
        grid-column: 1;
        grid-row: 1;
        border-radius: 12px;
        background: var(--base-btn-color);
        box-shadow: inset 1px 1px 2px 0 #000,
        1px 1px 2px 0 #fff,
        -1px -1px 2px 0 #000;

        margin: 1vh auto;
        display: grid;
        ${'' /* overflow: scroll; // ??? */}
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
            height: 50%;
        }
        .vert-glitch {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
        }
        
    .inner-shad {
        box-shadow: inset 0 0 20px 20px rgba(0,0,0,0.9);
        width: 100%;
        height: 100%;
        display: absolute;
        top:0;
        left: 0;
        background: red;
    }
    .iconCheckmark {
        animation: 1s checkFadeIn ease-in-out;
        transform: translateY(-20%);
    }

@keyframes checkFadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
}
.alphaval-display {
    position:absolute;
    top: 0;
    left: 0;
    padding: 30%;
    color: #ddd;
    font-weight: 100;
    font-size: 8rem;
    text-shadow: 1px 1px 1px #000;
    width: 100%;
    height: 100%;
}
`

const ImageViewer = () => {
    const { mode,
        flipTriggerVal,
        galleryOpener,
        selTop,
        selBot,
        galleryOpenVal,
        topAlphaVal,
        alphaToggle
    } = useContext(ModeContext);
    const [topImageAlpha, setTopImageAlpha] = useState('')


    let botImage = useRef(null)
    let topImage = useRef(null)
    let alphavalDisplay = useRef(null)
    // console.log("flipT: ", alphaToggle)


    useEffect(() => {
        const tl = gsap.timeline({ defaults: { delay: 0 } })
        tl
            .to(topImage, { duration: .3, x: -400 }, '-=0')
            .to(botImage, { duration: .3, x: 400 }, '-=.3')
            .to(botImage, { duration: .5, ease: Back.easeInOut.config(1.8), x: 0 }, '-=0')
            .to(topImage, { duration: .5, ease: Back.easeInOut.config(1.8), x: 0 }, '-=.5')
    }, [flipTriggerVal])

    useEffect(() => {
        setTopImageAlpha(topAlphaVal)
    }, [topAlphaVal])

    return (
        <>
            <ImageViewerWrapper className="img-viewer" >
                <svg className="image-container" viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none">
                    <g>
                        <image className="img-back" width="100%" height="100%" xlinkHref={selBot.url} preserveAspectRatio="none" ref={elem => botImage = elem} />
                        <image className="img-front" opacity={topImageAlpha / 100} width="100%" height="100%" xlinkHref={selTop.url} preserveAspectRatio="none" style={{ mixBlendMode: mode }} ref={elem => topImage = elem} />
                    </g>
                </svg>
                <ModeNameDisplay />
                <VertGlitch />
                {galleryOpenVal && <PhotoGallery />}
                <button className={'gallery-switch-btn open'} onClick={galleryOpener}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="img-viewer-icon" viewBox="0 0 300 300" overflow="visible">
                        <path fill="#828282" d="M275 300H25c-13.81 0-25-11.19-25-25V25C0 11.19 11.19 0 25 0h250c13.81 0 25 11.19 25 25v250c0 13.81-11.19 25-25 25z" />
                        <path fill="#fff" d="M256.15 270h-83.08c-7.65 0-13.85-6.2-13.85-13.85v-83.08c0-7.65 6.2-13.85 13.85-13.85h83.08c7.65 0 13.85 6.2 13.85 13.85v83.08c0 7.65-6.2 13.85-13.85 13.85zM256.15 140.77h-83.08c-7.65 0-13.85-6.2-13.85-13.85V43.85c0-7.65 6.2-13.85 13.85-13.85h83.08C263.8 30 270 36.2 270 43.85v83.08c0 7.64-6.2 13.84-13.85 13.84zM126.92 140.77H43.85c-7.65 0-13.85-6.2-13.85-13.85V43.85C30 36.2 36.2 30 43.85 30h83.08c7.65 0 13.85 6.2 13.85 13.85v83.08c-.01 7.64-6.21 13.84-13.86 13.84zM126.92 270H43.85C36.2 270 30 263.8 30 256.15v-83.08c0-7.65 6.2-13.85 13.85-13.85h83.08c7.65 0 13.85 6.2 13.85 13.85v83.08c-.01 7.65-6.21 13.85-13.86 13.85z" />
                        {/* <path className="iconCheckmark" fill="#66de98" strokeWidth="15" stroke="#00d800" d="M6.09 182.74c30.56 17.39 56.73 32.07 76.37 42.71 48.56-74.32 122.9-145.51 208.94-215.27C204.1 101.99 133.38 196.22 93.74 295c-26.86-46.63-56.35-82.96-87.65-112.26z" /> */}
                        {galleryOpenVal &&
                            <g className="iconCheckmark">
                                <path d="M12.69 229.97c37.97 21.61 70.49 39.85 94.91 53.07 60.33-92.36 152.71-180.82 259.63-267.51-108.49 114.09-196.37 231.19-245.62 353.94-33.38-57.95-70.03-103.09-108.92-139.5z" fill="#00010e" />
                                <path d="M.26 214.44c37.97 21.61 70.49 39.85 94.91 53.07C155.5 175.15 247.88 86.69 354.8 0 246.32 114.09 158.44 231.19 109.18 353.94 75.8 295.99 39.15 250.85.26 214.44z" fill="#62f000" />
                            </g>
                        }
                    </svg>
                </button>
                {!galleryOpenVal && <AlphaSlider className="alpha-slider" />}
                {!galleryOpenVal && <h1 className="alphaval-display">{alphaToggle && `${topAlphaVal}%`}</h1>}

            </ImageViewerWrapper>


        </>)
}

export default ImageViewer;

