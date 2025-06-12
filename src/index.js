import findLinksAndReplace from "./utils/findLinksAndReplace.js";

function applyDirective(el, binding, vnode) {
  const text =
    typeof vnode?.children === "string"
      ? vnode.children
      : vnode?.children?.[0]?.text || vnode?.children?.[0]?.children || "";

  if (text) {
    el.textContent = text;
  }
  findLinksAndReplace(el, binding?.value);
}

export const vLinkify = {
  // Vue 2
  bind: applyDirective,
  componentUpdated: applyDirective,
  // Vue 3
  mounted: applyDirective,
  updated: applyDirective,
};

export default {
  install(app) {
    app.directive("linkify", vLinkify);
  },
};
