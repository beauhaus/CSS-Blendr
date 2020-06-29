import React, { useContext } from 'react';
import styled from 'styled-components';
import {AppContext} from '../../../pages/page-b'

const StyledAlphaBtn = styled.button`
    grid-column: 3;
    grid-row: 1;
    position: relative;
    z-index: 3;
    border-radius: 4px;
    width: 100%;
    height: 100%;
`
const AlphaBtn = (props) => {
    const {
        tapMode,
        alphaBtnHandler,
        addImageMode
    } = useContext(AppContext);
    
    return ((tapMode && !addImageMode)? 
        <StyledAlphaBtn className="alpha-btn" onClick={alphaBtnHandler}>alpha</StyledAlphaBtn>
        :
        ''
    )
};

export default AlphaBtn; 