import React from 'react';
import styled from 'styled-components'
// import Reflection from './reflection';

const PanelBGWrap = styled.div`
width: 100vw;
 height: 200vh; /* TODO: adjust to auto? */
position: absolute;
top:0;
left: 0;
`;
const PanelBG = () => {
  return (
    <PanelBGWrap>
      <svg className="panel-svg" width="100%" viewBox="0 0 500 1000" preserveAspectRatio="none">
        <filter id='brushed-steel-texture'>
          <feTurbulence type="turbulence" baseFrequency='.3' result='noise' numOctaves="1" />
          <feGaussianBlur in="noise" stdDeviation="20 0" result="blurred" />
          <feDiffuseLighting in='blurred' lightingColor='#ddd' surfaceScale="2.5" result='light'>
            <feDistantLight azimuth='20' elevation='3' />
          </feDiffuseLighting>
        </filter>
        <filter id='brushed-steel-texture-moz'>
          <description>This uses @supports rule in order to target Firefox & lighten the background render</description>
          <feTurbulence type="turbulence" baseFrequency='.3' result='noise' numOctaves="1" />
          <feGaussianBlur in="noise" stdDeviation="20 0" result="blurred" />
          <feDiffuseLighting in='blurred' lightingColor='#ddd' surfaceScale="2.5" result='light'>
            <feDistantLight azimuth='20' elevation='14' />
          </feDiffuseLighting>
        </filter>
     
        <rect className="moz-BG-fix" x="0" y="0" height="100%" width="100%" filter="url(#brushed-steel-texture-moz)" />
        <rect className="standard-BG" x="0" y="0" height="100%" width="100%" filter="url(#brushed-steel-texture)" />
        <radialGradient id="reflection-grad" cx="-6" cy="-8" r="780" gradientTransform="matrix(.4348 .9005 -.4308 .208 -6.8376 -.9329)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fff" stopOpacity="0.3" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <rect x="0" y="0" height="100%" width="100%" fill="url(#reflection-grad)" />
      </svg>
      {/* <Reflection/> */}
    </PanelBGWrap>
  )
}

export default PanelBG;