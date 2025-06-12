export const REGEX_PATTERN = {
  URL: /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim,
  PSEUDO_URL: /\bwww\.[\S]+\.[\S]+/gim,
  EMAIL_ADDRESS: /[\w.]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+/gim,
  PHONE: /\b(?:\+?\d{1,4}[\s-]?)?(?:\(\d+\)[\s-]?)?[\d\s-]{5,}\d\b/gim,
};

export const LINK_TARGET = {
  DEFAULT: "_blank",
};

export const LINK_REL = {
  DEFAULT: "noopener noreferrer",
};
