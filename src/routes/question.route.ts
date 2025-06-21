import { Router } from "express";
import { QuestionController } from "../controller/question.controller";

const route = Router();

route.get("/", QuestionController.getQuestion);

export default route;
