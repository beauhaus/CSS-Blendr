import React, {useContext} from 'react'
import styled from 'styled-components'
import { AppContext } from '../../../pages/page-b'

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
`
const ViewerFrameContainer = () => {
  const {
    currentTop,
    addImageMode
} = useContext(AppContext);
  return (
    <StyledViewerFrameContainer className="viewer-frame-container">
      <TapModeBtn/>
      <AlphaSlider/>
      <ModeNameDisplay/>
      {{currentTop} && <ImagePairsDisplay/>}
      <SwitchImgBtn/>
      {addImageMode &&<ImageMenuPanel/>}
      <AlphaValDisplay/>
      <DefaultThumbnailsGrid/>
      <PaintWidget/>
      <UsrThumbnailsGrid/>
    </StyledViewerFrameContainer>
  )
}

export default ViewerFrameContainer;