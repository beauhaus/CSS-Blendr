import React, { useEffect, useContext } from 'react'
import Image from 'gatsby-image'
// import {imageSelector} from '../hooks/use-image-selector'
import { ModeContext } from '../../pages/page-a'
import styled from 'styled-components'

const StyledThumbCardBtn = styled.button`
    margin: .5rem 0;
    position: relative;
    padding: 1%;
    z-index: 10;
    .selected-img-top {
        box-shadow: 0px 0px 5px 5px coral;
    }

    .selected-img-bot {
        box-shadow: 0px 0px 5px 5px yellow;
    }

    .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
    }
    p {
        position: absolute;
        top: 3px;
        left: 3px;
    }
`

const GalleryThumbnailCardBtn = ({ imgObj }) => {
    const { selBot, selTop, setSelTop, setSelBot} = useContext(ModeContext);

    const handleClick = () => {
        console.log("this img:", imgObj)
    }

    return (
        <StyledThumbCardBtn className={
            `${(imgObj.top ? `selected-img-top` : '')}
             ${(imgObj.bot ? `selected-img-bot` : '')}`
        }
            onClick={handleClick}
        >
            {/* <p>{imgObj.top} top</p> */}
            <Image
                fluid={imgObj.img.fluid}
                alt={imgObj.name}
            />
        </StyledThumbCardBtn>

    )

}

export default GalleryThumbnailCardBtn;