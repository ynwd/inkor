import { Schema } from "mongoose";
import mongoose from "../database";

export interface User {
  username: string;
}

const userSchema = new Schema<User>({
  username: { type: String, required: true, unique: true },
});

export default mongoose.model<User>("User", userSchema);
