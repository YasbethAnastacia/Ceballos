import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../useLanguage";
import { catalog } from "../../catalog";
export function Articulos() {
  const {
    t
  } = useLanguage();
  return (
    <main id="main" className="mx-auto max-w-[1440px] min-h-[calc(100svh_-_240px)] px-[6%] pt-[70px] pb-[90px] animate-[enter_.65s_both] max-[600px]:pt-[43px] max-[600px]:pb-[60px]">
      <header className="mb-12 max-[600px]:mb-[30px] [&>h1]:mt-[18px] [&>h1]:mb-[23px] max-[600px]:[&>h1]:text-[clamp(38px,10vw,54px)] max-[600px]:[&>h1]:tracking-[-1px] [&>p:not(:first-child)]:max-w-[610px] [&>p:not(:first-child)]:text-[19px] [&>p:not(:first-child)]:leading-[1.65] [&>p:not(:first-child)]:text-muted max-[600px]:[&>p:not(:first-child)]:text-[17px]">
        <p className="font-ui text-[10px]/[1.7] tracking-[2.2px] text-accent uppercase max-[600px]:text-[9px] max-[600px]:tracking-[1.5px]">
          {t("NUESTRA COLECCIÓN", "OUR COLLECTION")}
        </p>
        <h1 className="text-[clamp(42px,5.5vw,80px)] leading-[1.06] font-normal tracking-[-1.8px] [&_em]:font-normal [&_em]:text-accent">
          {t("Artículos religiosos", "Religious articles")}
        </h1>
        <p>
          {t("Selecciona una categoría para ver los artículos. Los modelos y la disponibilidad pueden cambiar.", "Select a category to browse our items. Products and availability may change.")}
        </p>
      </header>
      <div className="grid grid-cols-4 gap-x-[22px] gap-y-7 max-[1100px]:grid-cols-3 max-[600px]:grid-cols-2 max-[600px]:gap-x-[14px] max-[600px]:gap-y-[22px] motion-safe:[&>*]:animate-reveal-card motion-safe:[&>:nth-child(4n+2)]:[animation-delay:70ms] motion-safe:[&>:nth-child(4n+3)]:[animation-delay:140ms] motion-safe:[&>:nth-child(4n+4)]:[animation-delay:210ms]">
        {catalog.map(category => (
          <Link className="group/product block min-w-0 transition-transform duration-350 hover:-translate-y-[5px]" key={category.id} to={`/${category.id}`}>
            <div className="flex h-[245px] items-center justify-center overflow-hidden rounded-[4px] bg-surface transition-colors duration-250 max-[600px]:h-[180px] [&>img]:size-[70%] [&>img]:object-contain [&>img]:transition-transform [&>img]:duration-450 group-hover/product:[&>img]:scale-[1.07]">
              <img src={`/ARTICULOS/${category.image}`} alt={t(category.es, category.en)} loading="lazy" />
            </div>
            <div className="flex items-center justify-between gap-2.5 border-b border-line py-[17px] max-[600px]:items-start [&>h2]:text-xl max-[600px]:[&>h2]:text-[17px] [&>svg]:shrink-0 [&>svg]:text-accent [&>svg]:transition-transform [&>svg]:duration-300 group-hover/product:[&>svg]:translate-x-[3px] group-hover/product:[&>svg]:-translate-y-0.5">
              <div>
                <h2 className="text-xl leading-tight font-normal max-[600px]:text-[17px]">
                  {t(category.es, category.en)}
                </h2>
                <p className="mt-2 font-ui text-[11px] text-muted">
                  {t(`${category.photoCount} fotografías`, `${category.photoCount} photographs`)}
                </p>
              </div>
              <ArrowUpRight size={19} />
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
