import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../useLanguage";
export function Nosotros() {
  const {
    t
  } = useLanguage();
  const chapters = [["El inicio", "The beginning", "Todo comenzó hace aproximadamente 40 años, elaborando nuestras propias velas de manera artesanal.", "It all began around 40 years ago, making our own candles by hand."], ["Cómo crecimos", "How we grew", "Las peticiones de nuestros clientes nos llevaron a recorrer kilómetros en busca de nuevos artículos, imágenes y cuadros. Cada viaje hizo crecer nuestra tienda.", "Our customers' requests took us miles in search of new pieces, religious statues and framed art. Every journey helped our shop grow."], ["La tienda hoy", "Our store today", "Hoy seguimos trabajando con el mismo compromiso: acompañar tu fe y los momentos más importantes de tu vida espiritual, con una atención cercana.", "Today we keep the same commitment: to accompany your faith and life's meaningful spiritual moments with warm, personal service."]];
  return (
    <main id="main" className="mx-auto max-w-[1440px] min-h-[calc(100svh_-_240px)] px-[6%] pt-[70px] pb-[90px] animate-[enter_.65s_both] max-[600px]:pt-[43px] max-[600px]:pb-[60px]">
      <header className="mb-12 max-[600px]:mb-[30px] [&>h1]:mt-[18px] [&>h1]:mb-[23px] max-[600px]:[&>h1]:text-[clamp(38px,10vw,54px)] max-[600px]:[&>h1]:tracking-[-1px] [&>p:not(:first-child)]:max-w-[610px] [&>p:not(:first-child)]:text-[19px] [&>p:not(:first-child)]:leading-[1.65] [&>p:not(:first-child)]:text-muted max-[600px]:[&>p:not(:first-child)]:text-[17px]">
        <p className="font-ui text-[10px]/[1.7] tracking-[2.2px] text-accent uppercase max-[600px]:text-[9px] max-[600px]:tracking-[1.5px]">
          {t("NUESTRA HISTORIA", "OUR STORY")}
        </p>
        <h1 className="text-[clamp(42px,5.5vw,80px)] leading-[1.06] font-normal tracking-[-1.8px] [&_em]:font-normal [&_em]:text-accent">
          {t("Nosotros", "About us")}
        </h1>
      </header>
      <div className="grid grid-cols-2 items-center gap-[8%] max-[1100px]:gap-[5%] max-[900px]:grid-cols-1">
        <figure className="relative max-[900px]:mx-auto max-[900px]:w-full max-[900px]:max-w-[580px] [&>img]:h-[520px] [&>img]:w-full [&>img]:rounded-[48%_48%_2px_2px] [&>img]:object-cover max-[600px]:[&>img]:h-[380px] [&>figcaption]:absolute [&>figcaption]:bottom-[25px] [&>figcaption]:left-[25px] [&>figcaption]:flex [&>figcaption]:items-center [&>figcaption]:gap-[18px] [&>figcaption]:bg-bg [&>figcaption]:px-[25px] [&>figcaption]:py-[18px] max-[600px]:[&>figcaption]:bottom-[15px] max-[600px]:[&>figcaption]:left-[15px] max-[600px]:[&>figcaption]:px-[18px] max-[600px]:[&>figcaption]:py-3 [&_strong]:text-[46px] [&_strong]:font-normal [&_strong]:text-accent [&_figcaption_span]:text-[15px]">
          <img src="/GALERIA-IA/aaa.png" alt={t("Colección de arte religioso de Ceballos", "Ceballos religious art collection")} />
          <figcaption>
            <strong>
              ≈40
            </strong>
            <span>
              {t("años de tradición", "years of tradition")}
            </span>
          </figcaption>
        </figure>
        <div className="max-[900px]:mt-[30px] [&>article]:flex [&>article]:gap-[22px] [&>article]:border-b [&>article]:border-line [&>article]:py-6 max-[600px]:[&>article]:gap-4 [&_p]:mt-[13px] [&_p]:text-[17px]/[1.75] [&_p]:text-muted [&>a]:mt-[25px] motion-safe:[&>article]:animate-reveal-card motion-safe:[&>article:nth-child(2)]:[animation-delay:70ms] motion-safe:[&>article:nth-child(3)]:[animation-delay:140ms]">
          {chapters.map(([es, en, bodyEs, bodyEn], i) => (
            <article key={es}>
              <span className="pt-2 font-ui text-[11px] text-accent">
                0
                {i + 1}
              </span>
              <div>
                <h2 className="text-[27px]/[1.2] font-normal">
                  {t(es, en)}
                </h2>
                <p>
                  {t(bodyEs, bodyEn)}
                </p>
              </div>
            </article>
          ))}
          <Link className="inline-flex items-center gap-2.5 border-b border-line py-2.5 font-ui text-xs/[1.6] hover:text-accent [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-[3px] hover:[&_svg]:-translate-y-0.5" to="/articulos">
            {t("Ver artículos", "Browse items")}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </main>
  );
}
