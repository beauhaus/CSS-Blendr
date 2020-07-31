import React, { useState, createContext, useEffect } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'react-scroll'
import { animateScroll } from 'react-scroll'
import useGalleryImages from '../components/test/refactor/hooks/use-gallery-images'
import DecorFrame from '../components/test/refactor/decorframe'
import ViewerFrameContainer from '../components/test/refactor/viewerframecontainer'
import BlendControls from '../components/test/refactor/blendcontrols'
import NoiseBG from '../components/content/noisebg'
import MixModeArticle from '../components/test/refactor/mode-article'

export const AppContext = createContext();

const PageBWrapper = styled.div`
  background: fuchsia;
  width: 100vw;
  height: auto;
  ${'' /* min-height: 100vh; */}
  background: linear-gradient( 35deg, whitesmoke 0%, darkgrey 70%);
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 13vh 48vh 3vh 20vh 16vh 100vh;
  ${'' /* overflow: scroll; */}
  .outer-frame-container {
    grid-row: 2;
    border-radius: 10px;
    position: relative;
    margin: 0 3vw;
  }
  ${'' /* #mode-article {
    grid-row: 6;
    border: 1px dashed #fff;
    height: 80vh;
    width: 98vw;
    margin: auto;
    display: grid;
    background: lemonchiffon;
    grid-template-columns: 45vw 45vw;
    grid-template-rows: 70vh 10vh;
    position: relative;

    p {
      grid-column: 1/-1;
      grid-row: 1;
      font-size: 3rem;
    }
    .return-to-top-btn {
      grid-column: 2;
      grid-row: 2;
      margin: 0;
      width: 45vw;
      height: 10vh;
      border: 1px solid lemonchiffon;
      box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.5);
    }
  } */}
`

const PageB = (props) => {
  const mixModesArray = useMdx();
  const nativeGalleryImages = useGalleryImages();
  const [tapMode, setTapMode] = useState(false)
  const [addImageMode, setAddImageMode] = useState(false)
  const [paintMode, setPaintMode] = useState(false)
  const [uploadMode, setUploadMode] = useState(false)
  const [topAlphaVal, setTopAlphaVal] = useState(100);
  const [alphaModifyMode, setAlphaModifyMode] =useState(false);
  const [mixModeNum, setMixModeNum] = useState(0);
  const [flipTriggerVal, setFlipTriggerVal] = useState(false)
  const [defaultImageArray, setDefaultImageArray] = useState([])
  const [usrImages, setUsrImages] = useState('');
  const [usrImgArray, setUsrImgArray] = useState([]);
  const [newImageURL, setNewImageURL] = useState('');
  const [selectedFileName, setSelectedFileName] = useState('')
  const [currentTop, setCurrentTop] = useState({});
  const [currentBot, setCurrentBot] = useState({});
  const [usrImgMode, setUsrImgMode] = useState('');
  const [gridMode, setGridMode] = useState('');
  const [readArticleToggle, setReadArticleToggle] = useState(false);

  useEffect(() => { //TODO: necessary?!?!
    setDefaultImageArray(nativeGalleryImages)
    if(defaultImageArray.length > 0) {
      setCurrentTop(defaultImageArray[0])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setDefaultImageArray])
  
  // console.log("default ImgArr:",defaultImageArray);

  return (
    <AppContext.Provider
      value={{
        mixMode: mixModesArray[mixModeNum],
        mixModeNum,
        setMixModeNum,
        flipTriggerVal,
        setFlipTriggerVal,
        defaultImageArray,
        setDefaultImageArray,
        usrImages,
        setUsrImages,
        newImageURL,
        setNewImageURL,
        selectedFileName,
        setSelectedFileName,
        usrImgMode,
        setUsrImgMode,
        setGridMode,
        gridMode,
        usrImgArray, 
        setUsrImgArray,
        currentTop,
        currentBot,
        setCurrentTop,
        setCurrentBot,
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
        alphaModifyMode,
        setAlphaModifyMode,
        readArticleToggle,
        setReadArticleToggle
      }}>
      <NoiseBG />
      {console.log("PGB readArt: ", readArticleToggle)}
      <PageBWrapper className="page-b-wrapper">
        <div className="outer-frame-container">
          <DecorFrame />
          <ViewerFrameContainer />
        </div>
        <BlendControls />
      <MixModeArticle/>
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
