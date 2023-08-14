import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import NewNote from '../components/NoteView';
import NoteView from '../components/NoteView';

const URL = "http://localhost:5000";


export default function UpdateNote() {
	const { state } = useLocation()
	const navigate = useNavigate();
	const [noteId, setNoteId] = useState(state.id)


	const updateNote = async (title: string, body: string) => {
		await fetch(
			`${URL}/update/${noteId}`,
			{
				method:"PUT",
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({title, body })
			}
		)
		.then(response => navigate('/'))
		.catch(e => console.error(e))
	}


	return (
		<NoteView 
			handleSave={updateNote}
			title={state.title}
			body={state.body}
		/>
	)
}
