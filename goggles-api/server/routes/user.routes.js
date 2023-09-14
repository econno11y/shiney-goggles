import express from "express";
import { createUser, getUsers, getUser } from "../controllers/user.controller.js";

const router = express.Router();
router.get("/", getUsers);
router.post("/", createUser);
router.get("/:id", getUser);

export default router;
