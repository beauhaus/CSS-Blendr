import React, {useEffect, useRef,useContext } from 'react';
import { gsap } from "gsap"; //  , Power4, Expo
import {ModeContext} from '../../pages/page-a'

import styled from 'styled-components'
import FlipImagePairs from './flipimagepairs'

const FlipScreenWrap = styled.button`
    border-radius: 20px; /* 12px*/
    width: 48vw; /* 46?*/
    height: 100%;
    position: relative;
    background: linear-gradient(90deg, #2C3021 0%, #545D49 50%, #5F6B57 100%);
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
        margin: 2%;
        position: absolute;
        height: 94%;
        width: 96%;
        top:0;
        left:0;
        .lines {
        fill:none;
        stroke:#7FB0E4;
        stroke-width:1;
        mix-blend-mode: overlay;
        overflow: hidden;

        }
        #flip-arrows {
            fill: orange;
            stroke: #fff;
            stroke-width: .5;
        }
    }
`

const FlipScreenBtn = ({flipToggler, flipToggle}) => {
    const {mode} = useContext(ModeContext);

    let flipArrows = useRef(null)

    useEffect(() => {
        
        gsap.set(flipArrows, { opacity: .7, fillOpacity: .4 })

        const tl = gsap.timeline({ defaults: { delay: 0 } })
       tl
       .to(flipArrows, { duration: .5, opacity:1, fillOpacity: 1 }, '-=0')      
       .to(flipArrows, { duration: .5, opacity:.7, fillOpacity: .4 }, '-=0')
       
     }, [flipToggle])

    return (
        <FlipScreenWrap className="flipper" aria-label="image-flipper" onClick={flipToggler}>

            <svg xmlns="http://www.w3.org/2000/svg" className="line-grid" width="100%" height="90%" viewBox="0 0 300 300" preserveAspectRatio="none">
                    <g className="lines">
                    <path d="M37.5 0v300" className="st1" />
                    <path d="M74.5 0v300" className="st1" />
                    <path d="M111.5 0v300" className="st1" />
                    <path d="M148.5 0v300" className="st1" />
                    <path d="M185.5 0v300" className="st1" />
                    <path d="M222.5 0v300" className="st1" />
                    <path d="M259.5 0v300" className="st1" />
                    <path d="M0 36.5h300" className="st1" />
                    <path d="M0 73.5h300" className="st1" />
                    <path d="M0 110.5h300" className="st1" />
                    <path d="M0 147.5h300" className="st1" />
                    <path d="M0 184.5h300" className="st1" />
                    <path d="M0 221.5h300" className="st1" />
                    <path d="M0 258.5h300" className="st1" />
                    </g>
                    <path  
                    id="flip-arrows"
                    ref={elem => flipArrows = elem}
                    d="M257.21 45.61s16.29 7.89 23.23 27.15c.06-16.26 7.45-37.67 7.45-37.67l-10.68 3.58-.06.02c-7.24-20.05-24.64-23.19-43.57-22.34 16.93-1.85 28.91 10.52 34.37 25.66l-10.74 3.6zM46.26 251.94s-17.61-4.21-28.52-21.53c3.43 15.9.81 38.39.81 38.39l9.67-5.79.05-.03c11.37 18.03 29.05 17.36 47.35 12.46-16.14 5.44-30.49-4.07-39.08-17.68l9.72-5.82z"  />
            </svg>
            <FlipImagePairs
                className="flip-img-pairs"
                flipToggle={flipToggle}
               
            />
        </FlipScreenWrap>

    )
}
export default FlipScreenBtn;