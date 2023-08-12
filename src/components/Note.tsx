type NoteProps = {
	title: string,
	body: string,
}

export default function Note({title, body}: NoteProps) {
	return (
		<div className="flex flex-col gap-1 p-4 bg-white border border-gray-200 rounded-lg shadow break-words">

			<h2 className="text-xl font-bold">{title}</h2>
			<span className="text-md py-3">{body}</span>
			<div className="text-sm flex flex-row ">Footer</div>
		</div>
	);
}