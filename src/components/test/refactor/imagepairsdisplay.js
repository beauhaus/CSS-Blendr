import React, { useContext, useEffect, useRef } from 'react';
import { gsap, Back } from "gsap"; //  , Power4, Expo
import styled from 'styled-components';
import Glitch from './glitchcomp'
import { AppContext } from '../../../pages/page-b'

const StyledImagePairs = styled.div`
    position: absolute;
    border-radius: 11px;    
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background: transparent;
    overflow: hidden;
    .img-back, .img-front {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 11px;  
        ${'' /* display: none;   */}
        overflow: hidden;
    }
    .glitch-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 2700px;
        height: 100%;
        
        animation: glitchAnim 500ms steps(10) forwards;
        mix-blend-mode: color-burn; //exclusion
 }
 @keyframes glitchAnim {
        0% {
             opacity:1;
             transform: translate(0%, 0%);
             }
        50% {
             opacity:1; 
             }
        100% {
             opacity:0;
             transform: translate(-100%, 0%);
             }
    }
`
const ImagePairs = () => {
    const { topAlphaVal, flipTriggerVal, alphaModifyMode,currentBot, currentTop, mixMode } = useContext(AppContext);

    let botImage = useRef(null)
    let topImage = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { delay: 0 } })
        tl.to(topImage, { duration: .3, x: -800 }, '-=0')
        tl.to(botImage, { duration: .3, x: 800 }, '-=.3')
            .to(botImage, { duration: .5, ease: Back.easeInOut.config(1.8), x: 0 }, '-=0')
            .to(topImage, { duration: .5, ease: Back.easeInOut.config(1.8), x: 0 }, '-=.5')
    }, [flipTriggerVal])

    return (
        <StyledImagePairs className="styled-img-pairs">
        <svg className="image-container" viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none">
                <g>
                    <image
                        className="img-back"
                        width="100%"
                        height="100%"
                        xlinkHref={currentBot.url}
                        preserveAspectRatio="none"
                        ref={elem => botImage = elem}
                    />
                    <image
                        className="img-front"
                        opacity={topAlphaVal / 100}
                        width="100%"
                        height="100%"
                        xlinkHref={currentTop.url}
                        preserveAspectRatio="none"
                        style={{ mixBlendMode: mixMode }}
                        ref={elem => topImage = elem}
                    />
                </g>
            </svg>
            <Glitch />
        </StyledImagePairs>
    )
};

export default ImagePairs;
