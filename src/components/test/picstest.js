import React, { useState, useEffect, useContext } from 'react'

import Dexie from 'dexie';
import { BlendrDataContext } from '../../pages/page-d'
import shortRand from './apputils'
// import useGalleryImages from '../hooks/use-gallery-images'


// import PictureCard from './picturecard'


// const usrImgReducer = (state, action) => {
//     switch (action.type) {
//         case 'POPULATE_USRIMAGES':
//             return action.usrImages
// case 'ADD_NOTE':
//     return [
//         ...state,
//         {title: action.title, text: action.text}
//     ]
// case 'REMOVE_NOTE':
//     return state.filter((note)=> note.title!== action.title)
//             default:
//                 return state
//     }
// }

const PicsTest = () => {
    const { 
        allImages, setAllImages
    } = useContext(BlendrDataContext);
    
    
    
    //set the database 
    const db = new Dexie("UsrImageDB")
    db.version(1).stores({
        //a table cust named usrImages...1st csv value is "primary key" (id would be preferable)
        usrImages: "id, file, tag, name, top, bot" //img? url?
    })
    db.open().catch((err) => {
        console.log("db err: ", err.stack || err);
    })

    
    const [postFile, setFile] = useState('');

    const [usrImage, setUsrImage] = useState('')
    const [imageTag, setImageTag] = useState('')

    useEffect(() => {
        console.log("HELLO")
    }, [])
    
    //create db store
    // db.version(1).stores({
    //     //a table cust named usrImages...1st csv value is "primary key" (id would be preferable)
    //     usrImages: "id, file"
    // })
    // db.open().catch((err) => {
    //     console.log("db err: ", err.stack || err);
    // })
    // useEffect(() => {
    //     const db = new Dexie("UsrImgDB")
    //     db.version(1).stores({
    //         //a table cust named usrImages...1st csv value is "primary key" (id would be preferable)
    //         usrImages: "id, file"
    //     })
    //     db.open().catch((err) => {
    //         console.log("db err: ", err.stack || err);
    //     })
    //     if (db) {
    //         usrImagesDispatch({type: "POPULATE_USRIMAGES",db})
    //     }
    // }, [])
    //set the state and property
    // const [usrImages, setUsrImages] = useState('');

    //read the file and decode it
    // const getFile = (e) => {
    //     console.log("getfile e:", e[0])
    //     let reader = new FileReader();
    //     reader.readAsDataURL(e[0])
    //     reader.onload = (e) => {
    //         console.log(reader.result)
    //         setFile(reader.result);
    //     }
    // }

    const deleteUsrImage = async (id) => {
        console.log("del id: ", id);
        // db.usrImages.delete(id);
        // let allUserImages = await db.usrImages.toArray();
        // //set the usrImage
        // setUsrImages(allUserImages);
    }

    //submit
    const getPostInfo = (e) => {
        e.preventDefault();
        if (postFile !== '') {
            let post = {
                id: shortRand(),
                file: postFile
            }

            db.usrImages.add(post).then(async () => {
                //retrieve all usrImages inside the db
                let allUserImages = await db.usrImages.toArray();
                // set the usrImages
                // setUsrImages(allUserImages);
            });
        }
    }

    // useEffect(() => {
    //     //get all usrImages from db
    //     const getPosts = async () => {
    //         let allUserImages = await db.usrImages.toArray();
    //         setUsrImages(allUserImages);
    //     }
    //     getPosts();

    // }, [])
    

    let usrImageData;

    // if (usrImages.length > 0) {
    //     // console.log(usrImages.length)
    //     usrImageData = <div className="usrImages-container">
    //         {/* {
    //             usrImages.map(usrImage => <PictureCard key={usrImage.id} deleteUsrImage={deleteUsrImage} usrImage={usrImage} />)
    //         } */}
    //     </div>
    // } else {
    //     usrImageData = <div className="message">
    //         <p>There are no usrImages to show</p>
    //     </div>
    // }

    return (
        <>
            <form onSubmit={getPostInfo}>
                <div className="control">
                    <label htmlFor="cover" className="cover">Choose Image File</label>
                    <input type="file" id="cover"
                    />
                </div>
                <input type="submit" value="Submit" />
            </form>
            {usrImageData}

        </>
    )


}

export default PicsTest;