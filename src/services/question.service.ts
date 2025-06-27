import { Question } from "../models/question";

export class QuestionService {
  static getQuestion = async (page: number, limit: number) => {
    const skip = (page - 1) * limit;
    const data = await Question.find().skip(skip).limit(limit);
    const total = await Question.countDocuments();
    return { data, total, page, pages: Math.ceil(total / limit) };
  };
}
