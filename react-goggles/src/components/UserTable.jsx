const UserTable = ({ users }) => {
	return (
		<table className="table">
			<thead>
				<tr>
					<th>Id</th>
					<th>Name</th>
					<th>Company</th>
					<th>Email</th>
					<th>Phone</th>
				</tr>
			</thead>
			<tbody>
				{users?.map((user) => (
					<tr key={user.id}>
						<th>{user.id}</th>
						<td>{user.name}</td>
						<td>{user.company.name}</td>
						<td>
							<a href={`mailto:${user.email}`}>{user.email}</a>
						</td>
						<td>
							<a href={`tel:+${user.phone}`}>{user.phone}</a>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default UserTable;
