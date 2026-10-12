import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useLanguage } from "../../useLanguage";
export function Navbar({
  theme,
  onToggleTheme
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, {
      passive: true
    });
    return () => window.removeEventListener("scroll", update);
  }, []);
  const {
    pathname
  } = useLocation();
  const {
    t,
    language,
    setLanguage,
    whatsapp
  } = useLanguage();
  const links = [["/", "Inicio", "Home"], ["/nosotros", "Nosotros", "Our story"], ["/articulos", "Artículos", "Collection"], ["/galeria", "Galería", "Gallery"], ["/ubicacion", "Ubicación", "Visit us"], ["/contacto", "Contacto", "Contact"]];
  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-0 transition-[background-color,box-shadow] duration-300 ${theme === "dark" && pathname === "/" ? "absolute bg-black/30 backdrop-blur-[3px]" : scrolled ? "bg-bg/95 backdrop-blur-[14px] shadow-[0_10px_28px_color-mix(in_srgb,var(--coal)_9%,transparent)]" : "bg-bg"}`}>
      <nav className="mx-auto flex h-(--navbar-height) items-center justify-between gap-5 pr-[5%] min-[1100px]:grid min-[1100px]:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] min-[1100px]:gap-4 min-[1100px]:pr-0 max-[600px]:gap-[6px] max-[600px]:pr-[4%] max-[370px]:gap-[3px] max-[370px]:pr-[2%]" aria-label={t("Navegación principal", "Main navigation")} onKeyDown={e => { if (e.key === "Escape") setOpen(false); }}>
        <Link to="/" className="flex h-full shrink-0 items-center self-stretch overflow-hidden leading-none min-[1100px]:max-w-full min-[1100px]:justify-self-start max-[600px]:w-[185px] max-[600px]:min-w-0 max-[370px]:w-[175px]" onClick={() => setOpen(false)}>
          <img className="h-full w-auto max-w-none shrink-0 object-contain" src="/NAVBAR/logo.svg" alt="Ceballos Artículos Religiosos" width="1895" height="501" />
        </Link>
        <div className="ml-auto hidden gap-[clamp(18px,2vw,32px)] font-ui text-xs min-[1100px]:m-0 min-[1100px]:flex min-[1100px]:justify-center">
          {links.map(([url, es, en]) => (
            <NavLink className="relative py-3 text-muted transition-[color,transform] duration-250 hover:-translate-y-0.5 hover:text-accent aria-[current=page]:text-accent aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-0 aria-[current=page]:after:bottom-0 aria-[current=page]:after:h-px aria-[current=page]:after:bg-accent aria-[current=page]:after:content-['']" key={url} to={url} end={url === "/"}>
              {t(es, en)}
            </NavLink>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-3 font-ui text-xs min-[1100px]:m-0 min-[1100px]:justify-self-end min-[1100px]:pr-[clamp(20px,3vw,56px)] max-[600px]:gap-[5px] max-[370px]:gap-[3px] [&>button]:max-[600px]:size-[38px] [&>button]:max-[370px]:w-[34px]">
          <button className="shrink-0 [&>svg]:transition-transform [&>svg]:duration-400 hover:[&>svg]:rotate-[25deg] inline-flex size-11 items-center justify-center rounded-full border border-line transition-colors duration-200 hover:bg-surface" type="button" onClick={onToggleTheme} aria-label={theme === "light" ? t("Activar modo oscuro", "Switch to dark mode") : t("Activar modo claro", "Switch to light mode")} title={theme === "light" ? t("Modo oscuro", "Dark mode") : t("Modo claro", "Light mode")}>
            {theme === "light" ? (
              <Moon size={18} />
            ) : (
              <Sun size={18} />
            )}
          </button>
          <select className={`cursor-pointer border-0 px-0.5 py-2.5 max-[600px]:px-0 max-[600px]:text-[11px] ${theme === "dark" && pathname === "/" ? "bg-black" : "bg-bg"}`} aria-label={t("Idioma", "Language")} value={language} onChange={e => setLanguage(e.target.value)}>
            <option value="es">
              ES
            </option>
            <option value="en">
              EN
            </option>
          </select>
          <a className="flex items-center gap-2 max-[1200px]:hidden" href={whatsapp} target="_blank" rel="noreferrer">
            {"WhatsApp "}
            <ArrowUpRight size={16} />
          </a>
          <button className="inline-flex min-[1100px]:hidden size-11 items-center justify-center rounded-full border border-line transition-colors duration-200 hover:bg-surface" aria-expanded={open} aria-controls="mobile-nav" aria-label={t(open ? "Cerrar menú" : "Abrir menú", open ? "Close menu" : "Open menu")} onClick={() => setOpen(!open)}>
            {open ? (
              <X />
            ) : (
              <Menu />
            )}
          </button>
        </div>
        {open && (
          <div id="mobile-nav" className="absolute inset-x-0 top-full max-h-[calc(100dvh_-_var(--navbar-height))] overflow-y-auto bg-bg px-[6%] py-[15px] shadow-[0_18px_25px_color-mix(in_srgb,var(--coal)_12%,transparent)] transition-colors duration-250 motion-safe:animate-reveal-menu [&>a]:flex [&>a]:justify-between [&>a]:border-b [&>a]:border-line [&>a]:py-4 [&>a[aria-current]]:text-accent motion-safe:[&>a]:animate-[reveal-menu_.35s_ease-out_both] motion-safe:[&>a:nth-child(2)]:[animation-delay:40ms] motion-safe:[&>a:nth-child(3)]:[animation-delay:80ms] motion-safe:[&>a:nth-child(4)]:[animation-delay:120ms] motion-safe:[&>a:nth-child(5)]:[animation-delay:160ms] motion-safe:[&>a:nth-child(6)]:[animation-delay:200ms]">
            {links.map(([url, es, en]) => (
              <Link key={url} to={url} aria-current={pathname === url ? "page" : undefined} onClick={() => setOpen(false)}>
                {t(es, en)}
                <ArrowUpRight size={18} />
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
