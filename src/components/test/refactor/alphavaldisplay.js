import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../../pages/page-b'

const StyledAlphaValDisplay = styled.div`
 width: 60%;
    height: 60%;
    ${'' /* margin: 10%; */}
    display: grid;
    position: absolute;
    z-index: 4;
    top: 20%;
    left: 20%;
    ${'' /* border: 1px dashed navy; */}
    p {
      ${'' /* border: 1px dashed yellow; */}
      margin: auto;
      text-align: center;
      color: #fff;
      width: 100%;
      font-weight: 100;
      height: auto;
      font-size: 12rem;
    }
`

const AlphaValDisplay = (props) => {
    const {
        alphaModifyMode,
        addImageMode
    } = useContext(AppContext);
    return (
        <>
            {(alphaModifyMode && !addImageMode) && <StyledAlphaValDisplay className="alphaVal-display"><p>89%</p></StyledAlphaValDisplay>}
        </>
    )
};

export default AlphaValDisplay; 