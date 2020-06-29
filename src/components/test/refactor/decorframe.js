import React from 'react'
import styled from 'styled-components'

const StyledDecorFrame=styled.div`
    position: absolute;
    /* these 1px and 2px values TODO: ought to be removed once an inset is placed on inner divs*/
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    top: -1px;
    left: -1px;
    background: transparent;
    border-radius: 12px;
    box-shadow: 3px 3px 5px 0 #fff,
    -3px -3px 5px 0 #aaa;
`
const DecorFrame = () => <StyledDecorFrame className="decor-frame"/>

export default DecorFrame;
