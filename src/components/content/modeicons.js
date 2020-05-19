import React from 'react';
import styled from 'styled-components';

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
const ModeIcons = ({ modeNum }) => {

  const renderIcon = (param) => {
    switch (param) {
      case 0:
        return <NormalIcon />;
        break;
      case 1:
        return <ScreenIcon />;
        break;
      case 2:
        return <MultiplyIcon />;
        break;
      case 3:
        return <LightenIcon />;
        break;
      case 4:
        return <DarkenIcon />;
        break;
      case 5:
        return <OverlayIcon />;
        break;
      case 6:
        return <ColorIcon />;
        break;
      case 7:
        return <ColorDodgeIcon />;
        break;
      case 8:
        return <ColorBurnIcon />;
        break;
      case 9:
        return <DifferenceIcon />;
        break;
      case 10:
        return <ExclusionIcon />;
        break;
      case 11:
        return <LuminosityIcon />;
        break;
      case 12:
        return <HueIcon />;
        break;
      case 13:
        return <SaturationIcon />;
        break;
      case 14:
        return <SoftLightIcon />;
        break;
      case 15:
        return <HardLightIcon />;
        break;
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
