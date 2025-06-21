import { Question } from "../models/question";

export class QuestionService {
  static getQuestion = async () => {
    const data = await Question.find();
    return data;
  };
}
