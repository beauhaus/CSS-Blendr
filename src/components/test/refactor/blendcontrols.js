import React, { useContext } from 'react';
import styled from 'styled-components';
import {AppContext} from '../../../pages/page-b'
import CycleModeBtn from './cyclemodebtn'
import FlipImageBtn from './flipimagebtn'

const StyledBlendControls = styled.div`
    grid-row: 4;
    ${'' /* border: 1px solid coral; */}
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    
    & button {
      margin: auto;
    }
  
`

const BlendControls = (props) => {
    const {
        addBtnHandler,
    } = useContext(AppContext);
    console.log(">BlendControls", props);
    return (

        <StyledBlendControls className="BlendControls">
            <FlipImageBtn/>
            <CycleModeBtn/>
        </StyledBlendControls>
    )
};

export default BlendControls; 