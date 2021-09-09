import { LINK_TARGET } from "./constants.js";

export function isObject(value) {
  return (
    value &&
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value)
  );
}

export function createDOMClass(className) {
  return className ? `class="${className}"` : "";
}

export function createLinkTarget(target) {
  return `target="${target || LINK_TARGET.DEFAULT}"`;
}
