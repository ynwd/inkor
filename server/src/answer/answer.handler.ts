import { Request, Response } from "express";
import {
  insertAnswer as insert,
  getAllAnswers as getAll,
  getAllAnswersByUserAndTopic as getAnswerByUserTopic,
  getGradeByUserAndTopic as getGrade,
  bulkInsertAnswer,
} from "./answer.service";

export async function insertAnswer(req: Request, res: Response) {
  try {
    const question = await insert(req.body);
    res.status(201).json(question);
  } catch (err) {
    res.status(500).json({ error: "Error creating answer" });
  }
}

export async function bulkInsert(req: Request, res: Response) {
  try {
    const b = req.body;
    const question = await bulkInsertAnswer(b.data);
    res.status(201).json(question);
  } catch (err) {
    res.status(500).json({ error: "Error creating answer" });
  }
}

export async function getAllAnswers(req: Request, res: Response) {
  const questions = await getAll();
  res.json(questions);
}

export async function getGradeByUserAndTopic(req: Request, res: Response) {
  const userId = req.params.user;
  const topicId = req.params.topic;
  const grade = await getGrade(userId, topicId);
  res.json(grade);
}

export async function getAllAnswersByUserAndTopic(req: Request, res: Response) {
  const userId = req.params.user;
  const topicId = req.params.topic;
  const questions = await getAnswerByUserTopic(userId, topicId);
  res.json(questions);
}
