import React, { useContext } from 'react';
import styled from 'styled-components';
import {AppContext} from '../../../pages/page-b'

const StyledPaintBtn = styled.button`
    ${'' /* grid-column: 4/5;
    grid-row: 1; */}
    position: relative;
    z-index: 3;
    border-radius: 4px;
    width: 25%;
    height: 100%;
    color: #fff;
    background: transparent;
    border-radius: 8px;
    ${'' /* border: 1px dashed #fff; */}
`

const PaintBtn = (props) => {
    const {
        setUploadMode,
        setPaintMode
    } = useContext(AppContext);
    
    const paintImgBtnHandler = () => {
        setPaintMode(true)
        setUploadMode(false);
      }
    return (<StyledPaintBtn className="paint-img-btn" onClick={paintImgBtnHandler}>PAINT</StyledPaintBtn>
    )
};

export default PaintBtn; 