import React, {useState} from 'react';
import styled from 'styled-components';

import GridIconTest from '../components/test/refactor/icontest/gridicontest'

const PageDWrapper = styled.div`
box-shadow: inset 0 0 0 4px slategrey;
background: slategrey;
border: 2px solid red;
width: 100vw;
height: 100vh;

button {
      border: 1px solid #fff;
      position: absolute;
      top: 15vh;
      left: 10vh;
  }
`

const PageD = () => {
  const [iconToggle, setIconToggle] = useState(false);
  const Clicker = () => {
    setIconToggle(!iconToggle);
};
  return (

    <PageDWrapper className="page-d-wrapper">
      <GridIconTest toggle={iconToggle}/>
      {/* <Comp1 toggle={iconToggle} /> */}
      <button onClick={Clicker}>{iconToggle?"true":"false"}</button>
    </PageDWrapper>
  )
};

export default PageD;
