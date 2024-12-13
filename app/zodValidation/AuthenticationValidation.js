import { z } from "zod";

export const registerZod = z
  .object({
    username: z
      .string({ message: "Username accept only string" })

      .min(4, { message: "Username must be up to 4 length" }),

    email: z.string().email({ message: "Please provide a valid email" }),
    password: z.string().min(5, { message: "Password is too short" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const loginZod = z.object({
  email: z.string().email({ message: "Please provide a valid email" }),
  password: z.string().min(5, { message: "Password is too short" }),
});

export const newPasswordZod = z
  .object({
    password: z.string().min(5, { message: "Password is too short" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
