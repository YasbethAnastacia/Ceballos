import { Presentacion } from "../Presentacion.jsx";
import { useState, useEffect } from "react";

const fotos = [
    "/GALERIA-IA/a.png",
    "/GALERIA-IA/b.png",
    "/GALERIA-IA/c.png",
    "/GALERIA-IA/d.png",
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

  const siguiente = () => {
    setRotacion((prev) => prev - angulo);
  };

  useEffect(() => {
    if (pausado) return;

    const intervalo = setInterval(() => {
      setRotacion((prev) => prev - angulo);
    }, 3000);

    return () => clearInterval(intervalo);
  }, [pausado, angulo]);

  return (
    <main id="galeria" className=" relative  overflow-hidden bg-black px-6 py-28 text-white md:px-10 lg:px-16">

        <div className="absolute inset-0 h-full w-full ">
        <img
          src="/ARTICULOS/portada2.jpg"
          alt=""
          className="h-full w-full object-cover object-top opacity-12"
        />
      </div>
    
        
      <Presentacion />
    
    
      <div className="relative mx-auto flex h-[400px] w-full items-center justify-center" onMouseEnter={() => setPausado(true)} onMouseLeave={() => setPausado(false)}>
        <div className="relative z-10 h-[250px] w-[350px]" style={{ perspective: "3000px" }}>
          <div className="absolute inset-0 transition-transform duration-1000 ease-in-out" style={{ transformStyle: "preserve-3d", transform: `rotateY(${rotacion}deg)` }}>
            {fotosVisibles.map((foto, index) => (
                /* backfaceVisibility: "hidden"  */
              <div key={index} className="absolute inset-0" style={{ transform: `rotateY(${index * angulo}deg) translateZ(5}650px)`, transformStyle: "preserve-3d",backfaceVisibility: "hidden" }}>
                <div className="group relative h-full w-full overflow-hidden rounded-[24px] bg-black shadow-[0_0_28px_rgba(215,167,25,0.25)] transition-all duration-500 hover:scale-110 hover:border-[#f4c542] hover:shadow-[0_0_45px_rgba(215,167,25,0.45)]">
                  <img src={foto} alt={`Galería ${index + 1}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  
                  <div className="pointer-events-none absolute inset-0 bg-black opacity-0 transition-all duration-500 group-hover:opacity-20" />
                  <div className="pointer-events-none absolute inset-[6px] rounded-[18px] border border-white/50" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-[25px] left-1/2 z-0 h-[140px] w-[850px] -translate-x-1/2">
          {/* AQUÍ PONDREMOS LA BASE */}
        </div>
      </div>


{/* <div className="-mt-6 flex justify-center pb-12">
        <button onClick={siguiente} className="rounded-full border border-[#d7a719] px-8 py-3 font-serif text-[#d7a719] transition duration-300 hover:bg-[#d7a719] hover:text-black">
          Siguiente
        </button>
      </div>*/}
      
    </main>
  );
};