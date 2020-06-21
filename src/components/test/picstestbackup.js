import React, { useState, useEffect, useContext, useReducer } from 'react'
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
    const [fileName, setFileName] = useState('')
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

    // read the file and decode it
    const getUsrImageFile = (e) => {
        setFileName(e[0].name)
        let reader = new FileReader();
        reader.readAsDataURL(e[0])
        reader.onload = (e) => {
            setImageURL(reader.result);
        }
    }

    //submit (Add Image w/ standard properties)
    const submitUsrImageFile = (e) => {
        e.preventDefault();

        if (postImageURL !== '') {
            let imageFile = {
                id: shortRand(),
                url: postImageURL,
                top: false,
                bot: false,
                tag: "usr-image",
                fileName
            }

            db.usrImages.add(imageFile).then(async () => {
                //retrieve all usrImages inside the db
                let allUsrImages = await db.usrImages.toArray();
                // set the usrImages
                setUsrImages(allUsrImages);
            });
        }
    }

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
    return (
        <>
            <form className="picstester-form" onSubmit={submitUsrImageFile}>
                <div className="control">
                    <label htmlFor="cover" className="cover">Choose a file</label>
                    <input type="file" id="cover" required onChange={e => getUsrImageFile(e.target.files)} />
                </div>
                {fileName && <input type="submit" value="Upload" />}
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