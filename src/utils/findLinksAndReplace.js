import { createElementAttributesOptions, findMatchedText, formatText } from "./helpers.js";

export default function findLinksAndReplace(el, bindValue) {
  el.innerHTML = el.textContent.split(' ').map(baseText => {
    let matchedTexts = findMatchedText(baseText) || [];

    if (matchedTexts.length) {
      const options = createElementAttributesOptions(bindValue);

      matchedTexts.forEach(matchedText => {
        baseText = formatText(baseText, matchedText, options);
      });
    }
    return baseText;
  }).join(' ')
}