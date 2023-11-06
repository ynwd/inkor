import { Schema } from "mongoose";
import mongoose from "../database";
const ObjectId = Schema.Types.ObjectId;

export interface MCQQuestion {
  topic: Object;
  question: string;
  options: string[];
  correctOptionIndex: number;
}

const questionSchema = new Schema<MCQQuestion>({
  topic: { type: ObjectId, ref: "Topic" },
  question: { type: String, required: true },
  options: { type: [String], required: true },
  correctOptionIndex: { type: Number, required: true },
});

export default mongoose.model<MCQQuestion>("Question", questionSchema);
