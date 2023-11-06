import mongoose from "mongoose";

require("dotenv").config();
const dbUrl = process.env.DATABASE_URL ?? "mongodb://localhost:27017";
mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("    ✔ Connected to MongoDB");
});

export default mongoose;
