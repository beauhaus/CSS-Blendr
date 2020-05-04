import React from 'react';
// import Link from 'gatsby-link';
import styled from 'styled-components';
import PanelBG from '../components/content/panelbg'
import CycleBtn from '../components/content/cyclebtn'
import FlipScreen from '../components/content/flipscreen'

import TestImg1 from '../../static/test_img_1.png';

const PageAWrapper = styled.div`
${'' /* box-shadow: inset 0 0 0 4px brown; */}


section {
    width: 100vw;
    height: 88vh;
    position: relative;

    $ {
        ''
        /* border: 2px dashed green; */
    }

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
        margin: auto;
        grid-row: 2;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2vw;
        margin-top: 1vh;

        & div {
            height: 100%;
            width: 46vw;
        }
        .cycler {
            ${'' /* box-shadow: inset 0 0 0 2px pink; */}
            display: grid;

        }
    }

}

`
const PageA = (props) => {
  // console.log("p>A: ", props);
  return (
    <PageAWrapper className="page-a-wrapper">
      <PanelBG />
      <hr />
      <section>
        {/* <Link to="/page-c">GOTO C</Link> */}
        <div className="img-viewer">
          <img src={TestImg1} alt="test 1" />
        </div>
        <div className="blend-ctrl-btns">
          <FlipScreen />
          <div className="cycler">
            <CycleBtn />
          </div>
        </div>
      </section>
    </PageAWrapper>
  )
};

export default PageA;