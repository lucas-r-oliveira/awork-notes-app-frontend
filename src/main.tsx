import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, } from "react-router-dom";
import UpdateNote from './pages/UpdateNote.tsx';
import CreateNote from './pages/CreateNote.tsx';

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route
				path="/"
				element={<App />}
				/*loader={async () => {
					await fetch(`${URL}/notes`, {
						method: 'GET',
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json'
						},
					})
					.then(response => response.json())
				}}*/ //TODO:
			>

			</Route>
			<Route
				path="/:id"
				element={<UpdateNote />}
			>
			</Route>
			<Route
				path="/new"
				element={<CreateNote />}
			>	
			</Route>
		</>
		
	)
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
		<RouterProvider router={router} />
  </React.StrictMode>,
)
