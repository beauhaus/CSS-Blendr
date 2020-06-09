import React, { Component, useState, setState } from 'react'
import styled from 'styled-components';



// var(--alpha-slider-width)
// var(--alpha-slider-height)
// var(--alpha-slider-thumb-width)
// var(--alpha-slider-thumb-height)


const StyledSlider = styled.div`
--alpha-slider-width: 8vw; 
--alpha-slider-height: 10vw; 
--alpha-slider-thumb-width: 5vw; 
--alpha-slider-thumb-height: 2vh;

${'' /* border: 1px dashed purple; */}
width: 80vw;
height: 60px;
margin: 20vh auto;
padding: 2% 0;
position: relative;
display: flex;
justify-content: center;
align-items: center;
transform: rotate(270deg);
background: rgba(255, 255,255,0.1);
h1 {
    position: absolute;
    top: 0;
    right: 0;
    transform: rotate(90deg);
    width: 60px;
    height: 60px;
    border: 1px solid #fff;
    font-weight: 100;
    font-size: 2rem;
    color: #fff;
    margin: auto;
    z-index: -1;
}


    input[type=range]::-moz-range-track {
        width: 100%;
        height: 10px;
        cursor: pointer;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        background: pink;
        border-radius: 1.3px;
        border: 0.2px solid #010101;
    }
    input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: 10px;
        cursor: pointer;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        background: orange;
        border-radius: 1.3px;
        border: 0.2px solid #010101;
    }
    input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        border: 1px solid #000000;
        height: 40px;
        width: 20px;
        border-radius: 3px;
        background: yellow;
        cursor: pointer;
        margin-top: -14px; 
         // You need to specify a margin in Chrome, but in Firefox and IE it is automatic 
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; 
    }

    input[type=range]::-moz-range-thumb {
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        border: 1px solid #000000;
        height: 40px;
        width: 20px;
        border-radius: 3px;
        background: orangered;
        cursor: pointer;
    }
    ${'' /* input[type=range]::-webkit-slider-runnable-track {
        width: var(--slider-width);
        height: var(--slider-height);
        cursor: pointer;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        background: orange;
        border-radius: 1.3px;
        border: 0.2px solid #010101;
    }
    &::-moz-range-track {
        width: 200px;
        height: 40px;
        cursor: pointer;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        background: pink;
        border-radius: 1.3px;
        border: 0.2px solid #010101;
    } */}
`

const AlphaSlider = () => {

    const [value, setValue] = useState(50)

    const handleOnChange = (e) => {
        console.log("onChange: ", e.target.value);
        setValue(e.target.value)
    }

    return (
        <StyledSlider>
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
