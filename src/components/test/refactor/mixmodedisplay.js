import React, { useEffect, useRef, useContext } from 'react'
import { gsap, Power1 } from "gsap"; //  , Power4, Expo
import styled from 'styled-components';
import { threee2DigitRand } from './hooks/app-utils'
import { AppContext } from '../../../pages/page-b'

import { Link } from 'react-scroll'
import 'typeface-rajdhani'

const StyledMixModeDisplay = styled.div`
   position: absolute;
    bottom: 1vh;
    padding: 0;
    width: 50%;
    height: 6vh;
    left: 28%;
    z-index: 3;
    border-radius: 4px;
    overflow: hidden;
    font: normal 2.5rem "Rajdhani", -apple-system, Segoe UI, Roboto;
    padding: 0;
    svg {
        text {
            font: normal 4rem "Rajdhani", -apple-system, Segoe UI, Roboto;
            font-weight: 100;
            text-shadow: 2px 2px 0 #000;
        }
        .bg1, g rect{
            animation: fadeOne 2s ease-in-out forwards;
            animation-delay: 3s;

        }
        .bg2, g rect {
            animation: fadeTwo 2s ease-in-out forwards;
            animation-delay: 3s;

        }
        .underline {
            animation: slideRight 4s cubic-bezier(.01,.93,.87,.99) forwards;
            animation-delay: 1s;
        }

        .underline2 {
            animation: slideRight2 4s cubic-bezier(.01,.93,.87,.99) forwards;
            animation-delay: 1s;
        }
    }

    a {
        position: relative;
        height: 100%;
        z-index: 4;
    }
`;

const MixModeDisplay = () => {
    const {
        mixMode,
        mixModeNum,
        setReadArticleToggle,
        readArticleToggle
    } = useContext(AppContext);

    // console.log("AppContext: ", mixMode)

    let chunkB = useRef(null)
    let chunkA = useRef(null)
    let chunkC = useRef(null)
    let vertChunk = useRef(null)
    let containerSVG = useRef(null)

    let randPos = threee2DigitRand()
    const iconTriggerOn = () => {
        setReadArticleToggle(true)
    }
    const iconTriggerOff = () => {
        setReadArticleToggle(false)
    }
    useEffect(() => {

        gsap.set(vertChunk, { y: 0, transformOrigin: '50% 50%', opacity: 1 })
        gsap.delayedCall(4, iconTriggerOn);

        const tl = gsap.timeline({ defaults: { delay: 0 } })
        tl  
            .call(iconTriggerOff)
            .to(chunkB, { duration: 0.04, x: 10 })
            .to(chunkB, { duration: 0.04, x: -20 })
            .to(chunkC, { duration: 0.04, x: -30 })
            .to(chunkA, { duration: 0.04, x: -20 })
            .to(chunkA, { duration: 0.04, x: 10 })
            .to(chunkB, { duration: 0.04, x: 0 })
            .to(vertChunk, { duration: 0.04, skewX: "25deg" })
            .to(vertChunk, { duration: 0.04, y: 0, skewX: "0deg" })
            .to(vertChunk, { duration: 0, opacity: 0 })
            .to(chunkA, { duration: 0.04, x: 0 })
            .to(chunkC, { duration: 0.04, x: -50 })
            .to(chunkC, { duration: 0.04, x: 10 })
            .to(chunkC, { duration: 0.04, x: 0 })
    }, [mixMode])
    return (
        <StyledMixModeDisplay className="mix-mode-display">
         <Link to={`${mixMode}-article`}
                    smooth={true}
                    duration={500}
                >
            <svg
                viewBox="0 0 200 50" //TODO change to 600 600?
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                ref={elem => containerSVG = elem}
            >
                {(mixModeNum % 2)?
                    <rect className="bg1" fill="#333" width="100%" height="100%" />
                    :
                    <rect className="bg2" fill="#333" width="100%" height="100%" />
                }
                <clipPath id="chunk-A">
                    <rect x="0" y={randPos[0]/2} height="5" width="100%" />
                </clipPath>
                <clipPath id="chunk-B">
                    <rect x="0" y={randPos[1]/2} height="2" width="100%" />
                </clipPath>
                <clipPath id="chunk-C">
                    <rect x="0" y={randPos[2]/2} height="2" width="100%" />
                </clipPath>
                <clipPath id="vert-chunk">
                    <rect x={`${randPos[1]}%`} y="0" height="100%" width="100%" />
                </clipPath>

                <text id="txt-main" fill="#fff" x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">{mixMode}</text>

                <g clipPath="url(#chunk-A)" ref={elem => chunkA = elem}>
                    <rect width="100%" height="100%" fill="#333" />
                    <text fill="#fff" x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">{mixMode}</text>
                </g>

                <g clipPath="url(#chunk-B)" ref={elem => chunkB = elem}>
                    <rect width="100%" height="100%" fill="#333" />
                    <text fill="#fff" x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">{mixMode}</text>
                </g>

                <g clipPath="url(#chunk-C)" ref={elem => chunkC = elem}>
                    <rect width="100%" height="100%" fill="#333" />
                    <text fill="#fff" x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">{mixMode}</text>
                </g>

                <g clipPath="url(#vert-chunk)" ref={elem => vertChunk = elem}>
                    <rect width="100%" height="50" fill="#333" />
                    <text fill="#fff" x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">{mixMode}</text>
                </g>
                
                {(mixModeNum % 2)?
                    <rect y="47" className="underline" width="100%" height="3" fill="coral" />
                    :
                    <rect y="47" className="underline2" width="100%" height="3" fill="coral" />
                }
            </svg>
            </Link>
        </StyledMixModeDisplay>

    );
}

export default MixModeDisplay;
