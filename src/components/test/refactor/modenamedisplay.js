import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../../pages/page-b'
import { Link } from 'react-scroll'
import { animateScroll } from 'react-scroll'
import ReadArticleIcon from './icon-components/readarticleicon'



/* most styles for this are in index.scss for concision */
const StyledModeNameDisplay2 = styled.div`
padding: 0;
        a {
            margin: 0;
            ${'' /* opacity: 0.5; */}
            }

        animation: modeNameUp 5s ease-in-out forwards;
`
const StyledModeNameDisplay = styled.div`
padding: 0;
        a {
            margin: 0;
            ${'' /* opacity: 0.5; */}
            }
        animation: modeNameUp 5s ease-in-out forwards;
    }
    ${'' /* &.display-static {
        color: #eee;
    } */}
`

const ModeNameDisplay = () => {
    const {
        tapMode,
        addImageMode,
        mixModeNum,
        setMixModeNum,
        mixMode
    } = useContext(AppContext);
    // const handleSetActive = () => {
    //     console.log("set Active");
    // }
    return (
        (mixModeNum % 2) ?
            <StyledModeNameDisplay
                className="mode-name-display"> {mixMode}
                <Link to={`${mixMode}-article`}
                    smooth={true}
                    // onSetActive={console.log('handleSetActive')}
                    duration={500}><ReadArticleIcon/></Link>
            </StyledModeNameDisplay>
            :
            <StyledModeNameDisplay2
                className="mode-name-display"> {mixMode}
                <Link to={`${mixMode}-article`}
                    smooth={true}
                    // onSetActive={console.log('handleSetActive')}
                    duration={500}><ReadArticleIcon/></Link>
            </StyledModeNameDisplay2>
    )
};

export default ModeNameDisplay;