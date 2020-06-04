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
            background: rgba(255, 255, 255, .0);
            position: absolute;
            top: 0;
            right: 0;
            z-index: 10;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 2vw;
            border-radius: 6px;

            &.closed {
                p {
                color: lightgreen;
                }
            }
            p {
                color: rgba(0, 0, 0, .1);
                font-size: 5rem;
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
  const [gallery, setGallery] = useState([])
  const modesArray = useMdx();
  const [modeNum, setModeNum] = useState(0);
  const [flipTriggerVal, setFlipTriggerVal] = useState(false);
  const [galleryOpenVal, setGalleryOpenVal] = useState(false);
  const [selTop, setSelTop] = useState('');
  const [selBot, setSelBot] = useState('');
  const [btReset, setBtReset] = useState('');
  const [thumbClickVal, setThumbClickVal] = useState('')

  useEffect(() => {
    setGallery(galleryImages)
    console.log('setGall', gallery.length)
  }, [])

  useEffect(() => {
    // setting selTop & selBot
    let [top] = gallery.filter(img => img.top)
    let [bot] = gallery.filter(img => img.bot)
    setSelTop(top)
    setSelBot(bot)
    console.log("T&B set", gallery.length)
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
    console.log("flipTriggerHandler")
    setFlipTriggerVal(!flipTriggerVal)
  }

  const galleryOpener = () => {
    setGalleryOpenVal(!galleryOpenVal)
  }

  const thumbClicker = (imgObj) => {

    // let [top] = gallery.filter(img => img.top)
    // console.log("currentTop: ", selTop)
    let currentTopIdx = gallery.findIndex((obj => selTop.name == obj.name));
    gallery[currentTopIdx].top = false;
    let newSelTopIdx = gallery.findIndex((obj => imgObj.name == obj.name));
    gallery[newSelTopIdx].top = true;

    setSelTop(imgObj)
    return gallery
  }


  //   useEffect((imgObj) => {

  // }, [thumbClickVal])

  if (gallery && selBot && selTop) {
    // {console.log("@a_selTop", selTop.name)
    // console.log("@a_selBot", selBot.name)
    console.log("***from gallery***")
    let [galtop] = gallery.filter(imgObj => imgObj.top === true)
    console.log("top: ", galtop.name)
    let [galbot] = gallery.filter(imgObj => imgObj.bot === true)
    console.log("bot: ", galbot.name)
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
        thumbClicker
      }}>
      <PageAWrapper className="page-a-wrapper" >
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



/*
========== mutate myArray ===============

//Initailize array of objects.
let myArray = [
  {id: 0, name: "Jhon"},
  {id: 1, name: "Sara"},
  {id: 2, name: "Domnic"},
  {id: 3, name: "Bravo"}
],

//Find index of specific object using findIndex method.
objIndex = myArray.findIndex((obj => obj.id == 1));

//Log object to Console.
console.log("Before update: ", myArray[objIndex])

//Update object's name property.
myArray[objIndex].name = "Laila"

//Log object to console again.
console.log("After update: ", myArray[objIndex])



*/