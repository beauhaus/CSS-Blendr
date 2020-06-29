import React, { useState, createContext } from 'react';
import styled from 'styled-components';
import DecorFrame from '../components/test/refactor/decorframe'
import ViewerFrameContainer from '../components/test/refactor/viewerframecontainer'
import PanelBG from '../components/content/panelbg'

export const AppContext = createContext();

const PageBWrapper = styled.div`
  background: fuchsia;
  width: 100vw;
  height: 100vh; //?
  max-height: 100vh;
  background: linear-gradient( 35deg, whitesmoke 0%, darkgrey 70%);
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 13vh 53vh 24vh 10vh;

  .frame-container {
    grid-row: 2;
    border-radius: 10px;
    position: relative;
    margin: 0 2vw;
  }
`

const PageB = (props) => {
  const [tapMode, setTapMode] = useState(false)
  const [alphaModifyMode, setAlphaModifyMode] = useState(false)
  const [addImageMode, setAddImageMode] = useState(false)
  const [paintMode, setPaintMode] = useState(false)
  const [uploadMode, setUploadMode] = useState(false)

  console.clear();
  
  const alphaBtnHandler = () => {
    setAlphaModifyMode(!alphaModifyMode)
  }
  const tapModeBtnHandler = () => {
    setTapMode(!tapMode)
  }

  return (
    <AppContext.Provider
      value={{
        alphaBtnHandler,
        // uploadImgBtnHandler,
        tapModeBtnHandler,
        alphaModifyMode,
        imageArray,
        tapMode,
        setTapMode,
        uploadMode,
        setUploadMode,
        addImageMode,
        setAddImageMode,
        paintMode,
        setPaintMode
      }}>
      <PanelBG />
      <PageBWrapper className="page-b-wrapper">
        <div className="frame-container">
          <DecorFrame />
          <ViewerFrameContainer />
        </div>
      </PageBWrapper>
    </AppContext.Provider>


  )
};


const imageArray = [
  { id: 101, name: "testImg1" },
  { id: 102, name: "testImg2" },
  { id: 103, name: "testImg3" },
  { id: 104, name: "testImg4" },
  { id: 105, name: "testImg5" },
  { id: 106, name: "testImg6" },
  { id: 107, name: "testImg7" },
  { id: 108, name: "testImg8" },
  { id: 109, name: "testImg9" },
  { id: 1010, name: "testImg10" },
  { id: 1011, name: "testImg11" },
  { id: 1012, name: "testImg12" },
  { id: 1013, name: "testImg13" },
  { id: 1014, name: "testImg14" }

]

export default PageB;
