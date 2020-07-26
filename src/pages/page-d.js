import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll'
import { animateScroll } from 'react-scroll'
import { gsap } from "gsap";

// import GridIconTest from '../components/test/refactor/icontest/gridicontest'

const PageDWrapper = styled.div`
${'' /* background: slategrey; */}
width: 100vw;
height: auto;
  .TOC {
    border: 1px solid #777;
    box-shadow: 1px 1px 2px 0px #000;
    width: 80vw;
    height: auto;
    margin: 20vw auto;
    a {
      margin: 1vh auto
    }
  }
`

const PageD = () => {
  const [iconToggle, setIconToggle] = useState(false);
  const Clicker = () => {
    setIconToggle(!iconToggle);
  };
  return (

    <PageDWrapper className="page-d-wrapper">
      {/* <GridIconTest toggle={iconToggle}/> */}
      {/* <button onClick={Clicker}>{iconToggle?"true":"false"}</button> */}
      {/* <Comp1 toggle={iconToggle} /> */}
      <div className="TOC">
        <Link to="articleA" smooth={true} duration={500}>ArtA</Link>
        <Link to="articleB" smooth={true} duration={500}>ArtB</Link>
        <Link to="articleC" smooth={true} duration={500}>ArtC</Link>
        <Link to="articleD" smooth={true} duration={500}>ArtD</Link>
      </div>
      <hr />
      <article id="articleA">
        <p>ArtA</p>
        <button onClick={() => animateScroll.scrollToTop()}>&uarr;</button>
      </article>
      <article id="articleB">
        <p>ArtB</p>
        <button onClick={() => animateScroll.scrollToTop()}>&uarr;</button>
      </article>
      <article id="articleC">
        <p>ArtC</p>
        <button onClick={() => animateScroll.scrollToTop()}>&uarr;</button>
      </article>
      <article id="articleD">
        <p>ArtD</p>
        <button onClick={() => animateScroll.scrollToTop()}>&uarr;</button>
      </article>


    </PageDWrapper>
  )
};

export default PageD;
