import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../../../pages/page-b'
import 'typeface-rajdhani'
import ImagePairsDisplay from './imagepairsdisplay'
import SwitchImgBtn from './switchimgbtn'
import AlphaSlider from './alphaslider'
import ImageMenuPanel from './imagemenunav'
import TapModeBtn from './tapmodebtn'
import AlphaValDisplay from './alphavaldisplay'
import ModeNameDisplay from './modenamedisplay'
import DefaultThumbnailsGrid from './defaultthumbnailsgrid'
import PaintWidget from './paintwidget'
import UsrThumbnailsGrid from './usrthumbnailsgrid'

const StyledViewerFrameContainer = styled.div`
    border-radius: 10px;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 8vh 42vh;
    position: relative;
    h2.mode-name-display {
      position: absolute;
      bottom: 2vh;
      ${'' /* height: 8vh; */}
      padding: 1vh 2vh;
      width: 60%;
      left: 20%;
      color: #ddd;
      text-shadow: 1px 1px 0px #000;
      font-weight: 100;
      font-size: 4rem;
      z-index: 1;
      border-radius: 4px;
      background: rgba(218, 243, 255, 0.3);
      overflow: hidden;
      font: normal 2.5rem "Rajdhani", -apple-system, Segoe UI, Roboto;
      box-shadow: 2px 2px 2px rgba(0,0,0,0.3),
        inset 1px 1px 0 0 rgba(255, 255, 255, 0.5),
        inset -1px -1px 0 0 rgba(00, 00, 00, 0.5);
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
    }
`
const ViewerFrameContainer = () => {
  const {
    currentTop,
    addImageMode
  } = useContext(AppContext);
  return (
    <StyledViewerFrameContainer className="viewer-frame-container">
      <TapModeBtn />
      <AlphaSlider />
      <ModeNameDisplay />
      {currentTop  && <ImagePairsDisplay />}
      <SwitchImgBtn />
      {addImageMode && <ImageMenuPanel />}
      <AlphaValDisplay />
      <DefaultThumbnailsGrid />
      <PaintWidget />
      <UsrThumbnailsGrid />
    </StyledViewerFrameContainer>
  )
}

export default ViewerFrameContainer;