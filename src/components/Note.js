import React, { useContext, useEffect } from 'react'
import NotesContext from '../context/notes-context'
import useMousePosition from '../hooks/useMousePosition'

const Note = ({ note }) => {

    const { dispatch } = useContext(NotesContext) //not destructuring notes since it's not needed here
    const position = useMousePosition() //custom hook for reusability

    useEffect(() => {
      console.log('Setting up effect!')
  
      return () => { //Cleanup function (optional) -> works like componentDidUnmount
        console.log('Cleaning up effect!')
      }
    }, [])

    
    const removeNote = (title) => {
        //setNotes(notes.filter((note) => note.title !== title)) //i.e., keep only remaining notes which are not to be removed
        dispatch({ type: 'REMOVE_NOTE', title })
    }
  
    return (
      <div key={note.title}>
        <h3>{note.title}</h3>
        <p>{note.body}</p>
        <p>{position.x}, {position.y}</p>
        <button onClick={() => removeNote(note.title)}>x</button>
      </div>
    )
  }

export default Note