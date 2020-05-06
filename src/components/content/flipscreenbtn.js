import React from 'react'

import styled from 'styled-components'
import FlipImagePairs from './flipimagepairs'

const FlipScreenWrap = styled.button`
    border-radius: 12px;
    display: grid;
    border: 0.5px solid #bbb;
    overflow: hidden;
    position: relative;
    perspective: 200px;
    height: 100%;
    width: 46vw;


    svg.flip-screen-back { 
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        .lines {
            fill: none;
            stroke: #715657;
            stroke-width: 0.5;
            mix-blend-mode: color-burn;
        }
    }
    .reflection {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(125deg, rgba(235, 235, 235, 0.6) 0%,rgba(235, 235, 235, 0.2) 40%, rgba(235, 235, 235, 0) 45%);
        box-shadow: inset 5px 5px 4px 0px rgba(255,255,255,0.6),
                    inset -2px -2px 6px 0px rgba(95, 0, 0, 0.4);
        &:active {
            box-shadow: inset 5px 5px 7px 0px rgba(255,255,255,0.8),
                        inset -3px -3px 6px 0px  rgba(36, 31, 31, 0.5);
        }
    }
`

const FlipScreenBtn = () => {
    const flipperClickHandler = () => {
        // console.log("flipper clicked!")
    }
    return (
        <FlipScreenWrap className="flipper" onClick={flipperClickHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" className="flip-screen-back" x="0" y="0" version="1.1" viewBox="0 0 300 300" preserveAspectRatio="none">

                <radialGradient id="flipscreen-grad" cx="150" cy="140" r="180" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#a17342" />
                    <stop offset=".1" stopColor="#a47848" stopOpacity="1" />
                    <stop offset=".4" stopColor="#ad8559" stopOpacity=".9" />
                    <stop offset=".6" stopColor="#bb9c75" stopOpacity=".8" />
                    <stop offset=".8" stopColor="#cfbb9c" stopOpacity=".7" />
                    <stop offset="1" stopColor="#e8e2ce" stopOpacity=".8" />
                </radialGradient>
                <path fill="url(#flipscreen-grad)" d="M0 0h300v300H0z" />
                <g id="lines">
                    <path d="M37.5 0v300M74.5 0v300M111.5 0v300M148.5 0v300M185.5 0v300M222.5 0v300M259.5 0v300M0 36.5h300M0 73.5h300M0 110.5h300M0 147.5h300M0 184.5h300M0 221.5h300M0 258.5h300" className="lines" />
                </g>
            </svg>
            <FlipImagePairs className="flip-img-pairs" />
            <div className="reflection"></div>
        </FlipScreenWrap>

    )
}
export default FlipScreenBtn;