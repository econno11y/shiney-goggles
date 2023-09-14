import pg from "pg";

const { Pool } = pg;
const pool = new Pool();

pool.on("connect", () => {
	console.log("connected to the db");
});

pool.on("error", (err) => {
	console.log(err);
	process.exit(-1);
});

export default pool;
