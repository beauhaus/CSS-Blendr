import React, { useContext } from 'react';
import styled from 'styled-components';
import Glitch from '../../../../images/images_util/newglitch2.jpg'
import { AppContext } from '../../../pages/page-b'

const StyledGlitchCompB = styled.img`
        position: absolute;
        top: 0;
        left: 0;
        width: 2700px;
        height: 100%;
        animation: glitchAnim 500ms steps(10) forwards;
        mix-blend-mode: exclusion;
`

const StyledGlitchCompA = styled.img`
        position: absolute;
        top: 0;
        left: 0;
        width: 2700px;
        height: 100%;
        animation: glitchAnim 500ms steps(10) forwards;
        mix-blend-mode: color-burn;
`

const GlitchComp = () => {
  const {
    mixModeNum
  } = useContext(AppContext);

  // this ternary allows for rerender upon each click of modecyclebtn
  return (

    mixModeNum % 2 ?
      <StyledGlitchCompA
        className="glitch-img"
        src={Glitch}
        alt="Glitch animation"
      />
      :
      <StyledGlitchCompB
        className="glitch-img"
        src={Glitch}
        alt="Glitch animation"
      />

  )
};


export default GlitchComp; 