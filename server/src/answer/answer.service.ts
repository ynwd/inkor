import { getQuestionByTopic } from "../question/question.service";
import { getTopicById } from "../topic/topic.service";
import { getUserById } from "../user/user.service";
import AnswerModel, { MCQAnswer } from "./answer.model";

export async function insertAnswer(answerData: MCQAnswer) {
  return await AnswerModel.create(answerData);
}

export async function bulkInsertAnswer(answerData: MCQAnswer[]) {
  for (let index = 0; index < answerData.length; index++) {
    const answer = answerData[index];
    await insertAnswer(answer);
  }
  return answerData;
}

export async function getAllAnswers() {
  return await AnswerModel.find();
}

export async function getAllAnswersByUserAndTopic(user: string, topic: string) {
  return await AnswerModel.find({ user, topic }).exec();
}

export async function getGradeByUserAndTopic(user: string, topic: string) {
  const answers = await getAllAnswersByUserAndTopic(user, topic);
  const questions = await getQuestionByTopic(topic);

  const trueAnswers = [];
  for (let index = 0; index < answers.length; index++) {
    const a = answers[index];
    const trueAnswer = questions.filter(
      (v) => v.correctOptionIndex === a.answer
    );
    if (trueAnswer && trueAnswer.length > 0) {
      trueAnswers.push(a);
    }
  }

  const u = await getUserById(user);
  const t = await getTopicById(topic);

  return {
    user: {
      id: u?._id,
      username: u?.username,
    },
    topic: {
      id: t?._id,
      topic: t?.name,
    },
    grade: (trueAnswers.length / questions.length) * 100,
  };
}

export async function deleteAllAnswer() {
  return await AnswerModel.deleteMany({});
}
