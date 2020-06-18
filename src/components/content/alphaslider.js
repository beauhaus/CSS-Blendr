import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components';
import ReactSlider from "react-slider";
import { gsap, Back } from "gsap"; //  , Power4, Expo

// const sliderContainerStyles = (props) => {
//     return (`
//     background: linear-gradient(0deg, rgba(255, 255, 255, ${props.containerVal / 100}), #fff ${props.containerVal}%,transparent ${props.containerVal}%, transparent 100%);
// `)
// }

const SliderContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0.5vw;
    height: 100%;
    margin: 0;
    width: 20vw;
    z-index: 20;
    opacity: 0;

    ${'' /* ${props => sliderContainerStyles(props)} */}
`

const StyledSlider = styled(ReactSlider)`
    height: 100%;
    width: 20vw;
`;

const StyledThumb = styled.div`
    width: 100%;
    height: 20%;
    color: #fff;
    position: relative;
    background: white;
    cursor: grab;
    outline: 1px solid #fff;
    box-shadow: 3px 3px 3px 0 #000;
    .offset-insert {
    text-shadow: 1px 1px 0 #777;
        position: absolute;
        bottom: 20%;
        left: 80%;
        font-weight: 100;
        letter-spacing: 0.1rem;
        background: transparent;
        width: 100%;
        height: 50%;
        margin: auto;
    }
    &:active {
        border-width: 0;
    }
`;

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

const Track = (props, state) => {
    return (
        <StyledTrack
            {...props}
            index={state.index}
            onChange={() => console.log('p> track onChange value:', props)}
        />
    )
};

const AlphaSlider = () => {
    const [value, setValue] = useState(100);
    // const [afterVal, setAfterVal] = useState('');
    // const [beforeValue, setBeforeValue] = useState('');
    const [sliderOpenToggle, setSliderOpenToggle] = useState(false);
    const [sliderCloseToggle, setSliderCloseToggle] = useState(false); //after value
    const [sliderBeforeToggle, setSliderBeforeToggle] = useState(false); //before value
    

    let slider = useRef(null)
    // let slider = useRef(null)

    useEffect(()=> {
        console.log("* open&before")
      gsap.set(slider, { opacity: 0})
      const tl = gsap.timeline({ defaults: { delay: 0 } })   
      tl.to(slider, { duration: .5, opacity: 1 }, '-=0')
    //   tl.to(slider, { duration: 1, opacity: 0, delay: 2 }, '-=0')
      
    },[sliderBeforeToggle, sliderOpenToggle])
    
    useEffect(()=> {
        console.log("UE* (SliderCloseTggle)")
        gsap.set(slider, { opacity: 1})
        const tl = gsap.timeline({ defaults: { delay: 0 } })   
        // tl.to(slider, { duration: .5, opacity: 1 }, '-=0')
        tl.to(slider, { duration: .5, opacity: 0, delay: 2 }, '-=0')
        
    },[sliderCloseToggle])
  
  
    

    const handleSliderClick = () => {
        // console.log("CLICK!!: ");
        setSliderOpenToggle(!sliderOpenToggle)
    }

    //necessary for feeding new values but not for gsap transitions
    const handleChange = (val) => { 
        // console.log("change: ");
        setValue(val)
        // return value;
    }
    const handleBefore = (val) => {
        console.log("before");
        // setBeforeValue(e.target.value)
        // return value;
        setSliderBeforeToggle(!sliderBeforeToggle)
    }
    const handleAfter = (val) => {
        console.log("after")
        setSliderCloseToggle(!sliderCloseToggle)
    }
    
    
    return (
        <SliderContainer className="slider-container"
            onTouchStart={handleSliderClick}
            onClick={handleSliderClick}
            containerVal={value}
            ref={elem => slider = elem}
        >
            <StyledSlider
                defaultValue={[100]}
                renderTrack={Track}
                renderThumb={Thumb}
                onBeforeChange={(val) => handleBefore(val)}
                onChange={handleChange}
                onAfterChange={(val) => handleAfter(val)}
                orientation="vertical"
                invert
            />
        </SliderContainer>
    )
}

export default AlphaSlider;
