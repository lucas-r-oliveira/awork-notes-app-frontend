import { BiTrash } from 'react-icons/bi';
import { Link } from "react-router-dom";

type NoteProps = {
	id: number,
	title: string,
	body: string,
	createdAt: any, //FIXME:
	deleteNote: (noteId: number) => void

}

export default function Note({id, title, body, createdAt, deleteNote }: NoteProps) {
	return (
		<Link to={`${id}`} state={{id, title, body, createdAt}} className="flex flex-col gap-1 p-4 bg-white border border-gray-200 rounded-lg shadow break-words hover:bg-gray-100" >

			<h2 className="text-xl font-bold">{title}</h2>
			<span className="text-md py-3">{body}</span>
			<div className="text-md flex flex-row justify-between align-middle">
				<button type='button' onClick={() => deleteNote(id)}>
					<BiTrash className="hover:text-red-500"/>
				</button>
			</div>
		</Link>
	);
}