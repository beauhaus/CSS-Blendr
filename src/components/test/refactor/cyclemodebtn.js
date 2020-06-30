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
        modeNum,
        setModeNum
    } = useContext(AppContext);

    const modeSelectHandler = () => {
        setModeNum((modeNum + 1) % 16)
      }
    return (
        <StyledCycleModeBtn onClick={modeSelectHandler} className="cycle-mode-btn">{modeNum}
        </StyledCycleModeBtn>
    )
};

export default CycleModeBtn; 