import findLinksAndReplace from "./utils/findLinksAndReplace.js";

export const vLinkify = {
  bind: function (el, binding) {
    findLinksAndReplace(el, binding?.value);
  }
};
export default {
  install(Vue, options) {
    Vue.directive("linkify", vLinkify);
  },
};
