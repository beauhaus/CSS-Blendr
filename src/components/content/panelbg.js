import React from 'react';
import styled from 'styled-components'

const PanelBGWrap = styled.div`
width: 100vw;
 height: 200vh; /* TODO: adjust to auto? */
${'' /* text-align: right; */}
position: absolute;
top:0;
left: 0;
${'' /* z-index: 0; */}
rect {
  fill: rgba(202, 120, 42, 0.4);
}
`;
const PanelBG = () => {

  
  return (
    <PanelBGWrap>
      <svg className="panel-svg" width="100%" viewBox="0 0 500 1000" preserveAspectRatio="none">
        <filter id='roughpaper'>
          <feTurbulence type="fractalNoise" baseFrequency='0.25' result='noise' numOctaves="1" />
          <feDiffuseLighting in='noise' lightingColor='#fff' surfaceScale='1' result='light'>
            <feDistantLight azimuth='350' elevation='55' />
          </feDiffuseLighting>
          <feBlend in="SourceGraphic" mode="screen" />
        </filter>
        <rect x="0" y="0" height="100%" className="panel-bg" width="100%" filter="url(#roughpaper)" />
      </svg>
    </PanelBGWrap>
  )
}

export default PanelBG;