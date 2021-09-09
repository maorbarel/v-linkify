import { REGEX_PATTERN } from './utils/constants.js';
import { createTargetOptions } from './utils/utils.js';

export const vLinkify = {
   bind: function (el, binding) {

      el.innerHTML = el.textContent.split(' ').map(text => {

         var matchedResults = [
            ...text.matchAll(REGEX_PATTERN.EMAIL_ADDRESS), 
            ...text.matchAll(REGEX_PATTERN.URL), 
            ...text.matchAll(REGEX_PATTERN.PSEUDO_URL)
         ].flat();

         if(matchedResults.length){
            var options = createTargetOptions(binding.value);
            matchedResults.forEach(result => {
               if (result.match(REGEX_PATTERN.EMAIL_ADDRESS) !== null) {
                  text = text.replace(result, `<a ${options} href="mailto:${result}">${result}</a>`)
               }
               if (result.match(REGEX_PATTERN.URL) !== null || result.match(REGEX_PATTERN.PSEUDO_URL) !== null) {
                  var prefix = result.toLowerCase().indexOf('http') === -1 && result.toLowerCase().indexOf('ftp') === -1 ? '//' : '';
                  text = text.replace(result, `<a ${options} href="${prefix + result.trim()}">${result}</a>`)
               }
            });
         }
         return text;
      }).join(' ')
   }
}
export default {
   install(Vue, options) {
      Vue.directive('linkify', vLinkify)
   }
};
