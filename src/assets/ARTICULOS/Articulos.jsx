import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../useLanguage";
import { catalog } from "../../catalog";
export function Articulos() {
  const { t } = useLanguage();
  return <main id="main" className="page"><header className="section-heading"><p className="eyebrow">{t("NUESTRA COLECCIÓN", "OUR COLLECTION")}</p><h1>{t("Artículos religiosos", "Religious articles")}</h1><p>{t("Selecciona una categoría para ver los artículos. Los modelos y la disponibilidad pueden cambiar.", "Select a category to browse our items. Products and availability may change.")}</p></header><div className="product-grid">{catalog.map(category => <Link className="product-card" key={category.id} to={`/${category.id}`}><div className="product-image"><img src={`/ARTICULOS/${category.image}`} alt={t(category.es, category.en)} loading="lazy" /></div><div className="product-caption"><h2>{t(category.es, category.en)}</h2><ArrowUpRight size={19} /></div></Link>)}</div></main>;
}
