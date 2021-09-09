import { REGEX_PATTERN } from './utils/constants.js';

export const vLinkify = {
   bind: function (el, binding) {

      el.innerHTML = el.textContent.split(' ').map(text => {

         var matchedResults = [
            ...text.matchAll(REGEX_PATTERN.EMAIL_ADDRESS), 
            ...text.matchAll(REGEX_PATTERN.URL), 
            ...text.matchAll(REGEX_PATTERN.PSEUDO_URL)
         ].flat();

         if(matchedResults.length){
            var options = createOptions(binding.value);
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
}
function createOptions(params){
   if(params && typeof params === 'object' && params !== null && !Array.isArray(params)){
      var className = params.className ? `class="${params.className}"` : '';
      var target = `target="${params.target || '_blank'}"`;
      return `${className} ${target}`
   }else{
      return `target="_blank"`
   }
}
