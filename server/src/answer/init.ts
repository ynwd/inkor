import { getAllQuestions } from "../question/question.service";
import { getAllUsers } from "../user/user.service";
import { MCQAnswer } from "./answer.model";
import { insertAnswer } from "./answer.service";

function getRandomNumberFrom0To3() {
  return Math.floor(Math.random() * 4);
}

export async function init() {
  const q = await getAllQuestions();
  const [u] = await getAllUsers();

  const user = u.id;
  for (let index = 0; index < q.length; index++) {
    const question = q[index];

    const answer: MCQAnswer = {
      user,
      topic: question.topic,
      question: question.id,
      // answer: getRandomNumberFrom0To3(),
      answer: 0,
    };
    await insertAnswer(answer);
  }
}
