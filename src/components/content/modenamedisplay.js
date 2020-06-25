import React, { useEffect, useRef, useContext } from 'react'
import { gsap } from "gsap";
import styled from 'styled-components';
import 'typeface-iceland'
import {BlenderAppContext} from '../../pages/page-a'

// import { useStaticQuery } from 'gatsby';

const ModeNameContainer = styled.div`
  width: 50%;
  position: absolute;
  bottom:0;
  left: 25%;
  border-radius: 5px 5px 0 0;
  background: var(--primary-bluegrey);
  z-index: 12;
  h1 {
    letter-spacing:1px;
    color: #fff;
    font: normal 2.5rem "Iceland", -apple-system, Segoe UI, Roboto;
    text-shadow: 1px 1px 1px #000;
  }
`

const ModeNameDisplay = () => {
  const {mode} = useContext(BlenderAppContext);

  let txtBox = useRef(null)
  useEffect(()=> {
    gsap.set(txtBox, { y:25})
    const tl = gsap.timeline({ defaults: { delay: .3 } })   
    tl.to(txtBox, { duration: .2, y: 0 }, '-=0')
  },[mode])

  return (
    <ModeNameContainer  className={`mode-name-container`}
    ref={elem => txtBox = elem}>
      <h1 width="100%" height="100%">{mode}</h1>
    </ModeNameContainer>
  );
}

export default ModeNameDisplay; 