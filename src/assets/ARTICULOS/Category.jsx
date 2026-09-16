import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../useLanguage";
import { catalog } from "../../catalog";
export function Category({ categoryId }) {
  const { groupId } = useParams();
  const { t, whatsapp } = useLanguage();
  const category = catalog.find(item => item.id === categoryId);
  const selected = groupId ? category?.groups?.find(item => item.id === groupId) : category;
  if (!selected) return <main id="main" className="page"><h1>{t("Categoría no encontrada", "Category not found")}</h1><Link className="text-link" to="/articulos">{t("Volver a artículos", "Back to collection")}</Link></main>;
  const title = t(selected.es, selected.en);
  const products = selected.products ?? [];
  const message = whatsapp + encodeURIComponent(t(` Me interesa: ${category.es}${groupId ? `, ${selected.es}` : ""}.`, ` I am interested in: ${category.en}${groupId ? `, ${selected.en}` : ""}.`));
  return <main id="main" className="page"><Link className="text-link back-link" to={groupId ? `/${category.id}` : "/articulos"}><ArrowLeft size={17} />{groupId ? t(`Volver a ${category.es.toLowerCase()}`, `Back to ${category.en.toLowerCase()}`) : t("Volver a artículos", "Back to collection")}</Link><header className="section-heading"><p className="eyebrow">{groupId ? t(category.es, category.en) : t("ARTÍCULOS", "COLLECTION")}</p><h1>{title}</h1><p>{selected.groups ? t("Selecciona una opción para ver los artículos.", "Select an option to browse the items.") : t("Consulta los modelos, precios y disponibilidad por WhatsApp.", "Ask about models, prices and availability on WhatsApp.")}</p></header>{selected.groups ? <div className="category-grid">{selected.groups.map((item, index) => <Link className="category-card" key={item.id} to={`/${category.id}/${item.id}`}><span className="eyebrow">{String(index + 1).padStart(2, "0")}</span><h2>{t(item.es, item.en)}</h2><ArrowUpRight size={22} /></Link>)}</div> : products.length ? <div className="product-grid">{products.map(product => <a className="product-card" key={product.id} href={message + encodeURIComponent(t(` Modelo: ${product.es}.`, ` Model: ${product.en}.`))} target="_blank" rel="noreferrer"><div className="product-image rosary-image"><img src={product.image} alt={t(product.es, product.en)} loading="lazy" /></div><div className="product-caption"><h2>{t(product.es, product.en)}</h2><ArrowUpRight size={18} /></div></a>)}</div> : <section className="catalog-empty"><p>{t("Aún no hay modelos publicados en esta sección. Escríbenos para consultar los disponibles en tienda.", "No models have been published in this section yet. Message us to ask what is available in store.")}</p><a className="button" href={message} target="_blank" rel="noreferrer">{t("Consultar por WhatsApp", "Ask on WhatsApp")}<ArrowUpRight size={18} /></a></section>}</main>;
}
