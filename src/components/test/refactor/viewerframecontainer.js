import React from 'react'
import styled from 'styled-components'
import ImagePairs from './imagepairs'
import AddImageBtn from './addImagebtn'
import AlphaBtn from './alphabtn'
import CutomImagePanel from './customimagepanel'
import TapModeBtn from './tapmodebtn'
import AlphaValDisplay from './alphavaldisplay'
import ModeNameDiaplay from './modenamedisplay'
import ThumbnailsGrid from './thumbnailsgrid'
import PaintWidget from './paintwidget'

const StyledViewerFrameContainer = styled.div`
    ${'' /* background: pink; */}
    border-radius: 10px;
    overflow: hidden;
    ${'' /* width: 100%;
    height: 100%; */}
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 8vh 43vh;
`
const ViewerFrameContainer = () => {
  return (
    <StyledViewerFrameContainer className="viewer-frame-container">
      <ImagePairs/>
      <AddImageBtn/>
      <AlphaBtn/>
      <CutomImagePanel/>
      <TapModeBtn/>
      <AlphaValDisplay/>
      <ModeNameDiaplay/>
      <ThumbnailsGrid/>
      <PaintWidget/>
    </StyledViewerFrameContainer>
  )
}

export default ViewerFrameContainer;