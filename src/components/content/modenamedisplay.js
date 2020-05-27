import React, { useEffect, useRef, useContext } from 'react'
import { gsap } from "gsap"; //  , Power4, Expo
import styled from 'styled-components';
import 'typeface-iceland'
import {ModeContext} from '../../pages/page-a'

// import { useStaticQuery } from 'gatsby';

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

const ModeNameDisplay = () => {
  // const [addClass, setAddClass] = useState(true)
  const {mode} = useContext(ModeContext);

  let txtBox = useRef(null)
  useEffect(()=> {
    gsap.set(txtBox, { y:25})
    const tl = gsap.timeline({ defaults: { delay: .5 } })   
    tl.to(txtBox, { duration: .2, y: 0 }, '-=0')
  },[mode])

  return (
    <ModeNameContainer ref={elem => txtBox = elem} className={`mode-name-container`}>
      <h1 width="100%" height="100%">{mode}</h1>
    </ModeNameContainer>
  );
}

export default ModeNameDisplay; 