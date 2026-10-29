import { Link } from "react-router-dom";
export default function PageHero({ title, crumb, children }) {
  return (
    <section className="mx-auto mt-4 max-w-6xl rounded-3xl bg-linear-to-r from-purple to-blue px-6 py-10 text-white md:px-10">
      <p className="text-xs opacity-70"><Link to="/">Главная</Link> / {crumb ?? title}</p>
      <h1 className="mt-3 text-2xl font-bold md:text-4xl">{title}</h1>
      {children}
    </section>
  );
}
