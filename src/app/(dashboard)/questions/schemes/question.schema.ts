import z from "zod";

export const questionsSchema = z.object({
  examId: z.string().nonempty('Exam ID is required'),
  questions: z.array(z.object({
    text: z.string().min(10, 'Question text must be at least 10 characters long'),
    answers: z.array(z.object({
      text: z.string().min(1, 'Answer text must be at least 1 character long'),
      isCorrect: z.boolean().default(false),
    })).nonempty('At least one answer is required'),
  })),
  location: z.tuple([z.string(), z.number()]),
  metadata: z.record(z.union([z.string(), z.number()]), z.union([z.string(), z.number(), z.boolean()]))
})

/*
 Location: Latitude and Longitude
 Backend => [lat, lng]
 */

