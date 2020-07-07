import React, { useState, useEffect, useContext, useRef } from 'react'
// import { createUsrImageDB, shortRand } from './apputils'
import { BlendrDataContext } from '../../pages/page-d'
import styled from 'styled-components'
import PictureCard from './picturecard'
import FileInputBtn from './fileinputbtn'

const ImageForm = styled.form`
    height: 10vh;
    display: flex;
    margin-top: 20vh;
    align-items: center;
        border: 2px dashed fuchsia;
        button {
            ${'' /* border: 1px solid fuchsia; */}
            height: 100%;
            width: 20%;
            svg {
                width: 7vh;
                height: 7vh;
            }
        }
`


const CustImgForm = () => {
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
    // const db = createUsrImageDB();

    //get all usrImages from db
    // useEffect(() => {
    //     const getStoredImageFiles = async () => {
    //         let usrImages = await db.usrImages.toArray();
    //         if (usrImages) {
    //             setUsrImages(usrImages)
    //         }
    //     }
    //     getStoredImageFiles();
    //     // line below ought to be this, but dependency may interfere with uploads (??)
    //     // }, [db.usrImages])
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])


    const deleteUsrImage = async (id) => {
        db.usrImages.delete(id);
        let allUsrImages = await db.usrImages.toArray();
        //(re)set the usrImage array
        setUsrImages(allUsrImages);
    }

    // useEffect(() => {
    //     setCombinedImageArray([
    //         ...usrImages,
    //         ...defaultImages
    //     ])
    // }, [defaultImages, usrImages, setCombinedImageArray])


    /***************************************************/
    const fileInput = useRef(null)

    const fileSelectedHandler = e => {

        if (e.target.files[0]) {
            setSelectedFileName(e.target.files[0].name)

            let reader = new FileReader();
            reader.onload = (e) => {
                setNewImageURL(reader.result);
            }

            reader.readAsDataURL(e.target.files[0])
        }
    }
    // useEffect(() => {
    //     const fileUploadHandler = (url) => {

    //         // event.preventDefault();

    //         if (url !== '') {

    //             let imageFile = {
    //                 id: shortRand(),
    //                 url,
    //                 top: false,
    //                 bot: false,
    //                 tag: "usr-image",
    //                 name: selectedFileName
    //             }

    //             db.usrImages.add(imageFile).then(async () => {
    //                 //retrieve all usrImages inside the db
    //                 let allUsrImages = await db.usrImages.toArray();
    //                 // set the usrImages
    //                 setUsrImages(allUsrImages);

    //             });
    //         }
    //     }
    //     fileUploadHandler(newImageURL)
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [newImageURL])


    return (
        <>
            <ImageForm className="img-file-form" >
                <input
                    style={{ display: 'none' }}
                    type="file"
                    required
                    onChange={fileSelectedHandler}
                    ref={fileInput}
                />
                <FileInputBtn fileInput={fileInput} />
                {/* {selectedFileName && <button type="button" onClick={fileUploadHandleNamer}>UP!</button>} */}
            </ImageForm>
            {combinedImageArray.length ?
                <PictureCard imageArray={combinedImageArray} deleteUsrImage={deleteUsrImage} />
                :
                ''
            }
        </>

    )
}

export default CustImgForm;
