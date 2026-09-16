import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useLanguage } from "../../useLanguage";
const photos = "d a b c e f g h i j k l".split(" ").map(name => `/GALERIA-IA/${name}.png`);
const orbitPhotos = photos.slice(0, 10);
const angle = 360 / orbitPhotos.length;
export function Galeria() {
  const { t } = useLanguage();
  const [step, setStep] = useState(Math.floor(orbitPhotos.length / 2));
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    const desktop = matchMedia("(min-width: 1280px)");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const timer = setInterval(() => { if (desktop.matches && !reduced.matches && !paused && !hovered && !document.hidden) setStep(value => value + 1); }, 3000);
    return () => clearInterval(timer);
  }, [paused, hovered]);
  const active = ((step % orbitPhotos.length) + orbitPhotos.length) % orbitPhotos.length;
  const label = i => t(`Colección Ceballos, imagen ${i + 1}`, `Ceballos collection, image ${i + 1}`);
  return <main id="main" className="page gallery"><header className="section-heading centered"><p className="eyebrow">{t("CEBALLOS", "CEBALLOS")}</p><h1>{t("Galería", "Gallery")}</h1><p>{t("Fotos de nuestra tienda y de algunos artículos. Los modelos disponibles pueden cambiar.", "Photos of our store and some of our items. Available products may change.")}</p></header><div className="gallery-mobile">{photos.map((photo, i) => <a key={photo} href={photo} target="_blank" rel="noreferrer" aria-label={t(`Ampliar imagen ${i + 1}`, `Enlarge image ${i + 1}`)}><img src={photo} alt={label(i)} loading="lazy" /><span>/{String(i + 1).padStart(2, "0")} ↗</span></a>)}</div><div className="gallery-desktop" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setHovered(true)} onBlurCapture={e => { if (!e.currentTarget.contains(e.relatedTarget)) setHovered(false); }}><div className="orbit-stage"><div className="orbit" style={{ transform: `rotateY(${-step * angle}deg)` }}>{orbitPhotos.map((photo, i) => <a className="orbit-photo" key={photo} href={photo} target="_blank" rel="noreferrer" tabIndex={i === active ? 0 : -1} aria-hidden={i !== active} style={{ transform: `rotateY(${i * angle}deg) translateZ(650px)` }}><img src={photo} alt={label(i)} loading="lazy" /></a>)}</div></div><div className="gallery-controls"><button className="icon-button" aria-label={t("Anterior", "Previous")} onClick={() => { setPaused(true); setStep(step - 1); }}><ChevronLeft /></button><span>{String(active + 1).padStart(2, "0")} / {orbitPhotos.length}</span><button className="icon-button" aria-label={t("Siguiente", "Next")} onClick={() => { setPaused(true); setStep(step + 1); }}><ChevronRight /></button><button className="icon-button" aria-label={paused ? t("Reproducir", "Play") : t("Pausar", "Pause")} aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? <Play size={17} /> : <Pause size={17} />}</button></div></div></main>;
}



