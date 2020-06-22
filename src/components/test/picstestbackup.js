import React, { useState, useEffect, useContext, useRef } from 'react'
import { createUsrImageDB, shortRand } from './apputils'
import { BlendrDataContext } from '../../pages/page-d'

import PictureCard from './picturecard'

const PicsTest = () => {
    const {
        defaultImages,
        combinedImageArray,
        setCombinedImageArray
    } = useContext(BlendrDataContext);

    /******** STATE **********/
    const [postImageURL, setImageURL] = useState('');
    const [usrImages, setUsrImages] = useState('');
    const [selectedFile, setSelectedFile] = useState('')

    /********REFACTOR*********/
    //set the database 
    const db = createUsrImageDB();

    //get all usrImages from db
    useEffect(() => {
        const getStoredImageFiles = async () => {
            let usrImages = await db.usrImages.toArray();
            if (usrImages) {
                setUsrImages(usrImages)
            }
        }
        getStoredImageFiles();
    }, [])


    const deleteUsrImage = async (id) => {
        db.usrImages.delete(id);
        let allUsrImages = await db.usrImages.toArray();
        //(re)set the usrImage array
        setUsrImages(allUsrImages);
    }

    useEffect(() => {
        setCombinedImageArray([
            ...usrImages,
            ...defaultImages
        ])
    }, [defaultImages, usrImages])


    /***************************************************/
    const fileInput = useRef(null)

    const fileSelectedHandler = e => {
        console.log("fsh", e.target.files[0].name);
        
        setSelectedFile(e.target.files[0].name)
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])
        reader.onload = (e) => {
            setImageURL(reader.result);
        }
    }

    const fileUploadHandler = (event) => {
        event.preventDefault();
        if (postImageURL !== '') {
            let imageFile = {
                id: shortRand(),
                url: postImageURL,
                top: false,
                bot: false,
                tag: "usr-image",
                selectedFile
            }

            db.usrImages.add(imageFile).then(async () => {
                //retrieve all usrImages inside the db
                let allUsrImages = await db.usrImages.toArray();
                // set the usrImages
                setUsrImages(allUsrImages);
            });
        }
    }

    return (
        <>
        <form className="picstester-form" >
        <div className="control">
            <input 
                style={{display:'none'}}
                type="file"
                required
                onChange={fileSelectedHandler}
                ref={fileInput}
            />
            <button type="button" onClick={()=>fileInput.current.click()}>SELECT</button>
            
        </div>
        {selectedFile && <button type="button" onClick={fileUploadHandler}>UP!</button>}
    </form>

    {combinedImageArray.length ?
        <PictureCard imageArray={combinedImageArray} deleteUsrImage={deleteUsrImage} />
        :
        ''
    }
</>
      
    )
}

export default PicsTest;
