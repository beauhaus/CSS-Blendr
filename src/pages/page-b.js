import React from 'react';
import styled from 'styled-components';
import NotesTester from '../components/test/notestest'

const PageBWrapper = styled.div`
box-shadow: inset 0 0 0 4px slategrey;
background: slategrey;
border: 2px solid red;
width: 100vw;
height: 100vh;
`

const PageB = (props) => {
  return (
    <PageBWrapper className="page-b-wrapper">
      <NotesTester />
      pageB
    </PageBWrapper>
  )
};

export default PageB;

/*


*/