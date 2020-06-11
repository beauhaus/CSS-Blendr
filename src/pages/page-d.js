import React from 'react';
import styled from 'styled-components';
import PicsTester from '../components/test/picstest'
// import Main from '../components/test/main'

const PageDWrapper = styled.div`
box-shadow: inset 0 0 0 4px slategrey;
background: slategrey;
border: 2px solid red;
width: 100vw;
height: 100vh;
`

const PageD = (props) => {

  return (
    <PageDWrapper className="page-b-wrapper">
      <PicsTester />
    </PageDWrapper>
  )
};

export default PageD;

/*


*/