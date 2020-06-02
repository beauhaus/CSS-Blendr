import React, { useEffect } from 'react'
import Image from 'gatsby-image'
// import {imageSelector} from '../hooks/use-image-selector'

import styled from 'styled-components'

const StyledThumbCard = styled.div`
${'' /* border-color: ${props => props.primary ? "palevioletred" : "white"}; */}
.selectedImg1, .selectedImg2 {
    border: 3px solid red;
}
`

const GalleryThumbnailCard = ({ imagedata }) => {
    // console.log("thumbsrefresh ")
    const handleClick = (nameInput) => {
        // console.log("imagedata:", nameInput)
    
    }
    
    return (
        <StyledThumbCard className={
            `${imagedata.top && `selectedImg`}
             ${imagedata.bot && `selectedImg`} 
             gallery-thumb`
             }
            onClick={ () => { handleClick(imagedata) }}
        >
        {/* <h1>{(imagedata.selectedImg1 || imagedata.selectedImg2 )&& image1}</h1> */}
            <Image
                fluid={imagedata.img.fluid}
                alt={imagedata.name}
            />
        </StyledThumbCard>

    )

}

// const Tab = ({ onClick, isSelected, children }) => {
//     return <TabWrapper onClick={onClick}>{children}</TabWrapper>
//   }
  
//   const X = <Tab onClick={() => console.log('clicked')} isSelected>Some Children</Tab>

export default GalleryThumbnailCard;