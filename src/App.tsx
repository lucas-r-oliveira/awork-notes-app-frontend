import { useState } from "react";
import Note from "./components/Note";
import NotesList from "./components/NotesList";
import NewNote from "./components/NewNote";

function App() {
	//FIXME: id and createdAt
	const [notes, setNotes] = useState([
		{
			id: 0,
			title: "Title1",
			body: "Hello, I am note 1",
			createdAt: null
		},
		{
			id: 1,
			title: "Title2",
			body: "Hello, I am note 2",
			createdAt: null
		},
		{
			id: 2,
			title: "Title3",
			body: "Hello, I am note 3",
			createdAt: null
		},
		{
			id: 3,
			title: "Title4",
			body: "Hello, I am note 4",
			createdAt: null
		},
	]) 

	const addNote = (title: string, body: string) => {
		//FIXME: id and createdAt
		if (title && body) setNotes(prevNotes => [...prevNotes, {
			id: notes.length,
			title,
			body,
			createdAt: null
		}])
		//TODO: what happens if there is no title or body? => error
	}

	//FIXME: noteId should be a uuid
	const deleteNote = (noteId: number) => {
		setNotes(prevNotes => [...prevNotes.filter(n => n.id !== noteId)])
	}

	return (
		<>
			<h1 className="text-3xl font-bold underline p-2">Notes app</h1>
			<div className="py-4">
				<NewNote addNote={addNote}/>

			</div>
			<NotesList 
				notes={notes}
				deleteNote={deleteNote}
			/>
		</>
	);
}

export default App;
