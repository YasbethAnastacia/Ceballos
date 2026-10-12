import { useEffect, useState } from "react";
import { site } from "./site.config";
import { LanguageContext } from "./useLanguage";
export function LanguageProvider({
  children
}) {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem("ceballos-language") === "en" ? "en" : "es";
    } catch {
      return "es";
    }
  });
  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem("ceballos-language", language);
    } catch {}
  }, [language]);
  const t = (es, en) => language === "es" ? es : en;
  const whatsapp = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(t("Hola, quisiera más información sobre sus artículos.", "Hello, I would like more information about your religious items."))}`;
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, whatsapp }}>
      {children}
    </LanguageContext.Provider>
  );
}
