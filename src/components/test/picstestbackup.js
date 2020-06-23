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
    const [newImageURL, setNewImageURL] = useState('');
    const [usrImages, setUsrImages] = useState('');
    const [selectedFileName, setSelectedFileName] = useState('')

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
        

        setSelectedFileName(e.target.files[0].name)

        let reader = new FileReader();
        reader.onload = (e) => {
            
            setNewImageURL(reader.result);
        }
        
        reader.readAsDataURL(e.target.files[0])
        // fileUploadHandler()
        // 
    }
    useEffect(() => {
        fileUploadHandler(newImageURL)
    }, [newImageURL])

    const fileUploadHandler = (url) => {

        // event.preventDefault();
        
        if (url !== '') {
            
            let imageFile = {
                id: shortRand(),
                url,
                top: false,
                bot: false,
                tag: "usr-image",
                name: selectedFileName
            }
            
            db.usrImages.add(imageFile).then(async () => {
                //retrieve all usrImages inside the db
                
                let allUsrImages = await db.usrImages.toArray();
                // set the usrImages
                setUsrImages(allUsrImages);
                
            });
        }
        // setSelectedFileName('')
        // setNewImageURL('')
    }

    return (
        <>
            <form className="picstester-form" >
                <div className="control">
                    <input
                        style={{ display: 'none' }}
                        type="file"
                        required
                        onChange={fileSelectedHandler}
                        ref={fileInput}
                    />
                    <button type="button" onClick={() => fileInput.current.click()}>SELECT</button>

                </div>
                {/* {selectedFileName && <button type="button" onClick={fileUploadHandleNamer}>UP!</button>} */}
            </form>
            <hr/>
            <br/>
            {/* {combinedImageArray.length >0 && combinedImageArray[0].tag}
            <br/>
            {combinedImageArray.length >0 && combinedImageArray[1].name}
            <hr/>
            {`selfilename: ${selectedFileName}`}
            <img src={newImageURL} alt={selectedFileName} /> */}
            {combinedImageArray.length ?
                <PictureCard imageArray={combinedImageArray} deleteUsrImage={deleteUsrImage} />
                :
                ''
            }
        </>

    )
}

export default PicsTest;
