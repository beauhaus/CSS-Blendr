import React from 'react';
import styled from 'styled-components'

const ScreenWrapper = styled.g`
   
    ${'' /* #BG {
        fill: #ddc4a5;
    } */}
    text {
        fill: #fff;
        font-size: 3rem;
    }
`

const ScreenIcon = () => (
    <ScreenWrapper>

        <circle className="icon-bg" cx="150" cy="150" r="150" />
        <text x="150" y="150">Screen</text>

    </ScreenWrapper>)

export default ScreenIcon;
