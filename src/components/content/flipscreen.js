import React from 'react'

import styled from 'styled-components'

const FlipScrnWrap = styled.svg`

.lines{
    fill:none;stroke:#eee038;stroke-width:0.5;
    }
`

const FlipScreen = () => (
    <FlipScrnWrap xmlns="http://www.w3.org/2000/svg" id="screen" x="0" y="0" version="1.1" viewBox="0 0 300 300" preserveAspectRatio="none">

        <radialGradient id="flipscreen-grad" cx="150" cy="150" r="180" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#a17342" />
            <stop offset=".1432" stopColor="#a37848" />
            <stop offset=".3355" stopColor="#a78659" />
            <stop offset=".5556" stopColor="#ae9d75" />
            <stop offset=".7945" stopColor="#b8be9c" />
            <stop offset=".9992" stopColor="#c2dec3" />
        </radialGradient>
        <path fill="url(#flipscreen-grad)" d="M0 0h300v300H0z" />
        <g id="lines">
            <path d="M37.5 0v300M74.5 0v300M111.5 0v300M148.5 0v300M185.5 0v300M222.5 0v300M259.5 0v300M0 36.5h300M0 73.5h300M0 110.5h300M0 147.5h300M0 184.5h300M0 221.5h300M0 258.5h300" className="lines" />
        </g>
    </FlipScrnWrap>
)

export default FlipScreen;