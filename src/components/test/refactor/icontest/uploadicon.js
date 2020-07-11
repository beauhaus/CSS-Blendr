import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { gsap, TweenMax } from "gsap";

const StyledSVG = styled.div`
margin: 20vh auto;
  width: 80vw;
  height: 40vh;
  border: 1px solid whitesmoke;
  svg {
    stroke: navy;
    fill: orangered;
    .cross-arrow {
       stroke-width: 2;
       stroke: #beecff; 
    }
    .cloud {
        stroke-width: 2;
        fill: #beecff;
        stroke: #beecff;
    }
  }
`;

const Comp1 = () => {
    const [toggle, setToggle] = useState("");

    let polyRef = useRef(null);
    console.log("upload ran");

    const Clicker = () => {
        return setToggle(!toggle);
    };
    // var points = [
    //     { x: 0, y: 0, endX: 50, endY: 50 },
    //     { x: 0, y: 0, endX: 100, endY: 50 },
    //     { x: 0, y: 0, endX: 100, endY: 100 },
    //     { x: 0, y: 0, endX: 50, endY: 100 }
    // ];
    var arrow = [
        { x: 280, y: 40, endX: 200, endY: 160 },
        { x: 320, y: 40, endX: 200, endY: 160 },
        { x: 320, y: 80, endX: 240, endY: 200 },
        { x: 360, y: 80, endX: 280, endY: 240 },
        { x: 360, y: 120, endX: 280, endY: 240 },
        { x: 320, y: 120, endX: 240, endY: 240 },
        { x: 320, y: 160, endX: 240, endY: 320 },
        { x: 280, y: 160, endX: 160, endY: 320 },
        { x: 280, y: 120, endX: 160, endY: 240 },
        { x: 240, y: 120, endX:120, endY: 240 },
        { x: 240, y: 80, endX: 120, endY: 240 },
        { x: 280, y: 80, endX: 160, endY: 200 }
    ];

    function updateLine() {
        TweenMax.set(polyRef, {
            attr: {
                fill: '#beecff',
                points:
                    arrow[0].x +
                    ", " +
                    arrow[0].y +
                    " " +
                    arrow[1].x +
                    ", " +
                    arrow[1].y +
                    " " +
                    arrow[2].x +
                    ", " +
                    arrow[2].y +
                    ", " +
                    arrow[3].x +
                    ", " +
                    arrow[3].y +
                    ", " +
                    arrow[4].x +
                    ", " +
                    arrow[4].y +
                    ", " +
                    arrow[5].x +
                    ", " +
                    arrow[5].y +
                    ", " +
                    arrow[6].x +
                    ", " +
                    arrow[6].y +
                    ", " +
                    arrow[7].x +
                    ", " +
                    arrow[7].y +
                    ", " +
                    arrow[8].x +
                    ", " +
                    arrow[8].y+
                    ", " +
                   arrow[9].x +
                   ", " +
                   arrow[9].y+
                   ", " +
                  arrow[10].x +
                  ", " +
                  arrow[10].y+
                  ", " +
                 arrow[11].x +
                 ", " +
                 arrow[11].y
               
            }
        });
        // TweenMax.set(polyRef, {
        //     attr: {
        //         points:
        //             points[0].x +
        //             ", " +
        //             points[0].y +
        //             " " +
        //             points[1].x +
        //             ", " +
        //             points[1].y +
        //             " " +
        //             points[2].x +
        //             ", " +
        //             points[2].y +
        //             ", " +
        //             points[3].x +
        //             ", " +
        //             points[3].y
        //     }
        // });
    }
    // var tl = new TimelineMax({onUpdate:updateLine})

    useEffect(() => {
        const tl = gsap.timeline({ onUpdate: updateLine });
        if (toggle) {
            tl.to(
                arrow,
                4,
                {
                    x: function (index) {
                        return arrow[index].endX;
                    },
                    y: function (index) {
                        return arrow[index].endY;
                    }
                },
                0
            );
        }

        console.log("effect used!", toggle);
    }, [toggle, updateLine]);


    return (
        <StyledSVG>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 400 400"
                preserveAspectRatio="none"
            >
                <polygon
                    className="cross-arrow"
                    ref={elem => (polyRef = elem)}
                />
                 <path  
                 className="cloud"
                 d="M395 251.57c0 37.89-29.94 68.43-66.88 68.43H240v-80h40l-80-80-80 80h40v80s-77.22.26-79.78 0C38.04 315.97 5 279.35 5 235.02c0-42.98 31.03-78.52 71.34-84.34 14.84-56.43 65.1-97.96 124.81-97.96 70.64 0 128.08 58.15 129.24 130.33 35.89 1.18 64.61 31.42 64.61 68.52z" />

            </svg>
            <button onClick={Clicker}>Clicker</button>
        </StyledSVG>
    );
};

export default Comp1;
