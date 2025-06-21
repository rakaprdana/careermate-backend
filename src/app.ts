import dotenv from "dotenv";
import express from "express";
import QuestionRoute from "../src/routes/question.route";
dotenv.config();

const app = express();
app.use(express.json());
app.use("/api/question", QuestionRoute);
export default app;
