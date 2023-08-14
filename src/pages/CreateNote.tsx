import React, {useState} from 'react'
import NoteView from '../components/NoteView'
import { useNavigate } from 'react-router-dom';
//<NewNote addNote={addNote} newNoteClicked={newNoteClicked} setNewNoteClicked={setNewNoteClicked}/>

const URL = "http://localhost:5000";

export default function CreateNote() {
	const navigate = useNavigate()

	//const [noteTitle, setNoteTitle] = useState('');
	//const [noteBody, setNoteBody] = useState('');



	const addNote = async (title: string, body: string) => {
		console.log(title, body)
		//if (title && body) {
			await fetch(`${URL}/create`, {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ title, body })
			})
			.then(response => navigate('/'))
			.catch(e => console.error(e))
		//}
	}
	return (
		<NoteView 
			handleSave={addNote} 
			title={null}
			body={null}
		/>
	)
}
