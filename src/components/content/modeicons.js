import React, {useContext} from 'react';
import styled from 'styled-components';
import {ModeContext} from '../../pages/page-a'

import NormalIcon from '../mode-icons/normal'
import ScreenIcon from '../mode-icons/screen'
import LightenIcon from '../mode-icons/lighten'
import DarkenIcon from '../mode-icons/darken'
import MultiplyIcon from '../mode-icons/multiply'
import OverlayIcon from '../mode-icons/overlay'

import SoftLightIcon from '../mode-icons/soft-light';

import ExclusionIcon from '../mode-icons/exclusion'
import DifferenceIcon from '../mode-icons/difference'
import ColorIcon from '../mode-icons/color'
import HardLightIcon from '../mode-icons/hard-light';
import LuminosityIcon from '../mode-icons/luminosity';
import ColorBurnIcon from '../mode-icons/color-burn';
import ColorDodgeIcon from '../mode-icons/color-dodge';
import SaturationIcon from '../mode-icons/saturation';
import HueIcon from '../mode-icons/hue';

const ModeIconsGroup = styled.svg`
  position: absolute;
  top:0;
  left:0;
  z-index: 1;
  overflow: visible;
  g {
    .icon-bg {
      fill: var(--mode-icon-bg)
    }
  }
`
const ModeIcons = () => {
  const {modeNum} = useContext(ModeContext);

  const renderIcon = (param) => {
    switch (param) {
      case 0:
        return <NormalIcon />
      case 1:
        return <MultiplyIcon />
      case 2:
        return <ScreenIcon />
      case 3:
        return <OverlayIcon />
      case 4:
        return <LightenIcon />
      case 5:
        return <DarkenIcon />
      case 6:
        return <ColorIcon />
      case 7:
        return <ColorDodgeIcon />
      case 8:
        return <ColorBurnIcon />
      case 9:
        return <DifferenceIcon />
      case 10:
        return <ExclusionIcon />
      case 11:
        return <LuminosityIcon />
      case 12:
        return <HueIcon />
      case 13:
        return <SaturationIcon />
      case 14:
        return <SoftLightIcon />
      case 15:
        return <HardLightIcon />
      default:
        break;
    }
  }

  return (
    <ModeIconsGroup xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      {renderIcon(modeNum)}
      <radialGradient id="btn-shine" cx="25" cy="25" r="212" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#fff" stopOpacity=".3" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="btn-shadow" cx="50" cy="50" r="212" gradientTransform="rotate(180 150 150)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopOpacity=".4" />
        <stop offset="1" stopOpacity="0" />
      </radialGradient>
      <g className="btn-cover">
        <circle id="btn-shine" cx="150" cy="150" r="150" fill="url(#btn-shine)" />
        <circle id="btn-shadow" cx="150" cy="150" r="150" fill="url(#btn-shadow)" />
      </g>
    </ModeIconsGroup>
  )
};

export default ModeIcons;
