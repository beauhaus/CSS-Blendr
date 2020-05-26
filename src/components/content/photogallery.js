import React from 'react';
import styled from 'styled-components'

const PhotoGalleryWrapper = styled.div`
width: 100%;
min-height: 150%;
${'' /* height: 100%; */}
position: absolute;
top: 0;
background: var(--photo-gallery-bg);
overflow-y: scroll;

left: 0;
.close-btn {
    height: 12vh;
    width: 12vh;
    position: absolute;
    top: 0;
    right: 0;
    background: slategrey;
    color: coral;
}
    h1 {
        fill: #fff;
        font-size: 3rem;
    }
`

const PhotoGallery = (galleryToggle) => (
    <PhotoGalleryWrapper>
    {/* <button className="close-btn" onClick={galleryToggle}>X</button> */}
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1> 
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
        <h1>PhotoGallery</h1>
    </PhotoGalleryWrapper>)

export default PhotoGallery;
