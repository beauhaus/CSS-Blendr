import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap"; //  , Power4, Expo
import styled from 'styled-components';
import 'typeface-iceland'

const ModeNameContainer = styled.div`
  width: 50%;
  position: absolute;
  bottom:0;
  left: 25%;
  border-radius: 5px 5px 0 0;
  background: var(--primary-bluegrey);
  h1 {
    letter-spacing:1px;
    color: #fff;
    font: normal 2.5rem "Iceland", -apple-system, Segoe UI, Roboto;
    text-shadow: 1px 1px 1px #000;
  }
`

const ModeNameDisplay = ({ mode }) => {
  let txtBox = useRef(null)
  const doCoolStuff=(()=>{
    gsap.set(txtBox, { y:25})
    
    const tl = gsap.timeline({ defaults: { delay: .3 } })
    
    // if (tl && tl.isActive()) {
    //   console.log("progress 1")
    //   tl.progress(1);
    // }
    
    tl
    .to(txtBox, { duration: .2, y: 0 }, '-=0')
    // .to(txtBox, { duration: 1, y: 25 }, '+=3')
  })
  useEffect(()=> {
    doCoolStuff()
  },[mode])

  return (
    <ModeNameContainer    ref={elem => txtBox = elem}>
      <h1 width="100%" height="100%">{mode}</h1>
    </ModeNameContainer>
  );
}

export default ModeNameDisplay; 