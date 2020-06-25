import React, { useState, useEffect, useContext, useRef } from 'react'
import { createUsrImageDB, shortRand } from './apputils'
import { BlendrDataContext } from '../../pages/page-d'
import styled from 'styled-components'
import PictureCard from './picturecard'

const ImageForm = styled.form`
    height: 10vh;
    display: flex;
    align-items: center;
    .control {
        height: 100%;
        width: 100%;
        button {
            ${'' /* border: 1px solid fuchsia; */}
            height: 100%;
            width: 20%;
            svg {
                width: 7vh;
                height: 7vh;
            }
        }
    }
`


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
                    name: selectedFileName
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
        <>
            <ImageForm className="picstester-form" >
                <div className="control">
                    <input
                        style={{ display: 'none' }}
                        type="file"
                        required
                        onChange={fileSelectedHandler}
                        ref={fileInput}
                    />
                    <button className="select-img-btn" type="button" onClick={() => fileInput.current.click()}>
                        <svg xmlns="http://www.w3.org/2000/svg" overflow="visible" viewBox="0 0 300 300">
                            <filter id="plus-shad">
                                <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                            </filter>
                            <path fill="#828282" d="M229.48 302.5H28.68C12.84 302.5 0 289.66 0 273.82V73.02c0-15.84 12.84-28.68 28.68-28.68h200.79c15.84 0 28.68 12.84 28.68 28.68v200.79c.01 15.85-12.83 28.69-28.67 28.69z" />
                            <path filter="url(#plus-shad)" stroke="#000" strokeWidth="5" d="M295.81 91H236V31.19c0-7.56-6.13-13.69-13.69-13.69H179.7c-7.56 0-13.69 6.13-13.69 13.69V91H106.2c-7.56 0-13.69 6.13-13.69 13.69v42.61c0 7.56 6.13 13.69 13.69 13.69H166v59.81c0 7.56 6.13 13.69 13.69 13.69h42.61c7.56 0 13.69-6.13 13.69-13.69V161h59.81c7.56 0 13.69-6.13 13.69-13.69V104.7c.01-7.57-6.12-13.7-13.68-13.7z" />
                            <path fill="#fff" stroke="#4d4d4d" strokeWidth="5" d="M285.81 76H226V16.19c0-7.56-6.13-13.69-13.69-13.69H169.7c-7.57 0-13.7 6.13-13.7 13.69V76H96.19c-7.56 0-13.69 6.13-13.69 13.69v42.61c0 7.56 6.13 13.69 13.69 13.69H156v59.81c0 7.56 6.13 13.69 13.69 13.69h42.61c7.56 0 13.69-6.13 13.69-13.69V146h59.81c7.56 0 13.69-6.13 13.69-13.69V89.69c.01-7.56-6.12-13.69-13.68-13.69z" />
                        </svg>
                    </button>

                </div>
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

export default PicsTest;
