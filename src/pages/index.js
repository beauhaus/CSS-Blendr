import React from 'react';
import "normalize.css"
import styled from 'styled-components';
import PanelBG from '../components/content/panelbg'

import 'typeface-fugaz-one'
import '../styles/index.scss'
import LandingLogo from '../components/content/landinglogo'

const IdxWrapper = styled.div`
width: 100vw;
height: 100vh;
overflow: hidden;
position: relative;
${'' /* z-index: 1; */}
.landing-section {
  margin-top: 12vh;
  width: 100%;
  position: absolute;
  overflow: hidden;
  height: 80vh;

.landing-logo {
  position: absolute;
  width: 115%;
  top: 0;
  left: -50%;
  mix-blend-mode: overlay;
}
h1 {
  position: absolute;
  bottom: 4vh;
  width: 100%;
  ${'' /* font-family: "Fugaz One", sans-serif; */}
  ${'' /* font-size: 4.5rem; */}
  font: normal 4.5rem "Fugaz One", -apple-system, Segoe UI, Roboto;
  font-style: normal;
  font-weight: normal; 
  color: var(--heading-color);
  mix-blend-mode: difference;
}
.landing-subheading {
  position: absolute;
  width: 73%;
  top: 30vh;
  text-align: right;
  padding: 1rem 1.2rem;
  right: 0;
  color: var(--subheading-color);

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
  <IdxWrapper className="idx-container">
    {/* <PanelBG /> */}

    <section className="landing-section">
      <LandingLogo />
      <h2 className="landing-subheading">A Web Appliance <br /> for learning<br />CSS <i>mix-blend-mode</i></h2>
      <h1>CSS Blendr</h1>
    </section>
  </IdxWrapper>
);

export default INDEXJS;