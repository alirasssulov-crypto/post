// src/pages/Sales.jsx
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";
import Img from "../components/Img.jsx";

const sales = [
  ["Abercrombie & Fitch", "background-1", ["Шорты от £3.99", "Мужские вещи: CLEARANCE", "Женские вещи: CLEARANCE"], "Только выкуп с оператором"],
  ["Timberland", "background-2", ["Мужская обувь", "Куртки Tommy Hilfiger", "Распродажа до 40%"], "Только выкуп с оператором"],
  ["Polo Ralph Lauren", "background-3", ["Рубашки от £19.99", "Куртки от £29.99", "Свитера и поло"], "Только выкуп с оператором"],
  ["Hollister Co.", "background-4", ["Шорты от £3.99", "Мужские вещи: CLEARANCE", "Женские вещи: CLEARANCE"], "Только выкуп с оператором"],
  ["Michael Kors", "background-5", ["Новая коллекция!", "Michael Kors x 007 (James Bond)", "HOLIDAY HEAD START"], "В магазин"],
  ["Aymer Sale OFF 5TH", "background-6", ["Black Friday Early Access", "Скидки до 60% OFF", "Shoe Pass, Sorel, UGG, Calvin Klein"], "Только выкуп с оператором"],
  ["Victoria's Secret", "background-7", ["Лосьоны и мисты до £3.99", "3 трусиков за £7.99", "Халаты до £19.99"], "В магазин"],
  ["levi.com", "background-8", ["Джинсы от £29.99", "Скидка 30% на заказы от $100 с кодом TREAT30"], "В магазин"],
  ["UGG® — вход с VPN", "background-9", ["Угги от £99.99", "Ботинки UGG от £109.99", "Распродажа SALE"], "Только выкуп с оператором"],
  ["New Balance", "background-11", ["Вход с VPN", "-30% на некоторые модели", "Бесплатная доставка от $50+"], "Только выкуп с оператором"],
];

export default function Sales() {
  return (
    <>
      <PageHero title="Распродажи" crumb="Распродажи">
        <p className="mt-2 text-sm">ранний доступ к распродажам в магазинах</p>
        <Button className="mt-5">Получить адрес в UK</Button>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="max-w-md text-2xl font-bold">Black Friday Early Access — ранний доступ к распродажам в магазинах Великобритании!</h2>
        <ul className="mt-10 grid gap-8 md:grid-cols-2">
          {sales.map(([name, img, lines, link], i) => (
            <Reveal key={name} delay={(i % 2) * 100}>
              <li className="flex gap-4">
                <Img name={img} alt={name} className="h-44 w-40 shrink-0 rounded-xl object-cover" />
                <div className="text-xs">
                  <h3 className="font-bold">{name}</h3>
                  <ul className="mt-2 space-y-1 text-ink/70">
                    {lines.map((l) => <li key={l}>{l}</li>)}
                  </ul>
                  <a href="#" className="mt-3 inline-block text-green transition hover:underline">{link} →</a>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}