import { expect } from "chai";
import request from "supertest";
import e from "../main";
import db from "../database";
import { deleteAllTopics, getAllTopics } from "../topic/topic.service";
import { init as initTopic } from "../topic/init";
import { init as initQuestion } from "../question/init";
import { init as initUser } from "../user/init";
import { MCQAnswer } from "./answer.model";
import {
  deleteAllQuestion,
  getAllQuestions,
} from "../question/question.service";
import { deleteAllUser, getAllUsers } from "../user/user.service";
import { deleteAllAnswer } from "./answer.service";
require("dotenv").config();

describe("Answer Handler Tests", () => {
  const dbUrl = process.env.DATABASE_URL ?? "mongodb://localhost/";

  before(async () => {
    await db.connect(dbUrl);
    await deleteAllAnswer();
    await deleteAllQuestion();
    await deleteAllTopics();
    await deleteAllUser();
    await initUser();
    await initTopic();
    await initQuestion();
  });

  it("should create a new answer", async () => {
    const [t] = await getAllTopics();
    const topic = t.id;

    const [q] = await getAllQuestions();
    const question = q.id;

    const [u] = await getAllUsers();
    const user = u.id;

    const answer: MCQAnswer = {
      user,
      topic,
      question,
      answer: 0,
    };

    const response = await request(e).post("/a").send(answer);
    expect(response.status).to.equal(201);
    expect(response.body.answer).to.equal(0);
    expect(response.body.question).to.equal(question);
    expect(response.body).to.have.property("_id");
  });
});
