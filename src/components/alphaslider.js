import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import ReactSlider from 'react-slider'

const StyledSlider = styled(ReactSlider)`
    height: 80vh;
    width: 15vw;
    margin-left: 2vw;
    background: slategrey;
`;

const StyledThumb = styled.div`
    width: 15vw;
    height: 6.5vh;
    line-height: 35px;
    text-align: center;
    cursor: grab;    
    height: 4vh;
    &.active {
        outline-color: red;
        outline-width: 0;
        width: 15vw;
        height: 6.5vh;
        ${'' /* box-shadow: 2px 2px 2px 2px #000; */}
        background: transparent;
    }
    &.thumb-0 {
        width: 15vw;
        height: 6.5vh;
        
    }
`;

const Thumb = (props, state) => <StyledThumb {...props}>{state.valueNow}%</StyledThumb>;

const StyledTrack = styled.div`
    
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(255, 255, 255, ${props=> props.alpha/100 });
`;

const Track = (props, state) => {
console.log("Tp&s: ", state.value)
    return (
        <StyledTrack
            trackClassName="example-track"
            {...props}
            alpha={state.value}
            index={state.index}
        />
    )
};

const AlphaSlider = () => {



    const changeHandler = (val => {
        return (val)
    })

    const beforeChangeHandler = (val => {
        console.log("B4 Change: ", val)
        return (val)
    })
    const afterChangeHandler = (val => {
        console.log("After Change: ", val)
        return (val)
    })
    return (
        <StyledSlider
            className="vertical-slider"
            defaultValue={[50]}
            orientation="vertical"
            renderTrack={Track}
            invert={true}
            renderThumb={Thumb}
            onBeforeChange={val => beforeChangeHandler(val)}
            onAfterChange={val => afterChangeHandler(val)}
            onChange={val => changeHandler(val)}
        />
    )
}

export default AlphaSlider;

{/* <ReactSlider
    className="horizontal-slider"
    thumbClassName="example-thumb"
    trackClassName="example-track"
    onBeforeChange={val => console.log('onBeforeChange value:', val)}
    onChange={val => console.log('onChange value:', val)}
    onAfterChange={val => console.log('onAfterChange value:', val)}
    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
/> 


___________________________________________________

const StyledSlider = styled(ReactSlider)`
    width: 100%;
    height: 25px;
`;

const StyledThumb = styled.div`
    height: 25px;
    line-height: 25px;
    width: 25px;
    text-align: center;
    background-color: #000;
    color: #fff;
    border-radius: 50%;
    cursor: grab;
`;

const Thumb = (props, state) => <StyledThumb  thumbClassName="example-thumb" {...props}>{state.valueNow}</StyledThumb>;

const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: ${props => props.index === 2 ? '#f00' : props.index === 1 ? '#0f0' : '#ddd'};
    border-radius: 999px;
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

<StyledSlider
    defaultValue={[50, 75]}
    renderTrack={Track}
    renderThumb={Thumb}
/>

 useEffect(() => {
        
    console.log("hello!")
    }, [])
*/}