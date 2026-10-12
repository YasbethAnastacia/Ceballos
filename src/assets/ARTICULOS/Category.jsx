import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Search, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { useLanguage } from "../../useLanguage";
import { catalog } from "../../catalog";

const pageClass = "mx-auto max-w-[1440px] min-h-[calc(100svh_-_240px)] px-[6%] pt-[50px] pb-[90px] max-[600px]:pt-8 max-[600px]:pb-16";
const buttonClass = "inline-flex min-h-11 items-center justify-center gap-2 rounded border border-line px-4 py-3 font-ui text-xs transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

function normalize(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function PhotoViewer({ products, initialIndex, onClose, category }) {
  const { t, whatsapp } = useLanguage();
  const [index, setIndex] = useState(initialIndex);
  const dialog = useRef(null);
  const product = products[index];
  const message = whatsapp + encodeURIComponent(t(
    ` Me interesa ${category.es}: ${product.es}, foto ${product.number}. Referencia: ${product.id}.`,
    ` I am interested in ${category.en}: ${product.en}, photo ${product.number}. Reference: ${product.id}.`
  ));

  useEffect(() => {
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  function move(delta) {
    setIndex(current => (current + delta + products.length) % products.length);
  }

  return (
    <dialog ref={dialog} aria-labelledby="photo-title" onCancel={onClose} onClick={event => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    }} onKeyDown={event => {
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        move(event.key === "ArrowRight" ? 1 : -1);
      }
    }} className="fixed inset-0 m-auto max-h-[94svh] w-[min(1060px,94vw)] max-w-none overflow-y-auto rounded-lg border border-line bg-bg p-0 text-text shadow-2xl backdrop:bg-black/75">
      <div className="grid min-[800px]:grid-cols-[1fr_300px]">
        <div className="relative flex min-h-0 items-center justify-center bg-surface p-3">
          <img src={product.image} alt={t(`${product.es}, foto ${product.number}`, `${product.en}, photo ${product.number}`)} className="h-[65svh] w-full object-contain max-[799px]:h-[53svh]" />
          {products.length > 1 && (
            <>
              <button type="button" className="absolute left-3 flex size-11 items-center justify-center rounded-full border border-line bg-bg/95 shadow-md hover:text-accent" onClick={() => move(-1)} aria-label={t("Foto anterior", "Previous photo")}>
                <ChevronLeft size={22} />
              </button>
              <button type="button" className="absolute right-3 flex size-11 items-center justify-center rounded-full border border-line bg-bg/95 shadow-md hover:text-accent" onClick={() => move(1)} aria-label={t("Foto siguiente", "Next photo")}>
                <ChevronRight size={22} />
              </button>
            </>
          )}
        </div>
        <section className="flex flex-col items-start gap-4 p-6 max-[799px]:pt-4">
          <button autoFocus type="button" onClick={onClose} className={`${buttonClass} self-end`} aria-label={t("Cerrar imagen", "Close image")}>
            <X size={18} />
            {t("Cerrar", "Close")}
          </button>
          <p className="font-ui text-[10px] tracking-widest text-accent uppercase">
            {t(category.es, category.en)}
          </p>
          <h2 id="photo-title" className="text-3xl leading-tight">
            {t(product.es, product.en)}
          </h2>
          <p className="font-ui text-xs text-muted" aria-live="polite">
            {t(`Foto ${product.number} · ${index + 1} de ${products.length}`, `Photo ${product.number} · ${index + 1} of ${products.length}`)}
          </p>
          <p className="text-base leading-relaxed text-muted">
            {t("Consulta el precio, las medidas y la disponibilidad de esta pieza con nosotros.", "Ask us about pricing, dimensions and availability for this piece.")}
          </p>
          <a href={message} target="_blank" rel="noopener noreferrer" className={`${buttonClass} mt-auto w-full border-accent bg-accent text-on-accent hover:text-on-accent hover:brightness-110`}>
            {t("Consultar esta pieza", "Ask about this piece")}
            <ArrowUpRight size={18} />
          </a>
        </section>
      </div>
    </dialog>
  );
}

function Collection({ category, selected, isGroup }) {
  const { t, whatsapp } = useLanguage();
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(24);
  const [photoIndex, setPhotoIndex] = useState(null);
  const groups = selected.groups?.filter(item => normalize(`${item.es} ${item.en}`).includes(normalize(query)));
  const products = selected.products ?? [];
  const title = t(selected.es, selected.en);

  return (
    <main id="main" className={pageClass}>
      <nav className="mb-8 flex flex-wrap items-center gap-3 font-ui text-xs text-muted" aria-label={t("Ruta de navegación", "Breadcrumb")}>
        <Link to="/articulos" className="inline-flex min-h-11 items-center gap-2 hover:text-accent">
          <ArrowLeft size={16} />
          {t("Artículos", "Collection")}
        </Link>
        {isGroup && (
          <>
            <span aria-hidden="true">
              /
            </span>
            <Link to={`/${category.id}`} className="inline-flex min-h-11 items-center hover:text-accent">
              {t(category.es, category.en)}
            </Link>
          </>
        )}
      </nav>
      <header className="mb-10 max-w-[850px]">
        <p className="mb-4 font-ui text-[10px] tracking-[2px] text-accent uppercase">
          {isGroup ? t(category.es, category.en) : t("Nuestra colección", "Our collection")}
        </p>
        <h1 className="text-[clamp(36px,5vw,68px)] leading-[1.08] tracking-[-1px]">
          {title}
        </h1>
        <p className="mt-5 max-w-[630px] text-lg leading-relaxed text-muted">
          {selected.groups ? t("Encuentra la pieza que buscas. Elige una colección para ver sus fotografías.", "Find the piece you are looking for. Choose a collection to see its photographs.") : t("Explora las fotografías y amplía la que te interese. Te ayudamos con precios, medidas y disponibilidad por WhatsApp.", "Browse the photos and enlarge any piece you like. Ask us about prices, dimensions and availability on WhatsApp.")}
        </p>
      </header>
      {groups && (
        <>
          <div className="mb-7 flex flex-wrap items-center justify-between gap-4 border-y border-line py-4">
            <p className="font-ui text-xs text-muted" aria-live="polite">
              {t(`${groups.length} colecciones · ${category.photoCount} fotografías`, `${groups.length} collections · ${category.photoCount} photographs`)}
            </p>
            <label className="flex w-full max-w-sm items-center gap-3 rounded border border-line bg-bg px-3 focus-within:border-accent">
              <Search size={17} className="shrink-0 text-accent" />
              <span className="sr-only">
                {t("Buscar colección", "Search collections")}
              </span>
              <input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder={t("Buscar en esta categoría…", "Search this category…")} className="min-h-11 min-w-0 flex-1 bg-transparent font-ui text-sm outline-none" />
            </label>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-9 min-[850px]:grid-cols-3 min-[1200px]:grid-cols-4 max-[600px]:gap-x-3">
            {groups.map(item => (
              <Link key={item.id} to={`/${category.id}/${item.id}`} className="group block min-w-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                <div className="aspect-[4/5] overflow-hidden rounded bg-surface p-2">
                  <img src={item.cover} alt={t(item.es, item.en)} loading="lazy" decoding="async" className="size-full object-contain transition-transform duration-300 group-hover:scale-[1.03]" />
                </div>
                <div className="mt-4 flex items-start justify-between gap-2">
                  <h2 className="text-[clamp(18px,2vw,24px)] leading-tight group-hover:text-accent">
                    {t(item.es, item.en)}
                  </h2>
                  <ArrowUpRight size={18} className="mt-1 shrink-0 text-accent" />
                </div>
                <p className="mt-2 border-b border-line pb-4 font-ui text-[11px] text-muted">
                  {t(`${item.products.length} ${item.products.length === 1 ? "fotografía" : "fotografías"}`, `${item.products.length} ${item.products.length === 1 ? "photograph" : "photographs"}`)}
                </p>
              </Link>
            ))}
          </div>
          {groups.length === 0 && (
            <p className="py-12 text-lg text-muted" role="status">
              {t("No encontramos una colección con ese nombre. Prueba otra búsqueda.", "No collection matches that name. Try another search.")}
            </p>
          )}
        </>
      )}
      {!groups && products.length > 0 && (
        <>
          <p className="mb-6 border-b border-line pb-4 font-ui text-xs text-muted" aria-live="polite">
            {t(`Mostrando ${Math.min(visible, products.length)} de ${products.length} fotografías`, `Showing ${Math.min(visible, products.length)} of ${products.length} photographs`)}
          </p>
          <div className="grid grid-cols-2 gap-x-5 gap-y-8 min-[850px]:grid-cols-3 min-[1200px]:grid-cols-4 max-[600px]:gap-x-3">
            {products.slice(0, visible).map((product, index) => (
              <button key={product.id} type="button" onClick={() => setPhotoIndex(index)} className="group min-w-0 cursor-zoom-in text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent" aria-label={t(`Ampliar ${product.es}, foto ${product.number}`, `Enlarge ${product.en}, photo ${product.number}`)}>
                <div className="relative aspect-[3/4] overflow-hidden rounded bg-surface p-2">
                  <img src={product.image} alt={t(`${product.es}, foto ${product.number}`, `${product.en}, photo ${product.number}`)} loading="lazy" decoding="async" className="size-full object-contain transition-transform duration-300 group-hover:scale-[1.03]" />
                  <span className="absolute right-3 bottom-3 rounded-full bg-bg/95 p-2 text-accent shadow-sm">
                    <ZoomIn size={18} />
                  </span>
                </div>
                <span className="mt-3 flex items-center justify-between gap-2 border-b border-line pb-3 text-lg">
                  {t(`Foto ${product.number}`, `Photo ${product.number}`)}
                  <span className="font-ui text-[10px] text-muted">
                    {t("Ver pieza", "View piece")}
                  </span>
                </span>
              </button>
            ))}
          </div>
          {visible < products.length && (
            <div className="mt-10 text-center">
              <button type="button" className={buttonClass} onClick={() => setVisible(count => count + 24)}>
                {t("Ver más fotografías", "Show more photographs")}
              </button>
            </div>
          )}
        </>
      )}
      {!groups && products.length === 0 && (
        <a className={buttonClass} href={whatsapp} target="_blank" rel="noopener noreferrer">
          {t("Consultar disponibilidad", "Ask about availability")}
          <ArrowUpRight size={18} />
        </a>
      )}
      {photoIndex !== null && (
        <PhotoViewer products={products} initialIndex={photoIndex} onClose={() => setPhotoIndex(null)} category={category} />
      )}
    </main>
  );
}

export function Category({ categoryId }) {
  const { groupId } = useParams();
  const { t } = useLanguage();
  const category = catalog.find(item => item.id === categoryId);
  const selected = groupId ? category?.groups?.find(item => item.id === groupId) : category;

  if (!selected) {
    return (
      <main id="main" className={pageClass}>
        <h1 className="mb-6 text-4xl">
          {t("Categoría no encontrada", "Category not found")}
        </h1>
        <Link to="/articulos" className={buttonClass}>
          <ArrowLeft size={18} />
          {t("Volver a artículos", "Back to collection")}
        </Link>
      </main>
    );
  }

  return (
    <Collection key={`${categoryId}/${groupId ?? ""}`} category={category} selected={selected} isGroup={Boolean(groupId)} />
  );
}
