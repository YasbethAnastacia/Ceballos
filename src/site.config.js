export const site = {
  whatsapp: "523122090550",
  office: "+523129437134",
  phone: "+523123144173",
  email: "artsacrocol@hotmail.com",
  address: "Av. Constitución 58 y 60, Centro, 28000 Colima, Col.",
  maps: "https://www.google.com/maps/search/?api=1&query=Ceballos+Articulos+Religiosos+Colima",
  facebook: "https://www.facebook.com/CeballosArticulosReligiosos",
  hours: { es: "Lunes a sábado, de 9:00 a. m. a 5:00 p. m., en horario corrido.", en: "Monday to Saturday, 9 a.m. to 5 p.m., open throughout the day." },
  defaultTheme: "light"
};
export const heroImages = {
  enero: { desktop: "/HERO/escritorio.webp", mobile: "/HERO/cel.webp" },
  febrero: { desktop: "/HERO/escritorio.webp", mobile: "/HERO/cel.webp" },
  marzo: { desktop: "/HERO/escritorio.webp", mobile: "/HERO/cel.webp" },
  abril: { desktop: "/HERO/escritorio.webp", mobile: "/HERO/cel.webp" },
  mayo: { desktop: "/HERO/escritorio.webp", mobile: "/HERO/cel.webp" },
  junio: { desktop: "/HERO/escritorio.webp", mobile: "/HERO/cel.webp" },
  julio: { desktop: "/HERO/escritorio.webp", mobile: "/HERO/cel.webp" },
  agosto: { desktop: "/HERO/escritorio.webp", mobile: "/HERO/cel.webp" },
  septiembre: { desktop: "/HERO/escritorio.webp", mobile: "/HERO/cel.webp" },
  octubre: { desktop: "/HERO/escritorio.webp", mobile: "/HERO/cel.webp" },
  noviembre: { desktop: "/HERO/escritorio.webp", mobile: "/HERO/cel.webp" },
  diciembre: { desktop: "/HERO/escritorio.webp", mobile: "/HERO/cel.webp" }
};
export const monthlyHero = (date = new Date()) => Object.values(heroImages)[date.getMonth()];



