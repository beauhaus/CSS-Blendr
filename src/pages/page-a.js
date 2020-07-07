import React, { useState, useEffect, createContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
// import PanelBG from '../components/content/panelbg'
import CyclerBtn from '../components/content/cyclerbtn'
import FlipScreenBtn from '../components/content/flipscreenbtn'
// import ImageViewer from '../components/content/imageviewer'
// import useGalleryImages from '../components/hooks/use-gallery-images'

// import { topBotFlipper } from '../components/hooks/use-image-selector'


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

export const BlenderAppContext = createContext();

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

        .gallery-switch-btn {
            width: 33%;
            height: 12vh;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10;
            display: flex;
            justify-content: center;
            align-items: center;
            svg {
              height: 10vh;
              width: 10vh;
              margin: 1vh;
            }
            &.closed {
              height: 10vh;
              width: 10vh;
              top: 0;
              ${'' /* border: 1px solid green; */}
              right: 0;
              margin: 0;
              border-radius: 0;
              border-width: 0;
            }

            p {
                color: transparent;
                font-size: 3rem;                
                margin-bottom: 1vh;
                font-weight: 100;
                line-height: 0;
                text-shadow: 1px 1px 1px #ccc;
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
            border: 1px dashed yellow;
        }

    }

`

const PageA = (props) => {
//   const galleryImages = useGalleryImages();
//   const modesArray = useMdx();
  const [gallery, setGallery] = useState([])
  const [modeNum, setModeNum] = useState(0);
  const [flipTriggerVal, setFlipTriggerVal] = useState(false);
  const [galleryOpenVal, setGalleryOpenVal] = useState(false);
  const [selTop, setSelTop] = useState('');
  const [selBot, setSelBot] = useState('');
  const [btReset, setBtReset] = useState('');
  const [topAlphaVal, setTopAlphaVal] = useState(100);
  const [alphaToggle, setAlphaToggle] = useState(false);

//   useEffect(() => {
//     setGallery(galleryImages)
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   useEffect(() => {
//     // setting selTop & selBot
//     let [top] = gallery.filter(img => img.top)
//     let [bot] = gallery.filter(img => img.bot)
//     setSelTop(top)
//     setSelBot(bot)
//     // console.log("T&B set", gallery.length)
//   }, [gallery, btReset, selTop, selBot])

  // topBot flipper
//   const imgFlipper = () => {
//     gallery.forEach(imgObj => {
//       if (imgObj.top !== imgObj.bot) {
//         imgObj.top = !imgObj.top;
//         imgObj.bot = !imgObj.bot;
//       }
//     })
//     setBtReset(!btReset)
//     return gallery;
//   }

  // mode display in browser tab
//   useEffect(() => {
//     document.title = `CSS Blendr - ${modesArray[modeNum]}`
//   }, [modeNum, modesArray])

  const modeSelectHandler = () => {
    setModeNum((modeNum + 1) % 16)
    return modeNum;
  }
  const flipTriggerHandler = () => {
    // console.log("flipTriggerHandler")
    setFlipTriggerVal(!flipTriggerVal)
  }

  const galleryOpener = () => {
    setGalleryOpenVal(!galleryOpenVal)
  }

//   const thumbNailClicker = (imgObj) => {
//     let currentTopIdx = gallery.findIndex((obj => selTop.name === obj.name));
//     gallery[currentTopIdx].top = false;
//     let newSelTopIdx = gallery.findIndex((obj => imgObj.name === obj.name));
//     gallery[newSelTopIdx].top = true;

//     setSelTop(imgObj)
//     return gallery
//   }




  return (
    <BlenderAppContext.Provider
      value={{
        // mode: modesArray[modeNum],
        modeNum,
        flipTriggerVal,
        flipTriggerHandler,
        modeSelectHandler,
        galleryOpener,
        galleryOpenVal,
        gallery,
        selTop,
        selBot,
        setSelTop,
        setSelBot,
        // imgFlipper,
        // thumbNailClicker,
        topAlphaVal,
        setTopAlphaVal,
        alphaToggle,
        setAlphaToggle
      }}>
      <PageAWrapper className="page-a-page-wrapper" >
        {/* <PanelBG /> TODO: edit*/}
        
        <section className="panel-section">
          {/* {(selTop && selBot) && <ImageViewer />} */}
          {/* <div className="blend-ctrl-btns" >
            <CyclerBtn />
            <FlipScreenBtn />
          </div> */}
        </section>
      </PageAWrapper>
    </BlenderAppContext.Provider>
  )
};

export default PageA;
