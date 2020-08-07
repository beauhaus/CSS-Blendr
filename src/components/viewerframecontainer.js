import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../pages/application";
import "typeface-rajdhani";
import ImagePairsDisplay from "./imagepairsdisplay";
import SwitchImgBtn from "./switchimgbtn";
import AlphaSlider from "./alphaslider";
import ImageMenuPanel from "./imagemenunav";
import TapModeBtn from "./tapmodebtn";
import AlphaValDisplay from "./alphavaldisplay";
import MixModeDisplay from "./mixmodedisplay";
import DefaultThumbnailsGrid from "./defaultthumbnailsgrid";
import PaintWidget from "./paintwidget";
import UsrThumbnailsGrid from "./usrthumbnailsgrid";
import ReadArticleIcon from "./icon-components/readarticleicon";

const StyledViewerFrameContainer = styled.div`
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  ${"" /* grid-template-rows: 8vh 40vh; */}
  grid-template-rows: 8vh 32vh 8vh;
  position: relative;
  overflow: hidden;
`;
const ViewerFrameContainer = () => {
  const { currentTop, addImageMode, readArticleToggle } = useContext(
    AppContext
  );

  return (
    <StyledViewerFrameContainer className="viewer-frame-container">
      <TapModeBtn />
      <AlphaSlider />
      {readArticleToggle && <ReadArticleIcon />}
      {!addImageMode && <MixModeDisplay />}
      {currentTop && <ImagePairsDisplay />}
      <SwitchImgBtn />
      {addImageMode && <ImageMenuPanel />}
      <AlphaValDisplay />
      <DefaultThumbnailsGrid />
      <PaintWidget />
      <UsrThumbnailsGrid />
    </StyledViewerFrameContainer>
  );
};

export default ViewerFrameContainer;
