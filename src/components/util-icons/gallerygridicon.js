import React, { useContext } from 'react'
import styled from 'styled-components'
import { BlenderAppContext } from '../../pages/page-a'

const StyledImageGridIcon = styled.svg`
    opacity: 1;
    width: 100%;
    height: 100%;
`

const ImageGridIcon = () => {
    const { galleryOpenVal
    } = useContext(BlenderAppContext);
    return (
        <StyledImageGridIcon className="gallery-switch-btn-icon" viewBox="0 0 300 300" width="100%" height="100%">
          <path fill="#fff" d="M300 148H152V0h-4v148H0v4h148v148h4V152h148z"/>
           {galleryOpenVal &&
            <path fill="lightblue" d="M300 148H152V0h-4v148H0v4h148v148h4V152h148z"/>
             }
        </StyledImageGridIcon>
    )
}
export default ImageGridIcon;

            // <path fill="#828282" d="M275 300H25c-13.81 0-25-11.19-25-25V25C0 11.19 11.19 0 25 0h250c13.81 0 25 11.19 25 25v250c0 13.81-11.19 25-25 25z" />
            // <path fill="#fff" d="M256.15 270h-83.08c-7.65 0-13.85-6.2-13.85-13.85v-83.08c0-7.65 6.2-13.85 13.85-13.85h83.08c7.65 0 13.85 6.2 13.85 13.85v83.08c0 7.65-6.2 13.85-13.85 13.85zM256.15 140.77h-83.08c-7.65 0-13.85-6.2-13.85-13.85V43.85c0-7.65 6.2-13.85 13.85-13.85h83.08C263.8 30 270 36.2 270 43.85v83.08c0 7.64-6.2 13.84-13.85 13.84zM126.92 140.77H43.85c-7.65 0-13.85-6.2-13.85-13.85V43.85C30 36.2 36.2 30 43.85 30h83.08c7.65 0 13.85 6.2 13.85 13.85v83.08c-.01 7.64-6.21 13.84-13.86 13.84zM126.92 270H43.85C36.2 270 30 263.8 30 256.15v-83.08c0-7.65 6.2-13.85 13.85-13.85h83.08c7.65 0 13.85 6.2 13.85 13.85v83.08c-.01 7.65-6.21 13.85-13.86 13.85z" />
            // {/* <path className="iconCheckmark" fill="#66de98" strokeWidth="15" stroke="#00d800" d="M6.09 182.74c30.56 17.39 56.73 32.07 76.37 42.71 48.56-74.32 122.9-145.51 208.94-215.27C204.1 101.99 133.38 196.22 93.74 295c-26.86-46.63-56.35-82.96-87.65-112.26z" /> */}
            // {galleryOpenVal &&
            //     <g className="iconCheckmark">
            //         <path d="M12.69 229.97c37.97 21.61 70.49 39.85 94.91 53.07 60.33-92.36 152.71-180.82 259.63-267.51-108.49 114.09-196.37 231.19-245.62 353.94-33.38-57.95-70.03-103.09-108.92-139.5z" fill="#00010e" />
            //         <path d="M.26 214.44c37.97 21.61 70.49 39.85 94.91 53.07C155.5 175.15 247.88 86.69 354.8 0 246.32 114.09 158.44 231.19 109.18 353.94 75.8 295.99 39.15 250.85.26 214.44z" fill="#62f000" />
            //     </g>
            // }