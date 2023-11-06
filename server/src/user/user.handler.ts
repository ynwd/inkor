import { Request, Response } from "express";
import {
  getAllUsers,
  getUserById,
  getUserByUsername,
  insertUser,
} from "./user.service";

export async function insert(req: Request, res: Response) {
  try {
    const user = await insertUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: "Error creating answer" });
  }
}

export async function getAll(_req: Request, res: Response) {
  const users = await getAllUsers();
  res.json(users);
}

export async function getById(req: Request, res: Response) {
  const userId = req.params.id;
  const user = await getUserById(userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
}

export async function getByUsername(req: Request, res: Response) {
  const username = req.params.username;
  const user = await getUserByUsername(username);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
}
