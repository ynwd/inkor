import express from "express";
import { getAll, getById, getByUsername, insert } from "./user.handler";

const r = express.Router();

r.post("/user", insert);
r.get("/user", getAll);
r.get("/user/:id", getById);
r.get("/user/username/:username", getByUsername);

export { r as userRoutes };
