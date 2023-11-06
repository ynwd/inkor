import express from "express";
import {
  bulkInsert,
  getAllAnswers,
  getAllAnswersByUserAndTopic,
  getGradeByUserAndTopic,
  insertAnswer,
} from "./answer.handler";

const r = express.Router();

r.get("/a", getAllAnswers);
r.get("/a/:user/:topic", getAllAnswersByUserAndTopic);
r.get("/a/:user/:topic/grade", getGradeByUserAndTopic);
r.post("/a", insertAnswer);
r.post("/a/bulk", bulkInsert);

export { r as answerRoutes };
