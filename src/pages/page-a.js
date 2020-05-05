import React, {useState} from 'react';
// import Link from 'gatsby-link';
import styled from 'styled-components';
import PanelBG from '../components/content/panelbg'
import CyclerBtn from '../components/content/cyclerbtn'
import FlipScreenBtn from '../components/content/flipscreenbtn'

import TestImg1 from '../../static/images/test_img_1.png';

const PageAWrapper = styled.div`
${'' /* box-shadow: inset 0 0 0 4px brown; */}


section {
    width: 100vw;
    height: 88vh;
    position: relative;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 53vh 22vh 10vh;

    .img-viewer {
        background: #f0ebe8;
        /* --base-btn-color: */
        width: 98%;
        grid-column: 1;
        grid-row: 1;
        ${'' /* border: 1px solid #fff; */}
        border-radius: 12px;
        box-shadow: inset 0 0 8px 0 var(--text-primary);
        margin: 0 auto;
        display: grid;

        img {
            margin: auto;
            width: 96%;
            height: 96%;
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
    }

}

`
const PageA = (props) => {
  // console.log("p>A: ", props);
  const [modeCount, setmodeCount] = useState(0);

  // const bModes = ['normal', 'screen',  'multiply', 'lighten', 'darken', 'overlay', 'color', 'color-dodge', 'color-burn', 'difference', 'exclusion', 'luminosity', 'hue', 'saturation'];
  const modeClickHandler = () => {
      setmodeCount(((modeCount+1) % 15))
      return modeCount
  }
  return (
    <PageAWrapper className="page-a-wrapper" >
      <PanelBG />
      <hr />
      <section>
        <div className="img-viewer">
          <img src={TestImg1} alt="test 1" />
        </div>
        <div className="blend-ctrl-btns" onClick={modeClickHandler}>
          <FlipScreenBtn />
          <CyclerBtn />
          {console.log(`mode: ${modeCount}`)}
        </div>
      </section>
    </PageAWrapper>
  )
};

export default PageA;