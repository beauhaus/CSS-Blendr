import React, { useContext } from 'react';
import styled from 'styled-components';
import {AppContext} from '../../../pages/page-b'

const StyledGridBtn = styled.button`
    ${'' /* grid-column: 4/5;
    grid-row: 1; */}
    position: relative;
    z-index: 3;
    border-radius: 4px;
    width: 25%;
    height: 100%;
    color: #000;
    background: transparent;
    border-radius: 8px;
    ${'' /* border: 1px dashed #fff; */}
`

const GridBtn = (props) => {
    const {
        setUploadMode,
        setPaintMode
    } = useContext(AppContext);
    
    const gridBtnHandler = () => {
        setPaintMode(false)
        setUploadMode(false);
      }
    return (<StyledGridBtn className="paint-img-btn" onClick={gridBtnHandler}>GRID</StyledGridBtn>
    )
};

export default GridBtn; 