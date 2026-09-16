import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../useLanguage";
const colors = [["Rojo", "Red"], ["Café", "Brown"], ["Dorado", "Gold"], ["Blanco", "White"], ["Rosa", "Pink"], ["Perla", "Pearl"], ["Café claro", "Light brown"], ["Plateado", "Silver"], ["Verde", "Green"], ["Beige", "Beige"], ["Gris", "Grey"], ["Blanco", "White"], ["Crema", "Cream"], ["Azul", "Blue"]];
export function Rosarios() {
  const { t, whatsapp } = useLanguage();
  return <main id="main" className="page"><Link className="text-link back-link" to="/articulos"><ArrowLeft size={17} />{t("Volver a artículos", "Back to collection")}</Link><header className="section-heading"><p className="eyebrow">{t("ARTÍCULOS", "COLLECTION")}</p><h1>{t("Rosarios", "Rosaries")}</h1><p>{t("Diferentes colores, materiales y diseños. Selecciona uno para consultar disponibilidad.", "Different colors, materials and designs. Select one to ask about availability.")}</p></header><div className="product-grid">{colors.map(([es, en], i) => <a className="product-card" key={i} href={`${whatsapp}${encodeURIComponent(t(` Me interesa el rosario ${es.toLowerCase()} (modelo ${i + 1}).`, ` I am interested in the ${en.toLowerCase()} rosary (model ${i + 1}).`))}`} target="_blank" rel="noreferrer"><div className="product-image rosary-image"><img src={`/ARTICULOS/ARTICULOS/ROSARIOS/${String.fromCharCode(97 + i)}.png`} alt={t(`Rosario ${es.toLowerCase()}`, `${en} rosary`)} loading="lazy" /></div><div className="product-caption"><h2>{t(es, en)}</h2><ArrowUpRight size={18} /></div></a>)}</div></main>;
}


