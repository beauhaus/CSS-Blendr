import React, { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap"; //  , Power4, Expo
import styled from 'styled-components'
import ModeNameDisplay from './modenamedisplay'

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
    const [flipTrigger, setFlipTrigger] = useState(true);


    let botImage = useRef(null)
    let topImage = useRef(null)

    const flipImages = () => {
        setFlipTrigger(!flipTrigger)
    }
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { delay: 0 } })
        tl
            .to(topImage, { duration: .5, x: -450 }, '-=0')
            .to(botImage, { duration: .5, x: 450 }, '-=.5')
            .call(flipImages)
            .to(botImage, { duration: .5, x: 0 }, '-=0')
            .to(topImage, { duration: .5, x: 0 }, '-=.5')
    }, [flipToggle])

    return (
        <ImageViewerWrapper className="img-viewer">
            <svg className="image-container" viewBox="0 0 400 400" width="100%" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none">
                <g>
                    <image className="img-back" xlinkHref={flipTrigger ? Image2 : Image1}
                        ref={elem => botImage = elem} />
                    <image className="img-front" xlinkHref={flipTrigger ? Image1 : Image2}
                        style={{ mixBlendMode: mode }}
                        ref={elem => topImage = elem}
                    />
                </g>
            </svg>
            <ModeNameDisplay mode={mode}/>
            <VertGlitch mode={mode} />

        </ImageViewerWrapper>)
}

export default ImageViewer;

