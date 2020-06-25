import React from 'react'
import styled from 'styled-components'

const StyledCustomPanelBG = styled.svg`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
`

const CustomPanelBG = () => {
    return (
        <StyledCustomPanelBG className="custom-panel-bg" viewBox="0 0 900 300" width="100%" height="100%" preserveAspectRatio="none">
            <linearGradient id="steel-layer" x1="0" x2="900" y1="150" y2="150" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#999896" />
                {/* <stop offset=".0593" stopColor="#999896" /> */}
                {/* <stop offset=".0979" stopColor="#7d7d7b" /> */}
                <stop offset=".152" stopColor="#6a6b68" />
                {/* <stop offset=".1996" stopColor="#696968" /> */}
                <stop offset=".2467" stopColor="#70706f" />
                {/* <stop offset=".2943" stopColor="#989999" /> */}
                <stop offset=".3441" stopColor="#9b9ea1" />
                {/* <stop offset=".3906" stopColor="#acb0b3" /> */}
                {/* <stop offset=".4366" stopColor="#b2b6b8" /> */}
                {/* <stop offset=".4859" stopColor="#b3b8ba" /> */}
                <stop offset=".5338" stopColor="#aaadb0" />
                <stop offset=".5782" stopColor="#949699" />
                <stop offset=".6275" stopColor="#919191" />
                {/* <stop offset=".6759" stopColor="#807f7d" />
                <stop offset=".7207" stopColor="#686966" /> */}
                <stop offset=".7698" stopColor="#666665" />
                <stop offset=".8179" stopColor="#5e5e5e" />
                {/* <stop offset=".8682" stopColor="#5e5e5e" /> */}
                {/* <stop offset=".9143" stopColor="#5e5e5e" /> */}
                {/* <stop offset=".9618" stopColor="#5e5e5e" /> */}
                <stop offset="1" stopColor="#777778" />
            </linearGradient>
            <linearGradient id="steel-shine-layer" x1="450" x2="450" y1="300" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#333" />
                <stop offset=".01" stopColor="#444" stopOpacity="1" />
                <stop offset=".1" stopColor="#888" stopOpacity="0" />
                <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <path fill="url(#steel-layer)" d="M0 0h901.73v300H0z" />
            <path fill="url(#steel-shine-layer)" d="M0 0h901.73v300H0z" />
        </StyledCustomPanelBG>
    )
}
export default CustomPanelBG;

