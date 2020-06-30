import React, { useState, createContext } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

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
  const modesArray = useMdx();
  const [tapMode, setTapMode] = useState(false)
  const [addImageMode, setAddImageMode] = useState(false)
  const [paintMode, setPaintMode] = useState(false)
  const [uploadMode, setUploadMode] = useState(false)
  const [topAlphaVal, setTopAlphaVal] = useState(100);
  const [alphaToggle, setAlphaToggle] = useState(false);
  const [modeNum, setModeNum] = useState(0);

  // console.clear();
  
  

  return (
    <AppContext.Provider
      value={{
        mode: modesArray[modeNum],
        modeNum,
        setModeNum,
        imageArray,
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
        <BlendControls/>
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
