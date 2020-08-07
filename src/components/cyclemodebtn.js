import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../pages/application";
import IncrementorLights from "./incrementorlights";
import ModeIcons from "./modeicons";

const StyledCycleModeBtn = styled.button`
  position: relative;
  padding: 0;
  border-radius: 50%;
  background: #333;
  box-shadow: 2px 2px 6px -3px #ddd, -3px -3px 4px -2px #000;
  margin: auto;
  &.cycle-mode-btn {
    width: 18vh;
    height: 18vh;
    .incrementor-lights {
      width: 94%;
      height: 94%;
    }
  }
`;

const CycleModeBtn = (props) => {
  const { mixModeNum, setMixModeNum } = useContext(AppContext);

  const modeSelectHandler = () => {
    setMixModeNum((mixModeNum + 1) % 16);
  };
  return (
    <StyledCycleModeBtn
      className="cycle-mode-btn"
      aria-label="mode-cycler"
      onClick={modeSelectHandler}
    >
      <IncrementorLights />
      <ModeIcons />
    </StyledCycleModeBtn>
  );
};

export default CycleModeBtn;
