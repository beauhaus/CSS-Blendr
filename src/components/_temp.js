import React, { useContext } from 'react';
import styled from 'styled-components';
import {AppContext} from '../pages/application'

const StyledTEMP = styled.div`

`

const TEMP = (props) => {
    const {
        addBtnHandler,
    } = useContext(AppContext);
    console.log(">TEMP", props);
    return (

        <StyledTEMP className="TEMP">
            
        </StyledTEMP>
    )
};

export default TEMP; 