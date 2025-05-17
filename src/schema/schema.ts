import { z } from "zod";

export const formSchemaLogin = z.object({
    username: z.string().min(2, {
      message: "نام کاربری معتبر نمی‌باشد",
    }),
    password: z.string().min(2, {
      message: "رمز معتبر نمی‌باشد",
    }),
  });