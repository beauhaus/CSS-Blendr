import React, { useState, createContext} from 'react';
import styled from 'styled-components';
// import { Link } from 'react-scroll'
// import { animateScroll } from 'react-scroll'
// import { gsap } from "gsap";
// import 'typeface-rajdhani'


// import MixModeDisplay from '../components/test/refactor/mixmodedisplay'

// export const AppContext2 = createContext();

const PageDWrapper = styled.div`
${'' /* background: slategrey; */}
width: 100vw;
height: auto;
 padding-top: 20vh;
 display: grid;
 place-items: center;
 button {
   border: 1px solid #fff;
   background: violet;
   margin: 2vh;
 }


`

const PageD = () => {
  const [iconToggle, setIconToggle] = useState(false);
  const [mixModNum2, setMixModeNum2] = useState(0);
  const mixModesArray2 = ["abnormal", "Multiply", "Colour-burn","abnormal", "Multiply","abnormal", "Multiply","abnormal", "Multiply","abnormal", "Multiply", "Colour-burn","abnormal", "Multiply","abnormal", "Multiply","abnormal", "Multiply","abnormal", "Multiply", "Colour-burn","abnormal", "Multiply","abnormal", "Multiply","abnormal", "Multiply"];

  const btnBlockGlitchHandler = () => {
    setMixModeNum2(mixModNum2+1)
  };
  return (
   
    <PageDWrapper className="page-d-wrapper">
           {/* <button className="btn-toggle" onClick={btnBlockGlitchHandler}>Toggle Effect</button>
            <MixModeDisplay toggle={iconToggle} /> */}
    </PageDWrapper>
  )
};

export default PageD;
