import { Children, cloneElement, isValidElement } from "react";
const translations = {
  "Artículos religiosos": "Religious articles",
  "Tradición, fe y devoción en cada detalle.": "Tradition, faith and devotion in every detail.",
  "Tradición, fe y devoción": "Tradition, faith and devotion",
  "en cada detalle.": "in every detail.",
  "Conoce nuestros artículos": "Explore our collection",
  "Cómo llegar": "Get directions",
  "Artículos Religiosos Ceballos": "Ceballos Religious Articles"
};
function translate(value) {
  if (typeof value !== "string" || !value.trim()) return value;
  const key = value.trim().replace(/\s+/g, " ");
  return translations[key] ? value.replace(value.trim(), translations[key]) : value;
}
export function localize(node, language) {
  if (language !== "en") return node;
  if (typeof node === "string") return translate(node);
  if (!isValidElement(node)) return node;
  const props = {};
  for (const key of ["alt", "title", "aria-label"]) if (node.props[key]) props[key] = translate(node.props[key]);
  if (node.props.children !== undefined) props.children = Children.map(node.props.children, child => localize(child, language));
  return cloneElement(node, props);
}

