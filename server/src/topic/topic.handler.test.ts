import { expect } from "chai";
import request from "supertest";
import e from "../main";
import db from "../database";
import { deleteAllTopics } from "../topic/topic.service";
require("dotenv").config();

describe("Topic Handler Tests", () => {
  const dbUrl = process.env.DATABASE_URL ?? "mongodb://localhost/";
  let topicId: any;
  let topicName: any;

  before(async () => {
    await db.connect(dbUrl);
  });

  after(async () => {
    await deleteAllTopics();
  });

  it("should create a new topic", async () => {
    const response = await request(e).post("/topic").send({
      name: "science",
    });
    expect(response.status).to.equal(201);
    expect(response.body).to.have.property("_id");
    topicId = response.body._id;
    topicName = response.body.name;
  });

  it("should get all topics", async () => {
    const response = await request(e).get("/topic");
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an("array");
  });

  it("should get a topic by ID", async () => {
    const response = await request(e).get(`/topic/${topicId}`);
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property("_id", topicId);
  });

  it("should get a topic by name", async () => {
    const response = await request(e).get(`/topic/name/${topicName}`);
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property("_id", topicId);
  });
});
