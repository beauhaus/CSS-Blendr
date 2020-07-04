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
        setUsrImages,
        setSelTop,
        selTop,
        combinedImageArray,
        setCombinedImageArray
    } = useContext(AppContext);

    const imgClickHandler = (imgObj) => {
    let currentTopIdx = combinedImageArray.findIndex((obj => selTop.name === obj.name));
    combinedImageArray[currentTopIdx].top = false;
    let newSelTopIdx = combinedImageArray.findIndex((obj => imgObj.name === obj.name));
    combinedImageArray[newSelTopIdx].top = true;
    setSelTop(imgObj)
    // setCombinedImageArray()
}

    return (
        <button onClick={() => imgClickHandler(imgObj)}>
            <Image
                fluid={imgObj.img.fluid}
                alt={imgObj.name}
            />
        </button>
    )
}

export default DefaultImgThumb;

/*
            <button className="delete" onClick={() => deleteUsrImage(usrImage.id)}><p>X</p></button>
             {usrImage.tag==="usr-image" && <button className="delete" onClick={() => deleteUsrImage(usrImage.id)}><p>X</p></button>}

<StyledThumbCard className={imgObj.top && "selected-img-top"}
            onClick={() => thumbNailClicker(imgObj)}
            onClick={() => divClick(imgObj)}
        >
            {imgObj.tag === "usr-image" ?
                <img src={imgObj.url} alt={imgObj.name} /> :
                <Image
                    fluid={imgObj.img.fluid}
                    alt={imgObj.name}
                />
                <button id="test-usr-image-btn" src={imgObj.url}alt={imgObj.name} />

            }

        </StyledThumbCard>


        */