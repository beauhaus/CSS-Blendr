import React, { useState, useEffect, useContext, useRef } from 'react'
import { createUsrImageDB, shortRand } from '../apputils'
import { AppContext } from '../../../pages/page-b'
import styled from 'styled-components'
// import PictureCard from '../picturecard'
import FileInputBtn from '../fileinputbtn'

const ImageForm = styled.form`
        position: relative;
        z-index: 3;
        border-radius: 4px;
        width: 25%;
        height: 100%;
        background: transparent;
        border-radius: 8px;
        border: 1px dashed fuchsia;
        button {
            ${'' /* border: 1px solid fuchsia; */}
            height: 100%;
            svg {
                width: 7vh;
                height: 7vh;
            }
        }
`


const FileInputBtnContainer = () => {
    const {
        defaultImages,
        usrImages,
        setUsrImages,
        setCombinedImageArray
    } = useContext(AppContext);

    /******** STATE **********/
    const [newImageURL, setNewImageURL] = useState('');
    // const [usrImages, setUsrImages] = useState('');
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
        <ImageForm className="img-file-form" >
            <input
                style={{ display: 'none' }}
                type="file"
                required
                onChange={fileSelectedHandler}
                ref={fileInput}
            />
            <FileInputBtn fileInput={fileInput} />
        </ImageForm>
    )
}

export default FileInputBtnContainer;
