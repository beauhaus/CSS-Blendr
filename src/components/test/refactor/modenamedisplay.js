import React, { useContext } from 'react';
import styled from 'styled-components';
import {AppContext} from '../../../pages/page-b'

const StyledModeNameDisplay = styled.h2`
    position: absolute;
    bottom: 2vh;
    width: 50%;
    left: 25%;
    ${'' /* border: 1px solid #444; */}
    background: #222;
    color: #fff;
    font-weight: 100;
    z-index: 1;
    ${'' /* background: hsla(0,0%,100%,.5);
    background: rgba(190, 236, 255, 0.5); */}
    background: rgba(255, 255, 255, 0.5);
    overflow: hidden;
    ${'' /* text-shadow: 1px 1px 0px rgba(0,0,0,0.25); */}
    box-shadow: 2px 2px 2px rgba(0,0,0,0.3),
        inset 1px 1px 0 0 rgba(255, 255, 255, 0.5),
        inset -1px -1px 0 0 rgba(100, 100, 100, 0.5);
    &.display-animated {
        color: rgb(190, 236, 255);
        color: #222;
    }
    &.display-static {
        color: #eee;
    }
    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        filter: blur(15px);
        z-index: 0;
    }
    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(170deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.3) 15%, rgba(255,255,255,0.2) 50%, transparent 50%, transparent 100%);
        z-index: 2;
    }
`

const ModeNameDiaplay = () => {
    const {
        tapMode,
        addImageMode
    } = useContext(AppContext);

    return (
        <>
        {(!tapMode && !addImageMode) && <StyledModeNameDisplay className="display-animated">Soft-light</StyledModeNameDisplay>}
        {(tapMode && !addImageMode) && <StyledModeNameDisplay className="display-static">Soft-light</StyledModeNameDisplay>}
        {/* {console.log("tap and !image",tapMode ,addImageMode)} */}
        </>
    )
};

export default ModeNameDiaplay;