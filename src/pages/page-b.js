import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import ColorDodgeIcon from '../components/content/colordodgeicon';


const PageBWrapper = styled.div`
box-shadow: inset 0 0 0 4px slategrey;


 a {
  color: navy;
}
.st0 {

`
const PageB = (props) => {
  // console.log("p> B: ", props)
  return(
  <PageBWrapper className="page-b-wrapper">
    <h1 className="title">BBBB</h1>
    <Link to="/page-a">GOTO A</Link>
    <Link to="/page-c">GOTO C</Link>
   <ColorDodgeIcon/>
  </PageBWrapper>
)};

export default PageB;