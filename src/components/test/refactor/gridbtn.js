import React, { useContext } from 'react';
import styled from 'styled-components';
import {AppContext} from '../../../pages/page-b'
import DefaultGridIcon from './icon-components/defaultgridicon';
// import AddImgIcon from './addimageicon'
// import AddImageBtn from './addImagebtn';

const StyledGridBtn = styled.button`
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
    return (<StyledGridBtn className="paint-img-btn" onClick={gridBtnHandler}>
    <DefaultGridIcon/>
    </StyledGridBtn>
    )
};

export default GridBtn; 