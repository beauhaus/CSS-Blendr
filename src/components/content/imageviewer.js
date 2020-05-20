import React from 'react';
import styled from 'styled-components'
// import Image1 from '../../static/images/magritte.jpg'
import Image1 from '../../../static/images/magritte.jpg'
import Image2 from '../../../static/images/tritone.jpg'


const ImageViewerWrapper = styled.div`
        background: #f0ebe8;
        /* --base-btn-color: */
        width: 98%;
        grid-column: 1;
        grid-row: 1;
        ${'' /* border: 1px solid #fff; */}
        border-radius: 12px;
        background: var(--base-btn-color);
        box-shadow: inset 1px 1px 2px 0 #000,
        1px 1px 2px 0 #ddd;
        margin: 1vh auto;
        display: grid;
        overflow: hidden;
        position: relative;
        z-index: 1;
        img {
            position: absolute;
            top: 0;
            left: 0;
            z-index: -2;
            margin: auto;
            width: 100%;
            height: 100%;
            &.img2 {
                mix-blend-mode: difference;
            }
        }


`

const ImageViewer = () => (
    <ImageViewerWrapper className="img-viewer">

<img className="img1" src={Image1} alt="magritte"/>
<img className="img2" src={Image2} alt="tritone"/>
        
    </ImageViewerWrapper>)

export default ImageViewer;
