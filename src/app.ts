import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import QuestionRoute from "../src/routes/question.route";
import corsOptions from "./config/cors";
dotenv.config();

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/question", QuestionRoute);
export default app;
