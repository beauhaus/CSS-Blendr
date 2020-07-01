import React, { useState, createContext, useEffect } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import useGalleryImages from '../components/hooks/use-gallery-images'
import DecorFrame from '../components/test/refactor/decorframe'
import ViewerFrameContainer from '../components/test/refactor/viewerframecontainer'
import BlendControls from '../components/test/refactor/blendcontrols'
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
  grid-template-rows: 13vh 50vh 1vh 20vh 16vh;

  .outer-frame-container {
    grid-row: 2;
    border-radius: 10px;
    position: relative;
    margin: 0 3vw;
  }
`

const PageB = (props) => {
  const mixModesArray = useMdx();
  const nativeGalleryImages = useGalleryImages();

  const [tapMode, setTapMode] = useState(false)
  const [addImageMode, setAddImageMode] = useState(false)
  const [paintMode, setPaintMode] = useState(false)
  const [uploadMode, setUploadMode] = useState(false)
  const [topAlphaVal, setTopAlphaVal] = useState(100);
  const [alphaToggle, setAlphaToggle] = useState(false);
  const [mixModeNum, setMixModeNum] = useState(0);
  const [flipTriggerVal, setFlipTriggerVal] = useState(false)
  const [combinedImageArray, setCombinedImageArray] = useState([])
  const [defaultImages, setDefaultImages] = useState([])
  const [usrImages, setUsrImages] = useState('');
  const [newImageURL, setNewImageURL] = useState('');
  const [selectedFileName, setSelectedFileName] = useState('')
  const [testState, setTestState] = useState('NO!');

  // console.clear();

  useEffect(() => { //TODO: necessary?!?!
    setDefaultImages(nativeGalleryImages)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setCombinedImageArray([
      ...usrImages,
      ...defaultImages
    ])
  }, [defaultImages, usrImages, setCombinedImageArray])


  return (
    <AppContext.Provider
      value={{
        mixMode: mixModesArray[mixModeNum],
        mixModeNum,
        setMixModeNum,
        flipTriggerVal,
        setFlipTriggerVal,
        combinedImageArray,
        setCombinedImageArray,
        defaultImages,
        setDefaultImages,
        usrImages,
        setUsrImages,
        newImageURL,
        setNewImageURL,
        selectedFileName,
        setSelectedFileName,
        testState,
        setTestState,
        
        tapMode,
        setTapMode,
        uploadMode,
        setUploadMode,
        addImageMode,
        setAddImageMode,
        paintMode,
        setPaintMode,
        topAlphaVal,
        setTopAlphaVal,
        alphaToggle,
        setAlphaToggle
      }}>
      <PanelBG />
      <PageBWrapper className="page-b-wrapper">
        <div className="outer-frame-container">
          <DecorFrame />
          <ViewerFrameContainer />
        </div>
        <BlendControls />
      </PageBWrapper>
    </AppContext.Provider>


  )
};

const useMdx = () => {
  const data = useStaticQuery(graphql`
  query {
    allMdx(sort: {fields: frontmatter___display_order}) {
      nodes {
        frontmatter {
          title
        }
      }
    }
  }
`)
  const resultArray = data.allMdx.nodes.map(item => item.frontmatter.title)
  return resultArray;
}



export default PageB;
