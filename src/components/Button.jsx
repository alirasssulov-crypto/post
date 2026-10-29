export default function Button({ children, className = "", ...p }) {
  return (
    <button {...p} className={`inline-flex items-center justify-center rounded-full bg-green px-6 py-2.5 text-sm font-semibold text-white transition hover:brightness-95 active:scale-95 disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green ${className}`}>
      {children}
    </button>
  );
}
