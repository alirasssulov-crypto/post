import { Link } from "react-router-dom";
const cols = {
  "О компании": ["Услуги", "Цены", "Отзывы", "Контакты", "Вакансии"],
  "Полезное": ["Как работает наш сервис", "Как покупать с оператором", "Ответы на частые вопросы", "Популярные магазины", "Чёрный список магазинов"],
  "Спецпроекты": ["10% на первую доставку", "Скидки для постоянных клиентов", "Реферальная программа"],
};
export default function Footer() {
  return (
    <footer className="mx-auto mt-12 max-w-6xl px-4 pb-8">
      <div className="grid gap-8 md:grid-cols-4">
        <Link to="/" className="text-lg font-extrabold text-purple">OkeyPost</Link>
        {Object.entries(cols).map(([h, items]) => (
          <div key={h}>
            <h3 className="text-xs font-bold">{h}</h3>
            <ul className="mt-3 space-y-2 text-xs text-ink/60">{items.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>
      <p className="mt-10 text-center text-[11px] text-ink/40">© 2021 Okeypost. Все права защищены</p>
    </footer>
  );
}
