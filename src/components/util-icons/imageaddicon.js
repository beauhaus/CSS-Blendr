import React, { useContext } from 'react'
import styled from 'styled-components'
import { BlenderAppContext } from '../../pages/page-a'

const StyledImageAddIcon = styled.svg`
    opacity: 1;
    width: 100%;
    height: 100%;
    .inner-shadow {
        opacity: .2;
    }
`

const ImageAddIcon = () => {
    const { galleryOpenVal
    } = useContext(BlenderAppContext);
    return (
        <StyledImageAddIcon viewBox="0 0 300 300" width="100%" height="100%" preserveAspectRatio="none">
                <path fill="#000" d="M1.91 0h300v300h-300z" opacity=".05" />
                <linearGradient id="SVGID_1_" x1="1.9072" x2="301.9072" y1="150" y2="150" gradientTransform="rotate(-90 151.9072 150)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopOpacity=".5" />
                    <stop offset=".1" stopOpacity="0" />
                    <stop offset=".9" stopOpacity="0" />
                    <stop offset="1" stopOpacity=".5" />
                </linearGradient>
                <path className="inner-shadow" fill="url(#SVGID_1_)" d="M301.91 0v300h-300V0z" />
                <linearGradient id="SVGID_2_" x1="1.9072" x2="301.9072" y1="150" y2="150" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopOpacity=".5" />
                    <stop offset=".1" stopOpacity="0" />
                    <stop offset=".9" stopOpacity="0" />
                    <stop offset="1" stopOpacity=".5" />
                </linearGradient>
                <path className="inner-shadow" fill="url(#SVGID_2_)" d="M1.91 0h300v300h-300z" />
                <path id="plusShad_1_" d="M272.51 61.3h-23.16V38.13c0-2.93-2.37-5.3-5.3-5.3h-16.5c-2.93 0-5.3 2.37-5.3 5.3V61.3h-23.16c-2.93 0-5.3 2.37-5.3 5.3v16.5c0 2.93 2.37 5.3 5.3 5.3h23.16v23.16c0 2.93 2.37 5.3 5.3 5.3h16.5c2.93 0 5.3-2.37 5.3-5.3V88.41h23.16c2.93 0 5.3-2.37 5.3-5.3V66.6c0-2.93-2.37-5.3-5.3-5.3z" />
                <path fill="#beecff" d="M267.74 54.59h-23.16V31.43c0-2.93-2.37-5.3-5.3-5.3h-16.5c-2.93 0-5.3 2.37-5.3 5.3v23.16h-23.16c-2.93 0-5.3 2.37-5.3 5.3v16.5c0 2.93 2.37 5.3 5.3 5.3h23.16v23.16c0 2.93 2.37 5.3 5.3 5.3h16.5c2.93 0 5.3-2.37 5.3-5.3V81.7h23.16c2.93 0 5.3-2.37 5.3-5.3V59.9c0-2.93-2.37-5.31-5.3-5.31z" />
                <path fill="none" stroke="#beecff"  strokeWidth="5" d="M1.91 153.65l74.3-87.66 103.73 134.58 60.28-54.67 61.69 84.11" />
                
            
        </StyledImageAddIcon>
    )
}
export default ImageAddIcon;
