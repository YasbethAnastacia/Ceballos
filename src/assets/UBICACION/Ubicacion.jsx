import { MapPin, Clock, ArrowUpRight } from "lucide-react";
import { site } from "../../site.config";
import { useLanguage } from "../../useLanguage";
export function Ubicacion() {
  const { t } = useLanguage();
  return <main id="main" className="page visit"><header className="section-heading"><p className="eyebrow">{t("VISÍTANOS", "VISIT US")}</p><h1>{t("Ubicación y horario", "Location and hours")}</h1><p>{t("Estamos en el centro de Colima. Aquí puedes consultar nuestra dirección y horario.", "We are in downtown Colima. Find our address and opening hours here.")}</p></header><div className="visit-layout"><div className="visit-details"><article className="detail-row"><MapPin /><div><p className="eyebrow">{t("DIRECCIÓN", "ADDRESS")}</p><h2>{site.address}</h2></div></article><article className="detail-row"><Clock /><div><p className="eyebrow">{t("HORARIO", "OPENING HOURS")}</p><p>{t(site.hours.es, site.hours.en)}</p></div></article><a className="button" href={site.maps} target="_blank" rel="noreferrer">{t("Cómo llegar", "Get directions")}<ArrowUpRight size={18} /></a></div><div className="visit-type" aria-hidden="true"><span>19.2442° N / 103.7272° W</span><p>Colima<em>México.</em></p><span>CONSTITUCIÓN · 58 & 60</span></div></div></main>;
}


