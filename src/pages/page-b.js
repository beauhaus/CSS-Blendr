import React, { useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
// import ColorDodgeIcon from '../components/content/colordodgeicon';
import Glitch from '../components/content/vertglitchtest'

// import Glitchmp4 from "../../static/images/glitchvid.mp4"
import TestVid from '../components/testVid'
const PageBWrapper = styled.div`
box-shadow: inset 0 0 0 4px slategrey;


 a {
  color: navy;
  margin: 0;
}
display: grid;
.glitch-container {
  width: 50vw;
  height: 50vw;
  margin: 20vh auto;
  & svg {
    width: 900%;
    height: 100%;

  }
}

`

const PageB = (props) => {
  const [flipToggle, setFlipToggle] = useState(false);
  
  
  return (
    <PageBWrapper className="page-b-wrapper">
    <div className="glitch-container">
        <Glitch/>
    </div>
      </PageBWrapper>
  )
};

export default PageB;

/*


*/