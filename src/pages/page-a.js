import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import PanelBG from '../components/content/panelbg'
import CyclerBtn from '../components/content/cyclerbtn'
import FlipScreenBtn from '../components/content/flipscreenbtn'
import ImageViewer from '../components/content/imageviewer'


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

const PageAWrapper = styled.div`
/* TODO: this image doesn't 'contain' the panel */
    ${'' /* border: 3px solid lightgreen; */}

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
  const [flipToggle, setFlipToggle] = useState(false);
  
  useEffect(() => {
    document.title = `CSS Blendr - ${modesArray[modeNum]}`
  })
  // console.log("p>query: ", modesArray);

  const modeClickHandler = () => {
    setModeNum((modeNum + 1) % 16)
    return modeNum;
  }
  const flipToggleHandler = () => {
    console.log("flipper clicked!")
    setFlipToggle(!flipToggle)
}
  return (
    <PageAWrapper className="page-a-wrapper" >
      <PanelBG />
      <hr />
      <section className="panel-section">
        {/* <div className="img-viewer"></div> */}
        <ImageViewer mode={modesArray[modeNum]} flipToggle={flipToggle}/>
        <div className="blend-ctrl-btns" >
          <FlipScreenBtn flipToggler={flipToggleHandler} flipToggle={flipToggle}/>
          <CyclerBtn modeNum={modeNum} cycleclick={modeClickHandler} />
        </div>
      </section>
    </PageAWrapper>
  )
};

export default PageA;