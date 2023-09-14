import cors from "cors";
import express from "express";
import userRoutes from "./server/routes/user.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);

export default app;
