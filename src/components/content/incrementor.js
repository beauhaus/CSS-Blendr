import React from 'react';
import styled from 'styled-components';


const IncrementWrapper = styled.svg`
  transform-origin: 50% 50%;
  transform: scale(1.75,1.75) rotate(-5deg);
  .inc-lights {
        stroke-width: 2;
        fill: var(--inc-light-off);
        stroke: var(--inc-light-off-trim);
      }
  .inc-light-on {
          opacity: 0;
          fill: var(--inc-light-on);
          stroke-width: 1;
          stroke: var(--inc-light-on-trim);
          -webkit-animation: fadein 500ms ease-in forwards;
          animation: fadein 500ms ease-in forwards;          
        }
      .glow-lights {
          fill: var(--inc-light-glow);
          filter: url(#blurFilter);
          stroke-width: 3;
          stroke: var(--inc-light-glow);
          -webkit-animation: fadein 300ms ease-in forwards;
          animation: fadein 300ms ease-in forwards;
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
        <feGaussianBlur in="SourceGraphic" stdDeviation="7" />
      </filter>
      <g className="inc-lights">
        <path className={modeNum > 0 ? `inc-light-on` : ''} d="M105.9 294.49c-9.2-9.22-17.05-19.77-23.25-31.35l-4.98 2.53c6.5 11.98 14.7 23.06 24.5 32.76l.74-.74 3-3v-.11l-.01-.09z" />
        <path className={modeNum > 1 ? `inc-light-on` : ''} d="M79.94 257.8c-5.11-10.66-8.84-22.11-10.97-34.11l-6.16.96c2.51 12.37 6.58 24.39 12.12 35.7l5.01-2.55z" />
        <path className={modeNum > 2 ? `inc-light-on` : ''} d="M66.91 200.2c0-6.2.43-12.3 1.25-18.27l-7.67-1.24c-1.22 12.72-.78 25.53 1.25 38.05l6.32-.99c-.76-5.74-1.15-11.6-1.15-17.55z" />
        <path className={modeNum > 3 ? `inc-light-on` : ''} d="M69.1 176c2.19-11.99 5.99-23.42 11.16-34.05l-8.69-4.48c-5.2 12.02-8.63 24.56-10.38 37.25L69.1 176z" />
        <path className={modeNum > 4 ? `inc-light-on` : ''} d="M82.99 136.61c5.75-10.59 12.89-20.32 21.18-28.93l-7.71-7.8c-9.04 10.1-16.81 20.6-22.4 32.14l8.93 4.59z" />
        <path className={modeNum > 5 ? `inc-light-on` : ''} d="M108.42 103.45c8.67-8.25 18.45-15.33 29.09-21.03l-5.6-11.18c-11.73 6.27-22 14.71-31.35 24.26l7.86 7.95z" />
        <path className={modeNum > 6 ? `inc-light-on` : ''} d="M137.26 68.52l5.6 11.18c10.7-5.12 22.19-8.85 34.23-10.98l-2.37-12.98c-13.21 2.44-25.52 7.04-37.46 12.78z" />
        <path className={modeNum > 7 ? `inc-light-on` : ''} d="M183.02 67.82c5.69-.74 11.49-1.13 17.38-1.13 6.32 0 12.53.45 18.61 1.3l2.26-13.43c-13.4-1.43-26.93-1.68-40.13.23l1.88 13.03z" />
        <path className={modeNum > 8 ? `inc-light-on` : ''} d="M224.94 68.96c12.05 2.24 23.54 6.1 34.22 11.34l7.31-13.97c-12.57-5.4-25.81-9.06-39.23-11l-2.3 13.63z" />
        <path className={modeNum > 9 ? `inc-light-on` : ''} d="M264.48 83.06c10.64 5.83 20.39 13.07 29.02 21.47l12.94-12.65c-10.46-9.47-22.12-17.15-34.51-23.07l-7.45 14.25z" />
        <path className={modeNum > 10 ? `inc-light-on` : ''} d="M318.67 138.23l18.32-9.04c-7.03-11.91-15.78-23.07-26.17-33.2L297.7 108.8c8.25 8.78 15.32 18.67 20.97 29.43z" />
        <path className={modeNum > 11 ? `inc-light-on` : ''} d="M339.95 134.42l-18.61 9.18c5.06 10.8 8.72 22.38 10.74 34.53l22.69-3.27c-2.96-14.06-7.92-27.65-14.82-40.44z" />
        <path className={modeNum > 12 ? `inc-light-on` : ''} d="M333.91 200.2c0 6.81-.51 13.5-1.5 20.03l24.43 4.25c1.79-14.8 1.43-29.47-.96-43.72l-22.95 3.3c.64 5.3.98 10.68.98 16.14z" />
        <path className={modeNum > 13 ? `inc-light-on` : ''} d="M356.01 230.43l-24.63-4.29c-2.38 12.06-6.37 23.54-11.76 34.19l23.64 12.54c6.27-14.03 10.5-28.27 12.75-42.44z" />
        <path className={modeNum > 14 ? `inc-light-on` : ''} d="M316.79 265.62c-5.99 10.64-15.4 22.38-23.97 30.95l20.08 20.61c11.06-11.92 21.6-26.14 27.81-38.88l-23.92-12.68z" /> */}
      </g>

      <g className="glow-lights">
        {modeNum > 0 &&
          <path d="M105.9 294.49c-9.2-9.22-17.05-19.77-23.25-31.35l-4.98 2.53c6.5 11.98 14.7 23.06 24.5 32.76l.74-.74 3-3v-.11l-.01-.09z" />
        }
        {modeNum > 1 &&
          <path d="M79.94 257.8c-5.11-10.66-8.84-22.11-10.97-34.11l-6.16.96c2.51 12.37 6.58 24.39 12.12 35.7l5.01-2.55z" />
        }
        {modeNum > 2 &&
          <path d="M66.91 200.2c0-6.2.43-12.3 1.25-18.27l-7.67-1.24c-1.22 12.72-.78 25.53 1.25 38.05l6.32-.99c-.76-5.74-1.15-11.6-1.15-17.55z" />
        }
        {modeNum > 3 &&
          <path d="M69.1 176c2.19-11.99 5.99-23.42 11.16-34.05l-8.69-4.48c-5.2 12.02-8.63 24.56-10.38 37.25L69.1 176z" />
        }
        {modeNum > 4 &&
          <path d="M82.99 136.61c5.75-10.59 12.89-20.32 21.18-28.93l-7.71-7.8c-9.04 10.1-16.81 20.6-22.4 32.14l8.93 4.59z" />
        }
        {modeNum > 5 &&
          <path d="M108.42 103.45c8.67-8.25 18.45-15.33 29.09-21.03l-5.6-11.18c-11.73 6.27-22 14.71-31.35 24.26l7.86 7.95z" />
        }
        {modeNum > 6 &&
          <path d="M137.26 68.52l5.6 11.18c10.7-5.12 22.19-8.85 34.23-10.98l-2.37-12.98c-13.21 2.44-25.52 7.04-37.46 12.78z" />
        }
        {modeNum > 7 &&
          <path d="M183.02 67.82c5.69-.74 11.49-1.13 17.38-1.13 6.32 0 12.53.45 18.61 1.3l2.26-13.43c-13.4-1.43-26.93-1.68-40.13.23l1.88 13.03z" />
        }
        {modeNum > 8 &&
          <path d="M224.94 68.96c12.05 2.24 23.54 6.1 34.22 11.34l7.31-13.97c-12.57-5.4-25.81-9.06-39.23-11l-2.3 13.63z" />
        }
        {modeNum > 9 &&
          <path d="M264.48 83.06c10.64 5.83 20.39 13.07 29.02 21.47l12.94-12.65c-10.46-9.47-22.12-17.15-34.51-23.07l-7.45 14.25z" />
        }
        {modeNum > 10 &&
          <path d="M318.67 138.23l18.32-9.04c-7.03-11.91-15.78-23.07-26.17-33.2L297.7 108.8c8.25 8.78 15.32 18.67 20.97 29.43z" />
        }
        {modeNum > 11 &&
          <path d="M339.95 134.42l-18.61 9.18c5.06 10.8 8.72 22.38 10.74 34.53l22.69-3.27c-2.96-14.06-7.92-27.65-14.82-40.44z" />
        }
        {modeNum > 12 &&
          <path d="M333.91 200.2c0 6.81-.51 13.5-1.5 20.03l24.43 4.25c1.79-14.8 1.43-29.47-.96-43.72l-22.95 3.3c.64 5.3.98 10.68.98 16.14z" />
        }
        {modeNum > 13 &&
          <path d="M356.01 230.43l-24.63-4.29c-2.38 12.06-6.37 23.54-11.76 34.19l23.64 12.54c6.27-14.03 10.5-28.27 12.75-42.44z" />
        }
        {modeNum > 14 &&
          <path d="M316.79 265.62c-5.99 10.64-15.4 22.38-23.97 30.95l20.08 20.61c11.06-11.92 21.6-26.14 27.81-38.88l-23.92-12.68z" />
        }
      </g>
    </IncrementWrapper>
  )
};

export default Incrementor;
