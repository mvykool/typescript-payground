import React from 'react'
import { Outlet, useParams, Navigate, useOutletContext} from 'react-router-dom'
import { Note } from './App'

//types

type NoteLayoutProps = {
    notes: Note[]
}

const NoteLayout = ({ notes }: NoteLayoutProps) => {

    const { id } = useParams()
    const note = notes.find(n => n.id === id)

    if(note == null) return <Navigate to="/" replace/>
  return (
    <Outlet context={note} />
  )
}

export function useNote(){
    return useOutletContext<Note>()
}


export default NoteLayout