import React from 'react';
import styled from 'styled-components';
// import {graphql} from 'gatsby';
import NormalIcon from '../mode-icons/normal'
  
const ModeIconsGroup = styled.svg`
  position: absolute;
  top:0;
  left:0;
  z-index: 0;
`
const ModeIcons = (props, query) => {
  // console.log("p>ModeIcons: ", props);
  return (
    <ModeIconsGroup xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
     <NormalIcon/>
    </ModeIconsGroup>
  )
};

export default ModeIcons;


/*
 <radialGradient id="top-left" cx="204" cy="202" r="150" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset=".75" stopColor="#fff" stopOpacity="0" />
          <stop offset=".85" stopColor="#fff" stopOpacity="0.6" />
          <stop offset=".9" stopColor="#fff" stopOpacity="0.9" />
          <stop offset="1" stopColor="#fff" stopOpacity="1" />
        </radialGradient> 
         
         <circle cx="200" cy="200" r="125" fill="fuchsia" /> 
         <circle cx="200" cy="200" r="125" fill="url(#top-left)" />
        <path  strokeWidth="4" stroke="blue" d="M200 0l-.02 399.94M0 200l399.94.02" className="crosshairs" /> 

        */