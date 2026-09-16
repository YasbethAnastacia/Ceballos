import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useLanguage } from "../../useLanguage";
export function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const update = () => setScrolled(window.scrollY > 24); update(); window.addEventListener("scroll", update, { passive: true }); return () => window.removeEventListener("scroll", update); }, []);
  const { pathname } = useLocation();
  const { t, language, setLanguage, whatsapp } = useLanguage();
  const links = [["/", "Inicio", "Home"], ["/nosotros", "Nosotros", "Our story"], ["/articulos", "Artículos", "Collection"], ["/galeria", "Galería", "Gallery"], ["/ubicacion", "Ubicación", "Visit us"], ["/contacto", "Contacto", "Contact"]];
  return <header className={`site-header${scrolled ? " is-scrolled" : ""}`}><nav aria-label={t("Navegación principal", "Main navigation")} onKeyDown={e => { if (e.key === "Escape") setOpen(false); }}><Link to="/" className="brand" onClick={() => setOpen(false)}><img className="brand-logo" src="/NAVBAR/logo.svg" alt="Ceballos Artículos Religiosos" width="1895" height="501" /></Link><div className="desktop-nav">{links.map(([url, es, en]) => <NavLink key={url} to={url} end={url === "/"}>{t(es, en)}</NavLink>)}</div><div className="nav-tools"><button className="theme-toggle icon-button" type="button" onClick={onToggleTheme} aria-label={theme === "light" ? t("Activar modo oscuro", "Switch to dark mode") : t("Activar modo claro", "Switch to light mode")} title={theme === "light" ? t("Modo oscuro", "Dark mode") : t("Modo claro", "Light mode")}>{theme === "light" ? <Moon size={18} /> : <Sun size={18} />}</button><select aria-label={t("Idioma", "Language")} value={language} onChange={e => setLanguage(e.target.value)}><option value="es">ES</option><option value="en">EN</option></select><a className="nav-contact" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={16} /></a><button className="menu-toggle icon-button" aria-expanded={open} aria-controls="mobile-nav" aria-label={t(open ? "Cerrar menú" : "Abrir menú", open ? "Close menu" : "Open menu")} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>{open && <div id="mobile-nav" className="mobile-nav">{links.map(([url, es, en]) => <Link key={url} to={url} aria-current={pathname === url ? "page" : undefined} onClick={() => setOpen(false)}>{t(es, en)}<ArrowUpRight size={18} /></Link>)}</div>}</nav></header>;
}



