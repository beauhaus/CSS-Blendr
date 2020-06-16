import React, { useContext } from 'react'
import Image from 'gatsby-image'
import { ModeContext } from '../../pages/page-a'
import styled from 'styled-components'

const StyledThumbCardBtn = styled.button`
    margin: .5rem 0;
    position: relative;
    padding: 1%;
    z-index: 10;

    &.selected-img-top {
        box-shadow: 0px 0px 5px 5px coral;
    }
    .gatsby-image-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    ${'' /* p {
        position: absolute;
        top: 3px;
        left: 3px;
        font-size: 3rem;
        color: fuchsia;
        font-weight: bold;
        text-shadow: 2px 2px 2px #000;
    } */}
`

const GalleryThumbnailCardBtn = ({ imgObj }) => {
    const { thumbNailClicker} = useContext(ModeContext);
    return (
        <StyledThumbCardBtn className={imgObj.top && "selected-img-top"}
            onClick={() => thumbNailClicker(imgObj)}
        >
            <Image
                fluid={imgObj.img.fluid}
                alt={imgObj.name}
            />
        </StyledThumbCardBtn>
    )
}

export default GalleryThumbnailCardBtn;