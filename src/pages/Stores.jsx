// src/pages/Stores.jsx  (второе значение — имя файла в shared/assets без .png)
import PageHero from "../components/PageHero.jsx";
import Img from "../components/Img.jsx";
import Reveal from "../components/Reveal.jsx";

const stores = [
  ["Primark", "primark"], ["H&M", "HM"], ["Mango Outlet", "mango"], ["Next", "next"], ["Sports Direct", "sports-direct"],
  ["F&F", "FF"], ["ASDA George", "asda"], ["Accessorize", "acces"], ["Adidas", "adidas"], ["Amazon", "amazon"],
  ["ASOS", "asos"], ["Boohoo", "boohoo"], ["Crocs", "crocs"], ["eBay", "ebay"], ["Matalan", "mantalan"],
  ["New Look", "look"], ["Puma", "puma"], ["BrandAlley", "brandalley"], ["M&S", "MS"], ["Clarks", "clarks"],
  ["Zara", "zara"], ["Zulily", "zulily"], ["Kids", "kids"], ["Betterware", "betterware"], ["Tucci", "tucci"], ["Minimode", "minimode"],
];

export default function Stores() {
  return (
    <>
      <PageHero title="Популярные магазины" crumb="Популярные магазины" />
      <Reveal>
        <ul className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-3 px-4 sm:grid-cols-3 md:grid-cols-5">
          {stores.map(([title, file]) => (
            <li key={title} className="flex h-28 flex-col items-center justify-center gap-2 rounded-xl border border-line p-3 transition hover:shadow-md">
              <Img name={file} alt={title} className="max-h-12 object-contain" />
              <span className="text-[10px] text-ink/50">{title}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </>
  );
}