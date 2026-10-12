import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { monthlyHero } from "../../site.config";
import { useLanguage } from "../../useLanguage";
export function Hero() {
  const {
    t
  } = useLanguage();
  const image = monthlyHero();
  return (
    <main id="main" className="mx-auto grid max-w-[1600px] grid-cols-2 min-h-[calc(100svh_-_96px)] max-[900px]:min-h-auto max-[600px]:grid-cols-1">
      <section className="self-center pt-[clamp(45px,7vw,110px)] pr-[9%] pb-[45px] pl-[10%] animate-[enter_.8s_both] max-[1100px]:pr-[7%] max-[600px]:px-[7%] max-[600px]:pt-[43px] max-[600px]:pb-[30px] [&>h1]:mt-[30px] [&>h1]:mb-[25px] [&>h1]:text-[clamp(46px,5.7vw,88px)] max-[900px]:[&>h1]:text-[52px] max-[600px]:[&>h1]:text-[clamp(45px,11.5vw,65px)] max-[600px]:[&>h1]:mt-[21px]">
        <p className="font-ui text-[10px]/[1.7] tracking-[2.2px] text-accent uppercase max-[600px]:text-[9px] max-[600px]:tracking-[1.5px]">
          {t("COLIMA, MÉXICO", "COLIMA, MEXICO")}
        </p>
        <h1 className="text-[clamp(42px,5.5vw,80px)] leading-[1.06] font-normal tracking-[-1.8px] [&_em]:font-normal [&_em]:text-accent">
          Ceballos
          <br />
          <em>
            {t("Artículos religiosos", "Religious articles")}
          </em>
        </h1>
        <p className="max-w-[390px] text-[19px]/[1.7] text-muted max-[900px]:text-[17px]">
          {t("Artículos religiosos para tu hogar, celebraciones y regalos. Consulta los modelos disponibles por WhatsApp.", "Religious items for your home, celebrations and gifts. Ask about available products on WhatsApp.")}
        </p>
        <div className="mt-[33px] flex flex-wrap items-center gap-[27px] max-[900px]:gap-[15px]">
          <Link className="inline-flex min-h-12 items-center justify-center gap-[13px] rounded-[4px] border border-accent bg-accent px-[23px] py-[17px] font-ui text-xs/[1.4] text-on-accent transition-[transform,filter] duration-250 hover:-translate-y-0.5 hover:brightness-110 [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-[3px] hover:[&_svg]:-translate-y-0.5" to="/articulos">
            {t("Explorar artículos", "Explore the collection")}
            <ArrowRight size={18} />
          </Link>
          <Link className="inline-flex items-center gap-2.5 border-b border-line py-2.5 font-ui text-xs/[1.6] hover:text-accent [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-[3px] hover:[&_svg]:-translate-y-0.5" to="/ubicacion">
            <MapPin size={17} />
            {t("Visítanos", "Visit us")}
          </Link>
        </div>
        <div className="mt-[55px] flex items-center gap-[18px] border-t border-line pt-[23px] max-[600px]:mt-[30px] max-[600px]:pt-[15px] [&>span]:text-[43px] [&>span]:text-accent [&>p]:text-sm/[1.5] [&>p]:text-muted">
          <span>
            ≈40
          </span>
          <p>
            {t("años de historia,", "years of history,")}
            <br />
            {t("atendiendo en Colima.", "serving Colima.")}
          </p>
        </div>
      </section>
      <figure className="relative min-h-[650px] overflow-hidden max-[1100px]:min-h-[610px] max-[900px]:min-h-[600px] max-[600px]:min-h-[450px] [&_picture]:absolute [&_picture]:inset-0 [&_picture]:size-full [&_img]:absolute [&_img]:inset-0 [&_img]:size-full [&_img]:object-cover [&_img]:object-[65%_center] max-[600px]:[&_img]:object-[center_45%] [&>figcaption]:absolute [&>figcaption]:inset-x-0 [&>figcaption]:bottom-0 [&>figcaption]:flex [&>figcaption]:justify-between [&>figcaption]:gap-3 [&>figcaption]:bg-surface [&>figcaption]:px-[30px] [&>figcaption]:py-[22px] [&>figcaption]:font-ui [&>figcaption]:text-[9px]/[1.5] [&>figcaption]:tracking-[1.5px] [&>figcaption]:transition-colors [&>figcaption]:duration-250 max-[600px]:[&>figcaption]:px-5 max-[600px]:[&>figcaption]:py-[17px] max-[600px]:[&>figcaption]:text-[8px]">
        <picture>
          <source media="(max-width: 767px)" srcSet={image.mobile} />
          <img src={image.desktop} alt={t("Arte religioso de Ceballos", "Religious art at Ceballos")} fetchPriority="high" />
        </picture>
        <figcaption>
          <span>
            {t("NUESTRA TIENDA", "OUR STORE")}
          </span>
          <span>
            Ceballos · Colima
          </span>
        </figcaption>
      </figure>
    </main>
  );
}
