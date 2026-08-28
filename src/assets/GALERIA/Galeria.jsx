import { Presentacion } from "../Presentacion.jsx";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const fotos = [
  "/GALERIA-IA/d.png",
  "/GALERIA-IA/a.png",
  "/GALERIA-IA/b.png",
  "/GALERIA-IA/c.png",
  "/GALERIA-IA/e.png",
  "/GALERIA-IA/f.png",
  "/GALERIA-IA/g.png",
  "/GALERIA-IA/h.png",
  "/GALERIA-IA/i.png",
  "/GALERIA-IA/j.png",
  "/GALERIA-IA/k.png",
  "/GALERIA-IA/l.png",
];

export const Galeria = () => {
  const fotosVisibles = fotos.slice(0, 10);
  const angulo = 360 / fotosVisibles.length;
  const centro = Math.floor(fotosVisibles.length / 2);

  const [rotacion, setRotacion] = useState(-(centro * angulo));
  const [pausado, setPausado] = useState(false);
  const [pausaManual, setPausaManual] = useState(false);

  const timeoutRef = useRef(null);

  const reiniciarAutomatico = () => {
    setPausaManual(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setPausaManual(false);
    }, 3000);
  };

  const siguiente = () => {
    setRotacion((prev) => prev - angulo);
    reiniciarAutomatico();
  };

  const anterior = () => {
    setRotacion((prev) => prev + angulo);
    reiniciarAutomatico();
  };

  useEffect(() => {
    if (pausado || pausaManual) return;

    const intervalo = setInterval(() => {
      setRotacion((prev) => prev - angulo);
    }, 3000);

    return () => clearInterval(intervalo);
  }, [pausado, pausaManual, angulo]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <main
      id="galeria"
      className="relative overflow-hidden bg-black px-6 py-28 text-white md:px-10 lg:px-16"
    >
      <div className="absolute inset-0 h-full w-full">
        <img
          src="/GALERIA-IA/bbb.png"
          alt=""
          className="h-full w-full object-cover object-top opacity-12"
        />
      </div>

      <Presentacion />

      <div
        className="relative mx-auto flex h-[400px] w-full items-center justify-center"
        onMouseEnter={() => setPausado(true)}
        onMouseLeave={() => setPausado(false)}
      >
        <div
          className="relative z-10 h-[250px] w-[350px]"
          style={{ perspective: "3000px" }}
        >
          <div
            className="absolute inset-0 transition-transform duration-1000 ease-in-out"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateY(${rotacion}deg)`,
            }}
          >
            {fotosVisibles.map((foto, index) => (
              <div
                key={index}
                className="absolute inset-0"
                style={{
                  transform: `rotateY(${index * angulo}deg) translateZ(650px)`,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                <a
                  href={foto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block h-full w-full overflow-hidden rounded-[24px] bg-black shadow-[0_0_28px_rgba(215,167,25,0.25)] transition-all duration-500 hover:scale-110 hover:shadow-[0_0_45px_rgba(215,167,25,0.45)]"
                >
                  <img
                    src={foto}
                    alt={`Galería ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/35" />

                  <div className="pointer-events-none absolute inset-[6px] rounded-[18px] border border-white/50" />

                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="flex translate-y-4 items-center gap-2 rounded-full border border-[#d7a719]/80 bg-black/80 px-5 py-3 font-serif text-[11px] tracking-[0.18em] text-[#d7a719] opacity-0 shadow-[0_0_25px_rgba(215,167,25,0.18)] backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      VER EN GRANDE
                      <ExternalLink size={14} strokeWidth={1.7} />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-[25px] left-1/2 z-0 h-[140px] w-[850px] -translate-x-1/2" />
      </div>

      <div className="relative z-30 -mt-4 flex items-center justify-center gap-5">
        <button
          onClick={anterior}
          aria-label="Foto anterior"
          className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#d7a719]/70 bg-black/60 text-[#d7a719] shadow-[0_0_20px_rgba(215,167,25,0.12)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#d7a719] hover:bg-[#d7a719] hover:text-black hover:shadow-[0_0_30px_rgba(215,167,25,0.35)] active:scale-95"
        >
          <ChevronLeft
            size={25}
            strokeWidth={1.6}
            className="transition-transform duration-300 group-hover:-translate-x-0.5"
          />
        </button>

        <div className="flex items-center gap-2">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#8b680f]" />
          <span className="h-2.5 w-2.5 rotate-45 border border-[#d7a719] bg-black" />
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#8b680f]" />
        </div>

        <button
          onClick={siguiente}
          aria-label="Foto siguiente"
          className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#d7a719]/70 bg-black/60 text-[#d7a719] shadow-[0_0_20px_rgba(215,167,25,0.12)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#d7a719] hover:bg-[#d7a719] hover:text-black hover:shadow-[0_0_30px_rgba(215,167,25,0.35)] active:scale-95"
        >
          <ChevronRight
            size={25}
            strokeWidth={1.6}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </button>
      </div>
    </main>
  );
};