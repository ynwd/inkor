import { Schema } from "mongoose";
import mongoose from "../database";

export interface Topic {
  name: string;
}

const topicSchema = new Schema<Topic>({
  name: { type: String, required: true, unique: true },
});

export default mongoose.model<Topic>("Topic", topicSchema);
