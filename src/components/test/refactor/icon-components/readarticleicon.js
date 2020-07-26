import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../../../pages/page-b'
import { gsap, Power4 } from "gsap";

const StyledReadArticleIcon = styled.div`
width: 10vw;
height: 100%;
${'' /* border: 1px solid brown; */}
margin: auto;
margin-bottom: 0;
display: grid;
place-items: center;
svg {
    width: 80%;
    height: 80%;
    ${'' /* filter: drop-shadow(1px 1px 0px var(--active-blue)); */}
    ${'' /* border: 1px solid var(--active-blue); */}
        filter: drop-shadow(0px 0px 1px #000);
}

    .icon-book-cover {
        ${'' /* fill: none; */}
        stroke: #333;
        stroke-width: 20;
        fill: #000;

    }
    .icon-pg-left {
        stroke: #fff;
        stroke-width: 10;
        fill: #aaa;
    }
    .icon-pg-right {
        stroke: #fff;
        stroke-width: 10;
        fill: #aaa;
    }

    .page-turn {
        stroke-width: 0;
        fill: var(--grey-C);
    }
`

const ReadArticleIcon = (props) => {
    const {
        mixMode,
    } = useContext(AppContext);
    // console.log(">ReadArticleIcon", props);

    let pageTurn = useRef(null);
    let pageLeft = useRef(null);
    let pageRight = useRef(null);
    let bookCover = useRef(null);
    let pageTextRt = useRef(null);
    let pageTextLt = useRef(null);

    useEffect(() => {
        gsap.set(pageTurn, { opacity: 0 })
        gsap.set(pageTextRt, { opacity: 0 })
        gsap.set(pageTextLt, { opacity: 0 })
        gsap.set(bookCover, { stroke: '#000' })
        // .to(bookCover, 1, {stroke: 'var(--active-blue)'})          


        const tl = gsap.timeline({ delay: 1 });

        tl

            .to(pageTurn, .1, { opacity: 1 })
            .to(pageTurn, .1, { attr: { points: "300,60 340,30 560,25 520,345 340,340 300,370" } })
            .to(pageRight, .2, { fill: '#222' }, '-=.2')
            // .to(pageTurn, .1, { attr: { points: "300,60 360,30 510,15 440,350 340,340 300,370" } })
            .to(pageTextRt, 0, { opacity: 1 })
            .to(pageTurn, .2, { attr: { points: "300,60 360,20 400,0 380,350 340,340 300,370" } })
            .to(pageTurn, .1, { attr: { points: "330,30 330,30 250,0 140,350 230,360 300,370" } })
            .to(pageTurn, .1, { attr: { points: "300,50 230,20 100,10 100,350 180,360 300,370" } })
            .to(pageTurn, .1, { attr: { points: "300,60 260,25 70,20 100,350 240,340 300,370" } })
            .to(pageTurn, .1, { attr: { points: "300,60 260,30 60,30 60,340 260,340 300,370" } })
            .to(pageTextLt, .3, { opacity: 1 })
            .to(pageRight, .5, { fill: '#aaa' }, '-=1')
            .to(pageLeft, .5, { fill: '#222' }, '-=.5')
            .to(pageTurn, .5, { opacity: 0 }, '-=.5')
            .to(pageLeft, .5, { fill: '#aaa' }, '-=.5')
            .to(bookCover, 1, { stroke: '#beecff' })
    }, [mixMode]);
    return (

        <StyledReadArticleIcon className="read-article-icon">
            <svg xmlns="http://www.w3.org/2000/svg" overflow="visible" width="100%" height="100%" viewBox="0 0 600 400">
                <polyline className="icon-book-cover"
                    fill="none"
                    points="540,40, 560,40 560,360, 350,360 300,390 250,360 40,360 40,40 60,40"
                    ref={elem => (bookCover = elem)}
                />

                <polygon className="icon-pg-right"
                    points="300,60 340,30 540,30 540,340 340,340 300,370"
                    ref={elem => (pageRight = elem)}
                />
                <polygon className="icon-pg-left"
                    points="300,60 260,30 60,30 60,340 260,340 300,370"
                    ref={elem => (pageLeft = elem)}
                />
                <g ref={elem => (pageTextRt = elem)}>
                    <line className="icon-text-rt" x1="340" y1="100" x2="520" y2="100" strokeWidth="20" stroke="#fff" />
                    <line className="icon-text-rt" x1="340" y1="190" x2="520" y2="190" strokeWidth="20" stroke="#fff" />
                    <line className="icon-text-rt" x1="340" y1="280" x2="520" y2="280" strokeWidth="20" stroke="#fff" />
                </g>
                <g ref={elem => (pageTextLt = elem)}>
                    <line className="icon-text-rt" x1="80" y1="100" x2="260" y2="100" strokeWidth="20" stroke="#fff" />
                    <line className="icon-text-rt" x1="80" y1="190" x2="260" y2="190" strokeWidth="20" stroke="#fff" />
                    <line className="icon-text-rt" x1="80" y1="280" x2="260" y2="280" strokeWidth="20" stroke="#fff" />
                </g>
                <polyline
                    className="page-turn"
                    points="300,60 340,30 540,30 540,340 340,340 300,370"
                    ref={elem => (pageTurn = elem)}
                />
            </svg>
        </StyledReadArticleIcon>
    )
};

export default ReadArticleIcon;
