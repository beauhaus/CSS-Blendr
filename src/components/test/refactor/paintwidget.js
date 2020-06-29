import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../../pages/page-b'

const StyledPaintWidget = styled.div`
  background: brown;
    grid-row: 2;
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