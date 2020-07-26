import React, { useContext } from 'react';
import styled from 'styled-components';
import {AppContext} from '../../../pages/page-b'
import SwitchImgIcon from './switchimgicon'
// modify enter / confirm/cancel
const StyledSwitchImageBtn = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    border-radius: 8px;
    width: 25%;
    height: 8vh;
    background: transparent;
    ${'' /* display: grid;
    place-items: center; */}
`

const SwitchImageBtn = (props) => {
    const {
        tapMode,
        addImageMode,
        setGridMode,
        setAddImageMode,
        setPaintMode,
        setUsrImgMode
    } = useContext(AppContext);

    const addBtnHandler = () => {
        setAddImageMode(!addImageMode)
        setGridMode(true)
        setPaintMode(false)
        setUsrImgMode(false)
      }
    return (
        <>
        {tapMode && <StyledSwitchImageBtn className="switch-img-btn" onClick={addBtnHandler}>
            <SwitchImgIcon/>
        </StyledSwitchImageBtn>}
        </>
    )
};

export default SwitchImageBtn; 