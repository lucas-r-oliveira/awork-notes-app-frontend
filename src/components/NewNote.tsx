import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';


type Props = {
	addNote: (title: string, body: string) => void
}

export default function NewNote({addNote}: Props) {
	const [noteClicked, setNoteClicked] = useState(false);

	const [noteTitle, setNoteTitle] = useState('');
	const [noteBody, setNoteBody] = useState('');


	const handleTitleChange = (event: any) => {
		setNoteTitle(event.target.value);
	}

	const handleBodyChange = (event: any) => {
		setNoteBody(event.target.value);
	}



	return (
		noteClicked? 
			<div className="flex flex-col gap-2 p-4 bg-white border border-gray-200 rounded-lg shadow break-words">
				<textarea 
					className="text-xl font-bold resize-none border-none focus:outline-none" 
					rows={1} 
					placeholder='Title'
					onChange={handleTitleChange}
				>
					
				</textarea>

				<textarea 
					id="message" 
					rows={4} 
					className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 resize-none focus:outline-none" 
					placeholder="Write your note here..."
					onChange={handleBodyChange}				
				>

				</textarea>

				<button type="button" 
					className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
					hover:bg-gradient-to-br focus:outline-none 
					font-medium rounded-lg text-sm px-5 py-2.5 text-center"
					onClick={() => addNote(noteTitle, noteBody)}
				>
					Save
				</button>


			</div>
			:
			<button 
				onClick={() => setNoteClicked(true)} 
				className="border hover:bg-gray-200 text-gray-800 py-2 px-4 rounded inline-flex gap-2 items-center justify-center"
			>
				<AiOutlinePlus />
				<span>New note</span>
				
			</button>
	)
}
