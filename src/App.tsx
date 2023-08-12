import { useEffect, useState } from "react";
import Note from "./components/Note";
import NotesList from "./components/NotesList";
import NewNote from "./components/NewNote";

function App() {
	const [notes, setNotes] = useState([
		<Note title="Title1" body="Hello I am note 1"/>,
		<Note title="Title2" body="Hello I am note 2"/>,
		<Note title="Title3" body="Hello I am note 3"/>,
		<Note title="Title4" body="Hello I am note 4"/>
	]) 

	const addNote = (title: string, body: string) => {
		if (title && body) setNotes(prevNotes => [...prevNotes, <Note title={title} body={body}/>])
		//TODO: what happens if there is no title or body? => error
	}

	return (
		<>
			<h1 className="text-3xl font-bold underline p-2">Notes app</h1>
			<div className="py-4">
				<NewNote addNote={addNote}/>

			</div>
			<NotesList>
				{notes}
			</NotesList>
		</>
	);
}

export default App;
