import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../../pages/page-b'
import DefaultImgThumb from './defaultimgthumb'

const StyledDefaultThumbnailsGrid = styled.section`
    grid-row: 2/4;
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
    img {
            width: 100%;
            height: 100%;
        }
    }
`

const DefaultThumbnailsGrid = () => {
    const {
        defaultImageArray,
        addImageMode,
        gridMode,
        setCurrentTop,
        setCurrentBot
    } = useContext(AppContext);

    useEffect(() => {
        let min = 0;
        let max = defaultImageArray.length;
        let rand1 = Math.floor(Math.random() * (max - min) + min);
        let rand2 = Math.floor(Math.random() * (max - min) + min);
        setCurrentBot(defaultImageArray[rand1])
        setCurrentTop(defaultImageArray[rand2])
    }, [defaultImageArray])

    return (
        <>
            {(addImageMode && gridMode) &&
                <StyledDefaultThumbnailsGrid className="default-thumbnails-grid">
                    {defaultImageArray.map(imgObj => (
                        <DefaultImgThumb
                            key={imgObj.id}
                            imgObj={imgObj}
                        />
                    ))}
                </StyledDefaultThumbnailsGrid>
            }
        </>

    )
};

export default DefaultThumbnailsGrid; 