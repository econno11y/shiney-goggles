import pool from "../../db.js";

class User {
	constructor({ id, name, email, phone, company }) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.company = company;
	}

	static getAll = async () => {
		const client = await pool.connect();
		try {
			const result = await client.query("SELECT * FROM users");
			return (
				result.rows.length > 0 && result.rows.map((user) => new User(user))
			);
		} catch (err) {
			console.error(err);
			return null;
		} finally {
			client.release();
		}
	};

	static getByEmail = async (email) => {
		const client = await pool.connect();
		try {
			const result = await client.query(
				"SELECT * FROM users WHERE email = $1",
				[email]
			);
			if (result.rows.length > 0) {
				return new User(result.rows[0]);
			}
			return null;
		} catch (err) {
			console.error(err);
			return null;
		} finally {
			client.release();
		}
	};

	static create = async ({ name, email, phone, company }) => {
		console.log("CREATE", name, email, phone, company);
		const client = await pool.connect();
		try {
			const result = await client.query(
				"INSERT INTO users (name, email, phone, company) VALUES ($1, $2, $3, $4) RETURNING *",
				[name, email, phone, company]
			);
			if (result.rows.length > 0) {
				console.log("ROW", result.rows[0]);
				return new User(result.rows[0]);
			}
			return null;
		} catch (err) {
			console.error(err);
			return null;
		} finally {
			client.release();
		}
	};
}

export default User;
