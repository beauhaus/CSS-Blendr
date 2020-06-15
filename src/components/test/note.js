import React from 'react'

const Note = ({ note, removeNote }) => (
    <div>
        <h3>{note.title}</h3>
        <p>{note.text}</p>
        <button onClick={() => removeNote(note.title)}>X</button>
        <br/><br/>
        <hr />
        <br/>
    </div>
)

export default Note;