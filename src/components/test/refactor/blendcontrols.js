import React, { useContext } from 'react';
import styled from 'styled-components';
import {AppContext} from '../../../pages/page-b'
import CycleModeBtn from './cyclemodebtn'
import FlipImageBtn from './flipimagebtn'
// import IncrementorLights from './incrementorlights'


const StyledBlendControls = styled.div`
    grid-row: 4;
    ${'' /* border: 1px solid coral; */}
    width: 96vw;
    height: 100%;
    margin:auto;
    position: relative;
    display: flex;
    justify-content: center;
    
    & button {
      margin: auto;
    }
    .cycle-btn-container {
        ${'' /* border:1px dashed whitesmoke; */}
        width: 48vw;
        height: 100%;
        margin: auto;
        display:grid;
    }
  
`

const BlendControls = (props) => {
  
    return (
        <StyledBlendControls className="BlendControls">
            <FlipImageBtn/>
            <div className="cycle-btn-container">
                <CycleModeBtn/>
            </div>
        </StyledBlendControls>
    )
};

export default BlendControls; 