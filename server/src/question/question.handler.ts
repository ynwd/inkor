import { Request, Response } from "express";
import {
  deleteQuestion,
  getAllQuestions,
  getQuestionById,
  getQuestionByTopic,
  insertQuestion,
  updateQuestion,
} from "./question.service";

export async function insert(req: Request, res: Response) {
  try {
    const question = await insertQuestion(req.body);
    res.status(201).json(question);
  } catch (err) {
    res.status(500).json({ error: "Error creating question" });
  }
}

export async function getAll(req: Request, res: Response) {
  const questions = await getAllQuestions();
  res.json(questions);
}

export async function getById(req: Request, res: Response) {
  const questionId = req.params.id;
  const question = await getQuestionById(questionId);
  if (question) {
    res.json(question);
  } else {
    res.status(404).json({ error: "Question not found" });
  }
}

export async function getByTopic(req: Request, res: Response) {
  const topicId = req.params.topic;
  const question = await getQuestionByTopic(topicId);
  if (question) {
    res.json(question);
  } else {
    res.status(404).json({ error: "Question not found" });
  }
}

export async function update(req: Request, res: Response) {
  const questionId = req.params.id;
  try {
    const updatedQuestion = await updateQuestion(questionId, req.body);
    res.json(updatedQuestion);
  } catch (err) {
    res.status(500).json({ error: "Error updating question" });
  }
}

export async function remove(req: Request, res: Response) {
  const questionId = req.params.id;
  const deletedQuestion = await deleteQuestion(questionId);
  if (deletedQuestion) {
    res.json(deletedQuestion);
  } else {
    res.status(404).json({ error: "Question not found" });
  }
}
