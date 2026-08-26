import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { nombre: "Inicio", href: "/" },
    { nombre: "Nosotros", href: "/nosotros" },
    { nombre: "Artículos", href: "/articulos" },
    { nombre: "Galería", href: "/galeria" },
    { nombre: "Ubicación", href: "/ubicacion" },
    { nombre: "Contacto", href: "/contacto" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-black/30 backdrop-blur-[3px]">
      <nav className="flex h-[92px] w-full items-center px-[4.2%] ">
        <Link to="/" className="flex w-[26%] items-center bg-red-500">
          <img
            src="/NAVBAR/logo.png"
            alt="Ceballos Artículos Religiosos"
            className="h-[68px] w-auto object-contain lg:h-[72px]"
          />
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-10 lg:flex xl:gap-12">
          {links.map((link) => {
            const activo = location.pathname === link.href;

            return (
              <Link
                key={link.nombre}
                to={link.href}
                className={`relative text-[11px] font-medium uppercase tracking-[1px] transition-colors duration-300 ${
                  activo
                    ? "text-[#d9ae3c]"
                    : "text-white/85 hover:text-[#d9ae3c]"
                }`}
              >
                {link.nombre}
                {activo && (
                  <span className="absolute -bottom-[15px] left-0 h-px w-full bg-[#d9ae3c]" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden w-[26%] justify-end lg:flex">
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-[50px] min-w-[155px] items-center justify-center gap-3 rounded-[5px] border border-[#c89c22] px-7 text-[12px] font-semibold tracking-[0.5px] text-[#e0b942] transition-all duration-300 hover:bg-[#c89c22] hover:text-black"
          >
            <div className="relative h-5 w-5">
              <img
                className="absolute inset-0 h-5 w-5 opacity-100 transition-opacity duration-300 group-hover:opacity-0"
                src="/NAVBAR/whatssap.svg"
                alt=""
              />
              <img
                className="absolute inset-0 h-5 w-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                src="/NAVBAR/whawhite.svg"
                alt=""
              />
            </div>
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="ml-auto flex text-white lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <div
        className={`absolute left-0 top-[92px] w-full overflow-hidden bg-black/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
          open
            ? "max-h-[600px] border-t border-white/10 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-5">
          {links.map((link) => {
            const activo = location.pathname === link.href;

            return (
              <Link
                key={link.nombre}
                to={link.href}
                onClick={() => setOpen(false)}
                className={`border-b border-white/10 py-4 text-sm uppercase tracking-[2px] ${
                  activo ? "text-[#d9ae3c]" : "text-white"
                }`}
              >
                {link.nombre}
              </Link>
            );
          })}

          <a
            href="https://wa.me/523121765151?text=Hola%2C%20quisiera%20más%20información"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-5 flex h-[50px] items-center justify-center gap-3 rounded-[5px] border border-[#c89c22] text-sm font-semibold text-[#e0b942] transition-all duration-300 hover:bg-[#c89c22] hover:text-black"
          >
            <div className="relative h-5 w-5">
              <img
                className="absolute inset-0 h-5 w-5 opacity-100 transition-opacity duration-300 group-hover:opacity-0"
                src="/NAVBAR/whatssap.svg"
                alt=""
              />
              <img
                className="absolute inset-0 h-5 w-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                src="/NAVBAR/whawhite.svg"
                alt=""
              />
            </div>
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};