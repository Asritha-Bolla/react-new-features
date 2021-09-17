import React, { useContext } from 'react'
import Note from './Note'
import NotesContext from '../context/notes-context'

const NoteList = () => {

    const { notes } = useContext(NotesContext) //also returns dispatch but we are not destructuring it since it's not needed here

    return notes.map((note) => (
        <Note key={note.title} note={note} />
      )
    )
}

export { NoteList as default }