import React from 'react';
import styled from 'styled-components'

const ReflectionWrapper = styled.svg`
   
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
`

const Reflection = () => (
    <ReflectionWrapper className="light-on-steel" width="100%" viewBox="0 0 300 300" preserveAspectRatio="none">
        <radialGradient id="reflection-grad" cx="-6" cy="-8" r="580" gradientTransform="matrix(.4348 .9005 -.4308 .208 -6.8376 -.9329)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fff" stopOpacity="0.3" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <rect x="0" y="0" height="100%" width="100%" fill="url(#reflection-grad)" />
       </ReflectionWrapper>)

export default Reflection;

/*
<svg className="light-on-steel" width="100%" viewBox="0 0 300 300" preserveAspectRatio="none">
    <radialGradient id="reflection-grad" cx="-6" cy="-8" r="580" gradientTransform="matrix(.4348 .9005 -.4308 .208 -6.8376 -.9329)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#fff" stopOpacity="0.25" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
    </radialGradient>
    <rect x="0" y="0" height="100%" width="100%" fill="url(#reflection-grad)" />
</svg>
       )
       */