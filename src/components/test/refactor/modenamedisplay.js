import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../../pages/page-b'
import { Link } from 'react-scroll'
import { gsap } from "gsap"; //  , Power4, Expo
// import ReadArticleIcon from './icon-components/readarticleicon'



/* most styles for this are in index.scss for concision */
const StyledModeNameDisplay2 = styled.div`
    padding: 0;
    svg {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 10%;
        fill: #beecff;
    }

    a {
        margin: 0;
        position: relative;
        color: #000;
    }
    ${'' /* animation: modeNameUp 5s ease-in-out forwards; */}
`
const StyledModeNameDisplay = styled.div`
    padding: 0;
    svg {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 10%;
        fill: #beecff;
    }

    a {
        margin: 0;
        position: relative;
        color: #000;
    }
    ${'' /* animation: modeNameUp 5s ease-in-out forwards; */}
`

const Underline = () => {
    const { mixMode } = useContext(AppContext);

    let underLine = useRef(null)

    useEffect(() => {
        // gsap.set(underLine, { fill: '#000' } )
        const tl = gsap.timeline({ delay: .2 })
        // tl
        // .to(underLine,1, {  fill: "#beecff" }, '-=0')
        // .to(underLine,3, { x: "-400" }, '-=0')
    }, [mixMode])

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%"  viewBox="0 0 400 400" preserveAspectRatio="none">
            <rect width="100%"  ref={elem => underLine = elem} />
        </svg>
    )
}

const ModeNameDisplay = () => {
    const {
        mixMode,
        mixModeNum
    } = useContext(AppContext);

    return (
        (mixModeNum % 2) ?
            <StyledModeNameDisplay
                className="mode-name-display"
            >
                <Underline />
                <Link to={`${mixMode}-article`}
                    smooth={true}
                    duration={500}
                >
                    {mixMode}
                </Link>
            </StyledModeNameDisplay>
            :
            <StyledModeNameDisplay2
                className="mode-name-display"
            >
                <Underline />
                <Link to={`${mixMode}-article`}
                    smooth={true}
                    duration={500}
                >
                    {mixMode}
                </Link>
            </StyledModeNameDisplay2>
    )
};

export default ModeNameDisplay;