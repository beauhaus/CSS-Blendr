import React from 'react';
import styled from 'styled-components'
// import Image1 from '../../static/images/magritte.jpg'
import Image1 from '../../../static/images/magritte.jpg'
import Image2 from '../../../static/images/tritone.jpg'
import VertRollGlitch from './vertrollglitch'

const ImageViewerWrapper = styled.div`
        background: #f0ebe8;
        /* --base-btn-color: */
        width: 96%;
        grid-column: 1;
        grid-row: 1;
        ${'' /* border: 1px solid #fff; */}
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
            ${'' /* display: none; */}
            position: absolute;
            top: 0;
            left: 0;
            z-index: -2;
            ${'' /* margin: auto; */}
            width: 100%;
            height: auto;
            ${'' /* height: 100%; */}
            ${'' /* border: 2px dashed fuchsia; */}
            
        }
        .vert-roll-glitch {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: none;
        }


`

const ImageViewer = ({ mode, flipToggle }) => {
    console.log("IMG VIEW: ", mode)

    return (
        <ImageViewerWrapper className="img-viewer">
            <svg className="image-container" viewBox="0 0 400 400" width="100%" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none">
                {flipToggle ?
                    <g>
                        <image className="img-back" xlinkHref={Image2} />
                        <image className="img-front" xlinkHref={Image1} style={{ mixBlendMode: mode }} />
                        
                    </g>
                    : <g>
                        <image className="img-back" xlinkHref={Image1} />
                        <image className="img-front" xlinkHref={Image2} style={{ mixBlendMode: mode }} />
                    </g>}
            </svg>
            <VertRollGlitch mode={mode} />

        </ImageViewerWrapper>)
}

export default ImageViewer;
