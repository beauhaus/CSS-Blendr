import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap"; //  , Power4, Expo

// import { AppContext } from "../../../pages/page-b";

const StyledRenderTester = styled.svg`
  border: 2px dashed lightgreen;
  height: 10vh;
  width: 90vw;
  margin: 20vh auto;
`;

const RenderTester = ({ input }) => {
  let renderChunk = useRef(null);

  useEffect(() => {
    gsap.set(renderChunk, { x: 0 });
    // gsap.delayedCall(4, iconTriggerOn);
    const tl = gsap.timeline({
      //   repeat: 1,
      //   repeatDelay: 2,
      //   repeatRefresh: true,
    });

    tl.progress(1);
    tl
      //   .call(iconTriggerOff)
      .to(renderChunk, { duration: 0, x: 0 })
      .to(renderChunk, { duration: 3, x: "-100%" });
  }, [input]);

  return (
    <StyledRenderTester
      className="render-tester"
      viewBox="0 0 200 50" //TODO change to 600 600?
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
    >
      <rect
        className="mode-name-bg"
        fill="#333"
        width="100%"
        height="100%"
        ref={(elem) => (renderChunk = elem)}
      />
      <text x="5" y="10" width="100%">
        {input}
      </text>
    </StyledRenderTester>
  );
};

export default RenderTester;
