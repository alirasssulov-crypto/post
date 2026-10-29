import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, smsSchema, registerSchema, restoreSchema } from "../schemas/auth.js";
import Button from "./Button.jsx";

const modes = {
  login: { title: "Выполните вход в ваш личный кабинет", schema: loginSchema, submit: "Войти",
    fields: [["phone", "Номер телефона:", "tel"], ["email", "Ваш email:", "email"], ["password", "Ваш пароль:", "password"]] },
  sms: { title: "Введите код из СМС для подтверждения", schema: smsSchema, submit: "Войти",
    fields: [["code", "Код из СМС:", "text"]] },
  register: { title: "Начните совершать покупки в английских магазинах", schema: registerSchema, submit: "Получить адрес в UK",
    fields: [["name", "Имя:", "text"], ["surname", "Фамилия:", "text"], ["email", "Email:", "email"]] },
  restore: { title: "Восстановление пароля", schema: restoreSchema, submit: "Восстановить",
    fields: [["email", "Ваш email:", "email"]] },
};

export default function AuthModal({ open, onClose }) {
  const [mode, setMode] = useState("login");
  const cfg = modes[mode];
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } =
    useForm({ resolver: zodResolver(cfg.schema) });

  useEffect(() => { 
    reset(); 
  }, [mode, reset]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 500)); // TODO: заменить на запрос к API
    console.log(mode, data);
    if (mode === "login") setMode("sms"); else onClose();
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4" onClick={onClose} role="dialog" aria-modal="true">
      <form onSubmit={handleSubmit(onSubmit)} onClick={(e) => e.stopPropagation()} noValidate
        className="relative w-full max-w-sm animate-pop rounded-2xl bg-white p-6 shadow-xl">
        <button type="button" onClick={onClose} aria-label="Закрыть" className="absolute right-4 top-3 text-xl text-ink/50">×</button>
        <h2 className="pr-6 text-lg font-bold">{cfg.title}</h2>
        {cfg.fields.map(([name, label, type]) => (
          <label key={name} className="mt-4 block text-xs font-semibold">
            {label}
            <input type={type} {...register(name)}
              className="mt-1 w-full rounded-lg border border-line px-3 py-2 text-sm outline-none focus:border-blue" />
            {errors[name] && <span className="mt-1 block text-red-500">{errors[name].message}</span>}
          </label>
        ))}
        <div className="mt-4 flex flex-wrap gap-x-3 text-xs text-green">
          {mode === "login" && <>
            <button type="button" onClick={() => setMode("restore")}>Восстановить пароль</button>
            <button type="button" onClick={() => setMode("register")}>Быстрая регистрация</button></>}
          {mode !== "login" && <button type="button" onClick={() => setMode("login")}>Уже зарегистрированы? Выполнить вход</button>}
        </div>
        <Button type="submit" disabled={isSubmitting} className="mt-5">{isSubmitting ? "Отправляем…" : cfg.submit}</Button>
      </form>
    </div>
  );
}
