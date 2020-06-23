// import React, {useState} from 'react'
import React from 'react'
import styled from 'styled-components';


const StyledPicCard = styled.div`

    display: grid;
    grid-template-columns: repeat(3, 30vw);
    justify-content: space-around;
    border: 1px dashed lightgreen;
    ${'' /* grid-gap: 1rem; */}
 &>div {
    width: 25vw;
    height: 25vw;
    margin: .5rem auto;
    position: relative;
}
button.delete {
    min-width: 48px;
    min-height: 48px;
    position: absolute;
    top: 0;
    right: 0;
    border: 1px solid #ff7b7b;
    padding: 1rem;
    opacity: 0.6;
    p {
        color: #ff7b7b;
        text-shadow: 1px 1px 1px #000;
        font-size: 2rem;
    }
}
img {
    width: 25vw;
    height: 25vw;
}
`

const PictureCard = ({ imageArray, deleteUsrImage }) => {

    return (
        <StyledPicCard className="usrImages-container">
            {imageArray.map(usrImage => (
                <div className={`user-image img-${usrImage.name}`} key={usrImage.id || usrImage.name}>
                    <img src={usrImage.url} alt={usrImage.name} />
                    {usrImage.tag==="usr-image" && <button className="delete" onClick={() => deleteUsrImage(usrImage.id)}><p>X</p></button>}
                </div>
            )
            )}
        </StyledPicCard>
    )
}

export default PictureCard;

