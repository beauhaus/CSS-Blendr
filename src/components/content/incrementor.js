import React from 'react';
import styled from 'styled-components';
// import CycleIcons from './cycleicons'
// import NormalIcon from '../mode-icons/normal'


const IncrementWrapper = styled.svg`
  
    
  transform-origin: 50% 50%;
  transform: scale(1.65,1.65);
      
  .inc-lights {
        fill: var(--inc-light-off);
        stroke: var(--inc-light-off-stroke);
        stroke-width: 1;
      }
      .on-lights {
          path {
          -webkit-animation: fadein 400ms ease-in forwards;
          animation: fadein 400ms ease-in forwards;
          }
        .inc-light-glow {
          fill: var(--inc-light-glow);
          filter: url(#blurFilter);
          stroke-width: 4;
          stroke: var(--inc-light-glow);
        }
        .inc-light-on {
          stroke-width: 2;
          fill: var(--inc-light-on);
        }
      }
    .st3{fill:#f99c08;stroke:#000;}
    .st3{fill:none;stroke:#ff0}

@-webkit-keyframes fadein {
  0%{opacity: 0}
  100% { opacity: 1; }
}

@keyframes fadein {
  0%{opacity: 0}
  100% { opacity: 1; }
}
`
const Incrementor = ({ modeNum }) => {
  console.log("num: ", modeNum)

  return (
    <IncrementWrapper className="incrementor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
      <filter id="blurFilter" y="-5" x="-10"  height="40" width="60">
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
      </filter>
      <g className="inc-lights">
        <path d="M62.27 237.81c4.65 13.44 11.34 27.15 19.51 39.71l5.85-4.49c-7.41-11.38-13.13-23.97-16.82-37.39l-8.54 2.17z" />
        <path d="M66 200c0-2.82.1-5.62.27-8.4l-11.11-.95c-.12 3.06-.18 6.17-.16 9.35.05 10.05 2.07 21.38 5.7 33.05l8.87-2.25C67.25 220.91 66 210.6 66 200z" />
        <path d="M66.66 186.62c1.34-13.47 4.67-26.35 9.69-38.34l-12.67-5.65c-4.46 12.9-7.28 27.15-8.28 43.03l11.26.96z" />
        <path d="M78.38 143.7c5.6-12.09 12.96-23.2 21.73-33.01L88.18 99.5c-9.54 11.38-17.21 24.04-22.77 38.41l12.97 5.79z" />
        <path d="M103.51 107.03c9-9.34 19.34-17.37 30.72-23.79L125.8 67.4c-12.84 7.78-24.44 17.32-34.33 28.33l12.04 11.3z" />
        <path d="M130.12 64.88l8.51 15.97c11.49-5.93 23.95-10.25 37.09-12.65l-3.19-19.84c-14.99 3.53-29.29 9.13-42.41 16.52z" />
        <path d="M180.65 67.4c6.32-.91 12.78-1.4 19.35-1.4 7.13 0 14.12.56 20.95 1.63l4.14-22.94c-3.99-.39-8.02-.63-12.09-.7-12.09-.21-24.02.92-35.59 3.28l3.24 20.13z" />
        <path d="M225.87 68.51c13.14 2.57 25.59 7.06 37.05 13.17l12.76-22.88c-14.21-6.77-29.55-11.41-45.62-13.52l-4.19 23.23z" />
        <path d="M267.29 84.1c11.43 6.65 21.79 14.95 30.75 24.56l21.22-19.06c-11.51-11.47-24.68-21.15-39.09-28.6l-12.88 23.1z" />
        <path d="M301.39 112.38c8.7 10.06 15.92 21.43 21.34 33.77l28.38-11.89c-7.39-15.19-16.99-29.03-28.35-41.06l-21.37 19.18z" />
        <path d="M353.23 138.79l-28.56 11.97c4.76 12.05 7.82 24.95 8.9 38.41l33.14-2.18c-2.11-17.01-6.74-33.22-13.48-48.2z" />
        <path d="M334 200c0 11.18-1.72 22.56-4.7 33.54l33.87 9.3c2.98-11.66 4.83-23.49 4.83-34.84 0-5.41-.26-10.76-.75-16.03l-33.38 2.2c.08 1.93.13 3.87.13 5.83z" />
        <path d="M327.91 238.35c-4.22 13.68-10.34 26.61-17.49 37.6l31.61 21.24c7.29-14.37 14.78-31.65 19.83-49.52l-33.95-9.32z" />
      </g>
      <g className="on-lights">
        {modeNum > 0 &&
          <g id="inc1">
            <path className="inc-light-on" d="M62.27 237.81c4.65 13.44 11.34 27.15 19.51 39.71l5.85-4.49c-7.41-11.38-13.13-23.97-16.82-37.39l-8.54 2.17z" />
            <path className="inc-light-glow" d="M62.27 237.81c4.65 13.44 11.34 27.15 19.51 39.71l5.85-4.49c-7.41-11.38-13.13-23.97-16.82-37.39l-8.54 2.17z" />
          </g>
        }
        {modeNum > 1 &&
          <g id="inc2">
            <path className="inc-light-on"  d="M66 200c0-2.82.1-5.62.27-8.4l-11.11-.95c-.12 3.06-.18 6.17-.16 9.35.05 10.05 2.07 21.38 5.7 33.05l8.87-2.25C67.25 220.91 66 210.6 66 200z" />
            <path className="inc-light-glow" d="M66 200c0-2.82.1-5.62.27-8.4l-11.11-.95c-.12 3.06-.18 6.17-.16 9.35.05 10.05 2.07 21.38 5.7 33.05l8.87-2.25C67.25 220.91 66 210.6 66 200z" />
          </g>
        }
        {modeNum > 2 &&
          <g id="inc3">
            <path className="inc-light-on" d="M66.66 186.62c1.34-13.47 4.67-26.35 9.69-38.34l-12.67-5.65c-4.46 12.9-7.28 27.15-8.28 43.03l11.26.96z" />
            <path className="inc-light-glow" d="M66.66 186.62c1.34-13.47 4.67-26.35 9.69-38.34l-12.67-5.65c-4.46 12.9-7.28 27.15-8.28 43.03l11.26.96z" />
          </g>
        }
        {modeNum > 3 &&
          <g id="inc4">
            <path className="inc-light-on" d="M78.38 143.7c5.6-12.09 12.96-23.2 21.73-33.01L88.18 99.5c-9.54 11.38-17.21 24.04-22.77 38.41l12.97 5.79z" />
            <path className="inc-light-glow" d="M78.38 143.7c5.6-12.09 12.96-23.2 21.73-33.01L88.18 99.5c-9.54 11.38-17.21 24.04-22.77 38.41l12.97 5.79z" />
          </g>
        }
        {modeNum > 4 &&
          <g id="inc5">
            <path className="inc-light-on" d="M103.51 107.03c9-9.34 19.34-17.37 30.72-23.79L125.8 67.4c-12.84 7.78-24.44 17.32-34.33 28.33l12.04 11.3z" />
            <path className="inc-light-glow" d="M103.51 107.03c9-9.34 19.34-17.37 30.72-23.79L125.8 67.4c-12.84 7.78-24.44 17.32-34.33 28.33l12.04 11.3z" />
          </g>
        }
        {modeNum > 5 &&
          <g id="inc6">
            <path className="inc-light-on" d="M130.12 64.88l8.51 15.97c11.49-5.93 23.95-10.25 37.09-12.65l-3.19-19.84c-14.99 3.53-29.29 9.13-42.41 16.52z" />
            <path className="inc-light-glow" d="M130.12 64.88l8.51 15.97c11.49-5.93 23.95-10.25 37.09-12.65l-3.19-19.84c-14.99 3.53-29.29 9.13-42.41 16.52z" />
          </g>
        }
        {modeNum > 6 &&
          <g id="inc7">
            <path className="inc-light-on" d="M180.65 67.4c6.32-.91 12.78-1.4 19.35-1.4 7.13 0 14.12.56 20.95 1.63l4.14-22.94c-3.99-.39-8.02-.63-12.09-.7-12.09-.21-24.02.92-35.59 3.28l3.24 20.13z" />
            <path className="inc-light-glow" d="M180.65 67.4c6.32-.91 12.78-1.4 19.35-1.4 7.13 0 14.12.56 20.95 1.63l4.14-22.94c-3.99-.39-8.02-.63-12.09-.7-12.09-.21-24.02.92-35.59 3.28l3.24 20.13z" />
          </g>
        }
        {modeNum > 7 &&
          <g id="inc8">
            <path className="inc-light-on" d="M225.87 68.51c13.14 2.57 25.59 7.06 37.05 13.17l12.76-22.88c-14.21-6.77-29.55-11.41-45.62-13.52l-4.19 23.23z" />
            <path className="inc-light-glow" d="M225.87 68.51c13.14 2.57 25.59 7.06 37.05 13.17l12.76-22.88c-14.21-6.77-29.55-11.41-45.62-13.52l-4.19 23.23z" />
          </g>
        }
        {modeNum > 8 &&
          <g id="inc9">
            <path className="inc-light-on" d="M267.29 84.1c11.43 6.65 21.79 14.95 30.75 24.56l21.22-19.06c-11.51-11.47-24.68-21.15-39.09-28.6l-12.88 23.1z" />
            <path className="inc-light-glow" d="M267.29 84.1c11.43 6.65 21.79 14.95 30.75 24.56l21.22-19.06c-11.51-11.47-24.68-21.15-39.09-28.6l-12.88 23.1z" />
          </g>
        }
        {modeNum > 9 &&
          <g id="inc10">
            <path className="inc-light-on" d="M301.39 112.38c8.7 10.06 15.92 21.43 21.34 33.77l28.38-11.89c-7.39-15.19-16.99-29.03-28.35-41.06l-21.37 19.18z" />
            <path className="inc-light-glow" d="M301.39 112.38c8.7 10.06 15.92 21.43 21.34 33.77l28.38-11.89c-7.39-15.19-16.99-29.03-28.35-41.06l-21.37 19.18z" />
          </g>
        }
        {modeNum > 10 &&
          <g id="inc11">
            <path className="inc-light-on" d="M353.23 138.79l-28.56 11.97c4.76 12.05 7.82 24.95 8.9 38.41l33.14-2.18c-2.11-17.01-6.74-33.22-13.48-48.2z" />
            <path className="inc-light-glow" d="M353.23 138.79l-28.56 11.97c4.76 12.05 7.82 24.95 8.9 38.41l33.14-2.18c-2.11-17.01-6.74-33.22-13.48-48.2z" />
          </g>
        }
        {modeNum > 11 &&
          <g id="inc12">
            <path className="inc-light-on" d="M334 200c0 11.18-1.72 22.56-4.7 33.54l33.87 9.3c2.98-11.66 4.83-23.49 4.83-34.84 0-5.41-.26-10.76-.75-16.03l-33.38 2.2c.08 1.93.13 3.87.13 5.83z" />
            <path className="inc-light-glow" d="M334 200c0 11.18-1.72 22.56-4.7 33.54l33.87 9.3c2.98-11.66 4.83-23.49 4.83-34.84 0-5.41-.26-10.76-.75-16.03l-33.38 2.2c.08 1.93.13 3.87.13 5.83z" />
          </g>
        }
        {modeNum > 12 &&
          <g id="inc13">
            <path className="inc-light-on" d="M327.91 238.35c-4.22 13.68-10.34 26.61-17.49 37.6l31.61 21.24c7.29-14.37 14.78-31.65 19.83-49.52l-33.95-9.32z" />
            <path className="inc-light-glow" d="M327.91 238.35c-4.22 13.68-10.34 26.61-17.49 37.6l31.61 21.24c7.29-14.37 14.78-31.65 19.83-49.52l-33.95-9.32z" />
          </g>
        }
      </g>
      {/* <circle cx="199.5" cy="199.5" r="125" fill="#f0f" /> */}
      <path d="M199 0v400" className="st3" />
      <path d="M-1 200h400" className="st3" />
    </IncrementWrapper>
  )
};

export default Incrementor;
/*
.elementToFadeInAndOut {
    width:200px;
    height: 200px;
    background: red;
    -webkit-animation: fadeinout 4s linear forwards;
    animation: fadeinout 4s linear forwards;
}

@-webkit-keyframes fadeinout {
  0%,100% { opacity: 0; }
  50% { opacity: 1; }
}

@keyframes fadeinout {
  0%,100% { opacity: 0; }
  50% { opacity: 1; }
}
*/