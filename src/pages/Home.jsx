// src/pages/Home.jsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { calcSchema } from "../schemas/auth.js";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";
import Img from "../components/Img.jsx";

const cats = ["Одежда", "Электроника", "Аксессуары", "Для детей", "Для спорта", "Косметика"];
const products = [
  { img: "jacket", title: "Columbia Barlow Pass 550 Turbodown Jacket", ru: "7891,46₽", uk: "£80.62", ship: "от £7.79", days: "10 дней", save: "$119.56" },
  // данные второго товара примерные — замените на свои
  { img: "t-shirt", title: "Футболка с принтом", ru: "2490₽", uk: "£19.99", ship: "от £3.50", days: "10 дней", save: "$18.40" },
];
const benefits = [
  ["group-1", "Экономия до 70%"],
  ["group-2", "Только подлинная продукция"],
  ["group-3", "Оперативная доставка"],
  ["group-4", "Огромный выбор товаров"],
];
const options = [
  ["Почта России", "10–14 дней", "от £27.00", "£41.99"],
  ["EMS Почта России", "9–12 дней", "от £40.00", "£54.58"],
  ["Почта России мелкие пакеты", "10–15 дней", "от £13.00", "£10.80"],
];
const four = [
  ["resurs-1", "Вы выбираете товар"],
  ["resurs-2", "Посылки приходят на склад"],
  ["resurs-3", "Отправляем их к вам домой"],
  ["resurs-4", "Забираете свою посылку"],
];
const clients = [
  ["ikonka-1", "Больше не ищем форумы", "Находите нужные магазины в одном месте."],
  ["ikonka-2", "Быстрая обработка посылок", "Заказы обрабатываются в течение суток после прибытия."],
  ["ikonka-3", "SMS-уведомления", "Сообщаем о каждом шаге вашей посылки."],
];

function Profit() {
  const [cat, setCat] = useState(0);
  const [i, setI] = useState(0);
  const p = products[i];
  const other = products[(i + 1) % products.length];
  const go = (d) => setI((i + d + products.length) % products.length);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="max-w-xs text-2xl font-bold">Насколько выгодно покупать?</h2>
      <ul className="mt-6 flex flex-wrap gap-2">
        {cats.map((c, n) => (
          <li key={c}>
            <button onClick={() => setCat(n)}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition ${cat === n ? "border-green bg-green text-white" : "border-line hover:border-green"}`}>
              {c}
            </button>
          </li>
        ))}
      </ul>

      <div key={p.img} className="mt-10 grid animate-pop items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
        <div>
          <h3 className="text-sm font-bold">{p.title}</h3>
          <div className="mt-4 flex items-center gap-3 rounded-xl bg-line/40 p-4">
            <Img name="russia" className="w-10" />
            <div className="text-xs"><p className="text-ink/50">Цена в России:</p><p className="font-bold">{p.ru}</p></div>
          </div>
        </div>
        <div className="mx-auto grid size-56 place-items-center rounded-full bg-line/40">
          <Img name={p.img} alt={p.title} className="max-h-48" />
        </div>
        <div>
          <h3 className="text-sm font-bold">Доставка одежды из Великобритании <span className="text-green">{p.ship}</span></h3>
          <div className="mt-4 flex items-center gap-3 rounded-xl bg-line/40 p-4">
            <Img name="england" className="w-10" />
            <div className="text-xs"><p className="text-ink/50">Цена в UK:</p><p className="font-bold text-green">{p.uk}</p></div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button onClick={() => go(-1)} aria-label="Предыдущий товар" className="flex items-center gap-3 text-green">
          ←<Img name={other.img} className="h-14" />
        </button>
        <p className="text-center text-xs">
          <span className="text-ink/50">Срок доставки примерно {p.days}</span><br />
          <b>Вы экономите до <span className="text-green">{p.save}</span></b>
        </p>
        <button onClick={() => go(1)} aria-label="Следующий товар" className="flex items-center gap-3 text-green">
          <Img name={other.img} className="h-14" />→
        </button>
      </div>
    </section>
  );
}

function Calculator() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(calcSchema) });
  const line = "mt-1 w-full border-b border-ink/30 py-2 text-sm outline-none focus:border-blue";
  return (
    <form onSubmit={handleSubmit((d) => console.log(d))} noValidate className="mt-6 grid gap-4 md:grid-cols-4">
      <label className="text-xs font-semibold">Страна
        <select {...register("country")} className={line}>
          <option value="">Выберите</option>
          <option>Россия</option>
          <option>Казахстан</option>
        </select>
        {errors.country && <span className="block text-red-500">{errors.country.message}</span>}
      </label>
      <label className="text-xs font-semibold">Город
        <input {...register("city")} className={line} />
        {errors.city && <span className="block text-red-500">{errors.city.message}</span>}
      </label>
      <label className="text-xs font-semibold">Вес посылки, кг
        <input {...register("weight")} inputMode="decimal" className={line} />
        {errors.weight && <span className="block text-red-500">{errors.weight.message}</span>}
      </label>
      <Button type="submit" className="self-end">Рассчитать</Button>
    </form>
  );
}

export default function Home() {
  return (
    <>
      <section className="mx-auto mt-2 grid max-w-6xl items-center gap-6 rounded-3xl bg-linear-to-r from-purple to-blue px-6 py-10 text-white md:grid-cols-2 md:px-12">
        <div>
          <h1 className="text-3xl font-extrabold leading-tight md:text-4xl">Доставка товаров из Великобритании в Россию</h1>
          <p className="mt-4 max-w-md text-xs opacity-80">Экономьте до 70% на покупках. Регистрируйтесь в OkeyPost и покупайте за границей без лишних проблем.</p>
          <Button className="mt-6">Получить адрес в UK</Button>
        </div>
        <Img name="hero" alt="Курьер с посылкой" className="mx-auto max-h-80" />
      </section>

      <Profit />

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <ul className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {benefits.map(([img, text]) => (
            <li key={img} className="flex items-center gap-3">
              <Img name={img} className="size-12" />
              <span className="text-xs font-semibold">{text}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto flex max-w-6xl items-center gap-6 rounded-3xl bg-linear-to-r from-purple to-blue px-6 py-8 text-white">
        <Img name="Иллюстрация" className="hidden h-40 md:block" />
        <div>
          <h2 className="max-w-md text-lg font-bold">Поручите нашим мастерам шопинга оформить заказы в английских магазинах и освободите время для более важных дел.</h2>
          <Button className="mt-4">Поручить</Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold">OkeyPost — удобная и быстрая доставка посылок из Великобритании</h2>
        <Calculator />
        <h3 className="mt-12 text-sm font-bold">Варианты доставки:</h3>
        <ul className="mt-4 divide-y divide-line">
          {options.map(([n, days, from, price]) => (
            <li key={n} className="grid grid-cols-2 items-center gap-2 py-4 text-xs md:grid-cols-4">
              <span className="font-bold">{n}</span><span>{days}</span><span>{from}</span><span className="font-semibold">{price}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-6">
        <h2 className="text-2xl font-bold">4 простых шага для ваших покупок в Великобритании</h2>
        <ul className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
          {four.map(([img, text]) => (
            <Reveal key={img}>
              <li className="text-center">
                <Img name={img} className="mx-auto h-36" />
                <p className="mt-3 text-xs font-bold">{text}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="max-w-md text-2xl font-bold">120 000 довольных клиентов в России уже сделали свой выбор</h2>
        <ul className="mt-8 grid gap-8 md:grid-cols-3">
          {clients.map(([img, title, text]) => (
            <Reveal key={img}>
              <li>
                <Img name={img} className="size-14" />
                <h3 className="mt-3 text-sm font-bold">{title}</h3>
                <p className="mt-1 text-xs text-ink/60">{text}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
          