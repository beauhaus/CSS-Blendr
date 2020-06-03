import React, { useState, useEffect, createContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import PanelBG from '../components/content/panelbg'
import CyclerBtn from '../components/content/cyclerbtn'
import FlipScreenBtn from '../components/content/flipscreenbtn'
import ImageViewer from '../components/content/imageviewer'
import useGalleryImages from '../components/hooks/use-gallery-images'

// import { topBotFlipper } from '../components/hooks/use-image-selector'

// import TestComponent from '../components/testcomponent'

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

export const ModeContext = createContext();

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
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        padding: 0 2vw;
        margin-top: 1vh;   
    }

}
`

const PageA = (props) => {
  const galleryImages = useGalleryImages();
  const [gallery, setGallery] = useState([])
  const modesArray = useMdx();
  const [modeNum, setModeNum] = useState(0);
  const [flipTriggerVal, setFlipTriggerVal] = useState(false);
  const [galleryOpenVal, setGalleryOpenVal] = useState(false);
  const [selectedTop, setSelectedTop] = useState('');
  const [selectedBot, setSelectedBot] = useState('');
  const [imgFlipperVal, setImgFlipperVal] = useState('');


  const imgFlipper = () => {

    setImgFlipperVal(!imgFlipperVal)
  }


  useEffect(() => {
    setSelectedTop(selectedBot)
    setSelectedBot(selectedTop)
  }, [imgFlipperVal])

  useEffect(() => {
    document.title = `CSS Blendr - ${modesArray[modeNum]}`
  }, [])

  useEffect(() => {
    setGallery(galleryImages)
  }, [])

  useEffect(() => {
    let [top] = gallery.filter(img => img.top)
    let [bot] = gallery.filter(img => img.bot)
    setSelectedTop(top)
    setSelectedBot(bot)
  }, [gallery])

  const modeSelectHandler = () => {
    setModeNum((modeNum + 1) % 16)
    return modeNum;
  }
  const flipTriggerHandler = () => {
    console.log("flipTriggerHandler")
    setFlipTriggerVal(!flipTriggerVal)
  }

  const galleryOpener = () => {
    // console.log("galleryOpener clicked!")
    setGalleryOpenVal(!galleryOpenVal)
  }

  return (
    <ModeContext.Provider
      value={{
        mode: modesArray[modeNum],
        modeNum,
        flipTriggerVal,
        flipTriggerHandler,
        modeSelectHandler,
        galleryOpener,
        galleryOpenVal,
        gallery,
        selectedTop,
        selectedBot,
        imgFlipper
      }}>
      <PageAWrapper className="page-a-wrapper" >
        <PanelBG />
        <hr />
        <section className="panel-section">
          <button className="gallery-switch-btn" onClick={galleryOpener}><p>&#43;</p></button>
          {(selectedTop && selectedBot) && <ImageViewer className="img-viewer" />}
          <div className="blend-ctrl-btns" >
            <CyclerBtn />
            <FlipScreenBtn />
          </div>
          {/* {(selectedTop && selectedBot)&& <TestComponent/>} */}
        </section>
      </PageAWrapper>
    </ModeContext.Provider>
  )
};

export default PageA;



/*

// const [findImg, setFindImg] =useState('')

<h1 className="hooktest">{console.log("found: ", findImg)}</h1>
   <button  value ="claudia" className="hooktest" onClick={(e)=>hookTest(e.target.value)}>claudia</button>
          <button value ="rose" className="hooktest" onClick={(e)=>hookTest2(e.target.value)}>rose</button>


//   const hookTest = (newImg) => {
//     // setFindImg("claudia")
//     setFindImg(imageSelector(gallery, newImg))
// }

// const hookTest2 = (newImg) => {
//   setFindImg(imageSelector(gallery, newImg))
// }




*/