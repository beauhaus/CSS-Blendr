import React, { useState, createContext, useEffect } from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import useGalleryImages from "../components/test/refactor/hooks/use-gallery-images";
import DecorFrame from "../components/test/refactor/decorframe";
import ViewerFrameContainer from "../components/test/refactor/viewerframecontainer";
import BlendControls from "../components/test/refactor/blendcontrols";
import NoiseBG from "../components/test/refactor/noisebg";

import MixModeArticle from "../components/test/refactor/mode-article";

export const AppContext = createContext();

const PageBWrapper = styled.div`
  background: fuchsia;
  width: 100vw;
  height: auto;
  ${"" /* min-height: 100vh; */}
  background: linear-gradient( 35deg, whitesmoke 0%, darkgrey 70%);
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 13vh 48vh 3vh 20vh 16vh 100vh;
  ${"" /* overflow: scroll; */}
  .outer-frame-container {
    grid-row: 2;
    border-radius: 10px;
    position: relative;
    margin: 0 3vw;
  }
`;

const PageB = (props) => {
  const mixModesArray = useMdx();
  const nativeGalleryImages = useGalleryImages();
  const [tapMode, setTapMode] = useState(false);
  const [addImageMode, setAddImageMode] = useState(false);
  const [paintMode, setPaintMode] = useState(false);
  const [uploadMode, setUploadMode] = useState(false);
  const [topAlphaVal, setTopAlphaVal] = useState(100);
  const [alphaModifyMode, setAlphaModifyMode] = useState(false);
  const [mixModeNum, setMixModeNum] = useState(0);
  const [flipTriggerVal, setFlipTriggerVal] = useState(false);
  const [defaultImageArray, setDefaultImageArray] = useState([]);
  const [usrImages, setUsrImages] = useState("");
  const [usrImgArray, setUsrImgArray] = useState([]);
  const [newImageURL, setNewImageURL] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");
  const [currentTop, setCurrentTop] = useState({});
  const [currentBot, setCurrentBot] = useState({});
  const [usrImgMode, setUsrImgMode] = useState("");
  const [gridMode, setGridMode] = useState("");
  const [readArticleToggle, setReadArticleToggle] = useState(false);

  useEffect(() => {
    //TODO: necessary?!?!
    setDefaultImageArray(nativeGalleryImages);
    if (defaultImageArray.length > 0) {
      setCurrentTop(defaultImageArray[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setDefaultImageArray]);

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
        setReadArticleToggle,
      }}
    >
      <NoiseBG />
      {console.log("PGB readArt: ", readArticleToggle)}
      <PageBWrapper className="page-b-wrapper">
        <div className="outer-frame-container">
          <DecorFrame />
          <ViewerFrameContainer />
        </div>
        <BlendControls />
        <MixModeArticle />
      </PageBWrapper>
    </AppContext.Provider>
  );
};

const useMdx = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___display_order }) {
        nodes {
          frontmatter {
            title
          }
        }
      }
    }
  `);
  const resultArray = data.allMdx.nodes.map((item) => item.frontmatter.title);
  return resultArray;
};

export default PageB;
