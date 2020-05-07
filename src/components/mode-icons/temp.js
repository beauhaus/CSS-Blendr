import React from 'react';
import styled from 'styled-components'

const ScreenWrapper = styled.g`
   
    ${'' /* #BG {
        fill: #ddc4a5;
    } */}
`

const ScreenIcon = () => (
    <ScreenWrapper>
        
        <circle id="BG" cx="150" cy="150" r="149" fill="#382e20" />
        

    </ScreenWrapper>)

export default ScreenIcon;
