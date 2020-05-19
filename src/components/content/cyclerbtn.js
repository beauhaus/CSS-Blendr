import React from 'react';
import styled from 'styled-components';
import ModeIcons from './modeicons'
// import { graphql, useStaticQuery } from 'gatsby';

import Incrementor from './incrementor'


// const useMdx = () => {
//   const data = useStaticQuery(graphql`
//   query {
//   allMdx {
//     nodes {
//       frontmatter {
//         title
//       }
//     }
//   }
// }
// `)
//   return data;
// }


const CyclerBtnWrapper = styled.div`
    position: relative;  
    padding: 0;
    border-radius: 50%;
    margin: 3vh auto 0;
    height: 35vw;
    width: 35vw;
    box-shadow: 2px 2px 6px -3px #ddd, 
    -3px -3px 4px -2px #000;
   
      & > svg {  
      height: 100%;
      width: 100%;
      
      }
     
`
const CyclerBtn = ({cycleclick, modeNum}) => {
  return (
    <CyclerBtnWrapper className="cycler" onClick={cycleclick} >
        <ModeIcons modeNum={modeNum}/>
        <Incrementor modeNum={modeNum}/>
    </CyclerBtnWrapper>
  )
};

export default CyclerBtn;
