import { model, Schema } from "mongoose";

const questionSchema = new Schema({
  text: { type: String },
  types: { type: String },
});

export const Question = model("Question", questionSchema);
