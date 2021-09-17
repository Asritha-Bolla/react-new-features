import React, { useEffect, useReducer } from 'react'
import notesReducer from '../reducers/notesReducer'
import AddNoteForm from './AddNoteForm'
import NoteList from './NoteList'
import NotesContext from '../context/notes-context'

const NoteApp = () => {
    //const [notes, setNotes] = useState([])
    const [notes, dispatch] = useReducer(notesReducer, []) //pass reducer fn and inital state
  
    useEffect(() => {
        //runs only once on initial render
        const notes = JSON.parse(localStorage.getItem('notes'))
        if(notes) {
        //setNotes(notes)
        dispatch({ type: 'POPULATE_NOTES', notes }) //similar to dispatching redux action object
        }
    }, []) 
  
    useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes)) //only runs when notes changes
    }, [notes]) 
  
    //with context just like with redux, we don't have to pass unnecessary props all the way down the component tree to the component which actually needs those values. Instead all the child components of Context Provider will have access to the values defined on the Provider
    //Context provides a way to pass data through the component tree without having to pass props down manually at every level
    //i.e., components are no longer tightly coupled, so they are reusable (YAY!!)
    //Context API prompts a re-render on each update of the state and re-renders all components regardless. Redux however, only re-renders the updated components.
    //Context API: Resourceful and ideal for small applications where state changes are minimal
    //Redux: Perfect for larger applications where there are high-frequency state updates
    return (
      <NotesContext.Provider value={{ notes, dispatch }}>
        <h1>Notes</h1>
        <NoteList />
        <AddNoteForm />
      </NotesContext.Provider>
    )
  }

export default NoteApp