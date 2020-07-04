import React, { useContext } from 'react'
import UsrImgThumb from './usrimagethumb'
import DefaultImgThumb from './defaultimgthumb'

const ThumbnailCard = ({ imgObj }) => {
    return (
        <>
            {imgObj.tag === "usr-image" ? 
            <UsrImgThumb imgObj={imgObj} />
            : 
            <DefaultImgThumb imgObj={imgObj}/>
            }
        </>
    )
}

export default ThumbnailCard;
