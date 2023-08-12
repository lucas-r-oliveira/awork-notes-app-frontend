import { useState } from "react";
import Note from "./components/Note";
import NotesList from "./components/NotesList";

function App() {
	const [notes, setNotes] = useState([
		<Note title="Title1" body="Hello I am note 1"/>,
		<Note title="Title2" body="Hello I am note 2"/>,
		<Note title="Title3" body="Hello I am note 3"/>,
		<Note title="Title4" body="Hello I am note 4"/>
	])
	return (
		<>
			<h1 className="text-3xl font-bold underline p-2">Notes app</h1>

			<NotesList>
				{notes}
			</NotesList>
		</>
	);
}

export default App;
