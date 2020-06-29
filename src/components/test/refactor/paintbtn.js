import React, { useContext } from 'react';
import styled from 'styled-components';
import {AppContext} from '../../../pages/page-b'

const StyledPaintBtn = styled.button`
    ${'' /* grid-column: 4/5;
    grid-row: 1; */}
    position: relative;
    z-index: 3;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    color: #fff;
    background: fuchsia;
    border-radius: 8px;
`

const PaintBtn = (props) => {
    const {
        setUploadMode,
        setPaintMode
    } = useContext(AppContext);
    
    const paintImgBtnHandler = () => {
        setPaintMode(true)
        setUploadMode(false);
        console.log(">PaintBtn clicked");
      }
    return (<StyledPaintBtn className="paint-img-btn" onClick={paintImgBtnHandler}>PAINT</StyledPaintBtn>
    )
};

export default PaintBtn; 