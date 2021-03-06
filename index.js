export const vLinkify = {
   bind: function (el, binding) {

      var urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;
      var pseudoUrlPattern = /\bwww\.[\S]+\.[\S]+/gim;
      var emailAddressPattern = /[\w.]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+/gim;

      el.innerHTML = el.textContent.split(' ').map(text => {

         var matchedResults = [
            ...text.matchAll(emailAddressPattern), 
            ...text.matchAll(urlPattern), 
            ...text.matchAll(pseudoUrlPattern)
         ].flat();

         if(matchedResults.length){
            var options = createOptions(binding.value);
            matchedResults.forEach(result => {
               if (result.match(emailAddressPattern) !== null) {
                  text = text.replace(result, `<a ${options} href="mailto:${result}">${result}</a>`)
               }
               if (result.match(urlPattern) !== null || result.match(pseudoUrlPattern) !== null) {
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
