import { z } from "zod";

const phone = z.string().regex(/^\+?\d{10,15}$/, "Введите номер в формате +79991234567");
const email = z.string().email("Введите корректный email");

export const loginSchema = z.object({
  phone, email,
  password: z.string().min(6, "Минимум 6 символов"),
});
export const smsSchema = z.object({ code: z.string().regex(/^\d{4,6}$/, "Код состоит из 4–6 цифр") });
export const registerSchema = z.object({
  name: z.string().min(2, "Введите имя"),
  surname: z.string().min(2, "Введите фамилию"),
  email,
});
export const restoreSchema = z.object({ email });
export const calcSchema = z.object({
  country: z.string().min(1, "Выберите страну"),
  city: z.string().min(2, "Введите город"),
  weight: z.coerce.number({ invalid_type_error: "Введите вес" }).positive("Вес больше 0").max(30, "Не более 30 кг"),
});
