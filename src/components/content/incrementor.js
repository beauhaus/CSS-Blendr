import React from 'react';
import styled from 'styled-components';


const IncrementWrapper = styled.svg`
  
    
  transform-origin: 50% 50%;
  transform: scale(1.65,1.65);
      
  .inc-lights {
        fill: var(--inc-light-off);
        stroke: var(--inc-light-off-stroke);
        stroke-width: 2;
      }
      .on-lights {
          path {
          -webkit-animation: fadein 300ms ease-in forwards;
          animation: fadein 300ms ease-in forwards;
          }
        .inc-light-glow {
          fill: var(--inc-light-glow);
          filter: url(#blurFilter);
          stroke-width: 3;
          stroke: var(--inc-light-glow);
        }
        .inc-light-on {
          fill: var(--inc-light-on);
          stroke-width: .5;
          stroke: var(--inc-light-on-stroke);
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
      <filter id="blurFilter" y="-5" x="-10" height="40" width="60">
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
      </filter>
      <g className="inc-lights">
        <path d="M64.13 240.25c2.02 8.76 15.5 32.33 19.65 36.27l3.85-3.49c-6.91-10.61-12.35-22.25-16.05-34.65l-7.45 1.87z" />
        <path d="M66 200c0-2.1.05-4.2.15-6.28l-8.08-.75c-.04 1.5-.07 3.01-.07 4.53 0 10.91 1.17 21.55 3.36 31.8l7.47-1.87C66.99 218.57 66 209.4 66 200z" />
        <path d="M67.14 182.47c1.43-10.91 4.16-21.41 8.05-31.33l-8.65-3.87c-3.85 10.95-6.48 22.48-7.72 34.42l8.32.78z" />
        <path d="M79.76 140.81c4.96-10.06 11.14-19.4 18.35-27.84l-8.55-8.03c-7.52 9.73-13.88 20.41-18.88 31.81l9.08 4.06z" />
        <path d="M105.81 104.7c7.68-7.59 16.27-14.26 25.6-19.83l-6.85-12.84c-10.21 6.92-19.52 15.07-27.75 24.21l9 8.46z" />
        <path d="M134.16 66.03l7.18 13.46c9.75-4.76 20.17-8.36 31.08-10.65l-2.84-17.52c-12.53 3.42-24.41 8.39-35.42 14.71z" />
        <path d="M183.57 67c5.39-.66 10.87-1 16.43-1 5.84 0 11.59.38 17.24 1.1l3.64-20.68c-3.76-.28-7.55-.42-11.38-.42-9.88 0-19.54.96-28.89 2.76L183.57 67z" />
        <path d="M228.37 69.02c11.39 2.46 22.25 6.35 32.36 11.51l11.84-20.97c-12.69-5.72-26.27-9.77-40.44-11.88l-3.76 21.34z"  />
        <path d="M270.57 86.08c9.33 5.79 17.89 12.69 25.5 20.52l19.91-17.8c-9.93-9.47-21.12-17.64-33.28-24.22l-12.13 21.5z" />
        <path d="M303.61 115.02c7.05 8.58 13.04 18.06 17.8 28.23l26.43-11.08c-6.31-12.87-14.41-24.72-23.96-35.26l-20.27 18.11z" />
        <path d="M352.43 142.49l-26.65 11.18c3.83 10.39 6.41 21.39 7.55 32.82l29.11-1.82c-1.27-14.76-4.72-28.92-10.01-42.18z" />
        <path d="M334 200c0 10.28-1.31 20.58-3.68 30.56l28.2 7.74c2.87-13.58 4.49-27.72 4.49-40.8 0-.52-.01-1.03-.02-1.54l-29.01 1.81c0 .74.02 1.48.02 2.23z" />
        <path d="M327.26 241.43c-3.91 12.1-9.33 23.5-15.84 33.52l24.68 18.26.02-.02c8.07-9.98 14.97-26 19.76-43.89l-28.62-7.87z" />
      </g>
      <g className="on-lights">
        {modeNum > 0 &&
          <g id="inc1">
            <path className="inc-light-on" d="M64.13 240.25c2.02 8.76 15.5 32.33 19.65 36.27l3.85-3.49c-6.91-10.61-12.35-22.25-16.05-34.65l-7.45 1.87z" />
            <path className="inc-light-glow" d="M64.13 240.25c2.02 8.76 15.5 32.33 19.65 36.27l3.85-3.49c-6.91-10.61-12.35-22.25-16.05-34.65l-7.45 1.87z" />
          </g>
        }
        {modeNum > 1 &&
          <g id="inc2">
            <path className="inc-light-on" d="M66 200c0-2.1.05-4.2.15-6.28l-8.08-.75c-.04 1.5-.07 3.01-.07 4.53 0 10.91 1.17 21.55 3.36 31.8l7.47-1.87C66.99 218.57 66 209.4 66 200z" />
            <path className="inc-light-glow" d="M66 200c0-2.1.05-4.2.15-6.28l-8.08-.75c-.04 1.5-.07 3.01-.07 4.53 0 10.91 1.17 21.55 3.36 31.8l7.47-1.87C66.99 218.57 66 209.4 66 200z" />
          </g>
        }
        {modeNum > 2 &&
          <g id="inc3">
            <path className="inc-light-on" d="M67.14 182.47c1.43-10.91 4.16-21.41 8.05-31.33l-8.65-3.87c-3.85 10.95-6.48 22.48-7.72 34.42l8.32.78z" />
            <path className="inc-light-glow" d="M67.14 182.47c1.43-10.91 4.16-21.41 8.05-31.33l-8.65-3.87c-3.85 10.95-6.48 22.48-7.72 34.42l8.32.78z" />
          </g>
        }
        {modeNum > 3 &&
          <g id="inc4">
            <path className="inc-light-on" d="M79.76 140.81c4.96-10.06 11.14-19.4 18.35-27.84l-8.55-8.03c-7.52 9.73-13.88 20.41-18.88 31.81l9.08 4.06z" />
            <path className="inc-light-glow" d="M79.76 140.81c4.96-10.06 11.14-19.4 18.35-27.84l-8.55-8.03c-7.52 9.73-13.88 20.41-18.88 31.81l9.08 4.06z" />
          </g>
        }
        {modeNum > 4 &&
          <g id="inc5">
            <path className="inc-light-on" d="M105.81 104.7c7.68-7.59 16.27-14.26 25.6-19.83l-6.85-12.84c-10.21 6.92-19.52 15.07-27.75 24.21l9 8.46z" />
            <path className="inc-light-glow" d="M105.81 104.7c7.68-7.59 16.27-14.26 25.6-19.83l-6.85-12.84c-10.21 6.92-19.52 15.07-27.75 24.21l9 8.46z" />
          </g>
        }
        {modeNum > 5 &&
          <g id="inc6">
            <path className="inc-light-on" d="M134.16 66.03l7.18 13.46c9.75-4.76 20.17-8.36 31.08-10.65l-2.84-17.52c-12.53 3.42-24.41 8.39-35.42 14.71z" />
            <path className="inc-light-glow" d="M134.16 66.03l7.18 13.46c9.75-4.76 20.17-8.36 31.08-10.65l-2.84-17.52c-12.53 3.42-24.41 8.39-35.42 14.71z" />
          </g>
        }
        {modeNum > 6 &&
          <g id="inc7">
            <path className="inc-light-on" d="M183.57 67c5.39-.66 10.87-1 16.43-1 5.84 0 11.59.38 17.24 1.1l3.64-20.68c-3.76-.28-7.55-.42-11.38-.42-9.88 0-19.54.96-28.89 2.76L183.57 67z" />
            <path className="inc-light-glow" d="M183.57 67c5.39-.66 10.87-1 16.43-1 5.84 0 11.59.38 17.24 1.1l3.64-20.68c-3.76-.28-7.55-.42-11.38-.42-9.88 0-19.54.96-28.89 2.76L183.57 67z" />
          </g>
        }
        {modeNum > 7 &&
          <g id="inc8">
            <path className="inc-light-on" d="M228.37 69.02c11.39 2.46 22.25 6.35 32.36 11.51l11.84-20.97c-12.69-5.72-26.27-9.77-40.44-11.88l-3.76 21.34z" />
            <path className="inc-light-glow" d="M228.37 69.02c11.39 2.46 22.25 6.35 32.36 11.51l11.84-20.97c-12.69-5.72-26.27-9.77-40.44-11.88l-3.76 21.34z" />
          </g>
        }
        {modeNum > 8 &&
          <g id="inc9">
            <path className="inc-light-on" d="M270.57 86.08c9.33 5.79 17.89 12.69 25.5 20.52l19.91-17.8c-9.93-9.47-21.12-17.64-33.28-24.22l-12.13 21.5z" />
            <path className="inc-light-glow" d="M270.57 86.08c9.33 5.79 17.89 12.69 25.5 20.52l19.91-17.8c-9.93-9.47-21.12-17.64-33.28-24.22l-12.13 21.5z" />
          </g>
        }
        {modeNum > 9 &&
          <g id="inc10">
            <path className="inc-light-on" d="M303.61 115.02c7.05 8.58 13.04 18.06 17.8 28.23l26.43-11.08c-6.31-12.87-14.41-24.72-23.96-35.26l-20.27 18.11z" />
            <path className="inc-light-glow" d="M303.61 115.02c7.05 8.58 13.04 18.06 17.8 28.23l26.43-11.08c-6.31-12.87-14.41-24.72-23.96-35.26l-20.27 18.11z" />
          </g>
        }
        {modeNum > 10 &&
          <g id="inc11">
            <path className="inc-light-on" d="M352.43 142.49l-26.65 11.18c3.83 10.39 6.41 21.39 7.55 32.82l29.11-1.82c-1.27-14.76-4.72-28.92-10.01-42.18z" />
            <path className="inc-light-glow" d="M352.43 142.49l-26.65 11.18c3.83 10.39 6.41 21.39 7.55 32.82l29.11-1.82c-1.27-14.76-4.72-28.92-10.01-42.18z" />
          </g>
        }
        {modeNum > 11 &&
          <g id="inc12">
            <path className="inc-light-on" d="M334 200c0 10.28-1.31 20.58-3.68 30.56l28.2 7.74c2.87-13.58 4.49-27.72 4.49-40.8 0-.52-.01-1.03-.02-1.54l-29.01 1.81c0 .74.02 1.48.02 2.23z" />
            <path className="inc-light-glow" d="M334 200c0 10.28-1.31 20.58-3.68 30.56l28.2 7.74c2.87-13.58 4.49-27.72 4.49-40.8 0-.52-.01-1.03-.02-1.54l-29.01 1.81c0 .74.02 1.48.02 2.23z" />
          </g>
        }
        {modeNum > 12 &&
          <g id="inc13">
            <path className="inc-light-on" d="M327.26 241.43c-3.91 12.1-9.33 23.5-15.84 33.52l24.68 18.26.02-.02c8.07-9.98 14.97-26 19.76-43.89l-28.62-7.87z" />
            <path className="inc-light-glow" d="M327.26 241.43c-3.91 12.1-9.33 23.5-15.84 33.52l24.68 18.26.02-.02c8.07-9.98 14.97-26 19.76-43.89l-28.62-7.87z" />
          </g>
        }
      </g>
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