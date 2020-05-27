import React, { useState, useEffect, createContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import PanelBG from '../components/content/panelbg'
import CyclerBtn from '../components/content/cyclerbtn'
import FlipScreenBtn from '../components/content/flipscreenbtn'
import ImageViewer from '../components/content/imageviewer'

// import CurrentImg1 from '../../static/images/galery-images/rose.jpg'
// import CurrentImg2 from '../../static/images/galery-images/testimg.jpg'
import CurrentImg1 from '../../static/images/gallery-images/rose.jpg'
import CurrentImg2 from '../../static/images/gallery-images/testimg.jpg'



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

export const ModeContext= createContext();

const PageAWrapper = styled.div`
/* TODO: this image doesn't 'contain' the panel */
    ${'' /* border: 3px solid lightgreen; */}
    height: 100vh;
    width: 100vw;
    overflow: hidden;


.panel-section {
    width: 100vw;
    height: 85vh;
    position: relative;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 53vh 22vh 10vh;
    ${'' /* border: 1px solid yellow; */}
   
    .blend-ctrl-btns {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        grid-row: 2;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2vw;
        margin-top: 1vh;   
        ${'' /* border: 1px dashed white;  */}
    }

}
`


const PageA = (props) => {
  const modesArray = useMdx();
  const [modeNum, setModeNum] = useState(0);
  const [flipToggleVal, setFlipToggleVal] = useState(false);
  const [galleryOpenToggleVal, setGalleryOpenToggleVal] = useState(false);
  
  useEffect(() => {
    document.title = `CSS Blendr - ${modesArray[modeNum]}`
  })

  const modeClickHandler = () => {
    setModeNum((modeNum + 1) % 16)
    return modeNum;
  }

  const flipToggleHandler = () => {
    // console.log("flipper clicked!")
    setFlipToggleVal(!flipToggleVal)

}
const galleryOpener = () => {
  // console.log("galleryOpener clicked!")
  setGalleryOpenToggleVal(!galleryOpenToggleVal)
}
  return (
    <ModeContext.Provider
    value={{
      mode: modesArray[modeNum],
      modeNum,
      flipToggleVal,
      flipToggleHandler,
      modeClickHandler,
      galleryOpener,
      galleryOpenToggleVal,
      currentImage1: CurrentImg1,
      currentImage2: CurrentImg2
    }}>
    <PageAWrapper className="page-a-wrapper" >
      <PanelBG />
      <hr />
      <section className="panel-section">
        <ImageViewer className="img-viewer"/>
        <div className="blend-ctrl-btns" >
          <FlipScreenBtn/>
          <CyclerBtn />
        </div>
      </section>
    </PageAWrapper>
    </ModeContext.Provider>
  )
};

export default PageA;