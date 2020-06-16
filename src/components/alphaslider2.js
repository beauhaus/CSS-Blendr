import React, { useState } from 'react'
import styled from 'styled-components';
import ReactSlider from "react-slider";
import { gsap, Back } from "gsap"; //  , Power4, Expo

const sliderContainerStyles = (props) => {
    console.log("p>SS: ", props)
    return (`
    background: linear-gradient(0deg, rgba(255, 255, 255, ${props.containerVal/100}), #fff ${props.containerVal}%,transparent ${props.containerVal}%, transparent 100%);
`)
}

const SliderContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0.5vw;
    height: 98%;
    margin: 1% 0;
    width: 20vw;
    ${props=> sliderContainerStyles(props)}
`

const StyledSlider2 = styled(ReactSlider)`
    width: 100%;
    height: 25px;
    height: 100%;
    width: 20vw;
    ${'' /* background: pink; */}
`;

const StyledThumb = styled.div`
    ${'' /* line-height: 25px; */}
    width: 100%;
    height: 5px;
    text-align: left;
    color: #fff;
    text-shadow: 1px 1px 0 #777;
    position: relative;
    background: transparent;
    cursor: grab;
        outline: none;
    .offset-insert {
        position: absolute;
        top: -1vh;
        left: 100%;
        font-weight: 100;
        letter-spacing: 0.1rem;
        background: transparent;
        width: 100%;
        height: 3vh;
        border: 1px solid #fff;
        border-left-width:2px;
        border-width: 0;
        padding-left: 5px;
        margin-left: 2px;
    }
    &:active {
        border-width: 0;
    }
`;


/************************************ */

const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
`;

const Thumb = (props, state) => (
    <StyledThumb
        {...props}><span
        className="offset-insert">{state.valueNow}%</span>
    </StyledThumb>
);

const Track = (props, state) => (
    <StyledTrack
        {...props}
        index={state.index}
        onChange={() => console.log('p> track onChange value:', props)}
    />
);

const AlphaSlider2 = () => {

    const [value, setValue] = useState(50);

    const handleChange = (val) => {
        console.log("onChange: ", val);
        setValue(val)
        // return value;
    }
    const handleBefore = (val) => {
        console.log("before: ", val);
        // setValue(e.target.value)
        // return value;
    }
    const handleAfter = (val) => {
        console.log("after", val)
        // console.log("onChange: ", val);
        // setValue(e.target.value)
        // return value;
    }

    return (
        <SliderContainer className="alpha-slider" 
        containerVal={value}
        >
            <StyledSlider2
                defaultValue={[50]}
                renderTrack={Track}
                renderThumb={Thumb}
                onBeforeChange={(val)=>handleBefore(val)}
                onChange={handleChange}
                onAfterChange={(val)=>handleAfter(val)}
                orientation="vertical"
                invert
            />
        </SliderContainer>
    )
}

export default AlphaSlider2;
