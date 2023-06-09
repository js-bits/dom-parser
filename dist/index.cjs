'use strict';

var jsdom = require('jsdom');

const Parser = typeof DOMParser === 'undefined' ? new jsdom.JSDOM().window.DOMParser : DOMParser;

/**
 * @param {string} str
 * @param {DOMParserSupportedType} mimeType
 * @returns {HTMLElement}
 */
var index = (str, mimeType = 'text/xml') => {
  const doc = new Parser().parseFromString(str, mimeType);
  return doc.documentElement;
};

module.exports = index;
