import url from "url";
import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
	const users = await User.getAll();
	res.status(200).json({ users: users });
};

export const createUser = async (req, res) => {
	const body = req.body;
	console.log("BODY", body);
	const { bulk } = url.parse(req.url, true).query ?? false;

	if (bulk) {
		const addedUsers = [];
		const alreadyExistingUsers = [];
		for (const user of body) {
			if (await User.getByEmail(user.email)) {
				alreadyExistingUsers.push(user);
			} else {
				console.log("USER", user);
				addedUsers.push(await User.create(user));
			}
		}
		return res.status(201).json({
			addedUsers: addedUsers,
			alreadyExistingUsers: alreadyExistingUsers,
		});
	} else {
		const newUser = await User.create(body);
		if (newUser) {
			res.status(201).json({ user: newUser });
		} else {
			res.status(400).json({ error: "User not created" });
		}
	}
};

export const getUser = async (req, res) => {
	const { id } = req.params;
	const user = await User.getUser(id);
	if (user) {
		res.status(200).json({ data: user });
	} else {
		res.status(404).json({ error: "User not found" });
	}
};
