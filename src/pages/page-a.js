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
  allMdx {
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
    ${'' /* border: 1px solid lightgreen; */}

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
    }

}

`


const PageA = (props) => {
  const modesArray = useMdx();
  const [modeNum, setModeNum] = useState(0);
useEffect(()=>{
document.title = `CSS Blendr - ${modesArray[modeNum]}`
})
  // console.log("p>query: ", modesArray);

  const modeClickHandler = () => {
    setModeNum((modeNum + 1) % 16)
    return modeNum;
  }
  return (
    <PageAWrapper className="page-a-wrapper" >
      <PanelBG />
      <hr />
      <section className="panel-section">
        <div className="img-viewer"></div>
        <ImageViewer/>
        <div className="blend-ctrl-btns" >
          <FlipScreenBtn />
          <CyclerBtn modeNum={modeNum} cycleclick={modeClickHandler}/>
        </div>
      </section>
    </PageAWrapper>
  )
};

export default PageA;