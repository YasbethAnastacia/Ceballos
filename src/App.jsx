import { Category } from "./assets/ARTICULOS/Category";
import { catalog } from "./catalog";
import { Chatbot } from "./Chatbot";
import { Hero as OriginalHero } from "./legacy/Hero";
import "./legacy/legacy.css";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { LanguageProvider } from "./Language";
import { useLanguage } from "./useLanguage";
import { site } from "./site.config";
import { Navbar } from "./assets/Navbar/Navbar";
import { Hero } from "./assets/HERO/Hero";
import { Nosotros } from "./assets/NOSOTROS/Nosotros";
import { Galeria } from "./assets/GALERIA/Galeria";
import { Articulos } from "./assets/ARTICULOS/Articulos";
import { Rosarios } from "./assets/ARTICULOS/Rosario";
import { Ubicacion } from "./assets/UBICACION/Ubicacion";
import { Contacto } from "./assets/CONTACTO/Contacto";
function Layout() {
  const { pathname } = useLocation();
  const [theme, setTheme] = useState(() => { try { const saved = localStorage.getItem("ceballos-theme"); return saved === "dark" || saved === "light" ? saved : site.defaultTheme; } catch { return site.defaultTheme; } });
  useEffect(() => { document.documentElement.dataset.theme = theme; try { localStorage.setItem("ceballos-theme", theme); } catch {} }, [theme]);
  const { t, whatsapp } = useLanguage();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return <div data-theme={theme} className={`site${theme === "dark" && pathname === "/" ? " original-hero-page" : ""}`}><a className="skip-link" href="#main">{t("Saltar al contenido", "Skip to content")}</a><Navbar theme={theme} onToggleTheme={() => setTheme(current => current === "light" ? "dark" : "light")} /><Routes><Route path="/" element={theme === "dark" ? <div className="legacy-design" id="main" tabIndex={-1}><OriginalHero /></div> : <Hero />} /><Route path="/nosotros" element={<Nosotros />} /><Route path="/articulos" element={<Articulos />} /><Route path="/rosarios" element={<Rosarios />} />{catalog.filter(category => category.id !== "rosarios").map(category => <Route key={category.id} path={`/${category.id}`}><Route index element={<Category categoryId={category.id} />} /><Route path=":groupId" element={<Category categoryId={category.id} />} /></Route>)}<Route path="/galeria" element={<Galeria />} /><Route path="/ubicacion" element={<Ubicacion />} /><Route path="/contacto" element={<Contacto />} /><Route path="*" element={<main id="main" className="page"><h1>{t("Página no encontrada", "Page not found")}</h1><Link className="button" to="/">{t("Volver al inicio", "Back home")}</Link></main>} /></Routes><footer><Link to="/" className="footer-brand">Ceballos<span>{t("Artículos religiosos", "Religious articles")}</span></Link><span>Colima, México · © {new Date().getFullYear()}</span><Link to="/contacto">{t("Contacto", "Contact")} ↗</Link></footer><Chatbot /><a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label={t("Escríbenos por WhatsApp", "Message us on WhatsApp")}><MessageCircle size={25} /><span>WhatsApp</span></a></div>;
}
export default function App() { return <LanguageProvider><Layout /></LanguageProvider>; }






