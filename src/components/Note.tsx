import { BiTrash } from 'react-icons/bi';

type NoteProps = {
	id: number,
	title: string,
	body: string,
	createdAt: any, //FIXME:
	deleteNote: (noteId: number) => void

}

export default function Note({id, title, body, deleteNote }: NoteProps) {
	return (
		<a href='#' className="flex flex-col gap-1 p-4 bg-white border border-gray-200 rounded-lg shadow break-words hover:bg-gray-100" >

			<h2 className="text-xl font-bold">{title}</h2>
			<span className="text-md py-3">{body}</span>
			<div className="text-md flex flex-row justify-between align-middle">
				<button type='button' onClick={() => deleteNote(id)}>
					<BiTrash className="hover:text-red-500"/>
				</button>
			</div>
		</a>
	);
}