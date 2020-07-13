import React, { useContext } from 'react';
import styled from 'styled-components';
import {AppContext} from '../../../pages/page-b'
// import IncrementorLights from './incrementor'


const StyledCycleModeBtn = styled.button`
    position: relative;  
    padding: 0;
    border-radius: 50%;
    background: pink;
    box-shadow: 2px 2px 6px -3px #ddd, 
    -3px -3px 4px -2px #000;
    &.cycle-mode-btn {
        width: 20vh;
        height: 20vh;
    }
`

const CycleModeBtn = (props) => {
    const {
        mixModeNum,
        setMixModeNum,
        mixMode
    } = useContext(AppContext);

    const modeSelectHandler = () => {
        setMixModeNum((mixModeNum + 1) % 16)
      }
    return (
        <StyledCycleModeBtn className="cycle-mode-btn" aria-label="mode-cycler" onClick={modeSelectHandler}>
        {mixMode}
        </StyledCycleModeBtn>
    )
};

export default CycleModeBtn; 

/*

import styled from 'styled-components';
import ModeIcons from './modeicons'
// import { graphql, useStaticQuery } from 'gatsby';
import Incrementor from './incrementor'
import {BlenderAppContext} from '../../pages/page-a'

const CyclerBtnWrapper = styled.button`
    position: relative;  
    padding: 0;
    border-radius: 50%;
    margin: 3vh auto 0;
    height: 35vw;
    width: 35vw;
    box-shadow: 2px 2px 6px -3px #ddd, 
    -3px -3px 4px -2px #000;
      & > svg {  
      height: 100%;
      width: 100%;
      }
     
`
const CyclerBtn = () => {
  const {modeSelectHandler} = useContext(BlenderAppContext);
  return (
    <CyclerBtnWrapper className="cycler" aria-label="mode-cycler" onClick={modeSelectHandler} >
        <ModeIcons />
        <Incrementor />
    </CyclerBtnWrapper>
  )
};

export default CyclerBtn;

*/