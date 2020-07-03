import React, { useContext } from 'react';
import styled from 'styled-components';
import {AppContext} from '../../../pages/page-b'

const StyledModeNameDiaplay = styled.h2`
 position: absolute;
    bottom: 2vh;
    width: 50%;
    left: 25%;
    border: 1px solid #444;
    background: #222;
    color: #fff;
    font-weight: 100;
`

const ModeNameDiaplay = (props) => {
    const {
        tapMode,
        addImageMode
    } = useContext(AppContext);

    return (
        <>
        {(tapMode && !addImageMode) && <StyledModeNameDiaplay className="mode-name-display">Soft-light</StyledModeNameDiaplay>}
        </>
    )
};

export default ModeNameDiaplay; 