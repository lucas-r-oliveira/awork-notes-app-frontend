import { useEffect, useState } from "react";
import Note from "./components/Note";
import NotesList from "./components/NotesList";
import NewNote from "./components/NewNote";


const URL = "http://localhost:5000";
type NoteType = {
	id: number,
	title: string,
	body: string,
	createdAt: any,
}

function App() {
	
	const [notes, setNotes] = useState<NoteType[]>([]) 

	useEffect(() => {
		const fetchNotes = async () => {
			await fetch(`${URL}/notes`, {
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
			})
			.then(response => response.json())
			.then(response => setNotes(response))
		}
		fetchNotes();
	}, [])

	const addNote = async (title: string, body: string) => {
		if (title && body) {
			await fetch(`${URL}/create`, {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ title, body })
			})
			.then(response => response.json())
			.then(response => setNotes(prevNotes => [...prevNotes, response]))
		}

		//TODO: what happens if there is no title or body? => display error
	}

	const deleteNote = async (noteId: number) => {
		await fetch(`${URL}/delete/${noteId}`, {
			method: 'DELETE',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		})
		.then(response => response.json())
		.then(response => setNotes(prevNotes => [...prevNotes.filter(n => n.id !== response.id)]))
		.catch(e => console.error(e))
	}

	return (
		<>
			<h1 className="text-3xl font-bold p-2">Notes app</h1>
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
