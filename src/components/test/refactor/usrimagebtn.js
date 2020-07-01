import React, { useContext } from 'react'
// import { AppContext } from '../'
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
    const imgClickHandler = (payload) => {
        console.log("payload: ", payload)
    }

    const deleteUsrImage = () => {
        console.log("Delete usr image")
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
