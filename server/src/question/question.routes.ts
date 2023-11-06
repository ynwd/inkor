import express from "express";
import {
  getAll,
  getById,
  getByTopic,
  insert,
  remove,
  update,
} from "./question.handler";

const r = express.Router();

r.get("/q", getAll);
r.get("/q/:id", getById);
r.get("/q/topic/:topic", getByTopic);
r.post("/q", insert);
r.put("/q/:id", update);
r.delete("/q/:id", remove);

export { r as questionRoutes };
