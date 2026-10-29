export default function CtaBanner() {
  return (
    <section className="mx-auto mt-16 flex max-w-6xl items-center justify-between gap-4 rounded-3xl bg-linear-to-r from-purple to-blue px-6 py-8 text-white md:px-10">
      <h2 className="text-lg font-bold md:text-2xl">Остались вопросы? Спросите нас в соцсетях!</h2>
      <div className="flex gap-3">
        {["WhatsApp", "Viber", "Чат"].map((n) => (
          <a key={n} href="#" aria-label={n} className="grid size-10 place-items-center rounded-full border border-white/70 text-xs transition hover:bg-white/20">{n[0]}</a>
        ))}
      </div>
    </section>
  );
}
