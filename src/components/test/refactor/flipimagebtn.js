import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../../pages/page-b'

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
        flipTriggerVal,
        setFlipTriggerVal
    } = useContext(AppContext);

    const flipTriggerHandler = () => {
        setFlipTriggerVal(!flipTriggerVal)
    }

    return (
        <StyledFlipImageBtn
            className="flip-img-btn"
            onClick={flipTriggerHandler}
        >
            {flipTriggerVal && "true"}
        </StyledFlipImageBtn>
    )
};

export default FlipImageBtn;
