import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../useLanguage";
const colors = [["Rojo", "Red"], ["Café", "Brown"], ["Dorado", "Gold"], ["Blanco", "White"], ["Rosa", "Pink"], ["Perla", "Pearl"], ["Café claro", "Light brown"], ["Plateado", "Silver"], ["Verde", "Green"], ["Beige", "Beige"], ["Gris", "Grey"], ["Blanco", "White"], ["Crema", "Cream"], ["Azul", "Blue"]];
export function Rosarios() {
  const {
    t,
    whatsapp
  } = useLanguage();
  return (
    <main id="main" className="mx-auto max-w-[1440px] min-h-[calc(100svh_-_240px)] px-[6%] pt-[70px] pb-[90px] animate-[enter_.65s_both] max-[600px]:pt-[43px] max-[600px]:pb-[60px]">
      <Link className="inline-flex items-center gap-2.5 border-b border-line py-2.5 font-ui text-xs/[1.6] hover:text-accent [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-[3px] hover:[&_svg]:-translate-y-0.5 mb-[30px]" to="/articulos">
        <ArrowLeft size={17} />
        {t("Volver a artículos", "Back to collection")}
      </Link>
      <header className="mb-12 max-[600px]:mb-[30px] [&>h1]:mt-[18px] [&>h1]:mb-[23px] max-[600px]:[&>h1]:text-[clamp(38px,10vw,54px)] max-[600px]:[&>h1]:tracking-[-1px] [&>p:not(:first-child)]:max-w-[610px] [&>p:not(:first-child)]:text-[19px] [&>p:not(:first-child)]:leading-[1.65] [&>p:not(:first-child)]:text-muted max-[600px]:[&>p:not(:first-child)]:text-[17px]">
        <p className="font-ui text-[10px]/[1.7] tracking-[2.2px] text-accent uppercase max-[600px]:text-[9px] max-[600px]:tracking-[1.5px]">
          {t("ARTÍCULOS", "COLLECTION")}
        </p>
        <h1 className="text-[clamp(42px,5.5vw,80px)] leading-[1.06] font-normal tracking-[-1.8px] [&_em]:font-normal [&_em]:text-accent">
          {t("Rosarios", "Rosaries")}
        </h1>
        <p>
          {t("Diferentes colores, materiales y diseños. Selecciona uno para consultar disponibilidad.", "Different colors, materials and designs. Select one to ask about availability.")}
        </p>
      </header>
      <div className="grid grid-cols-4 gap-x-[22px] gap-y-7 max-[1100px]:grid-cols-3 max-[600px]:grid-cols-2 max-[600px]:gap-x-[14px] max-[600px]:gap-y-[22px] motion-safe:[&>*]:animate-reveal-card motion-safe:[&>:nth-child(4n+2)]:[animation-delay:70ms] motion-safe:[&>:nth-child(4n+3)]:[animation-delay:140ms] motion-safe:[&>:nth-child(4n+4)]:[animation-delay:210ms]">
        {colors.map(([es, en], i) => (
          <a className="group/product block min-w-0 transition-transform duration-350 hover:-translate-y-[5px]" key={i} href={`${whatsapp}${encodeURIComponent(t(` Me interesa el rosario ${es.toLowerCase()} (modelo ${i + 1}).`, ` I am interested in the ${en.toLowerCase()} rosary (model ${i + 1}).`))}`} target="_blank" rel="noreferrer">
            <div className="flex h-[300px] items-center justify-center overflow-hidden rounded-[4px] bg-surface transition-colors duration-250 max-[600px]:h-[220px] [&>img]:size-[70%] [&>img]:object-contain [&>img]:transition-transform [&>img]:duration-450 group-hover/product:[&>img]:scale-[1.07]">
              <img src={`/ARTICULOS/ARTICULOS/ROSARIOS/${String.fromCharCode(97 + i)}.png`} alt={t(`Rosario ${es.toLowerCase()}`, `${en} rosary`)} loading="lazy" />
            </div>
            <div className="flex items-center justify-between gap-2.5 border-b border-line py-[17px] max-[600px]:items-start [&>h2]:text-xl max-[600px]:[&>h2]:text-[17px] [&>svg]:shrink-0 [&>svg]:text-accent [&>svg]:transition-transform [&>svg]:duration-300 group-hover/product:[&>svg]:translate-x-[3px] group-hover/product:[&>svg]:-translate-y-0.5">
              <h2 className="text-[27px]/[1.2] font-normal">
                {t(es, en)}
              </h2>
              <ArrowUpRight size={18} />
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
