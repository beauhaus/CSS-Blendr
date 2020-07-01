import React, { useContext } from 'react'
// import { AppContext } from '../'
import UsrImgBtn from './usrimagebtn'
import DefaultImgBtn from './defaultimgbtn'

const ThumbnailCard = ({ imgObj }) => {
    // const { thumbNailClicker} = useContext(BlenderAppContext);
    // const divClick = () => (console.log("div clicked");
    // const btnClick = () => (console.log("btn clicked");

    return (
        <>
            {imgObj.tag === "usr-image" ? 
            <UsrImgBtn imgObj={imgObj} />
            : 
            <DefaultImgBtn imgObj={imgObj}/>
            }
        </>
    )
}

export default ThumbnailCard;

/*
            <button className="delete" onClick={() => deleteUsrImage(usrImage.id)}><p>X</p></button> 
             {usrImage.tag==="usr-image" && <button className="delete" onClick={() => deleteUsrImage(usrImage.id)}><p>X</p></button>}

<StyledThumbCard className={imgObj.top && "selected-img-top"}
            onClick={() => thumbNailClicker(imgObj)}
            onClick={() => divClick(imgObj)}
        >
            {imgObj.tag === "usr-image" ?
                <img src={imgObj.url} alt={imgObj.name} /> :
                <Image
                    fluid={imgObj.img.fluid}
                    alt={imgObj.name}
                />
                <button id="test-usr-image-btn" src={imgObj.url}alt={imgObj.name} />
                
            }

        </StyledThumbCard>


        */