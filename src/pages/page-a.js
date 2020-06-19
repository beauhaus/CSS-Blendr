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

        .gallery-switch-btn {
            width: 13vw;
            height: 13vw;
            position: absolute;
            top: 0;
            right: 0;
            z-index: 10;
            display: flex;
            justify-content: center;
            align-items: center;

            &.closed {
              width: 13vw;
              height: 13vw;
              top: 0;
              border: 1px solid #bcbcbc;
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
        }

    }

`

const PageA = (props) => {
  const galleryImages = useGalleryImages();
  const modesArray = useMdx();
  const [gallery, setGallery] = useState([])
  const [modeNum, setModeNum] = useState(0);
  const [flipTriggerVal, setFlipTriggerVal] = useState(false);
  const [galleryOpenVal, setGalleryOpenVal] = useState(false);
  const [selTop, setSelTop] = useState('');
  const [selBot, setSelBot] = useState('');
  const [btReset, setBtReset] = useState('');
  const [topAlphaVal, setTopAlphaVal] = useState(100);

  useEffect(() => {
    setGallery(galleryImages)
    // console.log('setGall', gallery.length)
  }, [])

  useEffect(() => {
    // setting selTop & selBot
    let [top] = gallery.filter(img => img.top)
    let [bot] = gallery.filter(img => img.bot)
    setSelTop(top)
    setSelBot(bot)
    // console.log("T&B set", gallery.length)
  }, [gallery, btReset, selTop, selBot])

  // topBot flipper
  const imgFlipper = () => {
    gallery.forEach(imgObj => {
      if (imgObj.top !== imgObj.bot) {
        imgObj.top = !imgObj.top;
        imgObj.bot = !imgObj.bot;
      }
    })
    setBtReset(!btReset)
    return gallery;
  }

  // mode display in browser tab
  useEffect(() => {
    document.title = `CSS Blendr - ${modesArray[modeNum]}`
  }, [])

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

  const thumbNailClicker = (imgObj) => {

    let currentTopIdx = gallery.findIndex((obj => selTop.name === obj.name));
    gallery[currentTopIdx].top = false;
    let newSelTopIdx = gallery.findIndex((obj => imgObj.name === obj.name));
    gallery[newSelTopIdx].top = true;

    setSelTop(imgObj)
    return gallery
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
        selTop,
        selBot,
        setSelTop,
        setSelBot,
        imgFlipper,
        thumbNailClicker,
        topAlphaVal, 
        setTopAlphaVal

      }}>
      <PageAWrapper className="page-a-page-wrapper" >
        <PanelBG />
        <hr />
        <section className="panel-section">
        {(selTop && selBot) && <ImageViewer className="img-viewer" />}
          <div className="blend-ctrl-btns" >
            <CyclerBtn />
            <FlipScreenBtn />
          </div>
        </section>
      </PageAWrapper>
    </ModeContext.Provider>
  )
};

export default PageA;


