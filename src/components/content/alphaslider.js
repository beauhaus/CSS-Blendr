import React, { useState, useRef, useEffect, useContext } from 'react'
import styled from 'styled-components';
import ReactSlider from "react-slider";
import { gsap, Back } from "gsap"; //  , Power4, Expo
import { ModeContext } from '../../pages/page-a'

// const sliderContainerStyles = (props) => (`background: rgba(255,255,255,${props.containerVal / 100});`)
const sliderContainerStyles = (props) => {
    return (`background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,${props.containerVal / 100}) 100%);`)
}

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

const Thumb = (props, state, topAlphaVal) => {


    return (
        <StyledThumb containerVal={state.value} {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" width="60%" viewBox="0 0 300.26 300.26">
                <path fill="#828282" stroke="#000" strokeWidth="5"  d="M101.93 297.76c-14.7 0-26.67-11.96-26.67-26.67V101.93c0-14.7 11.96-26.67 26.67-26.67H271.1c14.7 0 26.67 11.96 26.67 26.67V271.1c0 14.7-11.96 26.67-26.67 26.67H101.93z" />
                <path fill="#fff" stroke="#fff" strokeWidth="10" fillOpacity={state.value / 100} d="M29.43 225.26c-14.7 0-26.67-11.96-26.67-26.67V29.43c0-14.7 11.96-26.67 26.67-26.67H198.6c14.7 0 26.67 11.96 26.67 26.67V198.6c0 14.7-11.96 26.67-26.67 26.67H29.43z" />
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

const AlphaSlider = () => {
    const { topAlphaVal,
        setTopAlphaVal
    } = useContext(ModeContext);
    // const [value, setValue] = useState(100);
    // const [afterVal, setAfterVal] = useState('');
    // const [beforeValue, setBeforeValue] = useState('');
    const [sliderOpenToggle, setSliderOpenToggle] = useState(false);
    const [sliderCloseToggle, setSliderCloseToggle] = useState(false); //after value
    const [sliderBeforeToggle, setSliderBeforeToggle] = useState(false); //before value


    let sliderTrack = useRef(null)

    useEffect(() => {
        // console.log("* open&before")
        gsap.set(sliderTrack, { opacity: 0 })
        const tl = gsap.timeline({ defaults: { delay: 0 } })
        tl.to(sliderTrack, { duration: .3, opacity: 1 }, '-=0')
    }, [sliderBeforeToggle, sliderOpenToggle])

    useEffect(() => {
        gsap.set(sliderTrack, { opacity: 1 })
        const tl = gsap.timeline({ defaults: { delay: 0 } })
        tl.to(sliderTrack, { duration: .5, opacity: 0, delay: 1 }, '-=0')
    }, [sliderCloseToggle])

    const handleSliderClick = () => {
        setSliderOpenToggle(!sliderOpenToggle)
    }

    //necessary for feeding new values to parent container
    const handleChange = (val) => {
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
            ref={elem => sliderTrack = elem}
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
                topAlphaVal={topAlphaVal}
            />
        </SliderContainer>
    )
}

export default AlphaSlider;
