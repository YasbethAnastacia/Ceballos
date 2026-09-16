import { Phone, MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import { site } from "../../site.config";
import { useLanguage } from "../../useLanguage";
export function Contacto() {
  const { t, whatsapp } = useLanguage();
  const contacts = [[MessageCircle, "WhatsApp", "312 209 0550", whatsapp], [Phone, t("Oficina", "Office"), "312 943 7134", `tel:${site.office}`], [Phone, t("Teléfono del negocio", "Store phone"), "312 314 4173", `tel:${site.phone}`], [Mail, t("Correo electrónico", "Email"), site.email, `mailto:${site.email}`]];
  return <main id="main" className="page contact"><header className="section-heading"><p className="eyebrow">{t("ESTAMOS PARA SERVIRTE", "WE ARE HERE TO HELP")}</p><h1>{t("Contacto", "Contact")}</h1><p>{t("Para preguntas sobre artículos, precios o pedidos, comunícate con nosotros.", "Contact us for questions about items, prices or orders.")}</p><a className="text-link" href={site.facebook} target="_blank" rel="noreferrer">{t("Encuéntranos en Facebook", "Find us on Facebook")}<ArrowUpRight size={18} /></a></header><div className="contact-list">{contacts.map(([Icon, label, value, href]) => <a className="contact-row" key={label} href={href} {...(href.startsWith("https") ? { target: "_blank", rel: "noreferrer" } : {})}><Icon size={23} /><div><span className="eyebrow">{label}</span><h2>{value}</h2></div><ArrowUpRight size={20} /></a>)}</div></main>;
}
