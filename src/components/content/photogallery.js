import React, { useEffect, useRef, useContext } from 'react'
import styled from 'styled-components'
import { gsap } from "gsap";
import Image from 'gatsby-image'
import useGalleryImages from '../hooks/use-gallery-images'
import {ModeContext} from '../../pages/page-a'


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
`

const PhotoGallery = () => {
    // const {galleryToggleVal} = useContext(ModeContext);
    const { galleryOpenToggleVal} = useContext(ModeContext);

    const thumbNails = useGalleryImages();
    let gallery = useRef(null)
    useEffect(()=> {
      gsap.set(gallery, { opacity: 0})
      const tl = gsap.timeline({ defaults: { delay: .3 } })   
      tl.to(gallery, { duration: .5, opacity: 1 }, '-=0')
    },[galleryOpenToggleVal])
  
    const setTest = (payload) => {
        console.log("set Test", payload)
    }
    return (

        <PhotoGalleryWrapper className="photo-gallery-container" ref={elem => gallery = elem}>
            {galleryOpenToggleVal && thumbNails.map(imgObj => (
                <div className="gallery-thumb"
                    key={imgObj.id}
                    onClick={e=>setTest(imgObj.id)}
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