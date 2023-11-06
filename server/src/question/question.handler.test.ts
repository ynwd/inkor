import { expect } from "chai";
import request from "supertest";
import e, { server } from "../main";
import db from "../database";
import { deleteAllTopics, getAllTopics } from "../topic/topic.service";
import { deleteAllAnswer } from "../answer/answer.service";
import { deleteAllQuestion } from "./question.service";
import { deleteAllUser } from "../user/user.service";
require("dotenv").config();

describe("Question Handler Tests", () => {
  let questionId: string;
  let topicId: string;
  const dbUrl = process.env.DATABASE_URL ?? "mongodb://localhost/";

  before(async () => {
    await db.connect(dbUrl);
  });

  after(async () => {
    await deleteAllAnswer();
    await deleteAllQuestion();
    await deleteAllTopics();
    await deleteAllUser();
  });

  it("should create a new question", async () => {
    const [res] = await getAllTopics();
    const topic = res.id;
    const questionData = {
      topic,
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin"],
      correctOptionIndex: 0,
    };

    const response = await request(e).post("/q").send(questionData);

    expect(response.status).to.equal(201);
    expect(response.body).to.have.property("_id");
    questionId = response.body._id;
    topicId = response.body.topic;
  });

  it("should get all questions", async () => {
    const response = await request(e).get("/q");

    expect(response.status).to.equal(200);
    expect(response.body).to.be.an("array");
  });

  it("should get a question by ID", async () => {
    const response = await request(e).get(`/q/${questionId}`);
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property("_id", questionId);
  });

  it("should get a question by topic", async () => {
    const response = await request(e).get(`/q/topic/${topicId}`);
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an("array");
  });

  it("should update a question by ID", async () => {
    const updatedQuestionData = {
      question: "What is the capital of Italy?",
    };

    const response = await request(e)
      .put(`/q/${questionId}`)
      .send(updatedQuestionData);

    expect(response.status).to.equal(200);
    expect(response.body).to.have.property(
      "question",
      updatedQuestionData.question
    );
  });

  it("should delete a question by ID", async () => {
    const response = await request(e).delete(`/q/${questionId}`);

    expect(response.status).to.equal(200);
    expect(response.body).to.have.property("_id", questionId);
  });
});
