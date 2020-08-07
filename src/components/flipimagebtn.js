import React, { useContext } from "react";
import styled from "styled-components";
import ImagePairsFlip from "./imagepairsflip";

import { AppContext } from "../pages/application";

const StyledFlipImageBtn = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;


    border-radius: 20px; /* 12px*/
    ${"" /* width: 48vw;  */}
    ${"" /* height: 100%; */}
    ${"" /* position: relative; */}
    background: transparent;
    box-shadow: inset 2px 2px 3px 0 #fff,
            inset -2px -2px 3px 0 #000,
            0 0 3px 2px #666,
            1px 1px 2px #000;
    perspective: 200px;
    overflow: hidden;
    display: grid;
        &:before {
        content: "";
        box-shadow: -2px -2px 3px 0 #000,
                    2px 2px 2px 0 #fff;
        border-radius: 15px;
        width: 95%;
        height: 93%;
        opacity: .9;
        margin: auto;
        ${
          "" /* background: linear-gradient(90deg, #2C3021 0%, #545D49 50%, #5F6B57 100%); */
        }
        background: transparent;
        overflow: hidden;
    }   
        
      
    
`;
const FlipImageBtn = () => {
  const {
    flipTriggerVal,
    setFlipTriggerVal,
    addImageMode,
    currentTop,
  } = useContext(AppContext);

  const flipTriggerHandler = () => {
    setFlipTriggerVal(!flipTriggerVal);
  };

  return (
    <StyledFlipImageBtn
      className={addImageMode ? "flip-img-btn-second-task" : "flip-img-btn"}
      aria-label="image-flipper"
      onClick={flipTriggerHandler}
    >
      {currentTop && <ImagePairsFlip className="img-pairs-flip" />}
    </StyledFlipImageBtn>
  );
};

export default FlipImageBtn;
