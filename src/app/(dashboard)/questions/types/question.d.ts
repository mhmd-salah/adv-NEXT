import z from "zod";
import { questionsSchema } from "../schemes/question.schema";

export type QuestionsFormValues = z.infer<typeof questionsSchema>