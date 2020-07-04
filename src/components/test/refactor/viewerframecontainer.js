import React, {useContext} from 'react'
import styled from 'styled-components'
import { AppContext } from '../../../pages/page-b'

import ImagePairs from './imagepairs'
import SwitchImgBtn from './switchImagebtn'
import AlphaSlider from './alphaslider'
import ImageMenuPanel from './imagemenunav'
import TapModeBtn from './tapmodebtn'
import AlphaValDisplay from './alphavaldisplay'
import ModeNameDisplay from './modenamedisplay'
import ThumbnailsGrid from './thumbnailsgrid'
import PaintWidget from './paintwidget'
import ImageChangeSwitchBtn from './switchImagebtn'

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
    selBot,
    selTop,
    addImageMode
} = useContext(AppContext);
  return (
    <StyledViewerFrameContainer className="viewer-frame-container">
      <TapModeBtn/>
      <AlphaSlider/>
      <ModeNameDisplay/>
      {(selBot && selTop) && <ImagePairs/>}
      <SwitchImgBtn/>
      {addImageMode &&<ImageMenuPanel/>}
      <AlphaValDisplay/>
      <ThumbnailsGrid/>
      <PaintWidget/>
    </StyledViewerFrameContainer>
  )
}

export default ViewerFrameContainer;