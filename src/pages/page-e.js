import React from 'react';
import TestImgCard  from '../components/test/testimgcard'
import testImage from '../../images/gallery-images/socrates.jpg';
import styled from 'styled-components';



const PageEWrapper = styled.div`
box-shadow:inset 0 0 0 4px teal;

`
export default (props) => {
  // console.log("p> C: ", props)
  // console.log("MODES in C: ", modes)
  return (
    <PageEWrapper className="page-c-wrapper">
      
      
      <TestImgCard img={testImage} />
    </PageEWrapper>
  )
};
