import React, {useContext} from 'react'
import styled from 'styled-components'
import { AppContext } from '../../../pages/page-b'

import ImagePairs from './imagepairs'
import AddImageBtn from './addImagebtn'
import AlphaSlider from './alphaslider'
import CustomImagePanel from './customimagepanel'
import TapModeBtn from './tapmodebtn'
import AlphaValDisplay from './alphavaldisplay'
import ModeNameDisplay from './modenamedisplay'
import ThumbnailsGrid from './thumbnailsgrid'
import PaintWidget from './paintwidget'

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
    selTop
} = useContext(AppContext);
  return (
    <StyledViewerFrameContainer className="viewer-frame-container">
      <TapModeBtn/>
      <AlphaSlider/>
      <ModeNameDisplay/>
      {(selBot && selTop) && <ImagePairs/>}
      <AddImageBtn/>
      <CustomImagePanel/>
      <AlphaValDisplay/>
      <ThumbnailsGrid/>
      <PaintWidget/>
    </StyledViewerFrameContainer>
  )
}

export default ViewerFrameContainer;