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
        addBtnHandler,
    } = useContext(AppContext);
    console.log(">CycleModeBtn", props);
    return (

        <StyledCycleModeBtn className="cycle-mode-btn">modebtn

        </StyledCycleModeBtn>
    )
};

export default CycleModeBtn; 