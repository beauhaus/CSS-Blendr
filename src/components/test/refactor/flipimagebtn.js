import React, { useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ImagePairsFlip from './imagepairsflip'
import { gsap, Back } from "gsap"; //  , Power4, Expo

import { AppContext } from '../../../pages/page-b'

const StyledFlipImageBtn = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    border-radius: 20px; /* 12px*/
    ${'' /* width: 48vw;  */}
    ${'' /* height: 100%; */}
    ${'' /* position: relative; */}
    background: transparent;
    box-shadow: inset 2px 2px 3px 0 #fff,
            inset -2px -2px 3px 0 #000,
            0 0 3px 2px #666,
            1px 1px 2px #000;
    perspective: 200px;
    overflow: hidden;
    display: grid;
    ${'' /* &.flip-img-btn-second-task {
        box-shadow: inset 2px 2px 3px 0 #fff,
            inset -2px -2px 3px 0 #000,
            0 0 3px 3px var(--secondary-peach),
            1px 1px 2px #000;    
    } */}
        &:before {
        content: "";
        box-shadow: -2px -2px 3px 0 #000,
                    2px 2px 2px 0 #fff;
        border-radius: 15px;
        width: 95%;
        height: 93%;
        opacity: .9;
        margin: auto;
        ${'' /* background: linear-gradient(90deg, #2C3021 0%, #545D49 50%, #5F6B57 100%); */}
        background: transparent;
    }   
        
      
    
`
const FlipImageBtn = () => {
    const {
        flipTriggerVal,
        setFlipTriggerVal,
        addImageMode,
        currentTop
    } = useContext(AppContext);


    // let flipArrows = useRef(null);
    // let arrowGlow = useRef(null);
    // let secondaryTrim = useRef(null);

    // useEffect(() => {
    //     gsap.set(flipArrows, { opacity: 1, fillOpacity: 1 })
    //     gsap.set(arrowGlow, { opacity: 1, fillOpacity: 1 })
    //     const tl = gsap.timeline()
    //     tl
    //         .to(flipArrows, { duration: 1, opacity: 1, fillOpacity: .3 }, '-=0')
    //         .to(arrowGlow, { duration: .8, opacity: 0, fillOpacity: 0 }, '-=.8')
    // }, [flipTriggerVal, currentTop])
    // useEffect(() => {
    //     if (addImageMode) {
    //         const tl = gsap.timeline()
    //         tl
    //             .to(secondaryTrim, { duration: .5, opacity: 1 })
    //     }
    //     console.log("secondary Trim", addImageMode)
    // }, [addImageMode])

    const flipTriggerHandler = () => {
        setFlipTriggerVal(!flipTriggerVal)
    }

    return (
        <StyledFlipImageBtn
            className="flip-img-btn"
            className={addImageMode ? 'flip-img-btn-second-task' : 'flip-img-btn'}
            aria-label="image-flipper"
            onClick={flipTriggerHandler}
            // ref={elem => secondaryTrim = elem}
        >
            {(currentTop) && <ImagePairsFlip className="img-pairs-flip" />}
        </StyledFlipImageBtn>
    )
};

export default FlipImageBtn;

