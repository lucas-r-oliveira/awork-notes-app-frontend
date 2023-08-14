import Note from './Note'

type Props = {
	notes: {
		id: number;
		title: string;
		body: string;
		created_at: string;
	}[],
	deleteNote: (noteId: number) => void,
	sortedAscending: boolean
}

export default function NotesList({notes, deleteNote, sortedAscending}: Props) {
  return (
	<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2'>
		{ notes.sort((a,b) =>{ 
			if(sortedAscending) return a.id - b.id
			else return b.id - a.id
		}).map( note => {
			return (<Note key={note?.id} {...note} created_at={new Date(note.created_at)} deleteNote={deleteNote}/>)
		})}
	</div>
  )
}
