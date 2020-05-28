import React from 'react';
import styled from 'styled-components'
import Image from 'gatsby-image'
import useGalleryImages from '../hooks/use-gallery-images'
// import {ModeContext} from '../../pages/page-a'

const PhotoGalleryWrapper = styled.div`
width: 100%;
max-height: 100%;
position: absolute;
top: 0;
left: 0;
padding: 2%;
background: var(--photo-gallery-bg);
overflow-y: scroll;
overflow-x: hidden;
z-index: 5;
display: grid;
grid-template-columns: repeat(3, 28vw);
grid-template-rows: repeat(20, 28vw);

justify-content: space-around;

.gallery-thumb{
    margin: .5rem 0;
    position: relative;
    border: 1px solid #fff;
    padding: 1%;
    .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
    }
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
        display: none;
    }
`

const PhotoGallery = () => {
    // const {galleryToggleVal} = useContext(ModeContext);
    const thumbNails = useGalleryImages();

    return (

        <PhotoGalleryWrapper className="photo-gallery-container">

            {thumbNails.map((imgObj, idx) => (
                <div className="gallery-thumb"
                    key={imgObj.id}
                >
                    <Image
                        fluid={imgObj.img.fluid}
                        alt={imgObj.id}
                    />
                </div>
            ))}
        </PhotoGalleryWrapper>
    )
}

export default PhotoGallery;

/*
// import Aqua from '../../../images/gallery-images/aqua.jpg'

// import Tiles1 from '../../../images/gallery-images/tiles1.jpeg'
// import Tiles2 from '../../../images/gallery-images/tiles2.jpeg'
// import Rouge from '../../../images/gallery-images/rouge.jpg'

// import Street from '../../../images/gallery-images/street.jpg'
// import xxx from '../../../images/gallery-images/xxx.jpg'
// import xxx from '../../../images/gallery-images/xxx.jpg'
// import DeadTrees from '../../../images/gallery-images/deadtrees.jpg'
// import Rose from '../../../images/gallery-images/rose.jpg'
// import Socrates from '../../../images/gallery-images/socrates.jpg'
// import Mondrian from '../../../images/gallery-images/mondrian.jpeg'
// import Flowers from '../../../images/gallery-images/flowers.jpg'
// import Claudia from '../../../images/gallery-images/claudia.jpg'
// import Eye from '../../../images/gallery-images/eye.jpg'
// import TestImg from '../../../images/gallery-images/testimg.jpg'
// import Tritone from '../../../images/gallery-images/tritone.jpg'
// import Magritte from '../../../images/gallery-images/magritte.jpg'
*/