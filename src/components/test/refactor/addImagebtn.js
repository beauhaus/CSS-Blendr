import React, { useContext } from 'react';
import styled from 'styled-components';
import {AppContext} from '../../../pages/page-b'

// modify enter / confirm/cancel
const StyledAddImageBtn = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    border-radius: 4px;
    width: 10%;
    height: 10%;
    outline: 1px solid red;
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