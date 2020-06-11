import React, {useState} from 'react'

 const NewNoteForm = ({notesDispatch}) => {

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const submitClicker = (e) => { //adds note
        e.preventDefault()
        setTitle(e.target.value)
        setText(e.target.value)
        console.log("text: ", text)
        notesDispatch({
            type: 'ADD_NOTE', title, text
        })
        setTitle('') // removes text from input field
        setText('') // removes text from input field
        // return (e)
    }
    const titleChangeHandler = (e) => setTitle(e.target.value);
    const textChangeHandler = (e) => setText(e.target.value);
    return (
    <>
    <h2>Add Note</h2>
    <form onSubmit={submitClicker}>
        <input value={title} onChange={titleChangeHandler} />
        <textarea value={text} onChange={textChangeHandler}>txt: {text}</textarea>
        <button>Submit</button>
    </form>
    </>
    )
 }

 export default NewNoteForm;