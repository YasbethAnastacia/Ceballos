const group = (id, es, en) => ({ id, es, en, products: [] });
export const catalog = [
  { id: "crucifijos", es: "Crucifijos", en: "Crucifixes", image: "cruz.png", groups: [group("pared", "De pared", "Wall crucifixes"), group("base", "De base", "Standing crucifixes")] },
  { id: "velas", es: "Velas y veladoras", en: "Candles", image: "VELADORA.png", products: [] },
  { id: "biblias", es: "Biblias", en: "Bibles", image: "biblias.png", products: [] },
  { id: "esculturas", es: "Esculturas", en: "Statues", image: "escultura.png", groups: [group("virgen-de-guadalupe", "Virgen de Guadalupe", "Our Lady of Guadalupe"), group("senor-de-la-misericordia", "Señor de la Misericordia", "Divine Mercy"), group("sagrado-corazon-de-jesus", "Sagrado Corazón de Jesús", "Sacred Heart of Jesus"), group("san-judas", "San Judas", "Saint Jude")] },
  { id: "cuadros", es: "Cuadros", en: "Framed art", image: "cuadros.png", groups: [group("angel-de-mi-guarda", "Ángel de mi guarda", "Guardian Angel"), group("virgen-de-guadalupe", "Virgen de Guadalupe", "Our Lady of Guadalupe"), group("la-ultima-cena", "La Última Cena", "The Last Supper")] },
  { id: "ceremonia", es: "Artículos para ceremonia", en: "Ceremonial items", image: "ceremonia.png", products: [] },
  { id: "recuerdos", es: "Recuerdos", en: "Keepsakes", image: "Recuerditos.png", groups: [group("llaveros", "Llaveros", "Keychains"), group("esculturas", "Esculturas", "Statues"), group("aguas-benditas", "Aguas benditas", "Holy water"), group("misterios", "Misterios", "Nativity scenes"), group("rosarios", "Rosarios", "Rosaries"), group("tablones", "Tablones", "Wooden plaques")] },
  { id: "rosarios", es: "Rosarios", en: "Rosaries", image: "rosarios.png" }
];
