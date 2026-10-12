import folders from "./catalog.generated.json";

const labels = {
  "Crucifijos": ["Crucifijos de pared", "Wall crucifixes"],
  "Cruces decorativas": ["Cruces decorativas", "Decorative crosses"],
  "Cruces de mesa": ["Cruces de mesa", "Standing crosses"],
  "Crucifijos de mesa": ["Crucifijos de mesa", "Standing crucifixes"],
  "Velas y veladoras": ["Velas y veladoras", "Candles"],
  "Cirios": ["Cirios", "Paschal candles"],
  "Portavelas y bases": ["Portavelas y bases", "Candle holders"],
  "Veladoras decoradas": ["Veladoras decoradas", "Decorated candles"],
  "Velas de colores": ["Velas de colores", "Colored candles"],
  "Biblia Latinoamericana": ["Biblia Latinoamericana", "Latin American Bible"],
  "Biblia Vulgata": ["Biblia Vulgata", "Vulgate Bible"],
  "Biblia catolica para jovenes": ["Biblia católica para jóvenes", "Catholic Youth Bible"],
  "Biblia de Jerusalen": ["Biblia de Jerusalén", "Jerusalem Bible"],
  "Biblia para la familia": ["Biblia para la familia", "Family Bible"],
  "Biblia tematica": ["Biblia temática", "Thematic Bible"],
  "Otras ediciones": ["Otras ediciones", "Other editions"],
  "Sagrada Biblia Dorada": ["Sagrada Biblia Dorada", "Golden Holy Bible"],
  "Inmaculado Corazon de Maria": ["Inmaculado Corazón de María", "Immaculate Heart of Mary"],
  "Jesus de la Divina Misericordia": ["Jesús de la Divina Misericordia", "Divine Mercy"],
  "Nina Maria": ["Niña María", "Child Mary"],
  "Sagrada Familia": ["Sagrada Familia", "Holy Family"],
  "Sagrado Corazon de Jesus": ["Sagrado Corazón de Jesús", "Sacred Heart of Jesus"],
  "San Jose": ["San José", "Saint Joseph"],
  "San Judas Tadeo": ["San Judas Tadeo", "Saint Jude Thaddeus"],
  "San Martin Caballero": ["San Martín Caballero", "Saint Martin of Tours"],
  "San Miguel Arcangel": ["San Miguel Arcángel", "Saint Michael the Archangel"],
  "Santa Ana": ["Santa Ana", "Saint Anne"],
  "Santa Elena": ["Santa Elena", "Saint Helena"],
  "Santa Lucia": ["Santa Lucía", "Saint Lucy"],
  "Santisima Trinidad": ["Santísima Trinidad", "Holy Trinity"],
  "Virgen con el Nino": ["Virgen con el Niño", "Madonna and Child"],
  "Virgen de Guadalupe": ["Virgen de Guadalupe", "Our Lady of Guadalupe"],
  "Virgen de la Medalla Milagrosa": ["Virgen de la Medalla Milagrosa", "Our Lady of the Miraculous Medal"],
  "Virgen de la Providencia": ["Virgen de la Providencia", "Our Lady of Providence"],
  "Virgen Dolorosa": ["Virgen Dolorosa", "Our Lady of Sorrows"],
  "Virgen Maria": ["Virgen María", "Virgin Mary"],
  "Virgen Maria - advocacion por confirmar": ["Otras imágenes de la Virgen", "Other statues of Mary"],
  "Virgen Rosa Mistica": ["Virgen Rosa Mística", "Our Lady Rosa Mystica"],
  "Angel de la guarda": ["Ángel de la guarda", "Guardian Angel"],
  "Espiritu Santo": ["Espíritu Santo", "Holy Spirit"],
  "Jesucristo": ["Jesucristo", "Jesus Christ"],
  "Retablos religiosos": ["Retablos religiosos", "Religious altarpieces"],
  "Ultima Cena": ["Última Cena", "Last Supper"],
  "Accesorios de bautizo": ["Accesorios de bautizo", "Baptism accessories"],
  "Calices y copones": ["Cálices y copones", "Chalices and ciboria"],
  "Custodias": ["Custodias", "Monstrances"],
  "Hostias": ["Hostias", "Communion hosts"],
  "Incienso": ["Incienso", "Incense"],
  "Juegos de bautizo": ["Juegos de bautizo", "Baptism sets"],
  "Juegos de Biblia y vela": ["Juegos de Biblia y vela", "Bible and candle sets"],
  "Vino de consagrar": ["Vino de consagrar", "Altar wine"],
  "Adornos religiosos de mesa": ["Adornos religiosos de mesa", "Religious table ornaments"],
  "Figuras de la Virgen": ["Figuras de la Virgen", "Virgin Mary figurines"],
  "Imagenes de mesa": ["Imágenes de mesa", "Tabletop religious images"],
  "Placas y dipticos con oracion": ["Placas y dípticos con oración", "Prayer plaques and diptychs"],
  "Relojes de arena": ["Relojes de arena", "Hourglasses"],
  "Tripticos e iconos": ["Trípticos e iconos", "Triptychs and icons"],
  "Corazones": ["Corazones", "Hearts"],
  "Platos decorativos": ["Platos decorativos", "Decorative plates"],
  "Exhibiciones surtidas": ["Medallas y accesorios", "Medals and accessories"]
};

const definitions = [
  ["crucifijos", "Crucifijos y cruces", "Crucifixes and crosses", "cruz.png", "Crucifijos y cruces"],
  ["velas", "Velas y veladoras", "Candles", "VELADORA.png", "Velas y veladoras"],
  ["biblias", "Biblias", "Bibles", "biblias.png", "Biblias"],
  ["esculturas", "Esculturas", "Statues", "escultura.png", "Esculturas"],
  ["cuadros", "Cuadros", "Framed art", "cuadros.png", "Cuadros"],
  ["ceremonia", "Artículos para ceremonia", "Ceremonial items", "ceremonia.png", "Articulos para ceremonia"],
  ["recuerdos", "Recuerdos", "Keepsakes", "Recuerditos.png", "Recuerdos"],
  ["decoracion", "Decoración religiosa", "Religious decor", "Recuerditos.png", "Decoracion religiosa"],
  ["relieves", "Relieves y figuras de pared", "Wall reliefs and figures", "cuadros.png", "Relieves y figuras de pared"],
  ["medallas", "Medallas y accesorios", "Medals and accessories", "Recuerditos.png", "Medallas y accesorios religiosos"]
];

function slug(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const aliases = {
  "Crucifijos": "pared",
  "Crucifijos de mesa": "base",
  "Jesus de la Divina Misericordia": "senor-de-la-misericordia",
  "San Judas Tadeo": "san-judas",
  "Angel de la guarda": "angel-de-mi-guarda",
  "Ultima Cena": "la-ultima-cena"
};

export const catalog = definitions.map(([id, es, en, image, directory]) => {
  const groups = Object.entries(folders)
    .filter(([folder]) => folder === directory || folder.startsWith(`${directory}/`))
    .map(([folder, files]) => {
      const name = folder.split("/").at(-1);
      const [labelEs, labelEn] = labels[name] ?? [name, name];
      const groupId = aliases[name] ?? slug(name);
      const products = files.map(file => {
        const number = file.replace(/\.webp$/i, "");
        const imagePath = ["01-Fotos-para-tienda", ...folder.split("/"), file].map(encodeURIComponent).join("/");
        return {
          id: `${id}/${groupId}/${number}`,
          number,
          es: labelEs,
          en: labelEn,
          image: `/${imagePath}`
        };
      });
      return { id: groupId, es: labelEs, en: labelEn, products, cover: products[0]?.image };
    })
    .sort((a, b) => a.es.localeCompare(b.es, "es"));
  // Lead the statues with the most requested devotion; preserve each photo's file number.
  if (id === "esculturas") {
    groups.sort((a, b) => Number(b.id === "virgen-de-guadalupe") - Number(a.id === "virgen-de-guadalupe"));
  }
  return { id, es, en, image, groups, photoCount: groups.reduce((sum, item) => sum + item.products.length, 0) };
}).filter(category => category.photoCount > 0);

catalog.splice(7, 0, { id: "rosarios", es: "Rosarios", en: "Rosaries", image: "rosarios.png", photoCount: 14 });
