import React from 'react'
import FormNote from './FormNote'
import { NoteData, Tag } from './App';
import { useNote } from './NoteLayout';

type EditNoteProps = {
    onSubmit: (id: string, data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
} 

const EditNote = ({ onSubmit, onAddTag, availableTags}: EditNoteProps) => {
 
    const note = useNote()

  return (
    <div>
        <h1>Edit Note</h1>
        <FormNote
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
         onSubmit={data => onSubmit(note.id, data)}
         onAddTag={onAddTag}
         availableTags={availableTags}
         />
    </div>
  )
}

export default EditNote