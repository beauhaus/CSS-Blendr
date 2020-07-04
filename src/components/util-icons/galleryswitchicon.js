// import React, { useContext, useEffect, useRef } from 'react'
// import { gsap, Power1 } from "gsap"; //  , Power4, Expo
// import styled from 'styled-components'
// import { BlenderAppContext } from '../../pages/page-a'

// const StyledImageGridIcon = styled.svg`
//     opacity: 1;
//     width: 100%;
//     height: 100%;
    
//     path {
//         transform-origin: 50% 50%;      
//         -webkit-backface-visibility: hidden;
//         backface-visibility: hidden;
//     }
// `

// const ImageGridIcon = () => {
//     const { galleryOpenVal
//     } = useContext(BlenderAppContext);

//     let switchIcon = useRef(null)
//     useEffect(() => {
//         const tl = gsap.timeline({ defaults: { rotate: 0  } })
//         gsap.set(switchIcon, { transformOrigin: '50% 50%' })

//         galleryOpenVal ? 
//         tl.to(switchIcon, { duration: .5, ease: Power1.easeInOut, rotate: 135, attr: { fill: '#beecff' }}, '-=0'):
//         tl.to(switchIcon, { duration: .5, ease: Power1.easeInOut, rotate: 0, attr: { fill: '#fff' }}, '-=0')
//     }, [galleryOpenVal])
    
//     return (
//         <StyledImageGridIcon className="gallery-switch-btn-icon" viewBox="0 0 300 300" width="100%" height="100%" >
//           <path d="M300 148H152V0h-4v148H0v4h148v148h4V152h148z"  ref={elem => switchIcon = elem} />
//         </StyledImageGridIcon>
//     )
// }
// export default ImageGridIcon;
