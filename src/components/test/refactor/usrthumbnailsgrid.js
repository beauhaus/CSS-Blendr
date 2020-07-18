import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../../pages/page-b'

import UsrThumbnailCard from './usrthumbnailcard'

const StyledUsrThumbnailsGrid = styled.div`
    background: #5d5f62;
    grid-row: 2;
    grid-column: 1/-1;
    position: relative;
    padding: 1vh 4vw;
    display: grid;
    grid-template-columns: repeat(3, 25vw);
    grid-template-rows: repeat(20, 25vw);
    grid-gap: 1rem;
    justify-content: space-around;
    overflow: scroll;
    position: relative;
`

const UsrThumbnailsGrid = (props) => {
    const {
        usrImgMode,
        usrImgArray,
        setUsrImgArray,
        defaultImageArray
        } = useContext(AppContext);
    return (
        <>
            {usrImgMode && <StyledUsrThumbnailsGrid className="usr-thumbnails-grid">
            {usrImgArray.map(imgObj =>(
                        <UsrThumbnailCard
                        key={imgObj.id}
                        imgObj={imgObj}
                        />
                        ) )}
            </StyledUsrThumbnailsGrid>}
        </>
    )
};


export default UsrThumbnailsGrid; 


/*
const StyledUsrThumbnailsGrid = styled.section`
    grid-row: 2;
    grid-column: 1/-1;
    background: #888;
    padding: 1vh 4vw;
    display: grid;
    grid-template-columns: repeat(3, 25vw);
    grid-template-rows: repeat(20, 25vw);
    grid-gap: 1rem;
    justify-content: space-around;
    overflow: scroll;
    position: relative;
    & button {
        position: relative;
        width: 100%;
        height: 100%;
    }
    & >div .usr-img-delete { 
    position: absolute;
    left: 0;
    top: 0;
    border: 1px solid yellow;
    }
    img {
            width: 100%;
            height: 100%;
        }
    .img-btn {
        box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.6);
    }
    .img-btn-selected {
        box-shadow: none;
        border: 1px solid orangered;
    }
`

const ThumbnailsGrid = () => {
    const {
        defaultImageArray,
        addImageMode
    } = useContext(AppContext);

      return (
        <>
            {addImageMode &&
                <StyledThumbnailsGrid className="thumbnails-grid">
                    {defaultImageArray.map(imgObj =>(
                        <ThumbnailCard
                        key={imgObj.id}
                        imgObj={imgObj}
                        />
                        ) )}
                </StyledThumbnailsGrid>
            }
        </>

    )
};

export default ThumbnailsGrid; 

*/