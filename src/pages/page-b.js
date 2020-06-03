import React, {useState} from 'react';
// import Link from 'gatsby-link';
import styled from 'styled-components';
// import ColorDodgeIcon from '../components/content/colordodgeicon';
// import Glitch from '../components/glitch'

const PageBWrapper = styled.div`
box-shadow: inset 0 0 0 4px slategrey;


 a {
  color: navy;
  margin: 0;
}
display: grid;
.glitch-container {
  width: 70vw;
  margin: -10vh auto
}
.toggler {
  width: 10vw;
  height: 8vh;
  background: skyblue;
  color: brown;
  margin: 2vh auto;
  border: 1px solid orangered;
  box-shadow: 2px 2px 2px 2px #000;
}
.img-glitch {
  ${'' /* filter: inverse( 100%); */}
}
`

  const PageB = (props) => {
    const [flipToggle, setFlipToggle] = useState(false);
    const toggler = () => {
        setFlipToggle(!flipToggle)
    }
    return(
      <PageBWrapper className="page-b-wrapper">
      {/* <button className="toggler" onClick={toggler}>Effect</button> */}
    
     {/* <Link to="/page-a">GOTO A</Link> 
    <Link to="/page-c">GOTO C</Link> */}
   {/* <Glitch toggle={flipToggle}/> */}
  </PageBWrapper>
)};

export default PageB;