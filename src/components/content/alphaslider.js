import React, { useState,  useContext } from 'react'
import styled from 'styled-components';
import ReactSlider from "react-slider";
import { BlenderAppContext } from '../../pages/page-a'
import OpacitySliderIcon from '../util-icons/opacityicon'

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
        margin: 25%;
    }
`;

const Thumb = (props, state) => {
    return (
        <StyledThumb  {...props}>
            <OpacitySliderIcon/>
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
        setTopAlphaVal,
        alphaToggle,
        setAlphaToggle
    } = useContext(BlenderAppContext);

    const [sliderOpenToggle, setSliderOpenToggle] = useState(false);


    const handleSliderClick = () => {
        console.log('handleSliderClick');
        setSliderOpenToggle(!sliderOpenToggle)
    }

    //necessary for feeding new values to parent container
    const handleChange = (val) => {
        setTopAlphaVal(val)
    }
    const handleBefore = (val) => {
        setAlphaToggle(true)
    }
    const handleAfter = (val) => {
        setAlphaToggle(false)
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
