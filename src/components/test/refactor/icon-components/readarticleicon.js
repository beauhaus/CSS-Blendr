import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { AppContext } from "../../../../pages/page-b";
import { gsap, Power4 } from "gsap";
import { Link } from "react-scroll";

const StyledReadArticleIcon = styled.div`
  width: 25%;
  height: 8vh;
  ${"" /* border: 1px solid brown; */}
  margin: auto;
  margin-bottom: 0;
  color: #000;
  display: grid;
  place-items: center;
  position: absolute;
  bottom: 0;
  z-index: 3;
  display: grid;
  place-items: center;
  animation: fadeInOut 6s ease-in-out forwards;
  &.anim-display {
  }
  svg {
    width: 70%;
    height: 75%;
    filter: drop-shadow(1px 1px 0px #000);
    ${"" /* border: 1px solid skyblue; */}
  }

  .icon-book-cover {
    stroke: #fff;
    stroke-width: 10;
    fill: transparent;
    opacity: 1;
  }

  .icon-pg-left {
    stroke: #fff;
    stroke-width: 10;
    fill: #aaa;
    opacity: 0;
    fill: transparent;
  }

  .icon-pg-right {
    stroke: #fff;
    stroke-width: 10;
    ${"" /* fill: #aaa; */}
    opacity: 0;

    fill: transparent;
  }

  .page-turn {
    stroke-width: 0;
    ${"" /* fill: var(--grey-C); */}
  }
`;

const ReadArticleIcon = (props) => {
  const { mixMode } = useContext(AppContext);
  // console.log(">ReadArticleIcon", props);

  let pageTurn = useRef(null);
  let pageLeft = useRef(null);
  let pageRight = useRef(null);
  let bookCover = useRef(null);
  let pageTextRt = useRef(null);
  let pageTextLt = useRef(null);

  useEffect(() => {
    gsap.set(pageTurn, {
      opacity: 0,
      attr: { points: "300,60 340,30 560,25 520,345 340,340 300,370" },
    });
    gsap.set(pageTextRt, { opacity: 0 });
    gsap.set(pageTextLt, { opacity: 0 });
    gsap.set(bookCover, { stroke: "#fff" });

    const tl = gsap.timeline({ delay: 1 });

    tl.to(pageTurn, 0.1, { opacity: 1, fill: "#ddd" })
      .to(pageTurn, 0.05, {
        attr: { points: "300,60 340,30 560,25 520,345 340,340 300,370" },
      })
      .to(pageTextRt, 0.1, { opacity: 1 }, "-=.1")
      .to(pageTurn, 0.1, {
        attr: { points: "300,60 360,20 400,0 380,350 340,340 300,370" },
      })
      .to(pageTurn, 0.05, {
        attr: { points: "330,30 330,30 250,0 140,350 230,360 300,370" },
      })
      .to(pageTurn, 0.05, {
        attr: { points: "300,50 230,20 100,10 100,350 180,360 300,370" },
      })
      .to(pageTurn, 0.05, {
        attr: { points: "300,60 260,25 70,20 100,350 240,340 300,370" },
      })
      .to(pageTurn, 0.05, {
        attr: { points: "300,60 260,30 60,30 60,340 260,340 300,370" },
      })
      .to(pageTextLt, 0.15, { opacity: 1 })
      .to(pageTurn, 0.25, { opacity: 0 }, "-=.25");
  }, [mixMode]);
  return (
    <StyledReadArticleIcon className="read-article-icon">
      <Link
        to={`${mixMode}-article`}
        smooth={true}
        // onSetActive={console.log('handleSetActive')}
        duration={500}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          overflow="visible"
          width="100%"
          height="100%"
          viewBox="0 0 600 400"
        >
          <polygon
            className="icon-book-cover"
            fill="none"
            points="540,40, 560,40 560,360, 350,360 300,390 250,360 40,360 40,40 250,40 300,70 340,40"
            ref={(elem) => (bookCover = elem)}
          />

          <g ref={(elem) => (pageTextRt = elem)}>
            <line
              className="icon-text-rt"
              x1="340"
              y1="100"
              x2="520"
              y2="100"
              strokeWidth="20"
              stroke="#fff"
            />
            <line
              className="icon-text-rt"
              x1="340"
              y1="190"
              x2="520"
              y2="190"
              strokeWidth="20"
              stroke="#fff"
            />
            <line
              className="icon-text-rt"
              x1="340"
              y1="280"
              x2="520"
              y2="280"
              strokeWidth="20"
              stroke="#fff"
            />
          </g>
          <g ref={(elem) => (pageTextLt = elem)}>
            <line
              className="icon-text-lt"
              x1="80"
              y1="100"
              x2="260"
              y2="100"
              strokeWidth="20"
              stroke="#fff"
            />
            <line
              className="icon-text-lt"
              x1="80"
              y1="190"
              x2="260"
              y2="190"
              strokeWidth="20"
              stroke="#fff"
            />
            <line
              className="icon-text-lt"
              x1="80"
              y1="280"
              x2="260"
              y2="280"
              strokeWidth="20"
              stroke="#fff"
            />
          </g>
          <polyline
            className="page-turn"
            points="300,60 340,30 540,30 540,340 340,340 300,370"
            ref={(elem) => (pageTurn = elem)}
          />
        </svg>
      </Link>
    </StyledReadArticleIcon>
  );
};

export default ReadArticleIcon;
