import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import Glitch from '../../../../images/images_util/newglitch2.jpg'
import {AppContext} from '../../../pages/page-b'

const StyledGlitchComp = styled.img`

`

const GlitchComp = () => {
    const {
        modeNum
    } = useContext(AppContext);
    
  // this ternary allows for rerender upon each click of modecyclebtn
    return (modeNum%2? <StyledGlitchComp
        className="glitch-img"
        src={Glitch}
        alt="test3test3test3test3" />:
       <img className="glitch-img" src={Glitch} alt="glitch anim"/>)
};

export default GlitchComp; 