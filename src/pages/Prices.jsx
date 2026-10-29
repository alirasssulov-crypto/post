// src/pages/Prices.jsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";
import Img from "../components/Img.jsx";

const calcSchema = z.object({
  country: z.string().min(1, "Выберите страну"),
  city: z.string().min(2, "Введите город"),
  zip: z.string().regex(/^\d{5,6}$/, "Индекс — 5–6 цифр"),
  weight: z.coerce.number().positive("Вес больше 0").max(30, "Не более 30 кг"),
  service: z.string().optional(),
});

const cards = [
  ["resurs-1", "Ваш личный адрес для покупок", "На нашем современном автоматизированном складе в безналоговом Делавэре.", "Бесплатно"],
  ["resurs-2", "Объединение нескольких посылок в одну", "Мы часто отправляем несколько посылок одной коробкой — гораздо выгоднее, чем по одной.", "от £10.00"],
  ["resurs-3", "Усиленная упаковка по запросу", "Мы дополнительно упакуем вашу посылку в плёнку и коробку с двойными стенками.", "от £1.25"],
  ["resurs-4", "Хранение входящих посылок 30 дней", "Чем больше срок хранения посылок на складе — тем больше вы сможете собрать.", "Бесплатно"],
];

const delivery = [
  ["Почта России", "10–14 дней", "от £27.00", "£41.99"],
  ["EMS Почта России", "9–12 дней", "от £40.00", "£54.55"],
  ["Почта России мелкие пакеты", "10–14 дней", "от £13.00", "£10.50"],
];

const warehousePairs = [
  ["Консолидация", "£1.00 / 1 пос.", "Заполнение декларации", "£5.00"],
  ["Дополнительная упаковка", "£3.00", "Упаковка хрупких предметов", "£10.00"],
  ["Заполнение декларации", "£1.00", "Разделение заказа", "£2.00"],
];

const warehouseRows = [
  ["Сборка исходящей посылки вне очереди или экспресс-сборка", "Чтобы сэкономить время", "£5.00"],
  ["Фото содержимого входящей посылки", "3 фото за $5 или 10 фото за $8. Можно попросить сфотографировать бирку или подарочный сертификат", "£1.00 за 1 фото"],
  ["Возврат вещей в магазин", "Если вещь нельзя отправить в страну назначения — возврат в магазин для услуги «Виртуальный адрес»", "£10 + почтовые расходы"],
  ["Проверка техники на работоспособность", "Проверка электроники на включение (включаем за счёт или через тесты)", "£10"],
  ["Удаление ценников", "Аккуратно снимем ценники и бирки по вашему запросу", "Бесплатно"],
  ["Дополнительная упаковка", "Подберём упаковку под ваш товар", "По договорённости"],
];

const operators = [
  ["Быстрое оформление покупок в интернет-магазинах", "Вы присылаете ссылки, отправляете нам деньги, и заказ оформляется оператором. Он сделает покупки за вас.", "5% от стоимости товаров, минимум £7 для каждого магазина. Не менее £7 для каждого лота eBay"],
  ["Фото товара по услуге «Покупки с оператором»", "Фото выбранного вами товара, предварительно по услуге «Помощь оператора».", "£3"],
];

// суммы ниже примерные — сверьте с макетом
const insurance = [
  ["Дополнительное страхование", "От 3% от суммы товаров, если посылка превышает лимит"],
  ["Почта России и EMS", "Застраховано на указанную сумму до £50.00"],
  ["Мелкие пакеты", "Застраховано на сумму до £15.00"],
];

const packaging = [
  ["Многослойная плёнка", "£3.00"],
  ["Упаковка в коробку", "£1.25"],
  ["Наклейка «Осторожно, хрупко»", "£0.50"],
  ["Пузырчатая плёнка", "£2.00"],
  ["Коробка «Крепкий груз»", "£5.00"],
  ["Двойные стенки", "£4.00"],
];

function Row({ title, note, price }) {
  return (
    <li className="grid gap-2 border-b border-line py-4 md:grid-cols-[1fr_auto] md:gap-8">
      <div>
        <h3 className="text-xs font-bold">{title}</h3>
        {note && <p className="mt-1 max-w-xl text-[11px] text-ink/50">{note}</p>}
      </div>
      <p className="text-xs font-semibold md:max-w-60 md:text-right">{price}</p>
    </li>
  );
}

function Calculator() {
  const [done, setDone] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(calcSchema),
    defaultValues: { country: "Россия", city: "Москва", zip: "", weight: "0.5", service: "" },
  });
  const line = "mt-1 w-full border-b border-ink/30 bg-transparent py-2 text-sm outline-none focus:border-blue";
  const err = (k) => errors[k] && <span className="block text-[11px] text-red-500">{errors[k].message}</span>;

  const onSubmit = (d) => {
    console.log(d); // TODO: запрос к API расчёта
    setDone(`${d.weight} кг → ${d.city}, ${d.zip}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-8">
      <div className="grid gap-4 md:grid-cols-5">
        <label className="text-[11px] font-semibold">Страна
          <select {...register("country")} className={line}>
            <option>Россия</option><option>Казахстан</option><option>Беларусь</option>
          </select>
          {err("country")}
        </label>
        <label className="text-[11px] font-semibold">Город
          <input {...register("city")} className={line} />
          {err("city")}
        </label>
        <label className="text-[11px] font-semibold">Индекс
          <input {...register("zip")} placeholder="Введите индекс" className={line} />
          {err("zip")}
        </label>
        <label className="text-[11px] font-semibold">Вес посылки, кг
          <input {...register("weight")} inputMode="decimal" className={line} />
          {err("weight")}
        </label>
        <label className="text-[11px] font-semibold">Дополнительные услуги
          <select {...register("service")} className={line}>
            <option value="">Выберите услугу</option>
            <option>Консолидация</option>
            <option>Усиленная упаковка</option>
            <option>Фото содержимого</option>
            <option>Страхование</option>
          </select>
        </label>
      </div>
      <Button type="submit" className="mt-6">Рассчитать</Button>
      {done && <p className="mt-4 text-xs text-ink/60">Расчёт для: {done}. Результат появится после подключения API.</p>}
    </form>
  );
}

export default function Prices() {
  return (
    <>
      <PageHero title="Услуги доставки из Великобритании" crumb="Цены" />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(([img, title, text, price], i) => (
            <Reveal key={title} delay={i * 80}>
              <li className="flex h-full flex-col">
                <Img name={img} alt="" className="h-40 w-40 object-contain" />
                <h3 className="mt-4 text-sm font-bold">{title}</h3>
                <p className="mt-2 flex-1 text-[11px] leading-relaxed text-ink/60">{text}</p>
                <span className="mt-4 inline-block w-fit rounded bg-blue px-4 py-1.5 text-[11px] font-semibold text-white">{price}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="max-w-sm text-2xl font-bold">Онлайн-калькулятор стоимости доставки товара</h2>
        <p className="mt-3 max-w-xl text-xs text-ink/60">Задайте необходимые параметры посылки, и калькулятор рассчитает приблизительную стоимость доставки вашей посылки из Англии.</p>
        <Calculator />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-bold">Варианты доставки:</h2>
        <ul className="mt-6">
          {delivery.map(([name, days, cost, total]) => (
            <li key={name} className="grid grid-cols-2 items-center gap-2 border-b border-line py-4 text-xs md:grid-cols-[1fr_auto_auto_auto] md:gap-12">
              <span className="font-bold uppercase">{name}</span>
              <span><span className="block text-[10px] text-ink/40">Срок</span>{days}</span>
              <span><span className="block text-[10px] text-ink/40">Стоимость доставки</span>{cost}</span>
              <span><span className="block text-[10px] text-ink/40">Итого</span><b>{total}</b></span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-xl font-bold">Услуги склада</h2>
        <ul className="mt-6 grid gap-x-12 md:grid-cols-2">
          {warehousePairs.flatMap(([a, ap, b, bp]) => [
            <Row key={a + ap} title={a} price={ap} />,
            <Row key={b + bp} title={b} price={bp} />,
          ])}
        </ul>
        <ul>
          {warehouseRows.map(([t, n, p]) => <Row key={t} title={t} note={n} price={p} />)}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-xl font-bold">Покупки с операторами Okeypost.com</h2>
        <ul className="mt-6">
          {operators.map(([t, n, p]) => <Row key={t} title={t} note={n} price={p} />)}
        </ul>
      </section>

      <section className="mx-auto mt-8 flex max-w-6xl items-center gap-6 rounded-3xl bg-linear-to-r from-purple to-blue px-6 py-8 text-white">
        <Img name="Иллюстрация" className="hidden h-36 md:block" />
        <form onSubmit={(e) => e.preventDefault()} className="w-full">
          <h2 className="max-w-lg text-sm font-bold">
            Попробуйте заказывать с оператором прямо сейчас. Пришлите ссылку на товар, его купят и доставят на наш склад в кратчайшие сроки.
          </h2>
          <input placeholder="Вставьте ссылку на товар" aria-label="Ссылка на товар"
            className="mt-4 w-full max-w-md border-b border-white/50 bg-transparent py-2 text-xs outline-none placeholder:text-white/60 focus:border-white" />
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <Button type="submit">Отправить</Button>
            <p className="max-w-xs text-[10px] opacity-70">Нажимая на кнопку, вы подтверждаете согласие на обработку персональных данных.</p>
          </div>
        </form>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-bold">Страхование</h2>
        <ul className="mt-6">
          {insurance.map(([t, p]) => <Row key={t} title={t} price={p} />)}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8">
        <h2 className="text-xl font-bold">Дополнительная упаковка</h2>
        <ul className="mt-6 grid gap-x-12 md:grid-cols-2">
          {packaging.map(([t, p]) => <Row key={t} title={t} price={p} />)}
        </ul>
      </section>
    </>
  );
}
