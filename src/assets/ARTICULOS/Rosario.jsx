import { Sparkles, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const Rosarios = () => {
  const rosarios = [
    { id: 1, nombre: "Rosario Rojo", imagen: "/ARTICULOS/ARTICULOS/ROSARIOS/a.png" },
    { id: 2, nombre: "Rosario Café", imagen: "/ARTICULOS/ARTICULOS/ROSARIOS/b.png" },
    { id: 3, nombre: "Rosario Dorado", imagen: "/ARTICULOS/ARTICULOS/ROSARIOS/c.png" },
    { id: 4, nombre: "Rosario Blanco", imagen: "/ARTICULOS/ARTICULOS/ROSARIOS/d.png" },
    { id: 5, nombre: "Rosario Rosa", imagen: "/ARTICULOS/ARTICULOS/ROSARIOS/e.png" },
    { id: 6, nombre: "Rosario Perla", imagen: "/ARTICULOS/ARTICULOS/ROSARIOS/f.png" },
    { id: 7, nombre: "Rosario Café Claro", imagen: "/ARTICULOS/ARTICULOS/ROSARIOS/g.png" },
    { id: 8, nombre: "Rosario Plateado", imagen: "/ARTICULOS/ARTICULOS/ROSARIOS/h.png" },
    { id: 9, nombre: "Rosario Verde", imagen: "/ARTICULOS/ARTICULOS/ROSARIOS/i.png" },
    { id: 10, nombre: "Rosario Beige", imagen: "/ARTICULOS/ARTICULOS/ROSARIOS/j.png" },
    { id: 11, nombre: "Rosario Gris", imagen: "/ARTICULOS/ARTICULOS/ROSARIOS/k.png" },
    { id: 12, nombre: "Rosario Blanco", imagen: "/ARTICULOS/ARTICULOS/ROSARIOS/l.png" },
    { id: 13, nombre: "Rosario Crema", imagen: "/ARTICULOS/ARTICULOS/ROSARIOS/m.png" },
    { id: 14, nombre: "Rosario Azul", imagen: "/ARTICULOS/ARTICULOS/ROSARIOS/n.png" },
  ];

  return (
    <section className="min-h-screen bg-[#090806] px-5 pb-24 pt-32 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-8">
          <Link
            to="/#articulos"
            className="inline-flex items-center gap-2 font-serif text-sm uppercase tracking-[2px] text-[#d4a514] transition hover:text-[#f0cb61]"
          >
            <ArrowLeft size={18} />
            Volver a artículos
          </Link>
        </div>

        <header className="mb-14 text-center">
          <p className="mb-2 font-serif text-sm tracking-[7px] text-[#d4a514]">
            NUESTROS
          </p>

          <h1 className="font-serif text-5xl font-normal tracking-[4px] md:text-7xl">
            ROSARIOS
          </h1>

          <div className="mx-auto mt-6 flex max-w-[350px] items-center gap-4">
            <span className="h-px flex-1 bg-[#8d6b0d]" />
            <span className="text-[#d4a514]">◇◇◇</span>
            <span className="h-px flex-1 bg-[#8d6b0d]" />
          </div>

          <p className="mx-auto mt-6 max-w-2xl font-serif text-lg leading-8 text-white/70">
            Descubre nuestra variedad de rosarios en diferentes colores,
            materiales y diseños.
          </p>
        </header>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {rosarios.map((rosario) => (
            <article
              key={rosario.id}
              className="group relative overflow-hidden rounded-[22px] border border-[#80600d]/40 bg-[#12100c] p-3 pb-16 transition duration-500 hover:-translate-y-1 hover:border-[#c89416]"
            >
              <div className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[17px] bg-gradient-to-b from-[#1c1912] to-[#0d0b08]">
                <img
                  src={rosario.imagen}
                  alt={rosario.nombre}
                  className="h-[88%] w-[88%] object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="absolute bottom-4 left-4">
                <div className="flex items-center gap-2 rounded-lg border border-[#a07915]/50 bg-[#090806]/95 px-4 py-2.5 shadow-xl">
                  <Sparkles
                    size={14}
                    className="text-[#d4a514]"
                    strokeWidth={1.7}
                  />

                  <span className="font-serif text-[10px] tracking-[1px] text-[#e0bb52] sm:text-xs">
                    {rosario.nombre.toUpperCase()}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};