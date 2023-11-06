import { expect } from "chai";
import request from "supertest";
import e, { server } from "../main";
import db from "../database";
import { deleteAllUser } from "./user.service";
require("dotenv").config();

describe("User Handler Tests", () => {
  const dbUrl = process.env.DATABASE_URL ?? "mongodb://localhost/";
  let userId: any;
  let userName: any;

  before(async () => {
    await db.connect(dbUrl);
  });

  after(async () => {
    await deleteAllUser();
    await db.connection.close();
    server.close();
  });

  it("should create a new user", async () => {
    const response = await request(e).post("/user").send({
      username: "hasan",
    });
    expect(response.status).to.equal(201);
    expect(response.body).to.have.property("_id");
    userId = response.body._id;
    userName = response.body.username;
  });

  it("should get all user", async () => {
    const response = await request(e).get("/user");
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an("array");
  });

  it("should get a user by ID", async () => {
    const response = await request(e).get(`/user/${userId}`);
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property("_id", userId);
  });

  it("should get a user by username", async () => {
    const response = await request(e).get(`/user/username/${userName}`);
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property("_id");
  });
});
