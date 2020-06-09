import React, { Component, useState, setState } from 'react'
import styled from 'styled-components';

const sliderStyles = (props) => {
    console.log("p>SS: ", props)
    return (`
    opacity: calc(${props.opacity}/100);
    background: linear-gradient(90deg, #fff 0%, #fff ${props.opacity}%,transparent ${props.opacity}%, transparent 100%);
`)
}

const StyledSlider = styled.div`
--alpha-slider-width: 52vh; 
--alpha-slider-height: 30vw; 
--alpha-slider-thumb-width: 5vw; 
--alpha-slider-thumb-height: 2vh;

${'' /* border: 1px dashed #fff; */}

width: var(--alpha-slider-width);
height: var(--alpha-slider-height);
${'' /* margin-top: 22vh auto 0 -24vh; */}
${'' /* padding: 2% 0; */}
position: absolute;
top: 18vh;

left: calc(-1* var(--alpha-slider-height));
z-index: 10;
display: flex;
justify-content: center;
align-items: center;
transform: rotate(270deg);
background: rgba(255, 255,255,1);
${props=> sliderStyles(props)}
h1 {
    position: absolute;
    top: 0;
    right: 0;
    transform: rotate(90deg);
    width: var(--alpha-slider-height);
    height: var(--alpha-slider-height);
    font-weight: 100;
    font-size: 2rem;
    color: #fff;
    z-index: -1;
}

input[type=range]{
    &::-webkit-slider-runnable-track {
        width: var(--alpha-slider-width);
        height: var(--alpha-slider-height);
        background: transparent;
        cursor: pointer;
    }
    &::-moz-range-track {
        width: var(--alpha-slider-width);
        height: var(--alpha-slider-height);
        background: transparent;
        cursor: pointer;
    }
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        margin-top: 0; 
        width: 10px;
        background: rgba(255, 255,255,0.1);
        height: var(--alpha-slider-height);
        border-radius: 0;
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

    const [value, setValue] = useState(50)

    const handleOnChange = (e) => {
        console.log("onChange: ", e.target.value);
        setValue(e.target.value)
        return value;
    }

    return (
        <StyledSlider opacity={value}>
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
