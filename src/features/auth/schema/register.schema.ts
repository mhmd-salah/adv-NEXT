import z from "zod";

export const registerSchema = z.object({
  name: z.string().min(3, "name must be at least 3 characters"),
  email: z.string().email("Enter a valid email"),
  password: z.string().min(8, "password must be at least 8 characters"),
});

export type TRegisterForm = z.infer<typeof registerSchema>;
