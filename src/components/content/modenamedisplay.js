import React, { useEffect, useRef} from 'react'
import { gsap } from "gsap"; //  , Power4, Expo
import styled from 'styled-components';
import 'typeface-iceland'

const ModeNameContainer =styled.div`
  width: 40%;
  position: absolute;
  bottom:0;
  left: 60%;
  border-radius: 5px 5px 0 0;
  background: var(--primary-bluegrey);
  margin-left: -30%;
  h1 {
  color: #ccc;
  letter-spacing:1px;
  font: normal 2.5rem "Iceland", -apple-system, Segoe UI, Roboto;
  
  }
  .pause-txt {
    text-shadow: 1px 1px 1px #000;
  }
`

const ModeNameDisplay = ({ mode }) => {
  console.log("text mode=", mode)

  let txtBox = useRef(null)
  let modeName = useRef(null)

  useEffect(() => {

    gsap.set(txtBox, {y: 200})
    gsap.set(modeName, {opacity: 0})

    const tl = gsap.timeline({ defaults: { delay: .2} })
    tl
      .to(txtBox, { duration: .5, y: 0}, '-=0')
      .to(modeName, { duration: .5, opacity:1 }, '-=.5')
      .to(modeName, {duration: 2, className: "+=pause-txt"})

      .to(modeName, { duration: .5, opacity:0 }, '-=0')
      .to(txtBox, { duration: 2, y: 200}, '-=2')
      

  }, [mode])

  return (
    <ModeNameContainer ref={elem => txtBox = elem} >
      <h1 x="20" y="10" width="100%" height="100%"  ref={elem => modeName = elem}>{mode}</h1>
    </ModeNameContainer>
  );
}

export default ModeNameDisplay; 