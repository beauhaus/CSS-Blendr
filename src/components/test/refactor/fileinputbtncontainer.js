import React, {  useEffect, useContext, useRef } from 'react'
import { fiveDigitRand,db } from './hooks/app-utils'
import { AppContext } from '../../../pages/page-b'
import UsrImgBtn from './usrimgbtn'

const FileInputBtnContainer = () => {
    const {
        setUsrImgArray,
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
                setUsrImgArray(usrImages)
            }
        }
        getStoredImageFiles();
        // line below ought to be this, but dependency may interfere with uploads (??)
        // }, [db.usrImages])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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

    useEffect(() => {
        const fileUploadHandler = (url) => {
            if (url !== '') {
                let imageFile = {
                    id: fiveDigitRand(),
                    name: selectedFileName,
                    url,
                    tag: "usr-image"
                }

                db.usrImages.add(imageFile).then(async () => {
                    //retrieve all usrImages inside the db
                    let allUsrImages = await db.usrImages.toArray();
                    // set the usrImages
                    setUsrImgArray(allUsrImages);
                });
            }
        }
        fileUploadHandler(newImageURL)
        setNewImageURL('')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newImageURL, selectedFileName])

            

    return (
        <form className="img-file-form" >
            <input
                type="file"
                required
                onChange={(e) =>fileSelectedHandler(e)}
                ref={fileInput}
            />
            <UsrImgBtn fileInput={fileInput}  />
        </form>
    )
}

export default FileInputBtnContainer;
