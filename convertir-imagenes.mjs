import sharp from "sharp";
import fs from "fs";
import path from "path";

const carpetaEntrada = "./public/GALERIA";
const carpetaSalida = "./public/GALERIA-WEB";

if (!fs.existsSync(carpetaSalida)) {
  fs.mkdirSync(carpetaSalida, { recursive: true });
}

const archivos = fs.readdirSync(carpetaEntrada);

for (const archivo of archivos) {
  const extension = path.extname(archivo).toLowerCase();

  if (![".jpg", ".jpeg", ".png"].includes(extension)) {
    continue;
  }

  const nombre = path.parse(archivo).name;

  await sharp(path.join(carpetaEntrada, archivo))
    .resize(1200, 900, {
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: 92 })
    .toFile(path.join(carpetaSalida, `${nombre}.webp`));

  console.log(`Convertida: ${archivo}`);
}


/*npm install sharp 





node convertir-imagenes.mjs*/