import React, { useContext } from 'react';
import styled from 'styled-components';

import {AppContext} from '../../../pages/page-b'
// import Glitch from '../../content/vertglitch'
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
        width: 100%;
        height: 100%;
        animation: glitchAnim 200ms steps(10) forwards;

 }
 @keyframes glitchAnim {
	${'' /* from { transform: translate(0%, 0%) }
	to { transform: translate(-100%, 0%)}   */}
        0% { opacity:0; }
        50% { opacity:1; }
        100% { opacity:0; }
    }
`

const ImagePairs = () => {
    const {addImageMode } = useContext(AppContext);
    return (!addImageMode? <StyledImagePairs className="image-pairs">
        <img className="img1" src={Eye} alt="testtesttesttest"/>
        <img className="img2" src={Rouge} alt="test2test2test2test2"/>
        <img className="glitch-img" src={Woman} alt="test3test3test3test3"/>
        
    </StyledImagePairs>:'')
};

export default ImagePairs; 