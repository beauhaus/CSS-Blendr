import React, { useContext } from 'react'
import Image from 'gatsby-image'
// import { AppContext } from '../'
import styled from 'styled-components'

const StyledDefaultImgBtn= styled.button`
    & image {
        width: 100%;
        height: 100%;
    }
`

const DefaultImgBtn = ({ imgObj }) => {

    const imgClickHandler = (payload) => {
        console.log("payload: ", payload)
    }

    return (
        <button onClick={(imgObj) => imgClickHandler(imgObj)}>
            <Image
                fluid={imgObj.img.fluid}
                alt={imgObj.name}
            />
        </button>
    )
}

export default DefaultImgBtn;

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