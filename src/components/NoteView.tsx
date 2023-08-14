import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx'
import { useNavigate } from 'react-router-dom';


/* type Props = {
	addNote: (title: string, body: string) => void
	newNoteClicked: boolean,
	setNewNoteClicked: React.Dispatch<React.SetStateAction<boolean>>
} */
type Props = {
	handleSave: (title: string, body: string) => Promise<void>
	title: string | null,
	body: string | null

}

export default function NoteView({handleSave, title, body}: Props) {
	const navigate = useNavigate()

	const [noteTitle, setNoteTitle] = useState(title ?? '');
	const [noteBody, setNoteBody] = useState(body ?? '');

	const handleTitleChange = (event: any) => {
		setNoteTitle(event.target.value);
	}

	const handleBodyChange = (event: any) => {
		setNoteBody(event.target.value);
	}


	return (
			<div className="flex flex-col gap-2 p-4 bg-white border border-gray-200 rounded-lg shadow break-words">
				<span className='flex flex-row justify-between align-middle'>
					<textarea 
						className="text-xl font-bold resize-none border-none focus:outline-none" 
						rows={1} 
						placeholder='Title'
						onChange={handleTitleChange}
						value={noteTitle? noteTitle: undefined}
					></textarea>
					<button type="button" onClick={() => navigate('/')}><RxCross2 /></button>
				</span>

				<textarea 
					id="message" 
					rows={4} 
					className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 resize-none focus:outline-none" 
					placeholder="Write your note here..."
					onChange={handleBodyChange}	
					value={noteBody? noteBody: undefined}			
				>

				</textarea>

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
					onClick={() => handleSave(noteTitle, noteBody)}
					disabled={!noteTitle || !noteBody}
				>
					Save
				</button>


			</div>
	)
}
