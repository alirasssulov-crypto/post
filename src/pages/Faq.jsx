import { useMemo, useState } from "react";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import { faq } from "../data/faq.js";

function Item({ q }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="border-b border-line">
      <button onClick={() => setOpen(!open)} aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-semibold">
        {q}
        <span className={`text-green transition-transform duration-300 ${open ? "rotate-180" : ""}`}>⌄</span>
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"}`}>
        <p className="overflow-hidden text-sm text-ink/60">Ответ скоро появится — подставьте текст из API или макета.</p>
      </div>
    </li>
  );
}

export default function Faq() {
  const [query, setQuery] = useState("");
  const groups = useMemo(() => {
    const s = query.trim().toLowerCase();
    return faq.map((g) => ({ ...g, items: g.items.filter((q) => q.toLowerCase().includes(s)) })).filter((g) => g.items.length);
  }, [query]);

  return (
    <>
      <PageHero title="Отвечаем на вопросы доставки" crumb="Часто задаваемые вопросы" />
      <div className="mx-auto max-w-4xl px-4 py-10">
        <label className="block text-xs font-semibold">
          Поиск в вопросах и ответах:
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Введите свой вопрос..."
            className="mt-2 w-full border-b border-ink/40 bg-transparent py-2 text-sm outline-none focus:border-blue" />
        </label>
        {groups.length === 0 && <p className="mt-10 text-sm text-ink/60">Ничего не найдено. Попробуйте другой запрос.</p>}
        {groups.map((g) => (
          <Reveal key={g.section} className="mt-12">
            <h2 className="text-xl font-bold">{g.section}</h2>
            <ul className="mt-4">{g.items.map((q) => <Item key={q} q={q} />)}</ul>
          </Reveal>
        ))}
      </div>
    </>
  );
}
