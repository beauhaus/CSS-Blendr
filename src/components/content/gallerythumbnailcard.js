import React, { useContext } from 'react'
import Image from 'gatsby-image'
import { ModeContext } from '../../pages/page-a'
import styled from 'styled-components'

const StyledThumbCardBtn = styled.button`
    margin: 0.5rem;
    position: relative;
    z-index: 10;
    &.selected-img-top {
        box-shadow: 0px 0px 5px 5px coral;
    }
`

const GalleryThumbnailCardBtn = ({ imgObj }) => {
    const { thumbNailClicker} = useContext(ModeContext);
    return (
        <StyledThumbCardBtn id="img-btn" className={imgObj.top && "selected-img-top"}
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