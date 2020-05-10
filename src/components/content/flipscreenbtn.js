import React from 'react'

import styled from 'styled-components'
import FlipImagePairs from './flipimagepairs'

const FlipScreenWrap = styled.button`
 border-radius: 20px; /* 12px*/
 width: 48vw; /* 46?*/
 height: 100%;
 position: relative;
 background: linear-gradient(90deg, #2C3021 0%, #545D49 50%, #5F6B57 100%);
/* NB: order top & left (inner) - right & bot (inner) */
box-shadow: inset 2px 2px 3px 0 #fff,
            inset -2px -2px 3px 0 #000,
            0 0 3px 2px #333,
            1px 1px 2px #fff,
            -1px -1px 2px #000;


 perspective: 200px;
 ${'' /* overflow: hidden; */}
 display: grid;
 &:before {
  content: "";
  box-shadow: -2px -2px 3px 0 #000,
              2px 2px 2px 0 #fff;
  border-radius: 15px;
  width: 95%;
  height: 93%;
  opacity: .7;
  margin: auto;
  background: yellow;
  background: linear-gradient(90deg, #2C3021 0%, #545D49 50%, #5F6B57 100%);
 }   
`

const FlipScreenBtn = () => {
    const flipperClickHandler = () => {
        // console.log("flipper clicked!")
    }
    return (
        <FlipScreenWrap className="flipper" onClick={flipperClickHandler}>

            <FlipImagePairs className="flip-img-pairs" />
        </FlipScreenWrap>

    )
}
export default FlipScreenBtn;