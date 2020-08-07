import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../pages/application'

const StyledPaintWidget = styled.div`
  background: #d8c8a6;
    grid-row: 2/4;
    grid-column: 1/-1;
    position: relative;
`

const PaintWidget = (props) => {
    const {
        paintMode
    } = useContext(AppContext);
    return (
        <>
            {paintMode && <StyledPaintWidget className="paint-widget">PAINT WIDGET</StyledPaintWidget>}
        </>
    )
};

export default PaintWidget; 