import express from "express";
import { getAll, getById, getByName, insert } from "./topic.handler";

const r = express.Router();

r.post("/topic", insert);
r.get("/topic", getAll);
r.get("/topic/:id", getById);
r.get("/topic/name/:name", getByName);

export { r as topicRoutes };
