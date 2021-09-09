import { createDOMClass, createLinkTarget, isObject } from "./helpers.js";

export function createTargetOptions(params) {
  if (isObject(params)) {
    const elClass = createDOMClass(params?.className);
    const elLinkTarget = createLinkTarget(params?.target);
    return `${elClass} ${elLinkTarget}`;
  }
  return createLinkTarget();
}
