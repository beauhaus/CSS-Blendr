import React from 'react';
import styled from 'styled-components'
import NoiseImg from '../../../static/images/bgnoise.jpg'
// import GlitchGif from '../../../static/images/glitchgif.gif'

const NoiseBGWrap = styled.div`
  width: 120vw;
  height: 100vh; /* TODO: adjust to auto? */
  position: absolute;
  top:0;
  left: -10vw;
  bottom: 0;
  right: 0;
  ${'' /* border: 1px solid orange; */}
  overflow: hidden;
  image {
    height: 25%;
    filter: url(#test-filter);
  }
  #gradient-overlay {
    mix-blend-mode: darken;
    opacity: 0.5;
  }
`;
const NoiseBG = () => {
  return (
    <NoiseBGWrap>
      <svg className="panel-svg" width="100%" viewBox="0 0 500 1000" preserveAspectRatio="none">
        
        <filter id='test-filter'>
          <feGaussianBlur  stdDeviation="25 0"  colorInterpolationFilters="sRGB"/>
        </filter>
        <image y="0" id="bg-img-a" xlinkHref={NoiseImg} width="100%" height="100%"  preserveAspectRatio="none"/>
        <image y="250" id="bg-img-b" xlinkHref={NoiseImg} width="100%" height="100%"  preserveAspectRatio="none"/>
        <image y="500" id="bg-img-c" xlinkHref={NoiseImg} width="100%" height="100%"  preserveAspectRatio="none"/>
        <image y="750" id="bg-img-d" xlinkHref={NoiseImg} width="100%" height="100%"  preserveAspectRatio="none"/>

        {/* <rect className="moz-BG-fix" x="0" y="0" height="100%" width="100%" filter="url(#brushed-steel-texture-moz)" /> */}
        {/* <rect className="standard-BG" x="0" y="0" height="100%" width="100%" filter="url(#brushed-steel-texture)" /> */}
        <radialGradient id="reflection-grad" cx="-6" cy="-8" r="780" gradientTransform="matrix(.4348 .9005 -.4308 .208 -6.8376 -.9329)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fff" stopOpacity="0.3" />
          <stop offset="1" stopColor="#313d5c" stopOpacity="1" />
        </radialGradient>
        <rect id="gradient-overlay" x="0" y="0" height="100%" width="100%" fill="url(#reflection-grad)" />
      </svg>
    </NoiseBGWrap>
  )
}

export default NoiseBG;