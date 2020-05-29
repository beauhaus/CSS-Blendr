import React, { useState, useEffect, createContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import PanelBG from '../components/content/panelbg'
import CyclerBtn from '../components/content/cyclerbtn'
import FlipScreenBtn from '../components/content/flipscreenbtn'
import ImageViewer from '../components/content/imageviewer'

import CurrentImg1 from '../../images/gallery-images/rose.jpg'
import CurrentImg2 from '../../images/gallery-images/testimg.jpg'


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
    .gallery-switch-btn {
        width: 13vw;
        height: 13vw;
        background: rgba(255,255,255, .2);
        position: absolute;
        top: 0;
        right: 0;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2vw;
        border-radius: 12px;
        p {
            color: rgba(0,0,0,.2);
            font-size: 5rem;
            margin-bottom: 1vh;
            font-weight: bold;
            line-height: 0;
            ${'' /* text-shadow: 1px 1px 1px 3px #fff; */}
            outline: 1px 1px 1px 1px #fff;
            ${'' /* filter: drop-shadow(2px 2px 2px red); */}
        }
    }
   
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
  const [currentImage1, setCurrentImage1] =useState(CurrentImg1)
  const [currentImage2, setCurrentImage2] =useState(CurrentImg2)
  useEffect(() => {
    document.title = `CSS Blendr - ${modesArray[modeNum]}`
  })
  const image1Setter = (img) => {
    setCurrentImage1(img)
  }
  const image2Setter = (img) => {
    setCurrentImage2(img)
  }
    
  const modeSelectHandler = () => {
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
      modeSelectHandler,
      galleryOpener,
      galleryOpenToggleVal,
      currentImage1,
      currentImage2,
      image1Setter,
      image2Setter
    }}>
    <PageAWrapper className="page-a-wrapper" >
      <PanelBG />
      <hr />
      <section className="panel-section">
      <button className="gallery-switch-btn" onClick={galleryOpener}><p>&#43;</p></button>
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