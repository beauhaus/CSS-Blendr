import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../../pages/page-b'

const StyledThumbnailsGrid = styled.section`
    grid-row: 2;
    grid-column: 1/-1;
    background: transparent;
    padding: 1vh 4vw;
    display: grid;
    ${'' /* display: none; */}
    grid-template-columns: repeat(3, 25vw);
    grid-template-rows: repeat(20, 25vw);
    grid-gap: 1rem;
    ${'' /* border: 1px solid #fff; */}
    justify-content: space-around;
    overflow: scroll;
    position: relative;
    z-index: 0;
    button.thumbnail-btn {
      background: coral;
      width: 100%;
      height: 100%;
      span{
        width: 100%;
        height: 100%;
      }
    }
`

const ThumbnailsGrid = (props) => {
    const {
        imageArray,
        addImageMode
    } = useContext(AppContext);
    const imgClickHandler = (payload) => {
        console.log(payload)
      }
      return (
        <>
            {addImageMode &&
                <StyledThumbnailsGrid className="thumbnails-grid">
                    {imageArray.map(item => <button className="thumbnail-btn" key={item.id} name={item.name} onClick={() => imgClickHandler(item.name)}><span>{item.name}</span></button>)}
                </StyledThumbnailsGrid>
            }
        </>

    )
};

export default ThumbnailsGrid; 