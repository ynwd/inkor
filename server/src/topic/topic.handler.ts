import { Request, Response } from "express";
import {
  getAllTopics,
  getTopicById,
  getTopicByName,
  insertTopic,
} from "./topic.service";

export async function insert(req: Request, res: Response) {
  try {
    const question = await insertTopic(req.body);
    res.status(201).json(question);
  } catch (err) {
    res.status(500).json({ error: "Error creating answer" });
  }
}

export async function getAll(_req: Request, res: Response) {
  const topics = await getAllTopics();
  res.json(topics);
}

export async function getById(req: Request, res: Response) {
  const topicId = req.params.id;
  const topic = await getTopicById(topicId);
  if (topic) {
    res.json(topic);
  } else {
    res.status(404).json({ error: "Topic not found" });
  }
}

export async function getByName(req: Request, res: Response) {
  const name = req.params.name;
  const topic = await getTopicByName(name);
  if (topic) {
    res.json(topic);
  } else {
    res.status(404).json({ error: "Topic not found" });
  }
}
