import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../../pages/page-b";

const StyledUsrImgGridIcon = styled.svg`
  width: 100%;
  height: 100%;
  .inner-shadow {
    opacity: 0.2;
  }
  .plus {
    stroke-width: 2;
    stroke: var(--idle-lt-grey-2);
    fill: var(--idle-lt-grey-2);
  }
`;

const UsrImgGridIcon = () => {
  const { usrImgMode } = useContext(AppContext);

  return (
    <StyledUsrImgGridIcon
      className={usrImgMode ? "active-btn" : "idle-btn"}
      viewBox="0 0 400 400"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
    >
      <filter id="upload-shadow">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" />
      </filter>
      <rect fill="#000" width="100%" opacity="0.2" />
      <linearGradient
        id="SVGID_1_"
        x1="0"
        x2="400"
        y1="200"
        y2="200"
        gradientTransform="rotate(-90 200 200)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopOpacity=".5" />
        <stop offset=".1" stopOpacity="0" />
        <stop offset=".9" stopOpacity="0" />
        <stop offset="1" stopOpacity=".5" />
      </linearGradient>
      <rect width="100%" className="inner-shadow" fill="url(#SVGID_1_)" />
      <linearGradient
        id="SVGID_2_"
        x1="0"
        x2="400"
        y1="200"
        y2="200"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopOpacity=".5" />
        <stop offset=".1" stopOpacity="0" />
        <stop offset=".9" stopOpacity="0" />
        <stop offset="1" stopOpacity=".5" />
      </linearGradient>
      <rect className="inner-shadow" fill="url(#SVGID_2_)" width="100%" />
      <polygon
        filter="url(#upload-shadow)"
        className="plus"
        points="280,40 320,40 320,80 360,80 360,120 320,120 320,160 280,160 280,120 240,120 240,80 280,80"
        // ref={elem => (plusRef = elem)}
        fillOpacity="1"
      />
      <path
        className="mtn"
        fill="none"
        stroke="var(--idle-lt-grey-2)"
        strokeWidth="8"
        d="M1.91 207.55L101.1 90.52l138.49 179.66 80.47-72.99 82.35 112.29"
      />
    </StyledUsrImgGridIcon>
  );
};
export default UsrImgGridIcon;
