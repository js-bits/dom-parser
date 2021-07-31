'use strict';

var jsdom = require('jsdom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var jsdom__default = /*#__PURE__*/_interopDefaultLegacy(jsdom);

const Parser = typeof DOMParser === 'undefined' ? new jsdom__default['default'].JSDOM().window.DOMParser : DOMParser;

var index = (str, mimeType = 'text/xml') => {
  const doc = new Parser().parseFromString(str, mimeType);
  return doc.documentElement;
};

module.exports = index;
