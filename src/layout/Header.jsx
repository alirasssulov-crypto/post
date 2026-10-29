import { Link, NavLink } from "react-router-dom";
import Button from "../components/Button.jsx";

const nav = [["Как покупать", "/how"], ["Распродажи", "/sales"], ["Цены", "/prices"], ["Помощь", "/faq"], ["Бонусы", "/partner"], ["Блог", "/blog"], ["Магазины", "/stores"]];

export default function Header({ onAuth }) {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
      <Link to="/" className="text-lg font-extrabold text-purple">OkeyPost</Link>
      <nav className="hidden gap-6 text-xs font-semibold lg:flex">
        {nav.map(([t, to]) => (
          <NavLink key={t} to={to} end className={({ isActive }) => `transition hover:text-blue ${isActive ? "text-blue" : ""}`}>{t}</NavLink>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <button onClick={onAuth} className="text-xs font-semibold">Вход</button>
        <Button onClick={onAuth} className="px-4 py-2 text-xs">Получить адрес</Button>
      </div>
    </header>
  );
}
