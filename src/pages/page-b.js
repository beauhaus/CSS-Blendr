import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';


const PageBWrapper = styled.div`
box-shadow: inset 0 0 0 4px slategrey;


 a {
  color: navy;
}
`
const PageB = (props) => {
  // console.log("p> B: ", props)
  return(
  <PageBWrapper className="page-b-wrapper">
    <h1 className="title">BBBB</h1>
    <Link to="/page-a">GOTO A</Link>
    <Link to="/page-c">GOTO C</Link>
  </PageBWrapper>
)};

export default PageB;