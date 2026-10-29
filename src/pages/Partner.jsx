import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";
import Img from "../components/Img.jsx";

const perks = [
  ["Дарим скидку 10% вашим друзьям и подписчикам", "На их первую отправленную посылку. Они используют ваш реферальный код."],
  ["Платим по £3 за отправленную посылку", "Платим вам за каждую посылку, отправленную по вашему коду."],
  ["Права на любой вкус", "Записывайте ролики или готовьте рекламные материалы для своей аудитории."],
  ["Выгоды по запросу", "После согласования условий вы получаете индивидуальный процент."],
  ["Начисляем кэшбэк £1 на 1 посылку", "За каждую отправленную посылку — возможность оплатить следующую."],
];

export default function Partner() {
  return (
    <>
      <PageHero title="Бонусы и партнёрская программа" crumb="Бонусы и партнёрская программа">
        <p className="mt-2 text-sm">Платим $3 с каждой отправленной посылки</p>
        <Button className="mt-5">Начать зарабатывать</Button>
      </PageHero>
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-bold">Зарабатывать с нами — проще простого:</h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {perks.map(([t, d], i) => (
            <Reveal key={t} delay={i * 80}>
              <li className="h-full rounded-xl border border-line p-5">
                <h3 className="text-sm font-bold">{t}</h3>
                <p className="mt-2 text-xs text-ink/60">{d}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>
      <section className="mx-auto flex max-w-6xl items-center gap-6 rounded-3xl bg-linear-to-r from-purple to-blue px-6 py-8 text-white">
        <Img src="/images/partner.png" className="hidden h-32 md:block" />
        <div>
          <h2 className="text-xl font-bold">Готовы начать зарабатывать вместе с нами?</h2>
          <Button className="mt-4">Присоединиться</Button>
        </div>
      </section>
    </>
  );
}
