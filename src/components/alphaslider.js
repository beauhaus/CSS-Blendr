import React, {useState } from 'react'
import styled from 'styled-components';

const sliderStyles = (props) => {
    console.log("p>SS: ", props)
    return (`
    opacity: calc(${props.opacity}/100);
    background: linear-gradient(90deg, #fff 0%, #fff ${props.opacity}%,transparent ${props.opacity}%, transparent 100%);
`)
}

const StyledSlider = styled.div`
/* width & height are reversed given rotation */
--alpha-slider-width: 50vh;
--alpha-slider-height: 35vw; 
--alpha-slider-thumb-width: 5vw; 
--alpha-slider-thumb-height: 2vh;

margin: auto;
transform: rotate(270deg);
-moz-transform: rotate(270deg);
width: 50vh;
height: 35vw;
${'' /* border-top: 1px solid lightgreen; */}
position: absolute;
top: 32%;
left: -10%;

${'' /* top: 18vh; */}

${'' /* left: calc(-1* var(--alpha-slider-height)); */}
${'' /* bottom: 1vw; */}
z-index: 11;

${'' /* transform-origin: center left; */}
${'' /* transform: rotate(270deg); */}
background: rgba(255, 255,255,1);
display: grid;
h1 {
    position: absolute;
    top: 100%;
    right: 0;
    border: 1px dashed yellow;
    transform: rotate(90deg);
    ${'' /* width: var(--alpha-slider-height);
    height: var(--alpha-slider-height); */}
    font-weight: 100;
    font-size: 2rem;
    color: #fff;
    ${'' /* z-index: -1; */}
}

input[type=range]{
    ${props=> sliderStyles(props)}

    ${'' /* transform-origin: center top; */}
    -webkit-tap-highlight-color: transparent;
  
    &::-webkit-slider-runnable-track {
        width: var(--alpha-slider-width);
        height: var(--alpha-slider-height);
        background: fuchsia;
        cursor: pointer;
    }
    &::-moz-range-track {
        width: var(--alpha-slider-width);
        height: var(--alpha-slider-height);
        background: fuchsia;
        cursor: pointer;
        margin: auto;
    }
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        margin-top: 0; 
        width: 10px;
        background: rgba(255, 255,255,0.1);
        height: var(--alpha-slider-height);
        border-radius: 0;
        border-width: 0; // ok on phones?
        cursor: pointer;
    }
    &::-moz-range-thumb {
        -webkit-appearance: none;
        width: 10px;
        margin: 0;
        background: rgba(255, 255,255,0.1);
        height: var(--alpha-slider-height);
        border-radius: 0;
        border: none;
        cursor: pointer;
    }
}

`

const AlphaSlider = () => {

    const [value, setValue] = useState(50);

    const handleOnChange = (e) => {
        console.log("onChange: ", e.target.value);
        setValue(e.target.value)
        return value;
    }

    return (
        <StyledSlider className="alpha-slider" opacity={value}>
            <input
                type="range"
                min={0}
                max={100}
                value={value}
                onChange={handleOnChange}
            />
            <h1>{value}%</h1>
        </StyledSlider>
    )
}

export default AlphaSlider;
