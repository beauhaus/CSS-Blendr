import React, { useContext } from 'react'
import { AppContext } from '../../../pages/page-b'
import { db } from './hooks/app-utils'

import styled from 'styled-components'

const StyledUsrImgThumbContainer = styled.div`
    box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.6);
    width: 100%;
    height: 100%;
    &.img-selected {
        box-shadow: none;
        border: 1px solid var(--secondary-peach);
        box-shadow: 0px 0px 0px 3px var(--secondary-peach);
    }
    & img {
        width: 25vw;
        height: 25vw;
        object-fit: fill;
    }
    button.usr-img-delete {
        position: absolute;
        top: 0;
        left: 0;
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
        setUsrImgArray,
        setCurrentTop,
        currentTop
    } = useContext(AppContext);



    const deleteUsrImage = async (id) => {
        db.usrImages.delete(id);
        let allUsrImages = await db.usrImages.toArray();
        // //(re)set the usrImage array
        setUsrImgArray(allUsrImages);
      }
const imgClickHandler = (imgObj) => (
    setCurrentTop(imgObj)
)
    {/* TODO: add desc: key/val to objects */}
    // className={(currentTop.id === imgObj.id)? 'img-selected': 'default-img'}
    return (
        <StyledUsrImgThumbContainer className={(currentTop.id === imgObj.id)? 'img-selected': 'uploaded-img'}>
            <button className="usr-img-btn img-btn" value={imgObj} onClick={() => imgClickHandler(imgObj)}>
                <img src={imgObj.url} alt={imgObj.name} />
            </button>
            <button className="usr-img-delete" onClick={() => deleteUsrImage(imgObj.id)}><p>X</p></button>
        </StyledUsrImgThumbContainer>
    )
}

export default UsrImgThumb;
