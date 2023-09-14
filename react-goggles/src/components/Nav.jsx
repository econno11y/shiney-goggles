import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<header>
			<nav className="navbar navbar-expand-md navbar-dark bg-dark">
				<div className="container-fluid">
					<NavLink className="navbar-brand logo" to="/">
						Shiny Goggles
					</NavLink>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="navbar-collapse collapse col"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<NavLink className="nav-link" to="/save">
									Save
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/fetch">
									Fetch
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Nav;
