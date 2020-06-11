// import React, { useState, useEffect, useReducer } from 'react'

// // import Note from './note'
// // import NewNoteForm from './newnoteform'

// const notesReducer = (state, action) => {
//     switch (action.type) {
//         case 'POPULATE_NOTES':
//             return action.notes
//         case 'ADD_NOTE':
//             return [
//                 ...state,
//                 {title: action.title, text: action.text}
//             ]
//         case 'REMOVE_NOTE':
//             return state.filter((note)=> note.title!== action.title)
//             default:
//                 return state
//     }
// }



// const NotesTest = () => {

//     const [notes, notesDispatch] = useReducer(notesReducer, [])
    

//     // const [title, setTitle] = useState('')
//     // const [text, setText] = useState('')

//     // const submitClicker = (e) => { //adds note
//     //     e.preventDefault()
//     //     setTitle(e.target.value)
//     //     setText(e.target.value)
//     //     console.log("text: ", text)
//     //     notesDispatch({
//     //         type: 'ADD_NOTE', title, text
//     //     })
//     //     setTitle('') // removes text from input field
//     //     setText('') // removes text from input field
//     //     // return (e)
//     // }

//     // const titleChangeHandler = (e) => setTitle(e.target.value);
//     // const textChangeHandler = (e) => setText(e.target.value);

//     /*GET*/
//     useEffect(() => {
//         const notes = JSON.parse(localStorage.getItem('notes'));
//         if (notes) {
//             notesDispatch({type: "POPULATE_NOTES",notes})
//         }
//     }, [])

//     /*SET*/
//     useEffect(() => {
//         localStorage.setItem('notes', JSON.stringify(notes));
//     }, [notes])

//     const removeNote = (title) => {
//         notesDispatch({
//             type: 'REMOVE_NOTE', title
//         })
//     };

//     return (
//         <div>
//             <h1>Notes</h1>
//             {notes.map((note, idx) => (<Note key={idx} note={note} removeNote={removeNote}/>))}
//          <NewNoteForm notesDispatch={notesDispatch} />
            
//         </div>
//     )
// }


// export default NotesTest;