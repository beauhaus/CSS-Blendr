import React, { useState } from 'react'
import styled from 'styled-components';
import ReactSlider from "react-slider";
const sliderStyles = (props) => {
    console.log("p>SS: ", props)
    return (`
    opacity: calc(${props.opacity}/100);
    background: linear-gradient(90deg, #fff 0%, #fff ${props.opacity}%,transparent ${props.opacity}%, transparent 100%);
`)
}

const StyledSlider = styled.div`
    position: absolute;
    top: 1vh;
    left: 0;
    height: 50vh;
    width: 20vw;
    ${'' /* border: 2px dashed purple; */}
    & .vertical-slider {
        height: 100%;
        width: 20vw;
        background: pink;
    }
    .example-thumb {
        background: yellow;
        width: 100%;
        height: 6vh;
    }
    .example-track {
        background: brown;
        ${'' /* height: 42vh; */}
        width: 20vw;
        &-0 {
            background: blue;
            height: 8vh;
        }
        &-1 {
            background: green;
            height: 8vh;
        }
    }
    ${'' /* .render-thumb {
        width: 100%;
        height: 4vh;
        background: pink;
        border: 2px solid yellow;
    } */}
`

const AlphaSlider2 = () => {

    const [value, setValue] = useState(50);

    const handleOnChange = (e) => {
        console.log("onChange: ", e.target.value);
        // setValue(e.target.value)
        // return value;
    }

    return (
        <StyledSlider className="alpha-slider" opacity={value}>
            <ReactSlider
                className="vertical-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                onBeforeChange={val => console.log('onBeforeChange value:', val)}
                onChange={val => console.log('onChange value:', val)}
                onAfterChange={val => console.log('onAfterChange value:', val)}
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                orientation="vertical"
                invert

            />
            {/* <h1>{value}%</h1> */}
        </StyledSlider>
    )
}

export default AlphaSlider2;
