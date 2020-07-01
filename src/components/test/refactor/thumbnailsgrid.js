import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../../pages/page-b'
import ThumbnailCard from './thumbnailcard'
const StyledThumbnailsGrid = styled.section`
    grid-row: 2;
    grid-column: 1/-1;
    background: #888;
    padding: 1vh 4vw;
    display: grid;
    grid-template-columns: repeat(3, 25vw);
    grid-template-rows: repeat(20, 25vw);
    grid-gap: 1rem;
    ${'' /* border: 1px solid #fff; */}
    justify-content: space-around;
    overflow: scroll;
    position: relative;
    ${'' /* z-index: 0; */}
    & button {
        position: relative;
        width: 100%;
        height: 100%;
    }
    & >div .usr-img-delete {  /*delete btn */
    position: absolute;
    left: 0;
    top: 0;
    border: 1px solid yellow;
    }
    img {
            width: 100%;
            height: 100%;
        }

`

const ThumbnailsGrid = () => {
    const {
        combinedImageArray,
        addImageMode
    } = useContext(AppContext);

      return (
        <>
            {addImageMode &&
                <StyledThumbnailsGrid className="thumbnails-grid">
                    {combinedImageArray.map(imgObj =>(
                        <ThumbnailCard
                        className="thumbnail-btn"
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