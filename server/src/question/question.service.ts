import QuestionModel, { MCQQuestion } from "./question.model";

export async function insertQuestion(questionData: MCQQuestion) {
  return await QuestionModel.create(questionData);
}

export async function getAllQuestions() {
  return await QuestionModel.find();
}

export async function getQuestionById(questionId: string) {
  return await QuestionModel.findById(questionId);
}

export async function getQuestionByTopic(topic: string) {
  return await QuestionModel.find({ topic }).exec();
}

export async function updateQuestion(
  questionId: string,
  updatedData: MCQQuestion
) {
  return await QuestionModel.findByIdAndUpdate(questionId, updatedData, {
    new: true,
  });
}

export async function deleteQuestion(questionId: string) {
  return await QuestionModel.findByIdAndDelete(questionId);
}

export async function deleteAllQuestion() {
  return await QuestionModel.deleteMany({});
}
