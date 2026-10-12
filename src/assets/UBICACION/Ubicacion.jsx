import { MapPin, Clock, ArrowUpRight } from "lucide-react";
import { site } from "../../site.config";
import { useLanguage } from "../../useLanguage";
export function Ubicacion() {
  const {
    t
  } = useLanguage();
  return (
    <main id="main" className="mx-auto max-w-[1440px] min-h-[calc(100svh_-_240px)] px-[6%] pt-[70px] pb-[90px] animate-[enter_.65s_both] max-[600px]:pt-[43px] max-[600px]:pb-[60px]">
      <header className="mb-12 max-[600px]:mb-[30px] [&>h1]:mt-[18px] [&>h1]:mb-[23px] max-[600px]:[&>h1]:text-[clamp(38px,10vw,54px)] max-[600px]:[&>h1]:tracking-[-1px] [&>p:not(:first-child)]:max-w-[610px] [&>p:not(:first-child)]:text-[19px] [&>p:not(:first-child)]:leading-[1.65] [&>p:not(:first-child)]:text-muted max-[600px]:[&>p:not(:first-child)]:text-[17px]">
        <p className="font-ui text-[10px]/[1.7] tracking-[2.2px] text-accent uppercase max-[600px]:text-[9px] max-[600px]:tracking-[1.5px]">
          {t("VISÍTANOS", "VISIT US")}
        </p>
        <h1 className="text-[clamp(42px,5.5vw,80px)] leading-[1.06] font-normal tracking-[-1.8px] [&_em]:font-normal [&_em]:text-accent">
          {t("Ubicación y horario", "Location and hours")}
        </h1>
        <p>
          {t("Estamos en el centro de Colima. Aquí puedes consultar nuestra dirección y horario.", "We are in downtown Colima. Find our address and opening hours here.")}
        </p>
      </header>
      <div className="grid grid-cols-2 items-center gap-[10%] max-[900px]:gap-[5%] max-[600px]:grid-cols-1">
        <div className="[&>a]:mt-3">
          <article className="flex gap-[22px] border-t border-line py-[26px] [&>svg]:mt-[5px] [&>svg]:shrink-0 [&>svg]:text-accent [&_h2]:mt-2.5 [&_h2]:text-2xl/[1.4] [&_p:not(:first-child)]:mt-2 [&_p:not(:first-child)]:text-xl [&_p:not(:first-child)]:text-muted">
            <MapPin />
            <div>
              <p className="font-ui text-[10px]/[1.7] tracking-[2.2px] text-accent uppercase max-[600px]:text-[9px] max-[600px]:tracking-[1.5px]">
                {t("DIRECCIÓN", "ADDRESS")}
              </p>
              <h2 className="text-[27px]/[1.2] font-normal">
                {site.address}
              </h2>
            </div>
          </article>
          <article className="flex gap-[22px] border-t border-line py-[26px] [&>svg]:mt-[5px] [&>svg]:shrink-0 [&>svg]:text-accent [&_h2]:mt-2.5 [&_h2]:text-2xl/[1.4] [&_p:not(:first-child)]:mt-2 [&_p:not(:first-child)]:text-xl [&_p:not(:first-child)]:text-muted">
            <Clock />
            <div>
              <p className="font-ui text-[10px]/[1.7] tracking-[2.2px] text-accent uppercase max-[600px]:text-[9px] max-[600px]:tracking-[1.5px]">
                {t("HORARIO", "OPENING HOURS")}
              </p>
              <p>
                {t(site.hours.es, site.hours.en)}
              </p>
            </div>
          </article>
          <a className="inline-flex min-h-12 items-center justify-center gap-[13px] rounded-[4px] border border-accent bg-accent px-[23px] py-[17px] font-ui text-xs/[1.4] text-on-accent transition-[transform,filter] duration-250 hover:-translate-y-0.5 hover:brightness-110 [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-[3px] hover:[&_svg]:-translate-y-0.5" href={site.maps} target="_blank" rel="noreferrer">
            {t("Cómo llegar", "Get directions")}
            <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="border-l border-line py-[30px] pl-[14%] text-accent max-[600px]:mt-10 max-[600px]:border-l-0 max-[600px]:border-t max-[600px]:pl-0 [&>span]:font-ui [&>span]:text-[10px]/[1.5] [&>span]:tracking-[2px] [&>p]:my-10 [&>p]:text-[clamp(60px,7vw,110px)] [&>p]:leading-[1.05] [&>p]:tracking-[-3px] max-[600px]:[&>p]:my-[25px] max-[600px]:[&>p]:text-[76px] [&_em]:block [&_em]:text-text" aria-hidden="true">
          <span>
            19.2442° N / 103.7272° W
          </span>
          <p>
            Colima
            <em>
              México.
            </em>
          </p>
          <span>
            CONSTITUCIÓN · 58 &amp; 60
          </span>
        </div>
      </div>
    </main>
  );
}
