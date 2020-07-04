import React, { useContext } from 'react'
import { AppContext } from '../../../pages/page-b'
import { db } from '../apputils'

import styled from 'styled-components'

const StyledUsrImgThumbContainer = styled.div`
    position: relative;
    button.usr-img-delete {
        min-width: 38px;
        min-height: 38px;
        width: 40%;
        height: 40%;
        padding: .5rem;
        p {
            color: red;
            text-shadow: 1px 1px 1px #000;
            font-size: 1.5rem;
        }
    }
`

const UsrImgThumb = ({ imgObj }) => {
    const {
        setUsrImages,
        setSelTop,
        selTop,
        combinedImageArray
    } = useContext(AppContext);



    const deleteUsrImage = async (id) => {
        db.usrImages.delete(id);
        let allUsrImages = await db.usrImages.toArray();
        //(re)set the usrImage array
        setUsrImages(allUsrImages);
      }

    {/* TODO: add desc: key/val to objects */}
    const imgClickHandler = (imgObj) => {

        let currentTopIdx = combinedImageArray.findIndex((obj => selTop.name === obj.name));
        combinedImageArray[currentTopIdx].top = false;
        let newSelTopIdx = combinedImageArray.findIndex((obj => imgObj.name === obj.name));
        combinedImageArray[newSelTopIdx].top = true;
        setSelTop(imgObj)
      }
    return (
        <StyledUsrImgThumbContainer>
            <button className="usr-img-btn" value={imgObj} onClick={() => imgClickHandler(imgObj)}>
                <img src={imgObj.url} alt={imgObj.name} />
            </button>
            <button className="usr-img-delete" onClick={() => deleteUsrImage(imgObj.id)}><p>X</p></button>
        </StyledUsrImgThumbContainer>
    )
}

export default UsrImgThumb;
