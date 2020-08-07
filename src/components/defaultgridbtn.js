import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../pages/application";
import DefaultGridIcon from "./icon-components/defaultgridicon";

const StyledDefaultGridBtn = styled.button`
  position: relative;
  z-index: 3;
  border-radius: 4px;
  width: 25%;
  height: 100%;
  color: #000;
  background: transparent;
  border-radius: 8px;
`;

const DefaultGridBtn = (props) => {
  const { setUsrImgMode, setPaintMode, setGridMode, gridMode } = useContext(
    AppContext
  );

  const gridBtnHandler = () => {
    setPaintMode(false);
    setUsrImgMode(false);
    setGridMode(true);
  };

  return (
    <StyledDefaultGridBtn
      className="default-image-grid-btn"
      onClick={gridBtnHandler}
    >
      <DefaultGridIcon toggle={gridMode} />
    </StyledDefaultGridBtn>
  );
};

export default DefaultGridBtn;
