export default function Note() {
	return (
		<div className="flex flex-col gap-1 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow break-words">

			<h2 className="text-xl font-bold">Title</h2>
			<span className="text-md py-3">Hello I am a note</span>
			<div className="text-sm flex flex-row ">Footer</div>
		</div>
	);
}