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
            <filter id="brush-blur">
                <feGaussianBlur stdDeviation="8"></feGaussianBlur>
            </filter>
            <path id="brush-shadow" filter="url(#brush-blur)" d="M260 171.77h-1.12V25.27H53.68V171.78h-1.12v3.89h1.12v7.83c0 13.02 9.68 23.68 21.51 23.68h52.35v55.54c0 .68.02 1.36.07 2.04 1.07 14.29 13.24 25.56 28.09 25.56s27.02-11.27 28.09-25.56c.05-.67.07-1.36.07-2.04v-55.54h53.51c11.84 0 21.51-10.66 21.51-23.68v-7.83H260v-3.9z" />
            <g id="bristles">
                <path fill="#d0d1d2" d="M47.62 17.81h51.3v149.91h-51.3z" />
                <path fill="#919293" d="M98.92 17.81h51.3v149.91h-51.3z" />
                <path fill="#77787a" d="M150.22 17.81h51.3v149.91h-51.3z" />
                <path fill="#505051" d="M201.52 17.81h51.3v149.91h-51.3z" />
            </g>
            <path id="handle" fill="#999" stroke="#c6ebfd" strokeWidth="4" d="M252.82 150.58v25.46c0 13.02-9.68 23.68-21.51 23.68H177.8v55.54c0 .68-.02 1.36-.07 2.04-1.07 14.29-13.24 25.56-28.09 25.56s-27.02-11.27-28.09-25.56c-.05-.67-.07-1.36-.07-2.04v-55.54H69.12c-11.83 0-21.51-10.66-21.51-23.68v-25.46h205.21z" />
            <path id="trim" fill="#c5ebfd" d="M46.5 164.31h207.44v3.89H46.5z" />
            <linearGradient id="inner-shadow" x1="-320" x2="-20" y1="470" y2="470" gradientTransform="rotate(-90 -170 150)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopOpacity=".5" />
                <stop offset=".1" stopOpacity="0" />
                <stop offset=".9" stopOpacity="0" />
                <stop offset="1" stopOpacity=".5" />
            </linearGradient>
            <linearGradient id="inner-shadow_2_" x1="0" x2="300" y1="150" y2="150" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopOpacity=".5" />
                <stop offset=".1" stopOpacity="0" />
                <stop offset=".9" stopOpacity="0" />
                <stop offset="1" stopOpacity=".5" />
            </linearGradient>
            <path className="inner-shadow" fill="url(#inner-shadow)" d="M300 0v300H0V0z" />
            <path className="inner-shadow" fill="url(#inner-shadow_2_)" d="M0 0h300v300H0z" />

        </StyledImageAddIcon>
    )
}
export default ImageAddIcon;
