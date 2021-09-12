import { LINK_TARGET, REGEX_PATTERN } from "./constants.js";

export function findMatchedText(text = "") {
  return [
    ...text.matchAll(REGEX_PATTERN.EMAIL_ADDRESS),
    ...text.matchAll(REGEX_PATTERN.URL),
    ...text.matchAll(REGEX_PATTERN.PSEUDO_URL),
  ].flat();
}

export function createElementAttributesOptions(params) {
  if (_isObject(params)) {
    const elClass = _createDOMClass(params?.className);
    const elLinkTarget = _createLinkTarget(params?.target);
    return `${elClass} ${elLinkTarget}`;
  }
  return _createLinkTarget();
}

export function formatText(baseText, matchedText, options) {
  if (matchedText.match(REGEX_PATTERN.EMAIL_ADDRESS) !== null) {
    baseText = _formatEmailText(baseText, matchedText, options);
  }
  if (matchedText.match(REGEX_PATTERN.URL) !== null || matchedText.match(REGEX_PATTERN.PSEUDO_URL) !== null) {
    baseText = _formatUrlText(baseText, matchedText, options);
  }
  return baseText
}

function _isObject(value) {
  return (value && typeof value === "object" && value !== null && !Array.isArray(value));
}

function _createDOMClass(className) {
  return className ? `class="${className}"` : "";
}

function _createLinkTarget(target) {
  return `target="${target || LINK_TARGET.DEFAULT}"`;
}

function _formatEmailText(baseText, matchedText, options) {
  return baseText.replace(matchedText, `<a ${options} href="mailto:${matchedText}">${matchedText}</a>`)
}

function _formatUrlText(baseText, matchedText, options) {
  const prefix = matchedText.toLowerCase().indexOf('http') === -1 && matchedText.toLowerCase().indexOf('ftp') === -1 ? '//' : '';
  return baseText.replace(matchedText, `<a ${options} href="${prefix + matchedText.trim()}">${matchedText}</a>`);
}