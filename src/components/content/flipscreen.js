import React from 'react'

import styled from 'styled-components'

const FlipScrnWrap = styled.svg`

.lines{
    fill:none;stroke:#715657;stroke-width:0.5;
    mix-blend-mode: color-burn;
    }
`

const FlipScreen = () => (
    <FlipScrnWrap xmlns="http://www.w3.org/2000/svg" id="screen" x="0" y="0" version="1.1" viewBox="0 0 300 300" preserveAspectRatio="none">

        <radialGradient id="flipscreen-grad" cx="150" cy="150" r="180" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#a17342" />
            <stop offset=".136" stopColor="#a47848" stopOpacity=".8639" />
            <stop offset=".3186" stopColor="#ad8559" stopOpacity=".6811" />
            <stop offset=".5276" stopColor="#bb9c75" stopOpacity=".4719" />
            <stop offset=".7564" stopColor="#cfbb9c" stopOpacity=".243" />
            <stop offset=".9992" stopColor="#e8e2ce" stopOpacity="0" />
        </radialGradient>
        <path fill="url(#flipscreen-grad)" d="M0 0h300v300H0z" />
        <g id="lines">
            <path d="M37.5 0v300M74.5 0v300M111.5 0v300M148.5 0v300M185.5 0v300M222.5 0v300M259.5 0v300M0 36.5h300M0 73.5h300M0 110.5h300M0 147.5h300M0 184.5h300M0 221.5h300M0 258.5h300" className="lines" />
        </g>
        <path id="lowerscrn" fill="#f7931e" stroke="#fff" stroke-miterlimit="10" d="M281 228H77.73l32.98-100.5h129.07z"/>
        <path id="coverscrn" fillOpacity="0.6" fill="#0f0" stroke="#fff" stroke-miterlimit="10" d="M219.77 166H16.5L57.72 65.5h129.07z"/>
    </FlipScrnWrap>
)

export default FlipScreen;