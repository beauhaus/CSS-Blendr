import React, { useContext } from 'react';
import styled from 'styled-components';
import {AppContext} from '../../../pages/page-b'

const StyledImagePairs = styled.div`
    position: absolute;
    border-radius: 11px;    
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background: linear-gradient(135deg, steelblue 0%, PeachPuff 25%, PeachPuff 50%, LightSalmon 75%, steelblue 100%);
`

const ImagePairs = () => {
    const {addImageMode } = useContext(AppContext);
    return (!addImageMode? <StyledImagePairs className="image-pairs"></StyledImagePairs>:'')
};

export default ImagePairs; 