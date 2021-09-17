import React, { useContext, useState } from "react"
import NotesContext from "../context/notes-context"
import useMousePosition from '../hooks/useMousePosition'

const AddNoteForm = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const position = useMousePosition() //custom hook for reusability

    const { dispatch } = useContext(NotesContext)

    const addNote = (e) => {
        e.preventDefault()
        dispatch({ type: 'ADD_NOTE', note: { title, body } })
        setTitle('')
        setBody('')
    }
    //<></> ---> react fragment. replaces the need for a wrapper html element which does nothing else
    return (
        <>
            <p>Add note {position.x} - {position.y}</p>
            <p>Add a note</p>
            <form onSubmit={addNote}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <button>add note</button>
            </form>
        </>
    )
}

export default AddNoteForm