import { readdirSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, "public", "01-Fotos-para-tienda");
const folders = {};

function collect(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      collect(path);
    } else if (/\.webp$/i.test(entry.name)) {
      const folder = relative(source, directory).replaceAll("\\", "/");
      folders[folder] ??= [];
      folders[folder].push(entry.name);
    }
  }
}

collect(source);
for (const files of Object.values(folders)) {
  files.sort((a, b) => a.localeCompare(b, "es", { numeric: true }));
}
const destination = join(root, "src", "catalog.generated.json");
mkdirSync(dirname(destination), { recursive: true });
writeFileSync(destination, JSON.stringify(folders, null, 2) + "\n");
console.log(`Catálogo: ${Object.values(folders).flat().length} fotos en ${Object.keys(folders).length} carpetas.`);
