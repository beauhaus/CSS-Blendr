import React from 'react'
import styled from 'styled-components'

const StyledDefaultGridIcon = styled.svg`
    width: 100%;
    height: 100%;
    .inner-shadow {
        opacity: .2;
    }
`

const DefaultGridIcon = () => {
    return (
        <StyledDefaultGridIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="100%" height="100%" preserveAspectRatio="none">
            <filter id="grid-icon-blur">
                <feGaussianBlur stdDeviation="6"></feGaussianBlur>
            </filter>
            <path fill="#828282" d="M0 0h300v300H0z" />
            <g className="thumbs-shad" filter="url(#grid-icon-blur)">
                <path id="shad_7_" d="M175 175h100v100H175z" />
                <path id="shad_6_" d="M175 45h100v100H175z" />
                <path id="shad_5_" d="M45 45h100v100H45z" />
                <path id="shad_4_" d="M45 175h100v100H45z" />
            </g>
            <path d="M165 165h100v100H165zM165 35h100v100H165zM35 35h100v100H35zM35 165h100v100H35z" fill="#ddd" />
        </StyledDefaultGridIcon>
    )
}
export default DefaultGridIcon;
