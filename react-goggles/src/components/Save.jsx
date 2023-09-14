import React, { useState } from "react";

const Save = ({ users }) => {
	const [addedUsers, setAddedUsers] = useState([]);
	const [alreadyExistingUsers, setAlreadyExistingUsers] = useState([]);

	const submitUsers = async () => {
		const usersToAdd = users?.map((user) => ({
			user: user.id,
			name: user.name,
			email: user.email,
			phone: user.phone,
			company: user.company.name,
		}));

		const url = "http://localhost:8000/api/users/?bulk=true";
		const fetchOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(usersToAdd),
		};
		const response = await fetch(url, fetchOptions);
		if (response.ok) {
			const data = await response.json();
			setAddedUsers(data.addedUsers);
			setAlreadyExistingUsers(data.alreadyExistingUsers);
		} else {
			console.log(response.statusText);
		}
	};

	return (
		<>
			<h1 className="button-container">
				<button
					disabled={!users.length}
					className="btn btn-dark centered-button"
					onClick={submitUsers}
				>
					Save
				</button>
			</h1>
			<div className="added-users">
				<div>
					<h2>Added users</h2>
					<ul>
						{addedUsers?.map((user) => (
							<li key={user.id}>{user.name}</li>
						))}
					</ul>
				</div>
				<div>
					<h2>Already existing users</h2>
					<ul>
						{alreadyExistingUsers?.map((user) => (
							<li key={user.id}>{user.name}</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Save;
