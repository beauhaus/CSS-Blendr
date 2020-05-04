import React from 'react';
import styled from 'styled-components';


const CycleBtnWrapper = styled.button`
    display: grid;
    height: 100%;
    width: 46vw;
    position: relative;

    .cycle-icons {

    }
    svg {
      ${'' /* display: none; */}
      margin: auto;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .cycle-increments {
      
      .blend-inc{
        fill:var(--power-off);
      }
      #inc1, #inc2, #inc3 {
        fill: var(--power-on);
        stroke: var(--power-on);
        stroke-width: 3;
      }
      .st2{
        fill:none;
        stroke:#f0f;
      }
    }
`
const CycleBtn = () => {
  // console.log("p> B: ", props)
  const cycleBtnClickHandler = () => {
    console.log("cycler clicked!")
  }
  return (
    <CycleBtnWrapper className="cycler" onClick={cycleBtnClickHandler}>
      <svg className="cycle-increments" xmlns="http://www.w3.org/2000/svg" viewBox="68 40 288 288">
        {/* <path fill="#fff" d="M337 199.5c0-3.16-.12-6.29-.33-9.39-.11-1.67-.25-3.33-.42-4.98-1.28-12.27-4.17-24.06-8.46-35.16-.6-1.56-1.23-3.1-1.89-4.63-4.75-11.07-10.9-21.39-18.25-30.74-1.03-1.31-2.09-2.6-3.17-3.87-7.65-9.04-16.45-17.08-26.17-23.9-1.36-.96-2.75-1.89-4.14-2.8-10.26-6.65-21.46-11.97-33.36-15.71-1.59-.5-3.19-.97-4.8-1.41-11.03-3.03-22.62-4.72-34.57-4.89-.65-.01-1.29-.02-1.94-.02-1.02 0-2.04.02-3.06.04-12.9.28-25.36 2.34-37.15 5.94-1.6.49-3.18 1.01-4.75 1.55-11.78 4.07-22.83 9.7-32.91 16.64-1.37.95-2.73 1.91-4.07 2.91-9.74 7.24-18.48 15.73-26 25.24-1.03 1.31-2.04 2.64-3.02 3.98-7.08 9.66-12.93 20.27-17.31 31.61-.6 1.55-1.17 3.12-1.72 4.7-3.93 11.38-6.4 23.43-7.21 35.94-.11 1.66-.19 3.32-.24 4.99-.04 1.32-.06 2.64-.06 3.97 0 11.13 1.33 21.94 3.83 32.31.39 1.62.81 3.24 1.26 4.84 2.08 7.43 4.77 14.6 8.01 21.46 22 46.62 69.43 78.89 124.41 78.89 48.91 0 91.84-25.54 116.22-64 8.44-13.31 14.64-28.17 18.11-44.05.35-1.62.69-3.26.98-4.9 1.43-7.98 2.18-16.18 2.18-24.56z" /> */}
        <g id="inclights">
          <path id="inc14" d="M315.72 273l29.75 16.95c10.31-16.03 17.84-34 21.95-53.16l-33.59-7.84c-3.47 15.88-9.67 30.74-18.11 44.05z" className="blend-inc" />
          <path id="inc13" d="M337 199.5c0 8.38-.75 16.58-2.19 24.54l33.72 7.03c2.27-12.84 3.02-26.17 2.05-39.78-.09-1.29-.22-2.57-.34-3.86l-33.56 2.68c.2 3.1.32 6.23.32 9.39z" className="blend-inc" />
          <path id="inc12" d="M336.25 185.13l33.43-2.67c-1.97-15.66-6.15-30.56-12.2-44.39l-29.69 11.89c4.3 11.1 7.19 22.89 8.46 35.17z" className="blend-inc" />
          <path id="inc11" d="M325.91 145.33l29.5-11.82c-6.51-13.72-14.88-26.32-24.77-37.49l-22.98 18.57c7.35 9.35 13.5 19.67 18.25 30.74z" className="blend-inc" />
          <path id="inc10" d="M304.5 110.73l22.77-18.4c-10.05-10.67-21.53-19.92-34.09-27.46l-14.86 21.96c9.72 6.81 18.52 14.86 26.18 23.9z" className="blend-inc" />
          <path id="inc9" d="M274.18 84.03l14.67-21.67c-.48-.27-.95-.54-1.43-.81-12.5-6.8-25.97-11.94-40.11-15.16l-6.5 21.93c11.9 3.74 23.1 9.06 33.37 15.71z" className="blend-inc" />
          <path id="inc8" d="M236.01 66.91l6.39-21.56c-2.35-.46-4.71-.86-7.09-1.21-1.9-.28-3.8-.53-5.71-.74-9.22-1.01-18.66-1.21-28.24-.53l.08 19.16c11.96.16 23.54 1.85 34.57 4.88z" className="blend-inc" />
          <path id="inc7" d="M196.44 62.04l-.08-18.73c-1.97.21-3.94.44-5.89.71-1.91.27-3.8.56-5.69.9-10.49 1.87-20.6 4.77-30.23 8.59l4.73 14.47c11.8-3.6 24.26-5.66 37.16-5.94z" className="blend-inc" />
          <path id="inc6" d="M154.54 69.53l-4.6-14.09c-1.62.71-3.23 1.43-4.82 2.19-1.74.83-3.46 1.68-5.16 2.57-8.94 4.66-17.36 10.17-25.18 16.39l6.86 9.58c10.07-6.94 21.12-12.57 32.9-16.64z" className="blend-inc" />
          <path id="inc5" d="M117.56 89.08l-6.67-9.31c-1.6 1.36-3.18 2.74-4.73 4.15-1.42 1.3-2.81 2.64-4.18 4-6.5 6.42-12.42 13.4-17.74 20.85l7.32 5.55c7.52-9.51 16.26-18 26-25.24z" className="blend-inc" />
          <path id="inc4" d="M88.54 118.3l-7.14-5.41c-1.62 2.43-3.19 4.89-4.68 7.4-.98 1.66-1.94 3.34-2.87 5.04-3.82 7.01-7.11 14.35-9.86 21.93l7.24 2.64c4.38-11.33 10.23-21.94 17.31-31.6z" className="blend-inc" />
          <path id="inc3" d="M69.51 154.6l-7.15-2.61c-1.44 4.39-2.72 8.85-3.78 13.38-.44 1.88-.84 3.78-1.22 5.69-1.23 6.26-2.08 12.64-2.56 19.12l7.51.35c.79-12.5 3.27-24.55 7.2-35.93z" className="blend-inc" />
          <path id="inc2" d="M65.83 231.81C63.33 221.44 62 210.63 62 199.5c0-1.33.02-2.65.06-3.97l-7.56-.35c-.14 3.37-.18 6.77-.12 10.18.69 9.66 2.34 19.07 4.84 28.16l6.61-1.71z" className="blend-inc" />
          <path id="inc1" d="M67.08 236.65l-6.45 1.68c3.81 12.17 9.16 23.72 15.87 34.42l6.11.03c-2.81-4.71-5.31-9.61-7.53-14.67-3.23-6.86-5.92-14.04-8-21.46z" className="blend-inc" />
        </g>
        <path d="M200 0l-.02 399.94M0 200l399.94.02" className="st2" />
      </svg>
      <svg className="cycle-icons" xmlns="http://www.w3.org/2000/svg" viewBox="68 40 288 288">
        <radialGradient id="top-left" cx="204" cy="202" r="150" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset=".75" stopColor="#fff" stopOpacity="0" />
          <stop offset=".85" stopColor="#fff" stopOpacity="0.6" />
          <stop offset=".9" stopColor="#fff" stopOpacity="0.9" />
          <stop offset="1" stopColor="#fff" stopOpacity="1" />
        </radialGradient>
        {/* <path fill="#fff" d="M337 199.5c0-3.16-.12-6.29-.33-9.39-.11-1.67-.25-3.33-.42-4.98-1.28-12.27-4.17-24.06-8.46-35.16-.6-1.56-1.23-3.1-1.89-4.63-4.75-11.07-10.9-21.39-18.25-30.74-1.03-1.31-2.09-2.6-3.17-3.87-7.65-9.04-16.45-17.08-26.17-23.9-1.36-.96-2.75-1.89-4.14-2.8-10.26-6.65-21.46-11.97-33.36-15.71-1.59-.5-3.19-.97-4.8-1.41-11.03-3.03-22.62-4.72-34.57-4.89-.65-.01-1.29-.02-1.94-.02-1.02 0-2.04.02-3.06.04-12.9.28-25.36 2.34-37.15 5.94-1.6.49-3.18 1.01-4.75 1.55-11.78 4.07-22.83 9.7-32.91 16.64-1.37.95-2.73 1.91-4.07 2.91-9.74 7.24-18.48 15.73-26 25.24-1.03 1.31-2.04 2.64-3.02 3.98-7.08 9.66-12.93 20.27-17.31 31.61-.6 1.55-1.17 3.12-1.72 4.7-3.93 11.38-6.4 23.43-7.21 35.94-.11 1.66-.19 3.32-.24 4.99-.04 1.32-.06 2.64-.06 3.97 0 11.13 1.33 21.94 3.83 32.31.39 1.62.81 3.24 1.26 4.84 2.08 7.43 4.77 14.6 8.01 21.46 22 46.62 69.43 78.89 124.41 78.89 48.91 0 91.84-25.54 116.22-64 8.44-13.31 14.64-28.17 18.11-44.05.35-1.62.69-3.26.98-4.9 1.43-7.98 2.18-16.18 2.18-24.56z" /> */}

        {/* <path d="M200 0l-.02 399.94M0 200l399.94.02" className="st2" /> */}
        {/* <circle cx="200" cy="200" r="125" fill="#715657"/> */}
        
        <circle cx="200" cy="200" r="125" fill="#000" />
        <circle cx="200" cy="200" r="125" fill="url(#top-left)" />
      </svg>
    </CycleBtnWrapper>
  )
};

export default CycleBtn;


/*
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
  <defs/>
  <style>

  .st1{opacity:1;fill:#57d634}
    .st2{fill:none;stroke:#f0f;}
  </style>
  <path fill="#fff" d="M337 199.5c0-3.16-.12-6.29-.33-9.39-.11-1.67-.25-3.33-.42-4.98-1.28-12.27-4.17-24.06-8.46-35.16-.6-1.56-1.23-3.1-1.89-4.63-4.75-11.07-10.9-21.39-18.25-30.74-1.03-1.31-2.09-2.6-3.17-3.87-7.65-9.04-16.45-17.08-26.17-23.9-1.36-.96-2.75-1.89-4.14-2.8-10.26-6.65-21.46-11.97-33.36-15.71-1.59-.5-3.19-.97-4.8-1.41-11.03-3.03-22.62-4.72-34.57-4.89-.65-.01-1.29-.02-1.94-.02-1.02 0-2.04.02-3.06.04-12.9.28-25.36 2.34-37.15 5.94-1.6.49-3.18 1.01-4.75 1.55-11.78 4.07-22.83 9.7-32.91 16.64-1.37.95-2.73 1.91-4.07 2.91-9.74 7.24-18.48 15.73-26 25.24-1.03 1.31-2.04 2.64-3.02 3.98-7.08 9.66-12.93 20.27-17.31 31.61-.6 1.55-1.17 3.12-1.72 4.7-3.93 11.38-6.4 23.43-7.21 35.94-.11 1.66-.19 3.32-.24 4.99-.04 1.32-.06 2.64-.06 3.97 0 11.13 1.33 21.94 3.83 32.31.39 1.62.81 3.24 1.26 4.84 2.08 7.43 4.77 14.6 8.01 21.46 22 46.62 69.43 78.89 124.41 78.89 48.91 0 91.84-25.54 116.22-64 8.44-13.31 14.64-28.17 18.11-44.05.35-1.62.69-3.26.98-4.9 1.43-7.98 2.18-16.18 2.18-24.56z"/>
  <g id="inclights">
    <path id="inc14_1_" d="M315.72 273l29.75 16.95c10.31-16.03 17.84-34 21.95-53.16l-33.59-7.84c-3.47 15.88-9.67 30.74-18.11 44.05z" className="st1"/>
    <path id="inc13_1_" d="M337 199.5c0 8.38-.75 16.58-2.19 24.54l33.72 7.03c2.27-12.84 3.02-26.17 2.05-39.78-.09-1.29-.22-2.57-.34-3.86l-33.56 2.68c.2 3.1.32 6.23.32 9.39z" className="st1"/>
    <path id="inc12_1_" d="M336.25 185.13l33.43-2.67c-1.97-15.66-6.15-30.56-12.2-44.39l-29.69 11.89c4.3 11.1 7.19 22.89 8.46 35.17z" className="st1"/>
    <path id="inc11_1_" d="M325.91 145.33l29.5-11.82c-6.51-13.72-14.88-26.32-24.77-37.49l-22.98 18.57c7.35 9.35 13.5 19.67 18.25 30.74z" className="st1"/>
    <path id="inc10_1_" d="M304.5 110.73l22.77-18.4c-10.05-10.67-21.53-19.92-34.09-27.46l-14.86 21.96c9.72 6.81 18.52 14.86 26.18 23.9z" className="st1"/>
    <path id="inc9_1_" d="M274.18 84.03l14.67-21.67c-.48-.27-.95-.54-1.43-.81-12.5-6.8-25.97-11.94-40.11-15.16l-6.5 21.93c11.9 3.74 23.1 9.06 33.37 15.71z" className="st1"/>
    <path id="inc8_1_" d="M236.01 66.91l6.39-21.56c-2.35-.46-4.71-.86-7.09-1.21-1.9-.28-3.8-.53-5.71-.74-9.22-1.01-18.66-1.21-28.24-.53l.08 19.16c11.96.16 23.54 1.85 34.57 4.88z" className="st1"/>
    <path id="inc7_1_" d="M196.44 62.04l-.08-18.73c-1.97.21-3.94.44-5.89.71-1.91.27-3.8.56-5.69.9-10.49 1.87-20.6 4.77-30.23 8.59l4.73 14.47c11.8-3.6 24.26-5.66 37.16-5.94z" className="st1"/>
    <path id="inc6_1_" d="M154.54 69.53l-4.6-14.09c-1.62.71-3.23 1.43-4.82 2.19-1.74.83-3.46 1.68-5.16 2.57-8.94 4.66-17.36 10.17-25.18 16.39l6.86 9.58c10.07-6.94 21.12-12.57 32.9-16.64z" className="st1"/>
    <path id="inc5_1_" d="M117.56 89.08l-6.67-9.31c-1.6 1.36-3.18 2.74-4.73 4.15-1.42 1.3-2.81 2.64-4.18 4-6.5 6.42-12.42 13.4-17.74 20.85l7.32 5.55c7.52-9.51 16.26-18 26-25.24z" className="st1"/>
    <path id="inc4_1_" d="M88.54 118.3l-7.14-5.41c-1.62 2.43-3.19 4.89-4.68 7.4-.98 1.66-1.94 3.34-2.87 5.04-3.82 7.01-7.11 14.35-9.86 21.93l7.24 2.64c4.38-11.33 10.23-21.94 17.31-31.6z" className="st1"/>
    <path id="inc3_1_" d="M69.51 154.6l-7.15-2.61c-1.44 4.39-2.72 8.85-3.78 13.38-.44 1.88-.84 3.78-1.22 5.69-1.23 6.26-2.08 12.64-2.56 19.12l7.51.35c.79-12.5 3.27-24.55 7.2-35.93z" className="st1"/>
    <path id="inc2_1_" d="M65.83 231.81C63.33 221.44 62 210.63 62 199.5c0-1.33.02-2.65.06-3.97l-7.56-.35c-.14 3.37-.18 6.77-.12 10.18.69 9.66 2.34 19.07 4.84 28.16l6.61-1.71z" className="st1"/>
    <path id="inc1_1_" d="M67.08 236.65l-6.45 1.68c3.81 12.17 9.16 23.72 15.87 34.42l6.11.03c-2.81-4.71-5.31-9.61-7.53-14.67-3.23-6.86-5.92-14.04-8-21.46z" className="st1"/>
  </g>

  <path d="M200 0l-.02 399.94M0 200l399.94.02" className="st2"/>
 <circle cx="200" cy="200" r="120"
</svg>




_____________________

 <radialGradient id="top-left" cx="150" cy="140" r="180" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#fff" stopOpacity="1" />
      <stop offset=".8" stopColor="red" stopOpacity=".7" />
      <stop offset="1" stopColor="red" stopOpacity=".8" />
  </radialGradient>
  <path fill="url(#flipscreen-grad)" d="M0 0h300v300H0z" />
*/