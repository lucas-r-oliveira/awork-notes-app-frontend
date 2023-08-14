import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const URL = "http://localhost:5000";


export default function UpdateNote() {
	const { state } = useLocation()
	const navigate = useNavigate();
	const [noteId, setNoteId] = useState(state.id)
	const [noteTitle, setNoteTitle] = useState(state.title);
	const [noteBody, setNoteBody] = useState(state.body);


	const handleTitleChange = (event: any) => {
		setNoteTitle(event.target.value);
	}

	const handleBodyChange = (event: any) => {
		setNoteBody(event.target.value);
	}

	const updateNote = async () => {
		await fetch(
			`${URL}/update/${noteId}`,
			{
				method:"PUT",
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({title: noteTitle, body: noteBody})
			}
		)
		.then(response => navigate('/'))
		.catch(e => console.error(e))
	}

	return (
		<>
			<div className="flex flex-col gap-2 p-4 bg-white border border-gray-200 rounded-lg shadow break-words">
			<textarea 
					className="text-xl font-bold resize-none border-none focus:outline-none" 
					rows={1} 
					value={noteTitle}
					onChange={handleTitleChange}
				></textarea>

				<textarea 
					id="message" 
					rows={4} 
					className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 resize-none focus:outline-none" 
					onChange={handleBodyChange}
					value={noteBody}
				></textarea>
				<button 
					type="button" 
					className={
						`text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center 
							${!noteTitle || !noteBody ?
								"bg-blue-200"
								:
								"bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br"
							}
						`
					}
					onClick={updateNote}
					disabled={!noteTitle || !noteBody}
				>
					Save
				</button>
			</div>
			
		</>
	)
}
