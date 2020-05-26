import React from 'react';
import styled from 'styled-components'
// import {RemoveScroll} from 'react-remove-scroll';

import Aqua from '../../../static/images/aqua.jpg'
import Tiles1 from '../../../static/images/tiles1.jpeg'
import Tiles2 from '../../../static/images/tiles2.jpeg'
import Rouge from '../../../static/images/rouge.jpg'

import Street from '../../../static/images/street.jpg'
// import xxx from '../../../static/images/xxx.jpg'
// import xxx from '../../../static/images/xxx.jpg'
import Flowers from '../../../static/images/flowers.jpg'
import Claudia from '../../../static/images/claudia.jpg'
import Eye from '../../../static/images/eye.jpg'
import TestImg from '../../../static/images/testimg.jpg'
import Tritone from '../../../static/images/tritone.jpg'
import Magritte from '../../../static/images/magritte.jpg'


const PhotoGalleryWrapper = styled.div`
width: 100%;
max-height: 100%;
position: absolute;
top: 0;
left: 0;
padding: 1%;
background: var(--photo-gallery-bg);
overflow: scroll;
z-index: 5;
display: grid;
grid-template-columns: repeat(3, 30vw);
grid-template-rows: repeat(30, 15vh);
${'' /* align-items: center; */}
justify-content: space-around;
${'' /* grid-gap: 10px; */}
img {
    width: 90%;
    height: 90%;
    margin: auto;
    border-radius: 10px;
}
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
    
    <PhotoGalleryWrapper className="phuck">
    {/* <button className="close-btn" onClick={galleryToggle}>X</button> */}
    <img src={Aqua} alt="num1"/>
    <img src={Tiles1} alt="num2"/>
    <img src={Tiles2} alt="num3"/>
    <img src={Rouge} alt="rouge"/>
    <img src={Eye} alt="Eye"/>
    <img src={TestImg} alt="TestImg"/>
    <img src={Street} alt="Street"/>
    <img src={Magritte} alt="Magritte"/>
    <img src={Tritone} alt="Tritone"/>
    <img src={Claudia} alt="Claudia"/>
    <img src={Flowers} alt="Flowers"/>
    {/* <img src={xxx} alt="xxx"/> */}

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
    </PhotoGalleryWrapper>
)

export default PhotoGallery;
