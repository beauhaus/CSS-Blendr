import React from 'react'

import styled from 'styled-components'
import FlipImagePairs from './flipimagepairs'

const FlipScreenWrap = styled.button`
    border-radius: 20px; /* 12px*/
    width: 48vw; /* 46?*/
    height: 100%;
    position: relative;
    background: linear-gradient(90deg, #2C3021 0%, #545D49 50%, #5F6B57 100%);
    /* NB: order top & left (inner) - right & bot (inner) */
    box-shadow: inset 2px 2px 3px 0 #fff,
            inset -2px -2px 3px 0 #000,
            0 0 3px 2px #333,
            1px 1px 2px #fff,
            -1px -1px 2px #000;

    perspective: 200px;
    overflow: hidden;
    display: grid;
        &:before {
            content: "";
            box-shadow: -2px -2px 3px 0 #000,
                        2px 2px 2px 0 #fff;
            border-radius: 15px;
            width: 95%;
            height: 93%;
            opacity: .9;
            margin: auto;
            background: yellow;
            background: linear-gradient(90deg, #2C3021 0%, #545D49 50%, #5F6B57 100%);
        }   
    .line-grid{
        position: absolute;
        top:0;
        left:0;
        bottom: 0;
        right: 0;
        fill:none;
        stroke:#7FB0E4;
        stroke-width:1;
        mix-blend-mode: overlay;
    }

`

const FlipScreenBtn = () => {
    const flipperClickHandler = () => {
        console.log("flipper clicked!")
    }
    return (
        <FlipScreenWrap className="flipper" onClick={flipperClickHandler}>

            <FlipImagePairs className="flip-img-pairs" />
            <svg xmlns="http://www.w3.org/2000/svg" className="line-grid" viewBox="0 0 300 300">
  
  {/* <radialGradient id="SVGID_1_" cx="150" cy="150" r="180.1467" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#a17342"/>
    <stop offset=".1432" stop-color="#a37848"/>
    <stop offset=".3355" stop-color="#a78659"/>
    <stop offset=".5556" stop-color="#ae9d75"/>
    <stop offset=".7945" stop-color="#b8be9c"/>
    <stop offset=".9992" stop-color="#c2dec3"/>
  </radialGradient>
  <path fill="url(#SVGID_1_)" d="M0 0h300v300H0z"/> */}
  <g >
    <path d="M37.5 0v300" className="st1"/>
    <path d="M74.5 0v300" className="st1"/>
    <path d="M111.5 0v300" className="st1"/>
    <path d="M148.5 0v300" className="st1"/>
    <path d="M185.5 0v300" className="st1"/>
    <path d="M222.5 0v300" className="st1"/>
    <path d="M259.5 0v300" className="st1"/>
    <path d="M0 36.5h300" className="st1"/>
    <path d="M0 73.5h300" className="st1"/>
    <path d="M0 110.5h300" className="st1"/>
    <path d="M0 147.5h300" className="st1"/>
    <path d="M0 184.5h300" className="st1"/>
    <path d="M0 221.5h300" className="st1"/>
    <path d="M0 258.5h300" className="st1"/>
  </g>
</svg>
        </FlipScreenWrap>

    )
}
export default FlipScreenBtn;