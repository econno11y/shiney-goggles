import { faArrowRight, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import UserTable from "./UserTable";

const Fetch = () => {
	const [users, setUsers] = useState([]);

	const fetchUsers = async () => {
		const url = "http://localhost:8000/api/users/";
		const response = await fetch(url);
		if (!response.ok) throw new Error(response.statusText);
		const data = await response.json();
		setUsers(data.users);
	};

	return (
		<>
			<div className="do-something">
				<p className={"mb-0"}>Click here</p>
				<FontAwesomeIcon icon={faArrowRight} />
				<FontAwesomeIcon
					icon={faDatabase}
					className="logo"
					onClick={fetchUsers}
				/>
			</div>
			<UserTable users={users} />
		</>
	);
};

export default Fetch;
