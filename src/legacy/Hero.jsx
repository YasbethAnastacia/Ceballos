import { monthlyHero } from "../site.config";
import { localize } from "./localize";
import { useLanguage } from "../useLanguage";
import { MapPin, Cross } from "lucide-react";
import { Link } from "react-router-dom";
export const Hero = () => {
  const {
    language
  } = useLanguage();
  const image = monthlyHero();
  return localize((
    <main id="inicio" className="relative isolate min-h-screen overflow-hidden">
      <div className="relative isolate min-h-screen md:hidden">
        <img src={image.mobile} alt="Artículos Religiosos Ceballos" className="absolute inset-0 h-full w-full object-cover object-[58%_center]" />
        <div className="absolute inset-x-0 top-0 h-[320px] bg-gradient-to-b from-black/95 via-black/75 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[220px] bg-gradient-to-t from-black/90 via-black/55 to-transparent" />
        <section className="relative z-10 flex min-h-screen flex-col px-6 pb-[90px] pt-[135px]">
          <div className="flex w-full flex-col items-center gap-1 text-center">
            <h1 className="font-serif text-[clamp(60px,7.4vw,114px)] font-normal not-italic leading-[1.06] tracking-[-1.8px] text-white max-md:text-[clamp(56px,14vw,80px)]">
              Ceballos
            </h1>
            <p className="font-serif text-[clamp(43px,4.8vw,75px)] font-normal italic leading-[1.1] tracking-[-1.8px] text-accent max-md:text-[clamp(34px,9vw,51px)] max-md:tracking-[-1px]">
              Artículos religiosos
            </p>
            <div className="flex w-full max-w-[340px] items-center">
              <div className="h-px flex-1 bg-gold-light/80" />
              <div className="flex items-center gap-1 px-3">
                <span className="h-[5px] w-[5px] rotate-45 border border-gold-light" />
                <span className="h-[8px] w-[8px] rotate-45 border border-gold-light" />
                <span className="h-[5px] w-[5px] rotate-45 border border-gold-light" />
              </div>
              <div className="h-px flex-1 bg-gold-light/80" />
            </div>
            <p className="font-serif text-[21px]/[1.7] font-normal text-white/95 max-md:text-[19px]">
              Tradición, fe y devoción en cada detalle.
            </p>
          </div>
          <div className="mt-auto flex w-full flex-col gap-3">
            <Link to="/articulos" className="flex h-[48px] w-full items-center justify-center gap-3 rounded-[3px] border border-legacy-button bg-legacy-button px-4 transition font-ui text-sm/[1.4] font-normal normal-case tracking-normal text-ivory hover:bg-legacy-button-hover hover:border-legacy-button-hover">
              <Cross size={14} strokeWidth={1.8} />
              Conoce nuestros artículos
            </Link>
            <a href="https://www.google.com/maps/place/Ceballos+Art%C3%ADculos+Religiosos/@19.2441682,-103.7297697,17z/data=!3m1!4b1!4m6!3m5!1s0x84255aacee64e2a9:0xaeb4cad57a9a060f!8m2!3d19.2441682!4d-103.7271948!16s%2Fg%2F1td9wfk9?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex h-[48px] w-full items-center justify-center gap-3 rounded-[3px] border border-gold-light bg-black/45 px-4 backdrop-blur-sm transition font-ui text-sm/[1.4] font-normal normal-case tracking-normal text-ivory hover:bg-legacy-button-hover hover:border-legacy-button-hover">
              <MapPin size={15} />
              Cómo llegar
            </a>
          </div>
        </section>
      </div>
      <div className="relative isolate hidden min-h-screen md:block">
        <img src={image.desktop} alt="Artículos Religiosos Ceballos" className="absolute inset-0 -z-30 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 -z-20 bg-black/10" />
        <div className="absolute left-0 top-0 -z-10 h-[220px] w-full bg-gradient-to-b from-black/90 via-black/55 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.85)_18%,rgba(0,0,0,0.82)_30%,rgba(0,0,0,0.38)_42%,rgba(0,0,0,0.08)_50%,rgba(0,0,0,0)_58%)]" />
        <section className="relative flex min-h-screen items-center px-[4%] pt-[calc(8rem_+_48px)] pb-32">
          <div className="flex w-full max-w-[clamp(520px,42vw,700px)] flex-col gap-[clamp(1rem,1.5vw,1.5rem)]">
            <h1 className="font-serif text-[clamp(60px,7.4vw,114px)] font-normal not-italic leading-[1.06] tracking-[-1.8px] text-white max-md:text-[clamp(56px,14vw,80px)]">
              Ceballos
            </h1>
            <div className="flex items-center">
              <p className="font-serif text-[clamp(43px,4.8vw,75px)] font-normal italic leading-[1.1] tracking-[-1.8px] text-accent max-md:text-[clamp(34px,9vw,51px)] max-md:tracking-[-1px]">
                Artículos religiosos
              </p>
            </div>
            <div className="flex w-full max-w-[355px] xl:max-w-none xl:w-full items-center">
              <div className="h-px flex-1 bg-gold-light/80" />
              <div className="flex items-center gap-1 px-3">
                <span className="h-[7px] w-[7px] rotate-45 border border-gold-light" />
                <span className="h-[10px] w-[10px] rotate-45 border border-gold-light" />
                <span className="h-[7px] w-[7px] rotate-45 border border-gold-light" />
              </div>
              <div className="h-px flex-1 bg-gold-light/80" />
            </div>
            <p className="max-w-[430px] font-serif text-[21px]/[1.7] font-normal text-white/95 max-md:text-[19px]">
              Tradición, fe y devoción
              <br />
              en cada detalle.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Link to="/articulos" className="flex h-[52px] items-center justify-center gap-3 rounded-[4px] border border-legacy-button bg-legacy-button px-6 transition duration-300 font-ui text-sm/[1.4] font-normal normal-case tracking-normal text-ivory hover:bg-legacy-button-hover hover:border-legacy-button-hover">
                <Cross size={15} strokeWidth={1.8} />
                Conoce nuestros artículos
              </Link>
              <a href="https://www.google.com/maps/place/Ceballos+Art%C3%ADculos+Religiosos/@19.2441682,-103.7297697,17z/data=!3m1!4b1!4m6!3m5!1s0x84255aacee64e2a9:0xaeb4cad57a9a060f!8m2!3d19.2441682!4d-103.7271948!16s%2Fg%2F1td9wfk9?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex h-[52px] items-center justify-center gap-3 rounded-[4px] border border-gold-light bg-black/30 px-6 backdrop-blur-[2px] transition duration-300 font-ui text-sm/[1.4] font-normal normal-case tracking-normal text-ivory hover:bg-legacy-button-hover hover:border-legacy-button-hover">
                <MapPin size={16} />
                Cómo llegar
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  ), language);
};
