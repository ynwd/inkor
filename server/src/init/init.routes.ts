import express from "express";

import { initAll as initQuestion } from "../question/init";
import { init as initAnswer } from "../answer/init";
import { deleteAllAnswer } from "../answer/answer.service";
import { deleteAllQuestion } from "../question/question.service";
import { deleteAllTopics } from "../topic/topic.service";
import { deleteAllUser } from "../user/user.service";

const r = express.Router();

r.get("/", async (_req, res) => {
  res.json({ message: "Multiple Choice API V1", status: true });
});

r.get("/init", async (_req, res) => {
  await deleteAllAnswer();
  await deleteAllQuestion();
  await deleteAllTopics();
  await deleteAllUser();
  await initQuestion();
  await initAnswer();
  res.json({ message: "Initiate data", status: true });
});

export { r as initRoutes };
