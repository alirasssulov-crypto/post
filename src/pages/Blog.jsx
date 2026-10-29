// src/pages/Blog.jsx
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import Img from "../components/Img.jsx";

const covers = ["photo-1", "photo-2", "photo-3", "photo-4", "photo-5", "photo-6", "image-1", "image-2", "image-3", "photo"];

const posts = [
  "Интернет-магазин Urban Outfitters в UK: обзор",
  "Overstock. Брендовые товары по доступным ценам",
  "Skechers с Amazon. Удобная обувь для всей семьи",
  "16 лучших подарков с Амазона в 2021 году",
  "Target — семейный супермаркет с ценами от 300 рублей!",
  "Английский магазин RIPNDIP. Покупаем самовыражение",
  "Nautica. Элитные товары из Англии по низким ценам",
  "Forever 21 — покупаем джинсы за 1 500 рублей",
  "Как купить кроссовки Balenciaga на 30 000 рублей дешевле?",
  "Топ-7 самых дорогих сумок Louis Vuitton",
  "BH Cosmetics Galaxy. Галактика красоты и ухода",
  "«Вансы». Крутые кеды, которые не выйдут из моды никогда!",
];

export default function Blog() {
  return (
    <>
      <PageHero title="Блог" crumb="Блог" />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((title, i) => (
            <Reveal key={title} delay={(i % 3) * 100}>
              <li>
                <article className="group cursor-pointer">
                  <div className="overflow-hidden rounded-xl">
                    <Img name={covers[i % covers.length]} alt={title}
                      className="h-48 w-full object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold">{title}</h3>
                  <p className="mt-3 text-[11px] text-ink/40">22.10.2021 · Читать далее</p>
                </article>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}