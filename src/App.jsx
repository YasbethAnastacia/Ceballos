import { Category } from "./assets/ARTICULOS/Category";
import { catalog } from "./catalog";
import { Chatbot } from "./Chatbot";
import { Hero as OriginalHero } from "./legacy/Hero";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { LanguageProvider } from "./Language";
import { useLanguage } from "./useLanguage";
import { site } from "./site.config";
import { Hero } from "./assets/HERO/Hero";
import { Nosotros } from "./assets/NOSOTROS/Nosotros";
import { Galeria } from "./assets/GALERIA/Galeria";
import { Articulos } from "./assets/ARTICULOS/Articulos";
import { Rosarios } from "./assets/ARTICULOS/Rosario";
import { Ubicacion } from "./assets/UBICACION/Ubicacion";
import { Contacto } from "./assets/CONTACTO/Contacto";
function Layout() {
  const {
    pathname
  } = useLocation();
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("ceballos-theme");
      return saved === "dark" || saved === "light" ? saved : site.defaultTheme;
    } catch {
      return site.defaultTheme;
    }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("ceballos-theme", theme);
    } catch {}
  }, [theme]);
  const {
    t,
    whatsapp
  } = useLanguage();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div data-theme={theme} className={`min-h-svh bg-bg text-text transition-colors duration-250 ${theme === "dark" && pathname === "/" ? "pt-0" : "pt-(--navbar-height)"}`}>
      <a className="fixed -top-[100px] left-[15px] z-50 bg-bg p-[15px] focus:top-2.5" href="#main">
        {t("Saltar al contenido", "Skip to content")}
      </a>
      <Routes>
        <Route path="/" element={theme === "dark" ? (
          <div className="bg-black font-serif text-ivory" id="main" tabIndex={-1}>
            <OriginalHero />
          </div>
        ) : (
          <Hero />
        )} />
        <Route path="/nosotros" element={(
          <Nosotros />
        )} />
        <Route path="/articulos" element={(
          <Articulos />
        )} />
        <Route path="/rosarios" element={(
          <Rosarios />
        )} />
        {catalog.filter(category => category.id !== "rosarios").map(category => (
          <Route key={category.id} path={`/${category.id}`}>
            <Route index element={(
              <Category categoryId={category.id} />
            )} />
            <Route path=":groupId" element={(
              <Category categoryId={category.id} />
            )} />
          </Route>
        ))}
        <Route path="/galeria" element={(
          <Galeria />
        )} />
        <Route path="/ubicacion" element={(
          <Ubicacion />
        )} />
        <Route path="/contacto" element={(
          <Contacto />
        )} />
        <Route path="*" element={(
          <main id="main" className="mx-auto max-w-[1440px] min-h-[calc(100svh_-_240px)] px-[6%] pt-[70px] pb-[90px] animate-[enter_.65s_both] max-[600px]:pt-[43px] max-[600px]:pb-[60px]">
            <h1 className="text-[clamp(42px,5.5vw,80px)] leading-[1.06] font-normal tracking-[-1.8px] [&_em]:font-normal [&_em]:text-accent">
              {t("Página no encontrada", "Page not found")}
            </h1>
            <Link className="inline-flex min-h-12 items-center justify-center gap-[13px] rounded-[4px] border border-accent bg-accent px-[23px] py-[17px] font-ui text-xs/[1.4] text-on-accent transition-[transform,filter] duration-250 hover:-translate-y-0.5 hover:brightness-110 [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-[3px] hover:[&_svg]:-translate-y-0.5" to="/">
              {t("Volver al inicio", "Back home")}
            </Link>
          </main>
        )} />
      </Routes>
      <footer className="mx-auto flex max-w-[1440px] items-center justify-between gap-[25px] border-t border-line px-[6%] pt-8 pb-[42px] font-ui text-[11px]/[1.6] text-muted max-[900px]:pb-[90px] max-[600px]:flex-wrap max-[600px]:gap-5 max-[600px]:[&>span]:order-3 max-[600px]:[&>span]:w-full">
        <Link to="/" className="font-serif text-[26px] text-text [&>span]:mt-[7px] [&>span]:block [&>span]:font-ui [&>span]:text-[11px] [&>span]:text-muted">
          Ceballos
          <span>
            {t("Artículos religiosos", "Religious articles")}
          </span>
        </Link>
        <span>
          {"Colima, México · © "}
          {new Date().getFullYear()}
        </span>
        <Link to="/contacto">
          {t("Contacto", "Contact")}
          {" ↗"}
        </Link>
      </footer>
      <Chatbot />
      <a className="fixed right-4 bottom-[max(18px,env(safe-area-inset-bottom))] z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#128C7E] motion-reduce:transform-none motion-reduce:transition-none min-[601px]:right-6 min-[601px]:bottom-[max(22px,env(safe-area-inset-bottom))]" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label={t("Escríbenos por WhatsApp", "Message us on WhatsApp")}>
        <img className="size-7 shrink-0 object-contain brightness-0 invert" src="/whats.svg" alt="" aria-hidden="true" width="28" height="28" />
      </a>
    </div>
  );
}
export default function App() {
  return (
    <LanguageProvider>
      <Layout />
    </LanguageProvider>
  );
}
