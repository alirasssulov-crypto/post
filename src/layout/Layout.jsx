// src/layout/Layout.jsx
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import CtaBanner from "../components/CtaBanner.jsx";
import AuthModal from "../components/AuthModal.jsx";

export default function Layout() {
  const [auth, setAuth] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header onAuth={() => setAuth(true)} />
      <main><Outlet /></main>
      <CtaBanner />
      <Footer />
      <AuthModal open={auth} onClose={() => setAuth(false)} />
    </>
  );
}