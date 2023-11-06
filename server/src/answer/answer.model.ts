import { Schema } from "mongoose";
import mongoose from "../database";
const ObjectId = Schema.Types.ObjectId;

export interface MCQAnswer {
  user: Object;
  topic: Object;
  question: Object;
  answer: Number;
}

const answerSchema = new Schema<MCQAnswer>({
  user: { type: ObjectId, ref: "User" },
  topic: { type: ObjectId, ref: "Topic" },
  question: { type: ObjectId, ref: "Question" },
  answer: { type: Number, required: true },
});

export default mongoose.model<MCQAnswer>("Answer", answerSchema);
