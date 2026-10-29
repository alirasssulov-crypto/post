// src/pages/HowToBuy.jsx
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";
import Img from "../components/Img.jsx";

const steps = [
  ["ili-1", "Получаем адрес для покупок в магазинах Великобритании",
    "Многие английские магазины не доставляют в Россию. После регистрации вы получите личный адрес на нашем складе в UK и сможете указывать его при оформлении заказа."],
  ["ili-2", "Идём за покупками в онлайн-магазины",
    "Выбирайте товары в любых магазинах Великобритании и оплачивайте их картой. Оформить покупку можно самостоятельно или с помощью оператора."],
  ["ili-3", "Следим за перемещением посылок до склада",
    "После оформления заказа магазин присылает трек-номер. Посылка приходит на склад в течение нескольких дней, мы сообщим о её прибытии."],
  ["ili-4", "Оплачиваем доставку, и покупки отправляются домой",
    "Мы сообщим, когда ваши покупки поступят на склад. Вы можете объединить посылки и отправить всё одной посылкой. До 30 дней покупки хранятся бесплатно."],
  ["ili-5", "Получаем посылку и спешим сделать новый заказ",
    "Примерно через 2 недели посылка приедет к вам домой. Получайте покупки и радуйтесь!"],
];

export default function HowToBuy() {
  return (
    <>
      <PageHero title="Научим покупать в Великобритании!" crumb="Как покупать">
        <p className="mt-2 text-sm">и экономить до 70%</p>
        <Button className="mt-5">Получить адрес в UK</Button>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold">Покупать в Великобритании очень просто</h2>
        <p className="mt-3 max-w-2xl text-xs text-ink/60">
          Английские магазины не доставляют в Россию, но это не проблема. С OkeyPost можно покупать по лучшим ценам и экономить на доставке.
        </p>
        <ol className="mt-10 space-y-12">
          {steps.map(([img, title, text], i) => (
            <Reveal key={img}>
              <li className="flex flex-col gap-6 md:flex-row md:items-start">
                <Img name={img} className="w-40 shrink-0 md:w-48" />
                <span className="text-4xl font-light text-green">0{i + 1}</span>
                <div className="max-w-xl">
                  <h3 className="text-sm font-bold">{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink/60">{text}</p>
                  {i === 1 && <Link to="/stores" className="mt-2 inline-block text-xs text-green">Что покупать можно →</Link>}
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
        <Button className="mt-12">Получить адрес в UK</Button>
      </section>
    </>
  );
}