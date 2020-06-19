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
    }

@keyframes checkFadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
}
`

const ImageViewer = () => {
    const { mode,
        flipTriggerVal,
        galleryOpener,
        selTop,
        selBot,
        galleryOpenVal,
        topAlphaVal
    } = useContext(ModeContext);
    const [topImageAlpha, setTopImageAlpha] = useState('')


    let botImage = useRef(null)
    let topImage = useRef(null)
    // let iconCheckmark = useRef(null)

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
                        <svg xmlns="http://www.w3.org/2000/svg" className="img-viewer-icon" viewBox="0 0 300 300">
                            <path fill="#828282" d="M0 0h300v300H0z" />
                            <path fill="#fff" d="M160 160h120v120H160zM160 20h120v120H160zM20 20h120v120H20zM20 160h120v120H20z" />
                            {galleryOpenVal && <path className="iconCheckmark" fill="#66de98" strokeWidth="15" stroke="#00d800" d="M6.09 182.74c30.56 17.39 56.73 32.07 76.37 42.71 48.56-74.32 122.9-145.51 208.94-215.27C204.1 101.99 133.38 196.22 93.74 295c-26.86-46.63-56.35-82.96-87.65-112.26z" />}
                        </svg>
                    </button>
                {!galleryOpenVal && <AlphaSlider className="alpha-slider" />}
            </ImageViewerWrapper>


        </>)
}

export default ImageViewer;

