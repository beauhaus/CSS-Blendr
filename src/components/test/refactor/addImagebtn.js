import React, { useContext } from 'react';
import styled from 'styled-components';
import {AppContext} from '../../../pages/page-b'

// modify enter / confirm/cancel
const StyledAddImageBtn = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    border-radius: 8px;
    width: 25%;
    height: 8vh;
    border: 1px dashed #000;
    background: transparent;
`

const AddImageBtn = (props) => {
    const {
        tapMode,
        addImageMode,
        setAddImageMode,
        setPaintMode
    } = useContext(AppContext);
    const addBtnHandler = () => {
        console.log("addBtnHandler clicked!")
        setAddImageMode(!addImageMode)
        setPaintMode(false)
      }
    console.log(">AddImageBtn", props);
    return (tapMode? 
        <StyledAddImageBtn className="add-img-btn" onClick={addBtnHandler}>{addImageMode?`x`:`+`}</StyledAddImageBtn>
        :
        ''
    )
};

export default AddImageBtn; 