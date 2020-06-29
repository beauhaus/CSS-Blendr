import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../../pages/page-b'

const StyledTapModeBtn = styled.button`
 grid-row:1/-1;
    grid-column: 1/-1;
    background: transparent;
    position: relative;
    z-index: 2;
`

const TapModeBtn = (props) => {
    const {
        tapModeBtnHandler,
        addImageMode
    } = useContext(AppContext);
    console.log(">TapModeBtn", props);
    return (
        <>
            {!addImageMode && 
            <StyledTapModeBtn onClick={tapModeBtnHandler} className="tap-mode-btn">TAPMODE</StyledTapModeBtn>}
        </>
    )
};

export default TapModeBtn; 