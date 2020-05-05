import React from 'react';
import styled from 'styled-components';
import ModeIcons from './modeicons'
import { graphql, useStaticQuery } from 'gatsby';

import Incrementor from './incrementor'


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
  return data;
}


const CyclerBtnWrapper = styled.div`
    position: relative;  
    padding: 0;
    border-radius: 50%;
    margin: 2vh auto 0;
    height: 35vw;
    width: 35vw;
    border: 1px solid #aaa;
    box-shadow: 0 0 3px 2px rgba(255, 229, 195, 0.8);

    .cycler {
      position: absolute;
      box-shadow: inset 4px 4px 5px 0 rgba(255, 247, 238, 0.8),
      inset -2px -2px 4px 0 rgba(0,0,0,0.2);
      border-radius: 50%;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      &:active {
        box-shadow: inset 5px 5px 7px 0 rgba(255, 247, 238, 0.8),
                    inset -3px -3px 5px 0 rgba(0,0,0,0.3);  
      }
    }
`
const CyclerBtn = (query) => {
  // console.log("p> B: ", props)
  const data = useMdx();
  console.log("p>query: ", data.allMdx.nodes);

  const cyclerClickHandler = () => {
    console.log("cycler clicked!")

  }

  return (
    <CyclerBtnWrapper>
      <ModeIcons />
      <button className="cycler" onClick={cyclerClickHandler} >
        <Incrementor />
      </button>
    </CyclerBtnWrapper>
  )
};

export default CyclerBtn;
