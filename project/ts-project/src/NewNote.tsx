import React from 'react'
import FormNote from './FormNote'
import { NoteData } from './App';

type NewNoteProps = {
    onSubmit: (data: NoteData) => void
}

const NewNote = ({ onSubmit}: NewNoteProps) => {
  return (
    <div>
        <h1>New Note</h1>
        <FormNote onSubmit={onSubmit}/>
    </div>
  )
}

export default NewNote