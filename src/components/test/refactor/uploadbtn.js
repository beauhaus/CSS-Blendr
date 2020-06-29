import React, { useContext } from 'react';
import styled from 'styled-components';
import {AppContext} from '../../../pages/page-b'

const StyledUploadBtn = styled.button`
    ${'' /* grid-column: 3/4;
    grid-row: 1; */}
    position: relative;
    z-index: 3;
    border-radius: 4px;
    width: 25%;
    height: 100%;
    background: transparent;
    border-radius: 8px;
    border: 1px dashed #fff;
`

const UploadBtn = (props) => {
    const {
        uploadMode,
        setUploadMode,
        setPaintMode
    } = useContext(AppContext);
    const uploadImgBtnHandler = () => {
        setUploadMode(!uploadMode)
        setPaintMode(false)
      }
    return (
        <StyledUploadBtn className="upload-img-btn" onClick={uploadImgBtnHandler}>UP</StyledUploadBtn>
    )
};

export default UploadBtn; 