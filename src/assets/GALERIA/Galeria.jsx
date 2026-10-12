import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useLanguage } from "../../useLanguage";
const photos = "d a b c e f g h i j k l".split(" ").map(name => `/GALERIA-IA/${name}.png`);
const orbitPhotos = photos.slice(0, 10);
const angle = 360 / orbitPhotos.length;
export function Galeria() {
  const {
    t
  } = useLanguage();
  const [step, setStep] = useState(Math.floor(orbitPhotos.length / 2));
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    const desktop = matchMedia("(min-width: 1280px)");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const timer = setInterval(() => {
      if (desktop.matches && !reduced.matches && !paused && !hovered && !document.hidden) setStep(value => value + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, [paused, hovered]);
  const active = (step % orbitPhotos.length + orbitPhotos.length) % orbitPhotos.length;
  const label = i => t(`Colección Ceballos, imagen ${i + 1}`, `Ceballos collection, image ${i + 1}`);
  return (
    <main id="main" className="mx-auto max-w-none min-h-[calc(100svh_-_240px)] px-[6%] pt-[70px] pb-[90px] animate-[enter_.65s_both] max-[600px]:pt-[43px] max-[600px]:pb-[60px] overflow-hidden">
      <header className="mb-12 max-[600px]:mb-[30px] [&>h1]:mt-[18px] [&>h1]:mb-[23px] max-[600px]:[&>h1]:text-[clamp(38px,10vw,54px)] max-[600px]:[&>h1]:tracking-[-1px] [&>p:not(:first-child)]:max-w-[610px] [&>p:not(:first-child)]:text-[19px] [&>p:not(:first-child)]:leading-[1.65] [&>p:not(:first-child)]:text-muted max-[600px]:[&>p:not(:first-child)]:text-[17px] text-center [&>p]:mx-auto">
        <p className="font-ui text-[10px]/[1.7] tracking-[2.2px] text-accent uppercase max-[600px]:text-[9px] max-[600px]:tracking-[1.5px]">
          {t("CEBALLOS", "CEBALLOS")}
        </p>
        <h1 className="text-[clamp(42px,5.5vw,80px)] leading-[1.06] font-normal tracking-[-1.8px] [&_em]:font-normal [&_em]:text-accent">
          {t("Galería", "Gallery")}
        </h1>
        <p>
          {t("Fotos de nuestra tienda y de algunos artículos. Los modelos disponibles pueden cambiar.", "Photos of our store and some of our items. Available products may change.")}
        </p>
      </header>
      <div className="mx-auto grid max-w-[1200px] grid-cols-3 gap-6 min-[1280px]:hidden max-[900px]:grid-cols-2 max-[600px]:items-start max-[600px]:gap-[14px] [&>a]:relative [&>a]:overflow-hidden [&>a]:rounded-[4px] max-[600px]:[&>a:nth-child(even)]:mt-[25px] [&_img]:h-[330px] [&_img]:w-full [&_img]:object-cover [&_img]:transition-transform [&_img]:duration-500 [&>a:hover_img]:scale-[1.04] max-[600px]:[&_img]:h-[230px] max-[600px]:[&>a:nth-child(3n)_img]:h-[280px] [&_span]:absolute [&_span]:right-3 [&_span]:bottom-3 [&_span]:bg-bg [&_span]:px-3 [&_span]:py-2 [&_span]:font-ui [&_span]:text-[11px] motion-safe:[&>*]:animate-reveal-card motion-safe:[&>:nth-child(4n+2)]:[animation-delay:70ms] motion-safe:[&>:nth-child(4n+3)]:[animation-delay:140ms] motion-safe:[&>:nth-child(4n+4)]:[animation-delay:210ms]">
        {photos.map((photo, i) => (
          <a key={photo} href={photo} target="_blank" rel="noreferrer" aria-label={t(`Ampliar imagen ${i + 1}`, `Enlarge image ${i + 1}`)}>
            <img src={photo} alt={label(i)} loading="lazy" />
            <span>
              /
              {String(i + 1).padStart(2, "0")}
              {" ↗"}
            </span>
          </a>
        ))}
      </div>
      <div className="hidden pt-[75px] min-[1280px]:block" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setHovered(true)} onBlurCapture={e => { if (!e.currentTarget.contains(e.relatedTarget)) setHovered(false); }}>
        <div className="mx-auto mb-[75px] h-[250px] w-[350px] perspective-[3000px]">
          <div className="relative size-full transform-3d transition-transform duration-1000 ease-[ease]" style={{ transform: `rotateY(${-step * angle}deg)` }}>
            {orbitPhotos.map((photo, i) => (
              <a className="absolute inset-0 overflow-hidden rounded-3xl border border-line bg-surface backface-hidden shadow-[0_0_28px_color-mix(in_srgb,var(--accent)_25%,transparent)] transition-shadow duration-500 hover:shadow-[0_0_45px_color-mix(in_srgb,var(--accent)_45%,transparent)] after:pointer-events-none after:absolute after:inset-[6px] after:rounded-[18px] after:border after:border-ivory/50 after:content-[''] [&>img]:size-full [&>img]:object-cover [&>img]:transition-transform [&>img]:duration-500 hover:[&>img]:scale-105" key={photo} href={photo} target="_blank" rel="noreferrer" tabIndex={i === active ? 0 : -1} aria-hidden={i !== active} style={{ transform: `rotateY(${i * angle}deg) translateZ(650px)` }}>
                <img src={photo} alt={label(i)} loading="lazy" />
              </a>
            ))}
          </div>
        </div>
        <div className="relative z-2 -mt-4 flex items-center justify-center gap-5 [&>span]:font-ui [&>span]:text-xs [&>span]:text-muted [&>button]:size-12">
          <button className="inline-flex size-11 items-center justify-center rounded-full border border-line transition-colors duration-200 hover:bg-surface" aria-label={t("Anterior", "Previous")} onClick={() => { setPaused(true); setStep(step - 1); }}>
            <ChevronLeft />
          </button>
          <span>
            {String(active + 1).padStart(2, "0")}
            {" / "}
            {orbitPhotos.length}
          </span>
          <button className="inline-flex size-11 items-center justify-center rounded-full border border-line transition-colors duration-200 hover:bg-surface" aria-label={t("Siguiente", "Next")} onClick={() => { setPaused(true); setStep(step + 1); }}>
            <ChevronRight />
          </button>
          <button className="inline-flex size-11 items-center justify-center rounded-full border border-line transition-colors duration-200 hover:bg-surface" aria-label={paused ? t("Reproducir", "Play") : t("Pausar", "Pause")} aria-pressed={paused} onClick={() => setPaused(!paused)}>
            {paused ? (
              <Play size={17} />
            ) : (
              <Pause size={17} />
            )}
          </button>
        </div>
      </div>
    </main>
  );
}
