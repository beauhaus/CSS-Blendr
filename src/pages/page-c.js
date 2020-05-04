import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import useModes from '../components/hooks/use-modes'
import ModeDirectory from '../components/content/mode-directory'


const PageCWrapper = styled.div`
box-shadow:inset 0 0 0 4px teal;
a {
  color: navy;
}
pre {
  text-align: left;
  font-size: 1.3rem;
}
`
export default (props) => {
  // console.log("p> C: ", props)
  const modes = useModes();
  // console.log("MODES in C: ", modes)
  return (
    <PageCWrapper className="page-c-wrapper">
      <h1 className="title">CCCC</h1>
      <Link to="/page-a">GOTO A</Link>
      <Link to="/page-b">GOTO B</Link>
      {modes.map((mode, idx) =>
        <ModeDirectory key={mode.slug} mode={mode} idx={idx}/>
      )}
    </PageCWrapper>
  )
};
