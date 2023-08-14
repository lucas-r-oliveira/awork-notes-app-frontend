import { useEffect, useState } from "react";
import Note from "./components/Note";
import NotesList from "./components/NotesList";
import NewNote from "./components/NoteView";
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import {useNavigate } from 'react-router-dom';



const URL = "http://localhost:5000";
type NoteType = {
	id: number,
	title: string,
	body: string,
	created_at: string,
}

function App() {
	
	const [notes, setNotes] = useState<NoteType[]>([]) 
	const [sortAscending, setSortAscending] = useState(false);
	
	const navigate = useNavigate()

	//const [newNoteClicked, setNewNoteClicked] = useState(false);


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

	/* const addNote = async (title: string, body: string) => {
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
			.then(response => {
				setNotes(prevNotes => [...prevNotes, response])
				setNewNoteClicked(false)
			})
		}
	} */

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
			<div className="py-4 flex flex-row align-middle justify-between">
				<button 
					onClick={() => navigate("/new")} 
					className="border hover:bg-gray-200 text-gray-800 py-2 px-4 rounded inline-flex gap-2 items-center justify-center"
				>
					<AiOutlinePlus />
					<span>New note</span>
				
				</button>
				<button 
					className="border hover:bg-gray-200 text-gray-800 py-2 px-8 rounded inline-flex gap-2 items-center justify-center"
					onClick={() => setSortAscending(prevState => !prevState)}
				>
					{sortAscending ? <BsArrowDown />: <BsArrowUp />}
					Sort
				</button>
			</div>
			<NotesList 
				notes={notes}
				deleteNote={deleteNote}
				sortedAscending={sortAscending}
			/>
		</>
	);
}

export default App;
