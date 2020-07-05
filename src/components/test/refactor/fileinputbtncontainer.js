import React, {  useEffect, useContext, useRef } from 'react'
import { shortRand,db } from './hooks/use-gallery-images'
import { AppContext } from '../../../pages/page-b'
import FileInputBtn from './fileinputbtn'

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
            setSelectedFileName(e.target.files[0].name)
            let reader = new FileReader();
            reader.onload = (e) => {
                setNewImageURL(reader.result);
            }
            reader.readAsDataURL(e.target.files[0])
        }
        // setSelectedFileName('')
    }

    useEffect(() => {
        const fileUploadHandler = (url) => {
            // event.preventDefault(); //TODO: delete?
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
        // setSelectedFileName('')

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedFileName])


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
