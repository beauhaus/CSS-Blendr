import React from 'react';
import "normalize.css"
import styled from 'styled-components';
import PanelBG from '../components/content/panelbg'

import '../styles/index.scss'
import LandingLogo from '../components/content/landinglogo'

const IdxWrapper = styled.div`
width: 100vw;
height: 100vh;
position: relative;
${'' /* z-index: 1; */}
section {
  margin-top: 12vh;
  width: 100%;
    position: absolute;
    overflow: hidden;
  height: 80vh;

.landing-logo {
  position: absolute;
  width: 123%;
    top: 0;
    left: -50%;
    ${'' /* opacity: 1; */}
    ${'' /* mix-blend-mode: exclusion; */}
    mix-blend-mode: overlay;
    ${'' /* mix-blend-mode: screen; */}

}
h1 {
  position: absolute;
  bottom: 1vh;
  width: 100%;
  font-family: "Megrim", sans-serif;
  font-size: 5rem;
  text-shadow: 1px 1px 0.5px #47E8B3; /* light bluegreen */
}
h2 {
  position: absolute;
  width: 73%;
  top: 30vh;
  text-align: right;
  padding: 1rem 1.2rem;
  right: 0;
  ${'' /* font-family: Roboto, sans-serif; */}
  font-weight: 200;
  i {
    text-decoration: italics;
    font-weight:400;
  }
}
}
`
const INDEXJS = () => (
  <IdxWrapper>
    <PanelBG />

    <section>
      <LandingLogo />
      {/* <h2>A Web Appliance <br /> for learning<br />CSS <i>mix-blend-mode</i></h2>
      <h1>CSS Blendr</h1> */}
    </section>
  </IdxWrapper>
);

export default INDEXJS;