import React, { useEffect, useRef, useContext } from "react";
import { gsap, Expo } from "gsap"; //  , Power4, Expo
import styled from "styled-components";
import { threee2DigitRand } from "./hooks/app-utils";
import { AppContext } from "../../../pages/page-b";

import { Link } from "react-scroll";
import "typeface-rajdhani";

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
    readArticleToggle,
    setMixModeNum,
  } = useContext(AppContext);

  // console.log("AppContext: ", mixMode)

  let chunkB = useRef(null);
  let chunkA = useRef(null);
  let chunkC = useRef(null);
  let vertChunk = useRef(null);
  let modeBG = useRef(null);
  let underLine = useRef(null);
  let txtMain = useRef(null);

  let randPos = threee2DigitRand();
  const iconTriggerOn = () => {
    setReadArticleToggle(true);
  };
  const iconTriggerOff = () => {
    setReadArticleToggle(false);
  };
  useEffect(() => {
    gsap.set(vertChunk, { y: 0, transformOrigin: "50% 50%", opacity: 1 });
    gsap.set(modeBG, { opacity: 1 });
    gsap.set(chunkA, { opacity: 1 });
    gsap.set(txtMain, { opacity: 1 });
    gsap.set(chunkB, { opacity: 1 });
    gsap.set(chunkC, { opacity: 1 });
    gsap.set(underLine, { x: 0, opacity: 1 });
    gsap.delayedCall(2, iconTriggerOn);

    const tl = gsap.timeline();

    tl.progress(1);

    tl.to(underLine, { duration: 0.1, x: 0, opacity: 1 })
      .to(txtMain, { duration: 0.1, x: 0, opacity: 1 })
      .call(iconTriggerOff)

      .to(chunkB, { duration: 0.05, x: 10 })
      .to(chunkB, { duration: 0.05, x: -20 })
      .to(chunkC, { duration: 0.05, x: -30 })
      .to(chunkA, { duration: 0.05, x: -20 })
      .to(chunkA, { duration: 0.05, x: 10 })
      .to(chunkB, { duration: 0.05, x: 0, opacity: 0 })
      .to(vertChunk, { duration: 0.05, skewX: "25deg" })
      .to(vertChunk, { duration: 0.05, y: 0, skewX: "0deg", opacity: 0 })

      .to(chunkA, { duration: 0.05, x: 0, opacity: 0 })
      .to(chunkC, { duration: 0.05, x: -50 })
      .to(chunkC, { duration: 0.05, x: 10 })
      .to(chunkC, { duration: 0.05, x: 0, opacity: 0 })

      .to(underLine, { duration: 3, x: -200, ease: Expo.easeOut }, "+=0.05")
      .to(modeBG, { duration: 1, opacity: 0 }, "-=0.8");
    // .to(txtMain, { duration: 2, opacity: 0 }, "+=0");
  }, [mixMode]);

  return (
    <StyledMixModeDisplay className="mix-mode-display">
      <Link to={`${mixMode}-article`} smooth={true} duration={500}>
        <svg
          viewBox="0 0 200 50"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        >
          <rect
            className="mode-name-bg"
            fill="#333"
            width="100%"
            height="100%"
            ref={(elem) => (modeBG = elem)}
          />

          <clipPath id="chunk-A">
            <rect x="0" y={randPos[0] / 2} height="15" width="100%" />
          </clipPath>
          <clipPath id="chunk-B">
            <rect x="0" y={randPos[1] / 2} height="12" width="100%" />
          </clipPath>
          <clipPath id="chunk-C">
            <rect x="0" y={randPos[1] / 2} height="12" width="100%" />
          </clipPath>
          <clipPath id="vert-chunk">
            <rect x={`${randPos[1]}%`} y="0" height="100%" width="100%" />
          </clipPath>

          <text
            id="txt-main"
            fill="#fff"
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            ref={(elem) => (txtMain = elem)}
          >
            {mixMode}
          </text>

          <g clipPath="url(#chunk-A)" ref={(elem) => (chunkA = elem)}>
            <rect width="100%" height="100%" fill="#333" />
            <text
              fill="#fff"
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
            >
              {mixMode}
            </text>
          </g>

          <g clipPath="url(#chunk-B)" ref={(elem) => (chunkB = elem)}>
            <rect width="100%" height="100%" fill="#333" />
            <text
              fill="#fff"
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
            >
              {mixMode}
            </text>
          </g>

          <g clipPath="url(#chunk-C)" ref={(elem) => (chunkC = elem)}>
            <rect width="100%" height="100%" fill="#333" />
            <text
              fill="#fff"
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
            >
              {mixMode}
            </text>
          </g>

          <g clipPath="url(#vert-chunk)" ref={(elem) => (vertChunk = elem)}>
            <rect width="100%" height="50" fill="#333" />
            <text
              fill="#fff"
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
            >
              {mixMode}
            </text>
          </g>
          <rect
            y="47"
            className="underline"
            width="200"
            height="3"
            fill="coral"
            ref={(elem) => (underLine = elem)}
          />
        </svg>
      </Link>
    </StyledMixModeDisplay>
  );
};

export default MixModeDisplay;
