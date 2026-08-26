import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

export const Articulos = () => {
  const [mostrarMas, setMostrarMas] = useState(false);

  const categorias2 = [
    {
      id: 1,
      nombre: "Crucifijos",
      imagen: "/ARTICULOS/cruz.png",
      ruta: "/crucifijos",
    },
    {
      id: 2,
      nombre: "Velas y veladoras",
      imagen: "/ARTICULOS/VELADORA.png",
      ruta: "/velas",
    },
    {
      id: 3,
      nombre: "Biblias",
      imagen: "/ARTICULOS/biblias.png",
      ruta: "/biblias",
    },
    {
      id: 4,
      nombre: "Esculturas",
      imagen: "/ARTICULOS/escultura.png",
      ruta: "/esculturas",
    },
    {
      id: 5,
      nombre: "Cuadros",
      imagen: "/ARTICULOS/cuadros.png",
      ruta: "/cuadros",
    },
    {
      id: 6,
      nombre: "Artículos para ceremonia",
      imagen: "/ARTICULOS/ceremonia.png",
      ruta: "/ceremonia",
    },
    {
      id: 7,
      nombre: "Recuerdos",
      imagen: "/ARTICULOS/Recuerditos.png",
      ruta: "/recuerdos",
    },
    {
      id: 8,
      nombre: "Rosarios",
      imagen: "/ARTICULOS/rosarios.png",
      ruta: "/rosarios",
    },
    
  ];

  const visibles = mostrarMas ? categorias2 : categorias2.slice(0, 5);

  return (
    <section
      id="articulos"
      className="relative min-h-screen overflow-hidden bg-black px-6 py-28 text-white md:px-10 lg:px-16"
    >
      <div className="absolute inset-0">
        <img
          src="/ARTICULOS/portada2.jpg"
          alt=""
          className="h-full w-full object-cover object-top opacity-50"
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/70" />
        <div className="absolute left-1/2 top-[18%] h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-[#d7a719]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center">
          <p className="mb-3 font-serif text-sm tracking-[0.35em] text-[#d7a719]">
            NUESTROS
          </p>

          <h2 className="font-heading text-5xl font-normal tracking-wide text-white sm:text-6xl md:text-7xl">
            ARTÍCULOS
          </h2>

          <div className="my-6 flex items-center justify-center gap-3">
            <div className="h-px w-20 bg-[#8b680f] sm:w-28" />

            <div className="flex items-center gap-1">
              <span className="h-2 w-2 rotate-45 border border-[#d7a719]" />
              <span className="h-2 w-2 rotate-45 border border-[#d7a719]" />
              <span className="h-2 w-2 rotate-45 border border-[#d7a719]" />
            </div>

            <div className="h-px w-20 bg-[#8b680f] sm:w-28" />
          </div>

          <p className="max-w-2xl font-serif text-lg leading-relaxed text-white/85 md:text-xl">
            Encuentra artículos religiosos para la oración, celebraciones,
            regalos y momentos especiales de fe.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {visibles.map((categoria) => (
            <Link
              key={categoria.id}
              to={categoria.ruta}
              className="group relative flex min-h-[190px] flex-col items-center justify-between overflow-hidden rounded-xl border border-[#a98016]/60 bg-black/35 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#d7a719] hover:bg-black/45"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.035] via-transparent to-black/20" />

              <div className="relative z-10 flex flex-1 items-center justify-center">
                <img
                  src={categoria.imagen}
                  alt={categoria.nombre}
                  className="max-h-24 w-full object-contain opacity-85 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
                />
              </div>

              <div className="relative z-10 mt-4 w-full border-t border-[#a98016]/40 pt-4 text-center">
                <h3 className="font-serif text-sm uppercase leading-snug tracking-[0.08em] text-white sm:text-[15px]">
                  {categoria.nombre}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setMostrarMas(!mostrarMas)}
            className="flex items-center gap-2 rounded-sm border border-[#b88b17] bg-black/40 px-8 py-3 font-serif text-sm uppercase tracking-[0.18em] text-[#d7a719] backdrop-blur-md transition duration-300 hover:bg-[#d7a719] hover:text-black"
          >
            {mostrarMas ? (
              <>
                Ver menos
                <ChevronUp size={17} />
              </>
            ) : (
              <>
                Ver más
                <ChevronDown size={17} />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};