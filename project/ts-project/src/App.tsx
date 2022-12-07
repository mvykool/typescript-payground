import 'bootstrap/dist/css/bootstrap.min.css'
import { useMemo } from 'react'
import { Container } from 'react-bootstrap'
import {Navigate, Route, Routes } from 'react-router-dom'
import NewNote from './NewNote'
import { useLocalStorage } from './useLocalStorage'
import { v4 as uuidV4} from 'uuid'
import NoteList from './NoteList'
import NoteLayout from './NoteLayout';

//types of note type

export type Note = {
  id: string
} & NoteData

export type RawNote = {
  id: string
} & RawNoteData

export type RawNoteData = {
  title: string
  markdown: string
  tagIds: string[]
}

export type NoteData = {
  title: string
  markdown: string
  tags: Tag[]
}

export type Tag = {
  id: string
  label: string
}

function App() {

  const [ notes, setNotes ] = useLocalStorage<RawNote[]>("NOTES", [])
  const [ tags, setTags ] = useLocalStorage<Tag[]>("TAGS", [])


  const notesWithTags = useMemo (() => {
    return notes.map(note => {
      return { ...note, tags: tags.filter(tag => note.tagIds.includes(tag.id))}
    })
  }, [ notes, tags ])

function onCreateNote({tags, ...data}: NoteData) {
  setNotes(prevNotes => {
    return [...prevNotes, {...data, id: uuidV4(), tagIds: tags.map(tag => tag.id)}]
  })
}


function addTag(tag: Tag){
  setTags(prev => [...prev,tag])
}

return (
    <Container className='my-4'>
     <Routes>
       <Route path='/' element={<NoteList notes={notesWithTags} availableTags={tags} />}/>
       <Route path='/new' element={<NewNote onSubmit={onCreateNote}
        onAddTag={addTag} availableTags={tags}/>}/>
       <Route path='/:id' element={<NoteLayout notes={notesWithTags} />}>
           <Route index element={<h1>Show</h1>} />
           <Route path='edit' element={<h1>Show</h1>}/>
       </Route> 
       <Route path='*' element={<Navigate to={"/"} />}/>
     </Routes>
     </Container>
  )
}

export default App
