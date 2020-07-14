import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import {AppContext} from '../../../pages/page-b'

const StyledModeNameDisplay2 = styled.h2`
        color: #222;
        animation: modeNameUp 3s ease-in-out forwards;
`
const StyledModeNameDisplay = styled.h2`
        color: #222;
        font-weight: bold;
        animation: modeNameUp 3s ease-in-out forwards;
    }
    &.display-static {
        color: #eee;
    }
`

const ModeNameDisplay = () => {
    const {
        tapMode,
        addImageMode,
        mixModeNum,
        setMixModeNum,
        mixMode
    } = useContext(AppContext);

useEffect(()=>{
console.log("mixMode useEffect Ran")
},[mixMode])
    
    return (
        
           (mixModeNum % 2 )? 
           <StyledModeNameDisplay className="mode-name-display">{mixMode}</StyledModeNameDisplay>
           :
           <StyledModeNameDisplay2 className="mode-name-display">{mixMode}</StyledModeNameDisplay2>

           
           )
        };
        
{/* {(!tapMode && !addImageMode) && <StyledModeNameDisplay className="display-animated">{mixMode}</StyledModeNameDisplay>} */}
{/* {(tapMode && !addImageMode) && <StyledModeNameDisplay className="display-static">{mixMode}</StyledModeNameDisplay>} */}
{/* {console.log("tap and !image",tapMode ,addImageMode)} */}
export default ModeNameDisplay;