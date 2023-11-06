import express from "express";
import cors from "cors";
import { questionRoutes } from "./question/question.routes";
import { answerRoutes } from "./answer/answer.routes";
import { initRoutes } from "./init/init.routes";
import { topicRoutes } from "./topic/topic.routes";
import { userRoutes } from "./user/user.routes";

const e = express();
e.use(cors());

e.use(express.json());
e.use(initRoutes);
e.use(questionRoutes);
e.use(answerRoutes);
e.use(topicRoutes);
e.use(userRoutes);

const port = 3000;
const server = e.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});

export { server };
export default e;
