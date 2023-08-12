import React, { ReactNode } from 'react'

type Props = {
	children: ReactNode[]
}

export default function NotesList({children}: Props) {
  return (
	<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2'>
		{children}
	</div>
  )
}
