import React from 'react';
import styled from 'styled-components';
import Slider from '../components/alphaslider'

const PageBWrapper = styled.div`
box-shadow: inset 0 0 0 4px slategrey;
background: slategrey;
`

const PageB = (props) => {

  return (
    <PageBWrapper className="page-b-wrapper">
      <Slider />
    </PageBWrapper>
  )
};

export default PageB;

/*


*/