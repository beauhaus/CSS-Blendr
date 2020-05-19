import React from 'react';
import styled from 'styled-components'

const ColorDodgeIconWrap = styled.svg`
#matrix {
    transform: translatey(40px);
    svg {
        opacity: 0.8;
    }
   }

   .st1 {
    fill: #FFFFFF;
    stroke: #FFFFFF;
   }

   .st2 {
    fill: none;
    stroke: #000000;
    stroke-width: 2;
   }

   .st3 {
    fill: none;
    stroke: #000000;
    stroke-width: 3;
   }

   .st4 {
    fill: none;
    stroke: #FFFFFF;
    stroke-width: 3;
   }

   .st5 {
    stroke: #000000;
    stroke-width: 5;
   }

   .st6 {
    fill: none;
    stroke: #FFFFFF;
    stroke-width: 5;
   }

   .st7 {
    fill: none;
    stroke: #000000;
    stroke-width: 5;
   }

   .st8 {
    opacity: 0.51;
   }

  
   .st28 {
    fill: #FF0000;
   }

   .st29 {
    fill: #FFFF00;
   }

   .st30 {
    fill: #086DFF;
   }

   .st31 {
    fill: #FBB03B;
   }

   .st32 {
    fill: #FF00FF;
   }

   .st33 {
    fill: #1FFF89;
   }

   .st34 {
    fill: #FFFFFF;
   }

   svg {
       fill-opacity: 0.9;
   }

`;
const ColorDodgeIcon = () => {
  // console.log("ColorDodgeIconWrap: ")
  return (<ColorDodgeIconWrap xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 320">
    <description>ColorDodge</description>
    <filter id="ball-blur">
      <feGaussianBlur stdDeviation="6 0"></feGaussianBlur>
    </filter>

    <linearGradient id="bgGrad" x1="2.1632" x2="362.1635" y1="160.0238" y2="160.0238" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#2C5838" />
      <stop offset=".1956" stopColor="#356041" />
      <stop offset=".5144" stopColor="#4D7658" />
      <stop offset=".9147" stopColor="#75997F" />
      <stop offset="1" stopColor="#7EA188" />
    </linearGradient>

    <filter id="ballBlur">
      <feGaussianBlur stdDeviation="6 0"></feGaussianBlur>
    </filter>

    <path fill="url(#bgGrad)" d="M2.16 0h360v320.05h-360z" />
    <g id="face_1_">
      <path id="faceback_1_" d="M193.46 246.38c-1.83-14.73 1.11-118.22-14.86-116.34l-35.03 6.67-36.68 14.6c-3.92.26-6.88 3.74-6.62 7.77l4.97 74.83c.27 4.03 3.66 7.09 7.59 6.83l37.25 10.36 36.76 3.06c3.92-.27 6.88-3.74 6.62-7.78z" className="st1" />
      <g id="brows_1_">
        <path d="M115.23 156.55c-1.28-8.31 2.96-14.48 10.46-16.71M112.89 206.22c.48 10 6.1 14.41 14.56 13.23" className="st2" />
      </g>
      <path id="mouth_1_" d="M169.13 155.54s8.91 17.06 9.54 26.47c.62 9.4-7.27 7.58-7.27 7.58s-8.91-7.06-9.54-16.47c-.63-9.4 7.27-17.58 7.27-17.58z" className="st2" />
      <path id="glasses_1_" d="M138.32 223.44c-6.36.47-12.23-8.87-13.12-20.87-.68-9.3 1.83-17.47 5.96-20.88v-6.82c-5.04-2.19-9.22-10.33-9.96-20.3-.88-11.99 3.55-22.1 9.91-22.57 6.36-.47 12.23 8.88 13.11 20.87.64 8.61-1.47 16.25-5.06 20.05v8.11c4.64 2.71 8.37 10.47 9.06 19.84.89 11.99-3.54 22.1-9.9 22.57z" />
    </g>
    <g id="blenderbody_1_">
      <g id="base_1_">
        <path d="M212.69 244.9c-.26-36.04-2.64-71.93-7.16-107.68-.17-2.52-2.29-4.43-4.74-4.27-9.98-3.57 5.08 110.02 3.02 112.54.31 5.9 9.36 5.35 8.88-.59z" className="st3" />
        <path d="M204.48 255.53c-.89-40.88-3.6-81.64-8.13-122.28-.45-6.25-15.18-5.28-14.8.98 0 0 8.24 7.7 10.93 61.6 5.23 60.93-10.49 61.98 3.66 64.83 3.54.2 8.73-1.51 8.34-5.13z" className="st3" />
      </g>
      <g id="pitcher_1_">
        <path d="M2.74 124.01c15.07-1.56 58.26 10.33 60.34 13.51 1.6 2.44 3.36 8.09 4.6 8.86 3 1.85 10.3 3.84 10.3 3.84-9.64-6.33-5.52-9.94-14.82-21.93-20.35-8.08-44.15-13.79-60.41-10.87" className="st4" />
        <path d="M106.27 240.98c-.27-14.23-.18-86.36-9.63-89.19-2.04.14-3.53 2.7-3.33 5.72 3.01 28.2 4.9 56.19 5.58 83.95.39 7.09 7.92 6.64 7.38-.48z" className="st3" />
        <path d="M1.5 282.77c-.14 16.51 9.49-8.06 15.37-9.03 19.81-3.29 60.76-20.6 82.01-32.27l-4.35-84.04c-32.54-14.58-60.72-23.31-92.44-24.24M88.31 221.17c-12.32 9.34-50.67 26.01-66.11 28.23M22.26 250.31l-1.52-22.81M34.52 247.02l-.74-11.22M44.11 242.4l-.75-11.23M53.72 238.25l-.61-9.12M63.3 233.63l-.75-11.23M70.46 229.81l-.48-7.3M80.04 225.18l-1.09-16.42M88.36 220.1l-.75-11.23" className="st4" />
      </g>
      <path id="cape_1_" d="M52.64 258.81c-12.45-3.08-29.89-20.17-42.34-23.25 1.16 2.43 3.3 12.91-2.68 20.86 11.98-1.95 7.98 28.05.62 38.47 7.36-2.42 22.36 4.58 16.36 17.58 17-9 26-2 29 2 9-4 29.29.01 36.73-5.55 10.99-8.22 11.95-34.59 32.61-40.02s10.44-17.78 10.44-17.78c-11.3-2.55-12.17-2.88-24.88-11.82-.01.01-40.84 23.2-55.86 19.51z" className="st5" />
      <g id="arms_1_">
        <path d="M51.21 281.13l7-6-1.53-7.05c.69 1.94 1.39 3.88 2.08 5.82 21.86-1.93 64.2-12.51 90.75-25.99M151.21 135.13l-20-67 9-10-9 10-9-7" className="st6" />
        <path d="M334.1 265.13l-10.16-1-2.77-73-108.96 26" className="st7" />
        <path d="M278.7 242.13l-7.39-4 14.77-77-72.95 30" className="st7" />
      </g>
    </g>



    {/* <line x1="0" x2="100%" stroke="orangered" y1="68.5" y2="68.5" /> */}


    <g id="matrix">


      <svg viewBox="-80 0 20 65" width="100%" height="45%">
        <ellipse fill="url(#bullGrad)" cx="4.5" cy="31" rx="3.2" ry="9" />
      </svg>


      <svg viewBox="-70 0 20 65" width="100%" height="45%">
        <ellipse fill="url(#bullGrad)" cx="4.5" cy="31" rx="3.2" ry="9" />
      </svg>


      <svg viewBox="-60 0 20 65" width="100%" height="45%">
        <ellipse fill="url(#bullGrad)" cx="4.5" cy="31" rx="3.5" ry="10.5" />
      </svg>


      <svg viewBox="-51 0 20 65" width="100%" height="45%">
        <ellipse fill="url(#bullGrad)" cx="4.5" cy="31" rx="3" ry="13.5" />
      </svg>


      <svg viewBox="-46 0 20 65" width="100%" height="45%">
        <ellipse fill="url(#bullGrad)" cx="4.5" cy="31" rx="4" ry="18" />
      </svg>

      <svg viewBox="-40 0 20 65" width="100%" height="45%">
        <ellipse fill="url(#bullGrad)" cx="4.5" cy="31" rx="4" ry="23" />
      </svg>

      <svg viewBox="-34 0 20 65" width="100%" height="45%">
        <ellipse fill="url(#bullGrad)" cx="4.5" cy="31" rx="4" ry="23" />
      </svg>

      <svg viewBox="-29 0 20 65" width="100%" height="45%">
        <ellipse fill="url(#bullGrad)" cx="4" cy="31" rx="3.5" ry="19" />
      </svg>

      <svg viewBox="-22 0 20 65" width="100%" height="45%">
        <ellipse fill="url(#bullGrad)" cx="4" cy="31" rx="3.5" ry="12" />
      </svg>

      <svg viewBox="-11 0 20 65" width="100%" height="45%">
        <ellipse fill="url(#bullGrad)" cx="4" cy="31" rx="3.5" ry="12" />
      </svg>

      <svg viewBox="0 0 20 65" width="100%" height="45%">
        <ellipse fill="url(#bullGrad)" cx="4" cy="31" rx="3.5" ry="12" />
      </svg>

      <svg viewBox="10 0 20 65" width="100%" height="45%">
        <ellipse fill="url(#bullGrad)" cx="4" cy="31" rx="3.5" ry="12" />
      </svg>

      <svg viewBox="19 0 20 65" width="100%" height="45%">
        <ellipse fill="url(#bullGrad)" cx="4" cy="31" rx="4.3" ry="15" />
      </svg>

      <svg viewBox="27 0 20 65" width="100%" height="45%">
        <linearGradient id="bullGrad" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0C2914" />
          <stop offset="0.6" stopColor="#91BA9D" />
        </linearGradient>
        <ellipse fill="url(#bullGrad)" cx="4" cy="31" rx="4.5" ry="20" />
      </svg>
      <g id="beachball_1_">

        <g filter="url(#ballBlur)">
          <path d="M34.12 32.83c-15.64 12.2-21.06 26.96-20.46 43.23 8.8-7.87 25.51-13.05 48.12-16.21.02-3.21 1-5.96 3.22-8.11-11.02-10.96-21.7-19.75-30.88-18.91z" className="st28" />

          <path d="M34.25 32.83c14.7-7.98 29.15-8.76 43.36-2.7-.09 5.65-1.64 12.23-4.37 19.56-3.57-.83-6.35-.24-8.23 2.06-12.25-12.79-22.44-18.87-30.76-18.92z" className="st29" />

          <path d="M77.36 30.13c.5 3.49-.53 9.58-3.99 19.56 4.51 1.71 6.67 4.77 7.46 8.62 12.5.35 19.72 1.64 20.97 3.99-3.48-13.79-11.26-24.76-24.44-32.17z" className="st30" />
          <path d="M80.7 58.44c12.57.35 20.11 1.65 20.97 3.86 2.48 18.44-4.81 30.34-13.77 41.17 2.33-7.85-.32-19.23-11.71-36.8 2.95-2.54 4.78-5.24 4.51-8.23z" className="st31" />
          <path d="M76.2 66.67c-3.02 1.18-6.06 1.34-9.14 0-10.31 24.64-17.74 36.06-26.12 44.91 16.1 5.59 31.63 3.19 46.58-7.59 3.33-7.39-.01-19.52-11.32-37.32z" className="st32" />


          <path d="M61.66 59.98c1.58 3.01 3.37 5.26 5.4 6.69-5.44 15.05-14.55 30.01-25.99 44.91-13.37-6.92-23.26-17.9-27.41-35.51 7.12-7.07 22.98-12.46 48-16.09z" className="st33" />
        </g>
        <ellipse cx="71.31" cy="58.7" className="st34" rx="9.78" ry="9.39" />
      </g>

    </g>

  </ColorDodgeIconWrap >)
}

export default ColorDodgeIcon;

