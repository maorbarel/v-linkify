export const linkify = {
   bind: function (el, binding) {
      let urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;
      let pseudoUrlPattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
      let emailAddressPattern = /[\w.]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+/gim;

      let modifiedText = el.textContent;

      let matchedResults = [
         ...modifiedText.matchAll(emailAddressPattern), 
         ...modifiedText.matchAll(urlPattern), 
         ...modifiedText.matchAll(pseudoUrlPattern)
      ].flat();

      if (matchedResults) {
         let options = createOptions(binding?.value)

         matchedResults.forEach(result => {
            if (result.match(emailAddressPattern)?.length) {
               modifiedText = modifiedText.replace(result, `<a ${options} href="mailto:${result}">${result}</a>`)
            }
            if (result.match(urlPattern)?.length || result.match(pseudoUrlPattern)?.length) {
               let prefix = result.toLowerCase().indexOf('http') === -1 && result.toLowerCase().indexOf('ftp') === -1 ? '//' : '';
               modifiedText = modifiedText.replace(result, `<a ${options} href="${prefix + result.trim()}">${result}</a>`)
            }
         });
      }
      el.innerHTML = modifiedText
   }
}
export default {
   install(Vue, options) {
      Vue.directive('linkify', linkify)
   }
}
function createOptions(params){
   if(typeof params === 'object' && params !== null && !Array.isArray(params)){
      let className = params?.className ? `class="${params.className}"` : '';
      let target = `target="${params.target || '_blank'}"`;
      return `${className} ${target}`
   }else{
      return `target="_blank"`
   }
}