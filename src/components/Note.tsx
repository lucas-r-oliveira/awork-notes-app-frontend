import { BiTrash } from 'react-icons/bi';
import { Link } from "react-router-dom";

type NoteProps = {
	id: number,
	title: string,
	body: string,
	created_at: Date, 
	deleteNote: (noteId: number) => void

}

export default function Note({id, title, body, created_at, deleteNote }: NoteProps) {
	return (
		<div  className="flex flex-col gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow break-words hover:bg-gray-100" >
		
			<Link to={`${id}`} state={{id, title, body, created_at}} >
				<h2 className="text-xl font-bold">{title}</h2>
				<span className="text-lg py-3">{body}</span>
			</Link>
			<div className="text-md flex flex-row justify-between align-middle">
				<span className='text-sm text-black-700'>{new Date(created_at).toLocaleString('pt-PT')}</span>
				<button type='button' onClick={() => deleteNote(id)}>
					<BiTrash className="hover:text-red-500"/>
				</button>
			</div>
		</div>
	);
}