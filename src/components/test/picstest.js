import React, { useState, useEffect, useReducer } from 'react'
import Dexie from 'dexie';

const PicsTest = () => {
    //set the database 
    const db = new Dexie("ImagesDB")
    //create db store
    db.version(1).stores({
        //a table cust named posts...1st csv value is "primary key" (id would be preferable)
        posts: "title, content, file"
    })
    db.open().catch((err) => {
        console.log("db err: ", err.stack || err);
    })

    //set the state and property
    const [postTitle, setTitle] = useState('');
    const [postContent, setContent] = useState('');
    const [postFile, setFile] = useState('');
    const [posts, setPosts] = useState('');

    //read the file and decode it
    const getFile = (e) => {
        console.log("getfile e:", e[0])
        let reader = new FileReader();
        reader.readAsDataURL(e[0])
        reader.onload = (e) => {
            console.log(reader.result)
            setFile(reader.result);
        }
    }

    const deletePost = async (id) => {
        console.log("del id: ", id);
        db.posts.delete(id);
        let allPosts = await db.posts.toArray();
        //set the posts
        setPosts(allPosts);
    }


    //submit
    const getPostInfo = (e) => {
        e.preventDefault();
        if (postTitle !== '' && postContent !== '' && postFile !== '') {
            let post = {
                title: postTitle,
                content: postContent,
                file: postFile
            }

            db.posts.add(post).then(async () => {
                //retrieve all posts inside the db
                let allPosts = await db.posts.toArray();
                // set the posts
                setPosts(allPosts);
            });
        }
    }

    useEffect(() => {
        //get all posts from db
        const getPosts = async () => {
            let allPosts = await db.posts.toArray();
            setPosts(allPosts);
        }
        getPosts();

    }, [])

    let postData;

    if (posts.length > 0) {
        postData = <div className="posts-container">
            {
                posts.map(post => {
                    return (
                        <div className="post" key={post.title}>
                            <img src={post.file} alt={post.id} />
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>
                            <button className="delete" onClick={() => deletePost(post.title)}>Delete</button>
                        </div>
                    )
                })}
        </div>
    } else {
        postData = <div className="message">
            <p>There are no posts to show</p>
        </div>
    }

    return (
        <>
            <form onSubmit={getPostInfo}>
                <div className="control">
                    <label>title</label>
                    <input type="text" name="title" onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="control">
                    <label>content</label>
                    <textarea name="content" onChange={e => setContent(e.target.value)} />
                </div>
                <div className="control">
                    <label htmlFor="cover" className="cover">Choose a file</label>
                    <input type="file" id="cover" name="file" onChange={e => getFile(e.target.files)} />
                </div>
                <input type="submit" value="Submit" />

            </form>
            {postData}

        </>
    )


}


export default PicsTest;


// import Note from './pic'
// import NewNoteForm from './newpicform'

// const picsReducer = (state, action) => {
//     switch (action.type) {
//         case 'POPULATE_NOTES':
//             return action.pics
//         case 'ADD_NOTE':
//             return [
//                 ...state,
//                 {title: action.title, text: action.text}
//             ]
//         case 'REMOVE_NOTE':
//             return state.filter((pic)=> pic.title!== action.title)
//             default:
//                 return state
//     }
// }



    // /*GET*/
    // useEffect(() => {
    //     const pics = JSON.parse(localStorage.getItem('pics'));
    //     if (pics) {
    //         picsDispatch({type: "POPULATE_NOTES",pics})
    //     }
    // }, [])

    // /*SET*/
    // useEffect(() => {
    //     localStorage.setItem('pics', JSON.stringify(pics));
    // }, [pics])

    // const removeNote = (title) => {
    //     picsDispatch({
    //         type: 'REMOVE_NOTE', title
    //     })
    // };


    // const picsReducer = (state, action) => {
    //     switch (action.type) {
    //         case 'POPULATE_PICS':
    //             return action.pics
    //         case 'ADD_NOTE':
    //             return [
    //                 ...state,
    //                 {title: action.title, text: action.text}
    //             ]
    //         case 'REMOVE_NOTE':
    //             return state.filter((pic)=> pic.title!== action.title)
    //             default:
    //                 return state
    //     }
    // }