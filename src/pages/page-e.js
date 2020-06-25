import React from 'react';
// import TestImgCard  from '../components/test/testimgcard'
// import testImage from '../../images/gallery-images/socrates.jpg';
import styled from 'styled-components';



const PageEWrapper = styled.div`
box-shadow:inset 0 0 0 4px teal;
height: 100vw;
overflow: hidden;
`
export default (props) => {
  // console.log("p> C: ", props)
  // console.log("MODES in C: ", modes)
  return (
    <PageEWrapper className="page-c-wrapper">

    <h1>PAGE E</h1>
    <h1>PAGE E</h1>
    <h1>PAGE E</h1>
    <h1>PAGE E</h1>
    <h1>PAGE E</h1>
    <h1>PAGE E</h1>
    <h1>PAGE E</h1>
      {/* <TestImgCard img={testImage} /> */}
    </PageEWrapper>
  )
};
