import React, { useEffect, useRef, useContext} from 'react'
import { gsap, Back } from "gsap"; //  , Power4, Expo
import { AppContext } from '../../../pages/page-b'
import styled from 'styled-components'
// import './flip-img-pairs.scss'

const StyledFlipImagePairs = styled.div`
    top: 3%;
    left: 3%;
    height: 94%;
    width: 94%;
    position: absolute;
    perspective: 200px;
    
    img {

        position: absolute;
        width: 70%;
        height: 70%;
    }
    .top-image {
        top: 0%;
        left: 8%;
        transform: rotateX(41deg);
    }
    .bot-image {
        top: 20%;
        right: 10%;
        transform: rotateX(46deg);
        
    }
    .top-image-effect {
        position: absolute;
        top: 0%;
        left: 8%;
        width: 70%;
        height: 70%;
        border: 2px solid yellow;
        background: lightgreen;
        transform: rotateX(41deg);
    }
    .flip-alpha-display {
        position: absolute;
        top: 20%;
        left: 8%;
        width: 70%;
        height: 30%;
        transform: rotateX(41deg);
        color: #fff;
        font-size: 4rem;
        font-weight: 200;
        text-shadow: 1px 1px 2px #000;
    }
`

const FlipImagePairs = () => {
    const { mixMode, topAlphaVal, flipTriggerVal, selBot, selTop,alphaModifyMode, addImageMode, combinedImageArray, btReset, setBtReset } = useContext(AppContext);
    let topImage = useRef(null)
    let botImage = useRef(null)
    let imgEffect = useRef(null)

    const imgFlipper = () => {
        combinedImageArray.forEach(imgObj => {
          if (imgObj.top !== imgObj.bot) {
            imgObj.top = !imgObj.top;
            imgObj.bot = !imgObj.bot;
          }
        })
        setBtReset(!btReset)
        return combinedImageArray;
      }
    /* affordance animation (arrows) for changing modes */
    useEffect(() => {
        gsap.set(imgEffect, { opacity: 0 })
        const tl = gsap.timeline({ defaults: { delay: 0 } })
        tl.to(imgEffect, { duration: .1, opacity: 1 }, '-=0')
        tl.to(imgEffect, { duration: 2, opacity: 0 }, '-=0')
    }, [mixMode])

    /*slide-out animation */
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { delay: 0 } })
        tl
            .to(botImage, { duration: .3, x: 800 }, '-=0')
            .to(topImage, { duration: .3, x: -800 }, '-=.3')
            .call(imgFlipper)
            .to(botImage, { duration: .5, ease: Back.easeInOut.config(1.8), x: 0 }, '-=0')
            .to(topImage, { duration: .5, ease: Back.easeInOut.config(1.8), x: 0 }, '-=.5')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [flipTriggerVal])
    
    return (
        <StyledFlipImagePairs className="flip-image-pairs-container">
            <img className="bot-image" src={selBot.url} alt="nice pic"  ref={elem => botImage = elem} />
            <img className="top-image" src={selTop.url} alt="nicer pic"  ref={elem => topImage = elem} style={{ opacity: `${topAlphaVal/100}` }}/>
            <div className="top-image-effect" ref={elem => imgEffect = elem} style={{ mixBlendMode: "screen" }}></div>
            {(alphaModifyMode && !addImageMode) && <h2 className="flip-alpha-display">{topAlphaVal}%</h2>}
        </StyledFlipImagePairs>

    )
}

export default FlipImagePairs;