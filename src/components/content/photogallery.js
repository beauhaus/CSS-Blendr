import React, { useEffect, useRef, useContext, useState } from 'react'
import styled from 'styled-components'
import { gsap } from "gsap";
import { ModeContext } from '../../pages/page-a'
import GalleryThumbnailCard from './gallerythumbnailcard'

const PhotoGalleryWrapper = styled.div`
    opacity: 0;
    width: 100%;
    max-height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 2%;
    background: var(--photo-gallery-bg);
    overflow-y: scroll;
    overflow-x: hidden;
    z-index: 4;
    display: grid;
    grid-template-columns: repeat(3, 28vw);
    grid-template-rows: repeat(20, 28vw);
    justify-content: space-around;
`

const PhotoGallery = () => {
    const { galleryOpenVal, gallery } = useContext(ModeContext);

    let displayGallery = useRef(null)

    useEffect(() => {
        gsap.set(displayGallery, { opacity: 0 })
        const tl = gsap.timeline({ defaults: { delay: .3 } })
        tl.to(displayGallery, { duration: .5, opacity: 1 }, '-=0')
    }, [galleryOpenVal])

    return (
        <PhotoGalleryWrapper className="photo-gallery-container" 
        ref={elem => displayGallery = elem}>
            {galleryOpenVal &&
                gallery.map(imgObj => (
                    <GalleryThumbnailCard key={imgObj.name}
                        imgObj={imgObj}
                    />
                ))}
        </PhotoGalleryWrapper>
    )
}

export default PhotoGallery;