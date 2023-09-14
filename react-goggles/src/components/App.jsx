import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../App.css";
import Fetch from "./Fetch";
import Home from "./Home";
import Nav from "./Nav";
import Save from "./Save";

const App = () => {
	const [users, setUsers] = useState([]);

	const fetchUsers = async () => {
		const response = await fetch("https://jsonplaceholder.typicode.com/users");
		if (!response.ok) throw new Error(response.statusText);
		const users = await response.json();
		setUsers(users);
	};

	return (
		<BrowserRouter>
			<Nav />
			<main className="container">
				<Routes>
					<Route
						path="/"
						element={<Home users={users} getUsers={fetchUsers} />}
					/>
					<Route path="/save" element={<Save users={users} />} />
					<Route path="/fetch" element={<Fetch />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
};

export default App;
