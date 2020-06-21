import React, { useState, useRef, useEffect, useContext } from 'react'
import styled from 'styled-components';
import ReactSlider from "react-slider";
import { gsap, Back } from "gsap"; //  , Power4, Expo
import { ModeContext } from '../../pages/page-a'

// const trackStyles = (props) => (`background: rgba(255,255,255,${props.containerVal / 100});`)
const trackStyles = (props) => {
    // console.log("props trackstyles", props)
    return (`
        background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,${props.containerVal / 100}) 100%);
        `
    )
}

const SliderContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    margin: 0;
    width: 7vh;
    z-index: 20;
`

const StyledSlider = styled(ReactSlider)`
    height: 100%;
    width: 100%;
`;

const StyledThumb = styled.div`
    width: 14vh;
    transform: translateX(-50%);
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 7vh;
    color: #fff;
    position: relative;
    cursor: grab;
    ${'' /* border: 1px solid #fff; */}
    outline: none;
    border-radius: 7px;
    ${'' /* display: flex;
    align-items: center;
    justify-content: center; */}
      &:active {
        border-width: 0;
    }
    svg {
        grid-column: 2;
        ${'' /* border: 1px solid red; */}
        margin: 25%;
    }
`;

const Thumb = (props, state) => {
    return (
        <StyledThumb  {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" className="img-viewer-icon" viewBox="0 0 300 300">
                <path fill="#828282" d="M200 225H25c-13.81 0-25-11.19-25-25V25C0 11.19 11.19 0 25 0h175c13.81 0 25 11.19 25 25v175c0 13.81-11.19 25-25 25z" />
                <path d="M275 300H100c-13.81 0-25-11.19-25-25V100c0-13.81 11.19-25 25-25h175c13.81 0 25 11.19 25 25v175c0 13.81-11.19 25-25 25z" fill="#fff" />
                <path d="M75 100h150V75H100c-13.81 0-25 11.19-25 25z" fill="#fff" />
                <path d="M75 100h150v25H75z" fill="4f4f4f" />
                <path d="M75 125h150v25H75z" fill="#fff" />
                <path d="M75 150h150v25H75z" fill="4f4f4f" />
                <path d="M75 175h150v25H75z" fill="#fff" />
                <path d="M75 225h125c13.81 0 25-11.19 25-25H75v25z" fill="4f4f4f" />
            </svg>
        </StyledThumb>
    )
};




const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    left: 4vw;
    width: 4vw;
    transform: translateY(7vh);
     
  
    
    &.testB-0 {
        top: 20vh;
    }
    &.testA-0 {
        ${props => trackStyles(props)}
        animation: fadeIn 300ms ease-in forwards;

    }    
    &.testB-0 {
        ${props => trackStyles(props)}
        animation: fadeOut 1s ease-in forwards;

    }
`;

const Track = (props, state) => {
    return (
        <StyledTrack
            {...props}
            index={state.index}
            containerVal={state.value}
        />
    )
};

const AlphaSlider = () => {
    const { topAlphaVal,
        setTopAlphaVal
    } = useContext(ModeContext);

    const [sliderOpenToggle, setSliderOpenToggle] = useState(false);
    // const [sliderCloseToggle, setSliderCloseToggle] = useState(false); //after value
    // const [sliderBeforeToggle, setSliderBeforeToggle] = useState(false); //before value

    const [alphaToggle, setAlphaToggle] = useState(false);

    const handleSliderClick = () => {
        console.log('handleSliderClick');

        setSliderOpenToggle(!sliderOpenToggle)
    }

    //necessary for feeding new values to parent container
    const handleChange = (val) => {
        console.log('handleChange');

        setTopAlphaVal(val)
    }
    const handleBefore = (val) => {
        console.log('handleBefore');
        // setOpacityVal(!opacityVal)
        setAlphaToggle(true)

        // setSliderBeforeToggle(!sliderBeforeToggle)
    }
    const handleAfter = (val) => {
        console.log("after")
        setAlphaToggle(false)
        // setSliderCloseToggle(!sliderCloseToggle)
    }

    return (
        <SliderContainer className="slider-container"
            onTouchStart={handleBefore}
            onClick={handleSliderClick}
        >
            <StyledSlider
                defaultValue={[topAlphaVal]}
                trackClassName={alphaToggle ? "testA" : "testB"}
                renderTrack={Track}
                renderThumb={Thumb}
                onBeforeChange={(val) => handleBefore(val)}
                onChange={handleChange}
                onAfterChange={(val) => handleAfter(val)}
                orientation="vertical"
                invert
                topAlphaVal={topAlphaVal}
            />
        </SliderContainer>
    )
}
// renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}

export default AlphaSlider;
