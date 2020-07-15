import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap, Power4 } from "gsap";

const StyledSVG = styled.div`
margin: 20vh auto;
width: 30vw;
height: 30vw;
    .st0{
        fill:#828282;
        
    }
    .st1{
        fill:#aaa;
    }
`;

const GridIconTest = ({ toggle }) => {
    let testRef = useRef(null);
    // let maskRef = useRef(null);
    


    
    useEffect(() => {
        gsap.set(testRef, { fill: `yellow` })
        const tl = gsap.timeline();
        if (!toggle) {
            tl
            .to(testRef, 1.5,  {fill:'blue',ease: Power4.easeInOut }, '-=0')
        } else if (toggle) {
            gsap.set(testRef, { fill: `purple` })

            tl
            .to(testRef, 1.5, {fill:'red', ease: Power4.easeInOut }, '-=0')
        }

    }, [toggle]);

    // useEffect(() => {
    //     console.log("empty useEffect");
    // }, []);
    // useEffect(() => {
    //     console.log("useEffect w/ toggle");
    // }, []);


    return (
        <>
            <StyledSVG className="grid-icon-container">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 400 400"
                    preserveAspectRatio="none"
                >
                    
                    <linearGradient id="grid-gradient" x1="0" x2="700" y1="0" y2="400" gradientUnits="userSpaceOnUse">
                        <stop offset=".40" stopColor="#fff" stopOpacity="0"/>
                        <stop offset=".5" stopColor="#fff"/>
                        <stop offset=".60" stopColor="#fff" stopOpacity="0"/>
                    </linearGradient>
                    <path id="background_1_" d="M0 0h400v400H0z" 
                    className="st0"
                    ref={elem => testRef = elem}
                    />
                    
  
                    <rect  fill="url(#grid-test)" 
                    width="200%" 
                    height="200%" 
                    y="-400" 
                    ref={elem => testRef = elem}
                     />
                  {/* mask="url(#grid-icon-mask)" */}
                  {/* <path  d="M219.67 219.67h134v134h-134zM219.67 46.33h134v134h-134zM46.33 46.33h134v134h-134zM46.33 219.67h134v134h-134z" fill="#ccc"/> */}
                  {/* <path fill="#828282" d="M0 0v400h400V0H0zm180.33 353.67h-134v-134h134v134zm0-173.34h-134v-134h134v134zm173.34 173.34h-134v-134h134v134zm0-173.34h-134v-134h134v134z"
                      ref={elem => maskRef = elem} 
                  /> */}
          
                </svg>
            </StyledSVG>
        </>
    );
};

export default GridIconTest;

