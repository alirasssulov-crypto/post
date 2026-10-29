// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import HowToBuy from "./pages/HowToBuy.jsx";
import Sales from "./pages/Sales.jsx";
import Blog from "./pages/Blog.jsx";
import Faq from "./pages/Faq.jsx";
import Stores from "./pages/Stores.jsx";
import Partner from "./pages/Partner.jsx";
import Soon from "./pages/Soon.jsx";
import Prices from "./pages/Prices.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="how" element={<HowToBuy />} />
        <Route path="sales" element={<Sales />} />
        <Route path="prices" element={<Prices />} />
        <Route path="blog" element={<Blog />} />
        <Route path="faq" element={<Faq />} />
        <Route path="stores" element={<Stores />} />
        <Route path="partner" element={<Partner />} />
        <Route path="prices" element={<Soon title="Услуги доставки из Великобритании" />} />
        <Route path="*" element={<Soon title="Страница не найдена" />} />
      </Route>
    </Routes>
  );
}