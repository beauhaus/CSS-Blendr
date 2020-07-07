import React, { useContext } from 'react'
import Image from 'gatsby-image'
import { AppContext } from '../../../pages/page-b'
import styled from 'styled-components'

const StyledDefaultImgThumb= styled.button`
    & image {
        width: 100%;
        height: 100%;
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
        <button className="default-img-btn img-btn" onClick={() => imgClickHandler(imgObj)}>
            <Image
                fluid={imgObj.img.fluid}
                alt={imgObj.name}
            />
        </button>
    )
}

export default DefaultImgThumb;
