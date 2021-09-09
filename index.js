import findLinksAndReplace from "./utils/findLinksAndReplace.js";

export const vLinkify = {
  bind: function (el, binding) {
    findLinksAndReplace(el, binding?.value);
  },
  componentUpdated: function(el, binding, vNode) {
    const newEl = el;
    newEl.textContent = vNode?.children[0]?.text || '';
    findLinksAndReplace(newEl, binding?.value);
  },
};
export default {
  install(Vue, options) {
    Vue.directive("linkify", vLinkify);
  },
};
