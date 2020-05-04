import React from 'react'

import styled from 'styled-components'
import FlipImagePairs from './flipimagepairs'

const FlipScreenWrap = styled.div`
    border-radius: 12px;
    display: grid;
    border: 0.5px solid #8a857c;
    overflow: hidden;
    position: relative;
    box-shadow: inset 10px 10px 10px 0px rgba(255, 255, 255, 1),
    inset -5px -5px 10px 0px rgba(95, 0, 0, 0.8);
    perspective: 200px;

    .flip-screen-back {
        position: absolute;
        top: 0;
        left: 0;

        .lines {
            fill: none;
            stroke: #715657;
            stroke-width: 0.5;
            mix-blend-mode: color-burn;
        }
    }
    .reflection {
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(125deg, rgba(235, 235, 235, 0.5) 0%,rgba(235, 235, 235, 0.3) 38%, rgba(235, 235, 235, 0) 45%);
        ${'' /* display: none; */}
    }
`

const FlipScreen = () => (

    <FlipScreenWrap className="flipper">
        <svg xmlns="http://www.w3.org/2000/svg" className="flip-screen-back" x="0" y="0" version="1.1" viewBox="0 0 300 300" preserveAspectRatio="none">

            <radialGradient id="flipscreen-grad" cx="150" cy="120" r="180" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#a17342" />
                <stop offset=".1" stopColor="#a47848" stopOpacity="1" />
                <stop offset=".3" stopColor="#ad8559" stopOpacity=".9" />
                <stop offset=".5" stopColor="#bb9c75" stopOpacity=".8" />
                <stop offset=".7" stopColor="#cfbb9c" stopOpacity=".7" />
                <stop offset="1" stopColor="#e8e2ce" stopOpacity=".7" />
            </radialGradient>
            <path fill="url(#flipscreen-grad)" d="M0 0h300v300H0z" />
            <g id="lines">
                <path d="M37.5 0v300M74.5 0v300M111.5 0v300M148.5 0v300M185.5 0v300M222.5 0v300M259.5 0v300M0 36.5h300M0 73.5h300M0 110.5h300M0 147.5h300M0 184.5h300M0 221.5h300M0 258.5h300" className="lines" />
            </g>
        </svg>
        <FlipImagePairs className="flip-img-pairs"/>
        <div className="reflection"></div>
    </FlipScreenWrap>

)

export default FlipScreen;