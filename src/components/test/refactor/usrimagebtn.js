import React, { useContext } from 'react'
import { AppContext } from '../../../pages/page-b'
import { db } from '../apputils'

import styled from 'styled-components'

const StyledUsrImgBtnContainer = styled.div`
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

const UsrImgBtn = ({ imgObj }) => {
    const {
        setUsrImages
    } = useContext(AppContext);

    const imgClickHandler = (payload) => {
        console.log("payload: ", payload)
    }

    const deleteUsrImage = async (id) => {
        db.usrImages.delete(id);
        let allUsrImages = await db.usrImages.toArray();
        // //(re)set the usrImage array
        setUsrImages(allUsrImages);
        console.log("DELETE", id);
        // setTestState("YAEH!")
        // console.log(testState)
      }

    {/* TODO: add desc: key/val to objects */}

    return (
        <StyledUsrImgBtnContainer>
            <button className="usr-img-btn" onClick={(imgObj) => imgClickHandler(imgObj)}>
                <img src={imgObj.url} alt={imgObj.name} />
            </button>
            <button className="usr-img-delete" onClick={() => deleteUsrImage(imgObj.id)}><p>X</p></button>
        </StyledUsrImgBtnContainer>
    )
}

export default UsrImgBtn;
