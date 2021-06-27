import jsdom from 'jsdom';

const Parser = typeof DOMParser === 'undefined' ? new jsdom.JSDOM().window.DOMParser : DOMParser;

export default (str, mimeType = 'text/xml') => {
  const doc = new Parser().parseFromString(str, mimeType);
  return doc.documentElement;
};
