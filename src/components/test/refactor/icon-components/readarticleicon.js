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
    filter: drop-shadow(1px 1px 0px var(--active-blue));
    ${'' /* border: 1px solid var(--active-blue); */}
}

    .icon-book-cover {
        ${'' /* fill: none; */}
        stroke: #333;
        stroke-width: 15;
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

    useEffect(() => {
        gsap.set(pageTurn, { opacity: 0 })
        const tl = gsap.timeline({ delay: 1 });

        tl
        
            .to(pageTurn, .1, { opacity: 1 })
            .to(pageTurn, .1, { attr: { points: "300,60 340,30 560,25 520,345 340,340 300,370" } })
            .to(pageRight, .2, { fill: '#222' }, '-=.2')
            .to(pageTurn, .1, { attr: { points: "300,60 360,30 510,15 440,350 340,340 300,370" } })
            .to(pageTurn, .1, { attr: { points: "300,60 360,20 400,0 380,350 340,340 300,370" } })
            .to(pageTurn, .1, { attr: { points: "330,30 330,30 250,0 140,350 230,360 300,370" } })
            .to(pageTurn, .1, { attr: { points: "300,50 230,20 100,10 100,350 180,360 300,370" } })
            .to(pageTurn, .1, { attr: { points: "300,60 260,25 70,20 100,350 240,340 300,370" } })
            .to(pageTurn, .1, { attr: { points: "300,60 260,30 60,30 60,340 260,340 300,370" } })
            .to(pageRight, .5, { fill: '#aaa' }, '-=.5')
            .to(pageLeft, .5, { fill: '#222' }, '-=.25')
            .to(pageTurn, .2,  { opacity: 0 }, '-=0')
            .to(pageLeft, .1, { fill: '#aaa' }, '-=.2')           
    }, [mixMode]);
    return (

        <StyledReadArticleIcon className="read-article-icon">
            <svg xmlns="http://www.w3.org/2000/svg" overflow="visible" width="100%" height="100%" viewBox="0 0 600 400">
                {/* <path className="icon-book-cover" fill="none" stroke="#000" strokeWidth="15" d="M500 75h20v290H350c-33.78 32.62-67.11 32.19-100 0H80V75h20" /> */}
                <polyline className="icon-book-cover" fill="none" points="540,40, 560,40 560,360, 350,360 300,390 250,360 40,360 40,40 60,40" />

                <polygon className="icon-pg-right"
                    points="300,60 340,30 540,30 540,340 340,340 300,370"
                    ref={elem => (pageRight = elem)}

                />
                <polygon className="icon-pg-left"
                    points="300,60 260,30 60,30 60,340 260,340 300,370"
                    ref={elem => (pageLeft = elem)}
                />

                {/* <path className="icon-pages" fill="#888" stroke="#fff" strokeWidth="5" d="M499.5 344.5H340c-20 27.33-60 27.33-80 0H99.5v-289H260c19.56 25.71 59.56 26.29 80 0h159.5v289z" /> */}

                <polyline
                    className="page-turn"
                    points="300,60 340,30 540,30 540,340 340,340 300,370"
                    ref={elem => (pageTurn = elem)}
                />
                {/* <polyline
                    className="ctr-binding"
                    points="300,60 300,370"
                    stroke="#333"
                    strokeWidth="10"
                    // ref={elem => (ctrLine = elem)}
                /> */}



            </svg>
        </StyledReadArticleIcon>
    )
};

export default ReadArticleIcon;
