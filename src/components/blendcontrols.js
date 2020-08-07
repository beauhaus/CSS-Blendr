import React from "react";
import styled from "styled-components";
import CycleModeBtn from "./cyclemodebtn";
import FlipImageBtn from "./flipimagebtn";
import FlipEffectsContainer from "./flipeffectscontainer";

const StyledBlendControls = styled.div`
  grid-row: 4;
  width: 96vw;
  height: 100%;
  margin: auto;
  display: flex;

  & button {
    margin: auto;
  }
  .cycle-btn-container {
    width: 48vw;
    height: 100%;
    margin: auto;
    display: grid;
  }
  .flip-img-btn-container {
    position: relative;
    width: 48vw;
    height: 100%;
    margin: auto;
    display: grid;
    border-radius: 22px;
    overflow: hidden;
    background: linear-gradient(90deg, #2c3021 0%, #545d49 50%, #5f6b57 100%);
  }

  .lines {
    fill: none;
    stroke: #7fb0e4;
    stroke-width: 1;
    mix-blend-mode: overlay;
    overflow: hidden;
  }
`;

const BlendControls = () => {
  return (
    <StyledBlendControls className="blend-controls">
      <div className="flip-img-btn-container">
        <FlipEffectsContainer />
        <FlipImageBtn />
      </div>
      <div className="cycle-btn-container">
        <CycleModeBtn />
      </div>
    </StyledBlendControls>
  );
};

export default BlendControls;
