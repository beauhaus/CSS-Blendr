import React from 'react'

import styled from 'styled-components'
import FlipImagePairs from './flipimagepairs'

const FlipScreenWrap = styled.button`
 border-radius: 30px; /* 12px*/
 width: 48vw; /* 46?*/
 height: 100%;
 position: relative;
 background: #3b3b3b;
 box-shadow: inset 0 4px 3px -2px #fff,
 inset 0 -4px 5px -3px #000;

 perspective: 200px;
 overflow: hidden;
 display: grid;
 &:before {
  content: "";
  box-shadow: 0 -5px 6px 0 rgba(0,0,0,1),
              0 4px 2px 0 #fff;
  border-radius: 25px;
  position: absolute;
  top: 3%;
  left: 2.5%;
  width: 95%;
  height: 93%;
  background: linear-gradient(90deg, #2C3021 0%, #545D49 50%, #5F6B57 100%);
  opacity: 0.5;
 }   
`

const FlipScreenBtn = () => {
    const flipperClickHandler = () => {
        // console.log("flipper clicked!")
    }
    return (
        <FlipScreenWrap className="flipper" onClick={flipperClickHandler}>

        </FlipScreenWrap>

    )
}
{/* <FlipImagePairs className="flip-img-pairs" /> */}
export default FlipScreenBtn;