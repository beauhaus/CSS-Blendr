import React, { useContext } from 'react'
import Image from 'gatsby-image'
import { AppContext } from '../../../pages/page-b'
import styled from 'styled-components'

const StyledDefaultImgThumb= styled.button`
    box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.6);
    & image {
        width: 100%;
        height: 100%;
    }   
    &.img-selected {
        box-shadow: none;
        border: 1px solid orangered;
        box-shadow: 0px 0px 5px 5px var(--active-orange);
    }
`


const DefaultImgThumb = ({ imgObj }) => {
    const {
        currentTop,
        setCurrentTop,
        setCurrentBot
    } = useContext(AppContext);

    //This replaces topimage
    const imgClickHandler = (imgObj) => {
        setCurrentTop(imgObj)
    }

    return (
        <StyledDefaultImgThumb className={(currentTop.id === imgObj.id)? 'img-selected': 'default-img'} onClick={() => imgClickHandler(imgObj)}>
            <Image
                fluid={imgObj.img.fluid}
                alt={imgObj.name}
            />
        </StyledDefaultImgThumb>
    )
}

export default DefaultImgThumb;
