import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import Glitch from './glitchcomp'

import { AppContext } from '../../../pages/page-b'
import Eye from '../../../../images/gallery-images/eye.jpg'
import Rouge from '../../../../images/gallery-images/rouge.jpg'
import Woman from '../../../../images/gallery-images/woman.jpg'
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
    const { addImageMode, modeNum } = useContext(AppContext);
    return (!addImageMode ? <StyledImagePairs className="image-pairs">
        <img className="img1" src={Eye} alt="testtesttesttest" />
        <img className="img2" src={Rouge} alt="test2test2test2test2" />
        <Glitch/>
    </StyledImagePairs> : '')
};

export default ImagePairs; 