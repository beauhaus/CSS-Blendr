import React, { useState, useEffect, useRef, useContext } from 'react';
import { gsap, Back } from "gsap"; //  , Power4, Expo
import styled from 'styled-components'
import ModeNameDisplay from './modenamedisplay'
import {ModeContext} from '../../pages/page-a'

import VertGlitch from './vertglitch'
import PhotoGallery from './photogallery'

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
        
    .inner-shad {
        box-shadow: inset 0 0 20px 20px rgba(0,0,0,0.9);
        width: 100%;
        height: 100%;
        display: absolute;
        top:0;
        left: 0;
        background: red;
    }
   
`

const ImageViewer = () => {
    const {mode,
           image1,
           image2,
           flipToggleVal,
           galleryOpener,
           selectedTop,
           selectedBot,
           galleryOpenVal
        } = useContext(ModeContext);

    const [flipTrigger, setFlipTrigger] = useState(true);
    let botImage = useRef(null)
    let topImage = useRef(null)
    useEffect(() => {
        const flipImages = () => {
            setFlipTrigger(!flipTrigger)
        }
        const tl = gsap.timeline({ defaults: { delay: 0 } })
        tl
            .to(topImage, { duration: .3, x: -400 }, '-=0')
            .to(botImage, { duration: .3, x: 400 }, '-=.3')
            .call(flipImages)
            .to(botImage, { duration: .5, ease: Back.easeInOut.config(1.8), x: 0 }, '-=0')
            .to(topImage, { duration: .5, ease: Back.easeInOut.config(1.8), x: 0 }, '-=.5')
    }, [flipToggleVal])

    return (
        <>
        <ImageViewerWrapper className="img-viewer" >
            <svg className="image-container" viewBox="0 0 400 400" width="100%" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none">
                <g>
                    <image className="img-back" xlinkHref={''}
                        ref={elem => botImage = elem} />
                    <image className="img-front" xlinkHref={''}
                        style={{ mixBlendMode: mode }}
                        ref={elem => topImage = elem}
                    />
                </g>
            </svg>
            <ModeNameDisplay  />
            <VertGlitch />
            {galleryOpenVal && 
                <PhotoGallery  />
            }
        </ImageViewerWrapper>

        <button className="gallery-switch-btn" onClick={galleryOpener}><p>&#43;</p></button>

</>)
}

export default ImageViewer;

