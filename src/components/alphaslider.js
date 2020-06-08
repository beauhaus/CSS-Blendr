import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import ReactSlider from 'react-slider'

const StyledSlider = styled(ReactSlider)`
border: 1px solid white;
height: 12rem;
width: 20vw;
margin: 20vh auto;
   &.slider {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 12rem;
  border: 1px solid purple
}

.sliderTrack {
  width: 0.5rem;
  background-color: red;
}

.sliderThumb {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.5rem;
  width: 1.5rem;
  background-color: darkgray;
}

`;


const AlphaSlider = () => {



    // const changeHandler = (val => {
    //     return (val)
    // })

    // const beforeChangeHandler = (val => {
    //     console.log("B4 Change: ", val)
    //     return (val)
    // })
    // const afterChangeHandler = (val => {
    //     console.log("After Change: ", val)
    //     return (val)
    // })
    return (
        <StyledSlider
      className="slider"
      trackClassName={"sliderTrack"}
      thumbClassName={"sliderThumb"}
      renderThumb={(thumbProps, state) => (
        <div {...thumbProps}>{state.valueNow}</div>
      )}
      min={0}
      max={100}
      orientation="vertical"
      invert
    />
    )
}
// {/* <StyledSlider
//     className="vertical-slider"
//     defaultValue={[50]}
//     orientation="vertical"
//     renderTrack={Track}
//     invert={true}
//     renderThumb={Thumb}
//     onBeforeChange={val => beforeChangeHandler(val)}
//     onAfterChange={val => afterChangeHandler(val)}
//     onChange={val => changeHandler(val)}
// /> */}

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