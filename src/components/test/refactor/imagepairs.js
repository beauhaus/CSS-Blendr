import React, { useContext, useEffect, useRef } from 'react';
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
    background: linear-gradient(135deg, steelblue 0%, PeachPuff 25%, PeachPuff 50%, LightSalmon 75%, steelblue 100%);
    overflow: hidden;
    .img1, .img2 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
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
    const { addImageMode, topAlphaVal, alphaModifyMode,selBot,selTop, mixMode} = useContext(AppContext);

    let botImage = useRef(null)
    let topImage = useRef(null)

    return (
        <StyledImagePairs>
        
        {(selBot && selTop) && <svg className="image-container" viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none">
        <g>
            <image className="img-back" width="100%" height="100%" xlinkHref={selBot.url} preserveAspectRatio="none" ref={elem => botImage = elem} />
            <image className="img-front" opacity={topAlphaVal / 100} width="100%" height="100%" xlinkHref={selTop.url} preserveAspectRatio="none" style={{ mixBlendMode: mixMode }} ref={elem => topImage = elem} />
        </g>
                </svg>}
                 <Glitch />
        </StyledImagePairs>
    )
};

export default ImagePairs;
