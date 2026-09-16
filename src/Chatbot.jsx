import { useEffect, useRef, useState } from "react";
import { MessageSquare, X, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "./site.config";
import { useLanguage } from "./useLanguage";
import "./Chatbot.css";
const topics = [
  { id: "hours", es: "Horario", en: "Opening hours" },
  { id: "address", es: "Cómo llegar", en: "Directions" },
  { id: "items", es: "Artículos y precios", en: "Items and prices" },
  { id: "contact", es: "Teléfonos y correo", en: "Phone and email" },
  { id: "orders", es: "Pedidos y envíos", en: "Orders and shipping" },
  { id: "person", es: "Hablar con la tienda", en: "Contact the store" }
];
function Answer({ topic }) {
  const { t, whatsapp } = useLanguage();
  const whatsappLink = <a href={whatsapp} target="_blank" rel="noreferrer">{t("Abrir WhatsApp", "Open WhatsApp")}<ArrowUpRight size={14} /></a>;
  if (topic === "hours") return <><p>{t(site.hours.es, site.hours.en)}</p><p>{t("Para confirmar la atención en días festivos, escríbenos.", "Message us to confirm holiday opening hours.")}</p>{whatsappLink}</>;
  if (topic === "address") return <><p>{site.address}</p><a href={site.maps} target="_blank" rel="noreferrer">{t("Ver en Google Maps", "View on Google Maps")}<ArrowUpRight size={14} /></a></>;
  if (topic === "items") return <><p>{t("Los artículos, modelos y precios pueden cambiar. Este chat no consulta existencias. Escríbenos por WhatsApp con el nombre o una foto de lo que buscas para confirmar disponibilidad y precio.", "Items, models and prices may change. This chat cannot check stock. Send us the name or a photo of what you need on WhatsApp to confirm availability and price.")}</p><Link to="/articulos">{t("Ver artículos", "Browse items")}<ArrowUpRight size={14} /></Link>{whatsappLink}</>;
  if (topic === "contact") return <><p>{t("Puedes comunicarte por estos medios:", "You can reach us here:")}</p><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp: 312 209 0550</a><a href={`tel:${site.office}`}>{t("Oficina", "Office")}: 312 943 7134</a><a href={`tel:${site.phone}`}>{t("Negocio", "Store")}: 312 314 4173</a><a href={`mailto:${site.email}`}>{site.email}</a></>;
  if (topic === "orders") return <><p>{t("Para pedidos, formas de pago o envíos, consulta directamente con la tienda por WhatsApp. Te confirmarán las opciones disponibles antes de hacer tu pedido.", "For orders, payment methods or shipping, contact the store on WhatsApp. The staff will confirm the available options before you place your order.")}</p>{whatsappLink}</>;
  return <><p>{t("Escríbenos por WhatsApp para hablar con el personal de Ceballos. El chat de esta página solo ofrece respuestas automáticas; no hay una persona conectada aquí.", "Message us on WhatsApp to speak with Ceballos staff. This website chat only offers automatic answers; there is no live person connected here.")}</p><p>{t(site.hours.es, site.hours.en)}</p>{whatsappLink}</>;
}
export function Chatbot() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState([]);
  const launcher = useRef(null);
  const closeButton = useRef(null);
  const log = useRef(null);
  useEffect(() => { if (open) closeButton.current?.focus(); }, [open]);
  useEffect(() => { if (open && log.current) log.current.scrollTop = log.current.scrollHeight; }, [history, open]);
  const close = () => { setOpen(false); launcher.current?.focus(); };
  return <div className="chat-widget">{open && <section className="chat-panel" role="dialog" aria-labelledby="chat-title" onKeyDown={event => { if (event.key === "Escape") { event.stopPropagation(); close(); } }}><header className="chat-header"><div><h2 id="chat-title">{t("Ayuda de Ceballos", "Ceballos help")}</h2><p>{t("Respuestas automáticas", "Automatic answers")}</p></div><button ref={closeButton} type="button" className="icon-button" aria-label={t("Cerrar chat", "Close chat")} onClick={close}><X size={19} /></button></header><div className="chat-log" ref={log} role="log" aria-label={t("Conversación", "Conversation")} aria-live="polite" aria-relevant="additions"><div className="chat-answer"><p>{t("Hola. Elige una opción para consultar información de la tienda.", "Hello. Choose an option to find information about the store.")}</p></div>{history.map((id, index) => { const topic = topics.find(item => item.id === id); return <div className="chat-turn" key={index}><p className="chat-question">{t(topic.es, topic.en)}</p><div className="chat-answer"><Answer topic={id} /></div></div>; })}</div><div className="chat-options" aria-label={t("Preguntas frecuentes", "Frequently asked questions")}>{topics.map(topic => <button key={topic.id} type="button" onClick={() => setHistory(items => [...items.slice(-9), topic.id])}>{t(topic.es, topic.en)}</button>)}</div></section>}<button ref={launcher} type="button" className="chat-launcher" aria-expanded={open} aria-label={t(open ? "Cerrar ayuda" : "Abrir ayuda", open ? "Close help" : "Open help")} onClick={() => open ? close() : setOpen(true)}>{open ? <X size={23} /> : <MessageSquare size={23} />}<span>{t("Ayuda", "Help")}</span></button></div>;
}
