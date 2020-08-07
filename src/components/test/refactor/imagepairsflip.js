import React, { useEffect, useRef, useContext } from "react";
import { gsap, Back } from "gsap";
import { AppContext } from "../../../pages/page-b";
import styled from "styled-components";

const StyledFlipImagePairs = styled.div`
  top: 3%;
  left: 3%;
  height: 94%;
  width: 94%;
  position: absolute;
  perspective: 200px;
  ${"" /* overflow: hidden; // breaks 3d in iOs safari */}
  img {
    position: absolute;
    width: 65%;
    height: 65%;
  }
  .top-image-flip {
    top: 0%;
    left: 8%;
    transform: rotateX(44deg);
    box-shadow: 18px 35px 10px -15px rgba(0, 0, 0, 0.5);
  }
  .bot-image {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    top: 25%;
    right: 10%;
    transform: rotateX(46deg);
  }
  .top-image-flip-effect {
    position: absolute;
    top: 0%;
    left: 8%;
    width: 65%;
    height: 65%;
    border: 2px solid yellow;
    background: lightgreen;
    transform: rotateX(44deg);
  }
  .alpha-display-flip {
    position: absolute;
    top: 20%;
    left: 8%;
    width: 70%;
    height: 30%;
    transform: rotateX(43deg);
    color: #fff;
    font-size: 4rem;
    font-weight: 200;
    text-shadow: 1px 1px 2px #000;
  }
`;

const FlipImagePairs = () => {
  const {
    mixMode,
    topAlphaVal,
    currentTop,
    currentBot,
    flipTriggerVal,
    alphaModifyMode,
    addImageMode,
    setCurrentTop,
    setCurrentBot,
  } = useContext(AppContext);
  let topImage = useRef(null);
  let botImage = useRef(null);
  let imgEffect = useRef(null);

  const imgFlipper = () => {
    setCurrentTop(currentBot);
    setCurrentBot(currentTop);
  };

  /* affordance animation (arrows) for changing modes */
  useEffect(() => {
    gsap.set(imgEffect, { opacity: 0 });
    const tl = gsap.timeline({ defaults: { delay: 0 } });
    tl.to(imgEffect, { duration: 0.1, opacity: 1 }, "-=0");
    tl.to(imgEffect, { duration: 2, opacity: 0 }, "-=0");
  }, [mixMode]);

  /*slide-out animation */
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { delay: 0 } });
    tl.to(botImage, { duration: 0.3, x: 800 }, "-=0")
      .to(topImage, { duration: 0.3, x: -800 }, "-=.3")
      .call(imgFlipper)
      .to(
        botImage,
        { duration: 0.5, ease: Back.easeInOut.config(1.8), x: 0 },
        "-=0"
      )
      .to(
        topImage,
        { duration: 0.5, ease: Back.easeInOut.config(1.8), x: 0 },
        "-=.5"
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flipTriggerVal]);

  return (
    <StyledFlipImagePairs className="flip-image-pairs-container">
      <img
        className="bot-image"
        src={currentBot.url}
        alt="nice pic"
        ref={(elem) => (botImage = elem)}
      />
      <img
        className="top-image-flip"
        src={"" || currentTop.url}
        alt="nicer pic"
        ref={(elem) => (topImage = elem)}
        style={{ opacity: `${topAlphaVal / 100}` }}
      />
      <div
        className="top-image-flip-effect"
        ref={(elem) => (imgEffect = elem)}
        style={{ mixBlendMode: "screen" }}
      ></div>
      {alphaModifyMode && !addImageMode && (
        <h2 className="alpha-display-flip">{topAlphaVal}%</h2>
      )}
    </StyledFlipImagePairs>
  );
};

export default FlipImagePairs;
