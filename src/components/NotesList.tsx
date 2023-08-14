import React, { ReactNode } from 'react'
import Note from './Note'

type Props = {
	notes: {
		id: number;
		title: string;
		body: string;
		createdAt: null;
	}[],
	deleteNote: (noteId: number) => void
}

export default function NotesList({notes, deleteNote}: Props) {
  return (
	<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2'>
		{ notes.map(note => <Note {...note} deleteNote={deleteNote}/> )}
	</div>
  )
}
