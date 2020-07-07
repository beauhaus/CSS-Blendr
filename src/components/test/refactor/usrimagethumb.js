import React, { useContext } from 'react'
import { AppContext } from '../../../pages/page-b'
import { db } from './hooks/app-utils'

import styled from 'styled-components'

const StyledUsrImgThumbContainer = styled.div`
    ${'' /* position: relative; */}
    img {
        width: 100%;
        height: 100%;
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
        setUsrImgArray
    } = useContext(AppContext);



    const deleteUsrImage = async (id) => {
        db.usrImages.delete(id);
        let allUsrImages = await db.usrImages.toArray();
        // //(re)set the usrImage array
        setUsrImgArray(allUsrImages);
      }
const imgClickHandler = () => console.log("img clicked!")
    {/* TODO: add desc: key/val to objects */}
   
    return (
        <StyledUsrImgThumbContainer>
            <button className="usr-img-btn img-btn" value={imgObj} onClick={() => imgClickHandler(imgObj)}>
                <img src={imgObj.url} alt={imgObj.name} />
            </button>
            <button className="usr-img-delete" onClick={() => deleteUsrImage(imgObj.id)}><p>X</p></button>
        </StyledUsrImgThumbContainer>
    )
}

export default UsrImgThumb;
