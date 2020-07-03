import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../../pages/page-b'

const StyledAlphaValDisplay = styled.div`
    width: 100%;
    height: 50%;
    margin: auto;
    display: relative;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h2 {
      color: #fff;
      font-weight: 100;
      height: auto;
      font-size: 12rem;
    }
`

const AlphaValDisplay = (props) => {
    const {
        alphaModifyMode,
        addImageMode,
        topAlphaVal
    } = useContext(AppContext);
    return (
        <>
            {(alphaModifyMode && !addImageMode) && <StyledAlphaValDisplay className="alphaVal-display"><h2>{topAlphaVal}%</h2></StyledAlphaValDisplay>}
        </>
    )
};

export default AlphaValDisplay; 