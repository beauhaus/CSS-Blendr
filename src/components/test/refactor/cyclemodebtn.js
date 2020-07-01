import React, { useContext } from 'react';
import styled from 'styled-components';
import {AppContext} from '../../../pages/page-b'

const StyledCycleModeBtn = styled.button`
    border-radius: 50%;
    background: pink;
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
        <StyledCycleModeBtn onClick={modeSelectHandler} className="cycle-mode-btn">
        {mixMode}
        </StyledCycleModeBtn>
    )
};

export default CycleModeBtn; 