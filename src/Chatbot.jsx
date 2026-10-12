import { useEffect, useRef, useState } from "react";
import { MessageSquare, X, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "./site.config";
import { useLanguage } from "./useLanguage";
const topics = [{
  id: "hours",
  es: "Horario",
  en: "Opening hours"
}, {
  id: "address",
  es: "Cómo llegar",
  en: "Directions"
}, {
  id: "items",
  es: "Artículos y precios",
  en: "Items and prices"
}, {
  id: "contact",
  es: "Teléfonos y correo",
  en: "Phone and email"
}, {
  id: "orders",
  es: "Pedidos y envíos",
  en: "Orders and shipping"
}, {
  id: "person",
  es: "Hablar con la tienda",
  en: "Contact the store"
}];
function Answer({
  topic
}) {
  const {
    t,
    whatsapp
  } = useLanguage();
  const whatsappLink = (
    <a href={whatsapp} target="_blank" rel="noreferrer">
      {t("Abrir WhatsApp", "Open WhatsApp")}
      <ArrowUpRight size={14} />
    </a>
  );
  if (topic === "hours") return (
    <>
      <p>
        {t(site.hours.es, site.hours.en)}
      </p>
      <p>
        {t("Para confirmar la atención en días festivos, escríbenos.", "Message us to confirm holiday opening hours.")}
      </p>
      {whatsappLink}
    </>
  );
  if (topic === "address") return (
    <>
      <p>
        {site.address}
      </p>
      <a href={site.maps} target="_blank" rel="noreferrer">
        {t("Ver en Google Maps", "View on Google Maps")}
        <ArrowUpRight size={14} />
      </a>
    </>
  );
  if (topic === "items") return (
    <>
      <p>
        {t("Los artículos, modelos y precios pueden cambiar. Este chat no consulta existencias. Escríbenos por WhatsApp con el nombre o una foto de lo que buscas para confirmar disponibilidad y precio.", "Items, models and prices may change. This chat cannot check stock. Send us the name or a photo of what you need on WhatsApp to confirm availability and price.")}
      </p>
      <Link to="/articulos">
        {t("Ver artículos", "Browse items")}
        <ArrowUpRight size={14} />
      </Link>
      {whatsappLink}
    </>
  );
  if (topic === "contact") return (
    <>
      <p>
        {t("Puedes comunicarte por estos medios:", "You can reach us here:")}
      </p>
      <a href={whatsapp} target="_blank" rel="noreferrer">
        WhatsApp: 312 209 0550
      </a>
      <a href={`tel:${site.office}`}>
        {t("Oficina", "Office")}
        : 312 943 7134
      </a>
      <a href={`tel:${site.phone}`}>
        {t("Negocio", "Store")}
        : 312 314 4173
      </a>
      <a href={`mailto:${site.email}`}>
        {site.email}
      </a>
    </>
  );
  if (topic === "orders") return (
    <>
      <p>
        {t("Para pedidos, formas de pago o envíos, consulta directamente con la tienda por WhatsApp. Te confirmarán las opciones disponibles antes de hacer tu pedido.", "For orders, payment methods or shipping, contact the store on WhatsApp. The staff will confirm the available options before you place your order.")}
      </p>
      {whatsappLink}
    </>
  );
  return (
    <>
      <p>
        {t("Escríbenos por WhatsApp para hablar con el personal de Ceballos. El chat de esta página solo ofrece respuestas automáticas; no hay una persona conectada aquí.", "Message us on WhatsApp to speak with Ceballos staff. This website chat only offers automatic answers; there is no live person connected here.")}
      </p>
      <p>
        {t(site.hours.es, site.hours.en)}
      </p>
      {whatsappLink}
    </>
  );
}
export function Chatbot() {
  const {
    t
  } = useLanguage();
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState([]);
  const launcher = useRef(null);
  const closeButton = useRef(null);
  const log = useRef(null);
  useEffect(() => {
    if (open) closeButton.current?.focus();
  }, [open]);
  useEffect(() => {
    if (open && log.current) log.current.scrollTop = log.current.scrollHeight;
  }, [history, open]);
  const close = () => {
    setOpen(false);
    launcher.current?.focus();
  };
  return (
    <div className="fixed right-6 bottom-[calc(max(22px,env(safe-area-inset-bottom))_+_76px)] z-40 font-ui max-[600px]:right-4 max-[600px]:bottom-[calc(max(18px,env(safe-area-inset-bottom))_+_68px)]">
      {open && (
        <section className="absolute right-0 bottom-[68px] flex h-[min(540px,calc(100dvh_-_188px))] w-[min(370px,calc(100vw_-_32px))] flex-col overflow-hidden rounded-[14px] border border-line bg-bg text-text shadow-[0_12px_50px_color-mix(in_srgb,var(--coal)_25%,transparent)] animate-[enter_.2s_both] max-[600px]:bottom-16 max-[600px]:h-[min(540px,calc(100dvh_-_172px))]" role="dialog" aria-labelledby="chat-title" onKeyDown={event => { if (event.key === "Escape") { event.stopPropagation(); close(); } }}>
          <header className="flex shrink-0 items-center justify-between gap-[14px] border-b border-line px-[18px] py-4 [&_h2]:font-ui [&_h2]:text-base/[1.4] [&_h2]:font-semibold [&_p]:mt-[3px] [&_p]:font-ui [&_p]:text-[11px]/[1.5] [&_p]:text-muted [&>button]:size-[38px] [&>button]:shrink-0">
            <div>
              <h2 className="text-[27px]/[1.2] font-normal" id="chat-title">
                {t("Ayuda de Ceballos", "Ceballos help")}
              </h2>
              <p>
                {t("Respuestas automáticas", "Automatic answers")}
              </p>
            </div>
            <button ref={closeButton} type="button" className="inline-flex size-11 items-center justify-center rounded-full border border-line transition-colors duration-200 hover:bg-surface" aria-label={t("Cerrar chat", "Close chat")} onClick={close}>
              <X size={19} />
            </button>
          </header>
          <div className="min-h-[60px] flex-1 overflow-y-auto overscroll-contain p-4 font-ui text-[13px]/[1.65]" ref={log} role="log" aria-label={t("Conversación", "Conversation")} aria-live="polite" aria-relevant="additions">
            <div className="rounded-[2px_12px_12px] bg-surface px-[14px] py-3 wrap-anywhere [&_p+p]:mt-2.5 [&_a]:mt-2.5 [&_a]:flex [&_a]:w-fit [&_a]:max-w-full [&_a]:items-center [&_a]:gap-[6px] [&_a]:text-text [&_a]:underline [&_a]:underline-offset-[3px]">
              <p>
                {t("Hola. Elige una opción para consultar información de la tienda.", "Hello. Choose an option to find information about the store.")}
              </p>
            </div>
            {history.map((id, index) => {
              const topic = topics.find(item => item.id === id);
              return (
                <div key={index}>
                  <p className="mt-[15px] mb-[9px] ml-auto w-fit max-w-[95%] rounded-[12px_2px_12px_12px] border border-line px-[13px] py-[9px] font-semibold">
                    {t(topic.es, topic.en)}
                  </p>
                  <div className="rounded-[2px_12px_12px] bg-surface px-[14px] py-3 wrap-anywhere [&_p+p]:mt-2.5 [&_a]:mt-2.5 [&_a]:flex [&_a]:w-fit [&_a]:max-w-full [&_a]:items-center [&_a]:gap-[6px] [&_a]:text-text [&_a]:underline [&_a]:underline-offset-[3px]">
                    <Answer topic={id} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex max-h-[38%] shrink-0 flex-wrap gap-[7px] overflow-y-auto border-t border-line p-3 [&>button]:min-h-10 [&>button]:rounded-[20px] [&>button]:border [&>button]:border-line [&>button]:px-3 [&>button]:py-2.5 [&>button]:font-ui [&>button]:text-xs/[1.3] [&>button]:text-text [&>button:hover]:border-accent [&>button:hover]:bg-surface max-[600px]:[&>button]:px-2.5 max-[600px]:[&>button]:py-[9px] max-[600px]:[&>button]:text-[11px]" aria-label={t("Preguntas frecuentes", "Frequently asked questions")}>
            {topics.map(topic => (
              <button key={topic.id} type="button" onClick={() => setHistory(items => [...items.slice(-9), topic.id])}>
                {t(topic.es, topic.en)}
              </button>
            ))}
          </div>
        </section>
      )}
      <button ref={launcher} type="button" className="flex min-h-[54px] items-center justify-center gap-[9px] rounded-[50px] border border-accent bg-bg px-[18px] py-[14px] font-ui text-xs text-text shadow-[0_4px_20px_color-mix(in_srgb,var(--coal)_15%,transparent)] hover:bg-surface max-[600px]:w-[54px] max-[600px]:px-[14px] max-[600px]:[&>span]:hidden" aria-expanded={open} aria-label={t(open ? "Cerrar ayuda" : "Abrir ayuda", open ? "Close help" : "Open help")} onClick={() => open ? close() : setOpen(true)}>
        {open ? (
          <X size={23} />
        ) : (
          <MessageSquare size={23} />
        )}
        <span>
          {t("Ayuda", "Help")}
        </span>
      </button>
    </div>
  );
}
