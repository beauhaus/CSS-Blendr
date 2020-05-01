import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';


const PageCWrapper = styled.div`
box-shadow:inset 0 0 0 4px teal;


a {
  color: navy;
}
`
export default (props) => {
  // console.log("p> C: ", props)
  return(
  <PageCWrapper className="page-c-wrapper">
    <h1 className="title">CCCC</h1>
    <Link to="/page-a">GOTO A</Link>
    <Link to="/page-b">GOTO B</Link>
  </PageCWrapper>
)};
