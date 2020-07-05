import React from 'react'
import styled from 'styled-components'

const StyledOpacityIcon = styled.svg`
    height: 100%;
    width: 100%;
    opacity: 0.8;
    .st0{fill:#fff; stroke:#fff; stroke-width: 2;}
    .st1{fill:#fff; }
`

const OpacityIcon = () => (
    <StyledOpacityIcon viewBox="0 0 300 300" width="100%" height="100%">
        <filter id="opacity-shadow">
            <feDropShadow dx="-4" dy="-4" stdDeviation="4" floodColor="#000" />
        </filter>

        <g filter="url(#opacity-shadow)">
            <path d="M208 5c8.28 0 15 6.72 15 15v188c0 8.28-6.72 15-15 15H20c-8.28 0-15-6.72-15-15V20c0-8.28 6.72-15 15-15h188m0-5H20C8.97 0 0 8.97 0 20v188c0 11.03 8.97 20 20 20h188c11.03 0 20-8.97 20-20V20c0-11.03-8.97-20-20-20z" className="st0" />
            <path d="M280 77c8.28 0 15 6.72 15 15v188c0 8.28-6.72 15-15 15H92c-8.28 0-15-6.72-15-15V92c0-8.28 6.72-15 15-15h188m0-5H92c-11.03 0-20 8.97-20 20v188c0 11.03 8.97 20 20 20h188c11.03 0 20-8.97 20-20V92c0-11.03-8.97-20-20-20z" className="st0" />
            <path d="M113.5 113.5H77V92c0-8.28 6.72-15 15-15h21.5v36.5zM208 223h-21.5v-36.5H223V208c0 8.28-6.72 15-15 15zM150 77h36.5v36.5H150zM186.5 113.5H223V150h-36.5zM113.5 113.5H150V150h-36.5zM150 150h36.5v36.5H150zM77 150h36.5v36.5H77zM113.5 186.5H150V223h-36.5z" className="st1" />
        </g>
    </StyledOpacityIcon>
)

export default OpacityIcon;
