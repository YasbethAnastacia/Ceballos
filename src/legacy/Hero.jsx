import { monthlyHero } from "../site.config";
import { localize } from "./localize";
import { useLanguage } from "../useLanguage";
import { MapPin, Cross } from "lucide-react";
import { Link } from "react-router-dom";
export const Hero = () => {
const { language } = useLanguage(); const image = monthlyHero();
return localize(
<main id="inicio" className="relative min-h-screen overflow-hidden ">
<div className="relative min-h-screen md:hidden">
<img
src={image.mobile}
alt="Artículos Religiosos Ceballos"
className="absolute inset-0 h-full w-full object-cover object-[58%_center]"
/>
<div className="absolute inset-x-0 top-0 h-[320px] bg-gradient-to-b from-black/95 via-black/75 to-transparent" />
<div className="absolute inset-x-0 bottom-0 h-[220px] bg-gradient-to-t from-black/90 via-black/55 to-transparent" />
<section className="relative z-10 flex min-h-screen flex-col px-6 pb-8 pt-25">
<div className="flex w-full flex-col items-center gap-1 text-center">
<h1 className="font-heading text-[clamp(3.2rem,14vw,4.5rem)] font-normal leading-[0.9] tracking-[1px] text-white drop-shadow-lg">
Ceballos
</h1>
<p className="legacy-subtitle">
Artículos religiosos
</p>
<div className="flex w-full max-w-[340px] items-center">
<div className="h-px flex-1 bg-[var(--legacy-gold)]/80" />
<div className="flex items-center gap-1 px-3">
<span className="h-[5px] w-[5px] rotate-45 border border-[var(--legacy-gold)]" />
<span className="h-[8px] w-[8px] rotate-45 border border-[var(--legacy-gold)]" />
<span className="h-[5px] w-[5px] rotate-45 border border-[var(--legacy-gold)]" />
</div>
<div className="h-px flex-1 bg-[var(--legacy-gold)]/80" />
</div>
<p className="font-serif text-[clamp(1rem,4.5vw,1.125rem)] leading-[1.5] text-white/95 drop-shadow-md">
Tradición, fe y devoción en cada detalle.
</p>
</div>
<div className="mt-auto flex w-full flex-col gap-3">
<Link
to="/articulos"
className="flex h-[48px] w-full items-center justify-center gap-3 rounded-[3px] border border-[var(--legacy-gold)] bg-[var(--legacy-gold)] px-4 text-[10px] font-semibold uppercase tracking-[0.4px] text-[var(--legacy-black)] transition hover:bg-[var(--legacy-gold)]"
>
<Cross size={14} strokeWidth={1.8} />
Conoce nuestros artículos
</Link>
<a
href="https://www.google.com/maps/place/Ceballos+Art%C3%ADculos+Religiosos/@19.2441682,-103.7297697,17z/data=!3m1!4b1!4m6!3m5!1s0x84255aacee64e2a9:0xaeb4cad57a9a060f!8m2!3d19.2441682!4d-103.7271948!16s%2Fg%2F1td9wfk9?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D"
target="_blank"
rel="noopener noreferrer"
className="flex h-[48px] w-full items-center justify-center gap-3 rounded-[3px] border border-[var(--legacy-gold)] bg-black/45 px-4 text-[10px] font-semibold uppercase tracking-[0.4px] text-[var(--legacy-gold)] backdrop-blur-sm transition hover:bg-[var(--legacy-gold)] hover:text-[var(--legacy-black)]"
>
<MapPin size={15} />
Cómo llegar
</a>
</div>
</section>
</div>
<div className="relative hidden min-h-screen md:block">
<img
src={image.desktop}
alt="Artículos Religiosos Ceballos"
className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
/>
<div className="absolute inset-0 -z-20 bg-black/10" />
<div className="absolute left-0 top-0 -z-10 h-[220px] w-full bg-gradient-to-b from-black/90 via-black/55 to-transparent" />
<div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.85)_18%,rgba(0,0,0,0.82)_30%,rgba(0,0,0,0.38)_42%,rgba(0,0,0,0.08)_50%,rgba(0,0,0,0)_58%)]" />
<section className="relative flex min-h-screen items-center px-[4%] py-28 lg:py-32">
<div className="flex w-full max-w-[clamp(520px,42vw,700px)] flex-col gap-[clamp(1rem,1.5vw,1.5rem)]">
<h1 className="font-heading text-[clamp(5rem,7.5vw,9rem)] font-normal leading-[0.9] tracking-[1px] text-white drop-shadow-lg">
Ceballos
</h1>
<div className="flex items-center">
<p className="legacy-subtitle">
Artículos religiosos
</p>
</div>
<div className="flex  w-full max-w-[355px] xl:max-w-none xl:w-full items-center ">
<div className="h-px flex-1 bg-[var(--legacy-gold)]/80" />
<div className="flex items-center gap-1 px-3">
<span className="h-[7px] w-[7px] rotate-45 border border-[var(--legacy-gold)]" />
<span className="h-[10px] w-[10px] rotate-45 border border-[var(--legacy-gold)]" />
<span className="h-[7px] w-[7px] rotate-45 border border-[var(--legacy-gold)]" />
</div>
<div className="h-px flex-1 bg-[var(--legacy-gold)]/80" />
</div>
<p className="max-w-[430px] font-serif text-[clamp(1.15rem,1.6vw,1.56rem)] leading-[1.45] text-white/95 drop-shadow-md">
Tradición, fe y devoción
<br />
en cada detalle.
</p>
<div className="flex items-center gap-4 pt-2">
<Link
to="/articulos"
className="flex h-[52px] items-center justify-center gap-3 rounded-[4px] border border-[var(--legacy-gold)] bg-[var(--legacy-gold)] px-6 text-[12px] font-semibold uppercase tracking-[0.5px] text-[var(--legacy-black)] transition duration-300 hover:bg-[var(--legacy-gold)]"
>
<Cross size={15} strokeWidth={1.8} />
Conoce nuestros artículos
</Link>
<a
href="https://www.google.com/maps/place/Ceballos+Art%C3%ADculos+Religiosos/@19.2441682,-103.7297697,17z/data=!3m1!4b1!4m6!3m5!1s0x84255aacee64e2a9:0xaeb4cad57a9a060f!8m2!3d19.2441682!4d-103.7271948!16s%2Fg%2F1td9wfk9?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D"
target="_blank"
rel="noopener noreferrer"
className="flex h-[52px] items-center justify-center gap-3 rounded-[4px] border border-[var(--legacy-gold)] bg-black/30 px-6 text-[12px] font-semibold uppercase tracking-[0.5px] text-[var(--legacy-gold)] backdrop-blur-[2px] transition duration-300 hover:bg-[var(--legacy-gold)] hover:text-[var(--legacy-black)]"
>
<MapPin size={16} />
Cómo llegar
</a>
</div>
</div>
</section>
</div>
</main>
, language);
};


