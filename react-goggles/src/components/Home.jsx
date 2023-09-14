import { faArrowRight, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserTable from "./UserTable";

const Home = ({ users, getUsers }) => {
	return (
		<>
			<div className="do-something">
				<p className={"mb-0"}>Click here</p>
				<FontAwesomeIcon icon={faArrowRight} />
				<FontAwesomeIcon icon={faUsers} className="logo" onClick={getUsers} />
			</div>
			<UserTable users={users} />
		</>
	);
};

export default Home;
