import React, {  useEffect, useContext, useRef } from 'react'
import { shortRand,db } from '../apputils'
import { AppContext } from '../../../pages/page-b'
import FileInputBtn from '../fileinputbtn'

// permanent variables 🟢
// temporary variables 🟡

const FileInputBtnContainer = () => {
    const {
        defaultImages,
        usrImages,
        setUsrImages,
        setCombinedImageArray,
        newImageURL,
        setNewImageURL,
        selectedFileName,
        setSelectedFileName
    } = useContext(AppContext);



    //get all usrImages from db
    useEffect(() => {
        const getStoredImageFiles = async () => {
            let usrImages = await db.usrImages.toArray();
            if (usrImages) {
                setUsrImages(usrImages)
            }
        }
        getStoredImageFiles();
        // line below ought to be this, but dependency may interfere with uploads (??)
        // }, [db.usrImages])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    // const deleteUsrImage = async (id) => {
    //     db.usrImages.delete(id);
    //     let allUsrImages = await db.usrImages.toArray();
    //     //(re)set the usrImage array
    //     setUsrImages(allUsrImages);
    // }

    


    useEffect(() => {
        setCombinedImageArray([
            ...usrImages,
            ...defaultImages
        ])
    }, [defaultImages, usrImages, setCombinedImageArray])


    /***************************************************/
    const fileInput = useRef(null)

    const fileSelectedHandler = e => {

        if (e.target.files[0]) {
            console.log("file selected");
            setSelectedFileName(e.target.files[0].name)

            let reader = new FileReader();
            reader.onload = (e) => {
                setNewImageURL(reader.result);
            }

            reader.readAsDataURL(e.target.files[0])
        }
    }
    useEffect(() => {
        const fileUploadHandler = (url) => {
            // event.preventDefault();
            if (url !== '') {
                let imageFile = {
                    id: shortRand(),
                    name: selectedFileName,
                    url,
                    tag: "usr-image",
                    top: false,
                    bot: false,
                    img: null //no processed url (not using Gatsby-Image)
                }

                db.usrImages.add(imageFile).then(async () => {
                    //retrieve all usrImages inside the db
                    let allUsrImages = await db.usrImages.toArray();
                    // set the usrImages
                    setUsrImages(allUsrImages);
                });
            }
        }
        fileUploadHandler(newImageURL)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newImageURL])


    return (
        <form className="img-file-form" >
            <input
                type="file"
                required
                onChange={fileSelectedHandler}
                ref={fileInput}
            />
            <FileInputBtn fileInput={fileInput} />
        </form>
    )
}

export default FileInputBtnContainer;

/*

import React, { useState, useEffect, useContext, useRef } from 'react'
import { createUsrImageDB, shortRand } from '../apputils'
import { AppContext } from '../../../pages/page-b'
import styled from 'styled-components'
// import PictureCard from '../picturecard'
import FileInputBtn from '../fileinputbtn'

// permanent variables 🟢
// temporary variables 🟡

const FileInputBtnContainer = () => {
    const {
        defaultImages,
        usrImages,
        setUsrImages,
        setCombinedImageArray
    } = useContext(AppContext);

    const [newImageURL, setNewImageURL] = useState('');
    // const [usrImages, setUsrImages] = useState('');
    const [selectedFileName, setSelectedFileName] = useState('')

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
        // line below ought to be this, but dependency may interfere with uploads (??)
        // }, [db.usrImages])
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
    }, [defaultImages, usrImages, setCombinedImageArray])


    const fileInput = useRef(null)

    const fileSelectedHandler = e => {

        if (e.target.files[0]) {
            console.log("file selected");
            setSelectedFileName(e.target.files[0].name)

            let reader = new FileReader();
            reader.onload = (e) => {
                setNewImageURL(reader.result);
            }

            reader.readAsDataURL(e.target.files[0])
        }
    }
    useEffect(() => {
        const fileUploadHandler = (url) => {
            // event.preventDefault();
            if (url !== '') {
                let imageFile = {
                    id: shortRand(),
                    url,
                    top: false,
                    bot: false,
                    tag: "usr-image",
                    name: selectedFileName,
                    img: null //no processed url (not using Gatsby-Image)
                }

                db.usrImages.add(imageFile).then(async () => {
                    //retrieve all usrImages inside the db
                    let allUsrImages = await db.usrImages.toArray();
                    // set the usrImages
                    setUsrImages(allUsrImages);

                });
            }
        }
        fileUploadHandler(newImageURL)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newImageURL])


    return (
        <form className="img-file-form" >
            <input
                type="file"
                required
                onChange={fileSelectedHandler}
                ref={fileInput}
            />
            <FileInputBtn fileInput={fileInput} />
        </form>
    )
}

export default FileInputBtnContainer;

*/