import { Response, Request } from "express";
import { QuestionService } from "../services/question.service";
import { responses } from "../constant";
export class QuestionController {
  static getQuestion = async (req: Request, res: Response) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.page as string) || 5;
      const result = await QuestionService.getQuestion(page, limit);

      res.json(result);
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: responses.serverError, error: error });
    }
  };
}
