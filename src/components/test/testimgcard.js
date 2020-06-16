import React, { createContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import AlphaSlider from '../alphaslider2'
// export const BlendrDataContext = createContext();

const TestImgCardWrapper = styled.div`
  box-shadow: inset 0 0 0 4px slategrey;
  position: relative;
  background: pink;
  width: 96%;
  height: 53vh;
  margin: 10vh auto;
  ${'' /* padding: 2%; */}
  overflow: hidden;
  display: grid;
  img {
    width: 100%;
    height: 100%;
  }
}
`

const TestImgCard = (props) => {


  return (
    // <BlendrDataContext.Provider
    //   value={{
    //     defaultImages,
    //     combinedImageArray,
    //     setCombinedImageArray
    //   }}>
      <TestImgCardWrapper className="test-img-card">
        <img src={props.img} alt="figure that's fun"/>
        <AlphaSlider/>
      </TestImgCardWrapper>
  )
};

{/* </BlendrDataContext.Provider> */}
export default TestImgCard;
