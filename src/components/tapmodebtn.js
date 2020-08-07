import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../pages/application'

const StyledTapModeBtn = styled.button`
    grid-row:1/-1;
    grid-column: 1/-1;
    background: transparent;
    position: relative;
    z-index: 2;
    color: transparent;
`

const TapModeBtn = (props) => {
    const {
        addImageMode,
        setTapMode,
        tapMode
    } = useContext(AppContext);

    const tapModeBtnHandler = () => {
        setTapMode(!tapMode)
      }
    return (
        <>
            {!addImageMode && 
            <StyledTapModeBtn onClick={tapModeBtnHandler} className="tap-mode-btn">tapmode</StyledTapModeBtn>}
        </>
    )
};

export default TapModeBtn; 