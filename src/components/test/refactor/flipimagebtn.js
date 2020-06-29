import React, { useContext } from 'react';
import styled from 'styled-components';
import {AppContext} from '../../../pages/page-b'

const StyledFlipImageBtn = styled.button`
    border-radius: 12px;
    background: burlywood;
    &.flip-img-btn {
        width: 28vh;
        height: 20vh;
    }
`

const FlipImageBtn = (props) => {
    const {
        addBtnHandler,
    } = useContext(AppContext);
    console.log(">FlipImageBtn", props);
    return (
        <StyledFlipImageBtn className="flip-img-btn">flip

        </StyledFlipImageBtn>
    )
};

export default FlipImageBtn; 