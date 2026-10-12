import { Phone, MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import { site } from "../../site.config";
import { useLanguage } from "../../useLanguage";
export function Contacto() {
  const {
    t,
    whatsapp
  } = useLanguage();
  const contacts = [[MessageCircle, "WhatsApp", "312 209 0550", whatsapp], [Phone, t("Oficina", "Office"), "312 943 7134", `tel:${site.office}`], [Phone, t("Teléfono del negocio", "Store phone"), "312 314 4173", `tel:${site.phone}`], [Mail, t("Correo electrónico", "Email"), site.email, `mailto:${site.email}`]];
  return (
    <main id="main" className="mx-auto max-w-[1440px] min-h-[calc(100svh_-_240px)] px-[6%] pt-[70px] pb-[90px] animate-[enter_.65s_both] max-[600px]:pt-[43px] max-[600px]:pb-[60px] grid grid-cols-2 items-center gap-[7%] max-[900px]:grid-cols-1 max-[900px]:gap-10">
      <header className="m-0 [&>h1]:mt-[18px] [&>h1]:mb-[23px] max-[600px]:[&>h1]:text-[clamp(38px,10vw,54px)] max-[600px]:[&>h1]:tracking-[-1px] [&>p:not(:first-child)]:max-w-[610px] [&>p:not(:first-child)]:text-[19px] [&>p:not(:first-child)]:leading-[1.65] [&>p:not(:first-child)]:text-muted max-[600px]:[&>p:not(:first-child)]:text-[17px]">
        <p className="font-ui text-[10px]/[1.7] tracking-[2.2px] text-accent uppercase max-[600px]:text-[9px] max-[600px]:tracking-[1.5px]">
          {t("ESTAMOS PARA SERVIRTE", "WE ARE HERE TO HELP")}
        </p>
        <h1 className="text-[clamp(42px,5.5vw,80px)] leading-[1.06] font-normal tracking-[-1.8px] [&_em]:font-normal [&_em]:text-accent">
          {t("Contacto", "Contact")}
        </h1>
        <p>
          {t("Para preguntas sobre artículos, precios o pedidos, comunícate con nosotros.", "Contact us for questions about items, prices or orders.")}
        </p>
        <a className="inline-flex items-center gap-2.5 border-b border-line py-2.5 font-ui text-xs/[1.6] hover:text-accent [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-[3px] hover:[&_svg]:-translate-y-0.5 mt-[26px]" href={site.facebook} target="_blank" rel="noreferrer">
          {t("Encuéntranos en Facebook", "Find us on Facebook")}
          <ArrowUpRight size={18} />
        </a>
      </header>
      <div>
        {contacts.map(([Icon, label, value, href]) => (
          <a className="flex items-center gap-5 border-b border-line py-[30px] transition-colors duration-200 hover:text-accent max-[600px]:gap-[14px] [&>svg]:shrink-0 [&>svg]:text-accent [&>svg:last-child]:ml-auto [&_h2]:mt-[9px] [&_h2]:text-[clamp(18px,2vw,27px)] [&_h2]:wrap-anywhere max-[600px]:[&_h2]:text-xl" key={label} href={href} {...href.startsWith("https") ? { target: "_blank", rel: "noreferrer" } : {}}>
            <Icon size={23} />
            <div>
              <span className="font-ui text-[10px]/[1.7] tracking-[2.2px] text-accent uppercase max-[600px]:text-[9px] max-[600px]:tracking-[1.5px]">
                {label}
              </span>
              <h2 className="text-[27px]/[1.2] font-normal">
                {value}
              </h2>
            </div>
            <ArrowUpRight size={20} />
          </a>
        ))}
      </div>
    </main>
  );
}
