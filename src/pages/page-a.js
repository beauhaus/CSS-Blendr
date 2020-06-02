import React, { useState, useEffect, createContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import PanelBG from '../components/content/panelbg'
// import CyclerBtn from '../components/content/cyclerbtn'
import FlipScreenBtn from '../components/content/flipscreenbtn'
import ImageViewer from '../components/content/imageviewer'
import useGalleryImages from '../components/hooks/use-gallery-images'

// import {imageSelector, moddedArrayLoader} from '../components/hooks/use-image-selector'


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
        justify-content: space-between;
        align-items: center;
        padding: 0 2vw;
        margin-top: 1vh;   
        ${'' /* border: 1px dashed white;  */}
    }

}
`

const PageA = (props) => {
  const galleryImages = useGalleryImages();
  const [rawGallery, setRawGallery] = useState([])
  const modesArray = useMdx();
  const [modeNum, setModeNum] = useState(0);
  const [flipToggleVal, setFlipToggleVal] = useState(false);
  const [galleryOpenVal, setGalleryOpenVal] = useState(false);
  const [selectedTop, setSelectedTop] = useState('');
  const [selectedBot, setSelectedBot] = useState('');
  const [selectedTopURL, setSelectedTopURL] = useState('');
  const [selectedBotURL, setSelectedBotURL] = useState('');

  const [botImg, setBotImg] = useState('');


  const [gallery, setGallery] = useState([])

  useEffect(() => {
    //updates Title
    document.title = `CSS Blendr - ${modesArray[modeNum]}`
  }, [])

  useEffect(() => {
    //sets init images (path-change-tolerant)
    setRawGallery(galleryImages)
  }, [])

  useEffect(() => {
    if (rawGallery) {
      console.log("rawGallery exists")
      let [top] = rawGallery.filter(img => img.top)
      // console.log("top: ", top)
      let [bot] = rawGallery.filter(img => img.bot)
      // console.log("bot: ", bot)


      setSelectedTop(top)
      setSelectedBot(bot)

    }

  }, [galleryImages])

  useEffect(() => {
    if (rawGallery) {


      let [topURL] = rawGallery.filter(img => img.URL)
      console.log("topURL: ", topURL)
      let botURL = rawGallery.filter(img => img.URL)
      // console.log("botURL: ", botURL.URL)
    }

  }, [])


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
    setGalleryOpenVal(!galleryOpenVal)
  }

  console.log("selected top", selectedBotURL)
  


  return (
    <ModeContext.Provider
      value={{
        mode: modesArray[modeNum],
        modeNum,
        flipToggleVal,
        flipToggleHandler,
        modeSelectHandler,
        galleryOpener,
        galleryOpenVal,
        rawGallery,
        selectedTop,
        selectedBot
      }}>
      <PageAWrapper className="page-a-wrapper" >
        <PanelBG />
        <hr />
        <section className="panel-section">
          <button className="gallery-switch-btn" onClick={galleryOpener}><p>&#43;</p></button>
          <ImageViewer className="img-viewer" />
          <div className="blend-ctrl-btns" >
          {/* {console.log("inrender selbot:", selectedBotURL)} */}
            <FlipScreenBtn selTop={selectedTop} selBot={selectedBot}/>
            {/* <CyclerBtn /> */}
          </div>
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
//     setFindImg(imageSelector(rawGallery, newImg))
// }

// const hookTest2 = (newImg) => {
//   setFindImg(imageSelector(rawGallery, newImg))
// }




*/