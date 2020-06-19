import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components';
import ReactSlider from "react-slider";
import { gsap, Back } from "gsap"; //  , Power4, Expo

// const sliderContainerStyles = (props) => (`background: rgba(255,255,255,${props.containerVal / 100});`)
const sliderContainerStyles = (props) => {
    console.log("styles val: ", props.containerVal);
    return(`background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,${props.containerVal / 100}) 100%);`)}

const SliderContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    margin: 0;
    width: 7vh;
    z-index: 20;
    opacity: 0;
    ${'' /* border: 1px solid yellow; */}
`

const StyledSlider = styled(ReactSlider)`
    height: 100%;
    width: 100%;
`;

const StyledThumb = styled.div`
    width: 100%;
    height: 7vh;
    color: #fff;
    position: relative;
    cursor: grab;
    ${'' /* border: 1px solid #fff; */}
    outline: none;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${'' /* box-shadow: 3px 3px 3px 0 #000; */}
    ${'' /* .offset-insert {
    text-shadow: 1px 1px 0 #777;
        position: absolute;
        bottom: 10%;
        left: 80%;
        font-weight: 100;
        letter-spacing: 0.1rem;
        background: transparent;
        width: 100%;
        height: 50%;
        margin: auto;
    } */}
    &:active {
        border-width: 0;
    }
    .st3{fill:#fff}.st4{fill:#4f4f4f}

`;

const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    left: 4vw;
    width: 4vw;
    transform: translateY(7vh);
    ${'' /* background: linear-gradient(0deg, rgba(255, 255, 255, 0), #fff 100%); */}
    ${props => sliderContainerStyles(props)}
    
    ${'' /* svg {
        margin: auto;
    } */}
    &.track-1 {
        display: none;
    }
    &.track-0 {
        top: 20vh;
    }
`;

const Thumb = (props, state) => {
    return (
        <StyledThumb containerVal={state.value} {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" width="70%" viewBox="0 0 58.13 58.13">
  
  <g id="opacityicon_1_">
    <path fill="#828282" d="M38.42 43.1H5.68C3.09 43.1 1 41.01 1 38.42V5.68C1 3.09 3.09 1 5.68 1h32.74C41 1 43.1 3.09 43.1 5.68v32.74c0 2.59-2.09 4.68-4.68 4.68z"/>
    <path d="M52.45 57.13H19.71c-2.58 0-4.68-2.09-4.68-4.68V19.71c0-2.58 2.09-4.68 4.68-4.68h32.74c2.58 0 4.68 2.09 4.68 4.68v32.74c0 2.59-2.09 4.68-4.68 4.68z" className="st3"/>
    <path d="M15.03 19.71H43.1v-4.68H19.71c-2.58 0-4.68 2.1-4.68 4.68z" className="st3"/>
    <path d="M15.03 19.71H43.1v4.68H15.03z" className="st4"/>
    <path d="M15.03 24.39H43.1v4.68H15.03z" className="st3"/>
    <path d="M15.03 29.07H43.1v4.68H15.03z" className="st4"/>
    <path d="M15.03 33.74H43.1v4.68H15.03z" className="st3"/>
    <path d="M15.03 43.1h23.39c2.58 0 4.68-2.09 4.68-4.68H15.03v4.68z" className="st4"/>
  </g>
</svg>
        </StyledThumb>
    )
};

const Track = (props, state) => {

    return (
        <StyledTrack
            {...props}
            index={state.index}
            containerVal={state.value}
            onChange={() => console.log('p> track onChange value:', props)}
        />
    )
};

const AlphaSlider = ({topAlphaVal, setTopAlphaVal}) => {
    const [value, setValue] = useState(100);
    // const [afterVal, setAfterVal] = useState('');
    // const [beforeValue, setBeforeValue] = useState('');
    const [sliderOpenToggle, setSliderOpenToggle] = useState(false);
    const [sliderCloseToggle, setSliderCloseToggle] = useState(false); //after value
    const [sliderBeforeToggle, setSliderBeforeToggle] = useState(false); //before value


    let slider = useRef(null)

    useEffect(() => {
        // console.log("* open&before")
        gsap.set(slider, { opacity: 1 })
        const tl = gsap.timeline({ defaults: { delay: 0 } })
        tl.to(slider, { duration: .3, opacity: 1 }, '-=0')
    }, [sliderBeforeToggle, sliderOpenToggle])

    useEffect(() => {
        gsap.set(slider, { opacity: 1 })
        const tl = gsap.timeline({ defaults: { delay: 0 } })
        tl.to(slider, { duration: .5, opacity: 0, delay: 1 }, '-=0')
    }, [sliderCloseToggle])




    const handleSliderClick = () => {
        // console.log("CLICK!!: ");
        setSliderOpenToggle(!sliderOpenToggle)
    }

    //necessary for feeding new values but not for gsap transitions
    const handleChange = (val) => {
        // console.log("change: ", val);
        setTopAlphaVal(val)
    }
    const handleBefore = (val) => {
        setSliderBeforeToggle(!sliderBeforeToggle)
    }
    const handleAfter = (val) => {
        // console.log("after")
        setSliderCloseToggle(!sliderCloseToggle)
    }


    return (
        <SliderContainer className="slider-container"
            onTouchStart={handleSliderClick}
            onClick={handleSliderClick}
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
