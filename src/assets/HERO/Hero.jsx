import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { monthlyHero } from "../../site.config";
import { useLanguage } from "../../useLanguage";
export function Hero() {
  const { t } = useLanguage();
  const image = monthlyHero();
  return <main id="main" className="hero"><section className="hero-copy"><p className="eyebrow">{t("COLIMA, MÉXICO", "COLIMA, MEXICO")}</p><h1>Ceballos<br /><em>{t("Artículos religiosos", "Religious articles")}</em></h1><p className="intro">{t("Artículos religiosos para tu hogar, celebraciones y regalos. Consulta los modelos disponibles por WhatsApp.", "Religious items for your home, celebrations and gifts. Ask about available products on WhatsApp.")}</p><div className="actions"><Link className="button" to="/articulos">{t("Explorar artículos", "Explore the collection")}<ArrowRight size={18} /></Link><Link className="text-link" to="/ubicacion"><MapPin size={17} />{t("Visítanos", "Visit us")}</Link></div><div className="hero-note"><span>≈40</span><p>{t("años de historia,", "years of history,")}<br />{t("atendiendo en Colima.", "serving Colima.")}</p></div></section><figure className="hero-image"><picture><source media="(max-width: 767px)" srcSet={image.mobile} /><img src={image.desktop} alt={t("Arte religioso de Ceballos", "Religious art at Ceballos")} fetchPriority="high" /></picture><figcaption><span>{t("NUESTRA TIENDA", "OUR STORE")}</span><span>Ceballos · Colima</span></figcaption></figure></main>;
}


