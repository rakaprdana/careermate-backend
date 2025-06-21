import { Response, Request } from "express";
import { QuestionService } from "../services/question.service";
import { responses } from "../constant";
export class QuestionController {
  static getQuestion = async (_: Request, res: Response) => {
    try {
      const question = await QuestionService.getQuestion();
      if (question.length === 0) {
        res.status(404).json({
          success: false,
          message: responses.errorNotFound,
          question,
        });
      }
      res.status(200).json({
        success: true,
        message: responses.successGetItem,
        count: question.length,
        question,
      });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: responses.serverError, error: error });
    }
  };
}
