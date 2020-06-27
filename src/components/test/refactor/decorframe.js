import React from 'react'
import styled from 'styled-components'

const StyledDecorFrame=styled.div`
    width: calc(100% + 6px);
    height: calc(100% + 6px);
    position: absolute;
    top: -3px;
    left: -3px;
    background: transparent;
    border-radius: 12px;
    box-shadow: inset 3px 3px 5px 0 rgba(0,0,0,.8),
    3px 3px 5px 0 #fff,
    -3px -3px 5px 0 #666,
    inset -3px -3px 5px 0 #666;
`
const DecorFrame = () => (
    <StyledDecorFrame className="decor-frame">
    </StyledDecorFrame>
)

export default DecorFrame;