# Cross-environment (nodejs/web) DOM parser for XML and HTML

This package uses built-in [DOMParser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser) in a browser and [jsdom](https://www.npmjs.com/package/jsdom) module in a Node.js environment end exports `parse` function.

## Installation

Install with npm:

```
npm install @js-bits/dom-parser
```

Install with yarn:

```
yarn add @js-bits/dom-parser
```

Import where you need it:

```javascript
import parse from '@js-bits/dom-parser';
```

## How to use

```javascript
const xml = `<?xml version="1.0" encoding="utf-8"?>
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>
`;

const doc = parse(xml); // Document
console.log(doc.querySelectorAll('heading')); // NodeList
```

Optionally accepts second `mimeType` parameter (`"text/xml"` by default).

## Notes

- Minimal size (bytes) in a browser since [DOMParser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser) is natively supported. Does not include any polyfills.
- Requires [ECMAScript modules](https://nodejs.org/api/esm.html) to be enabled in Node.js environment. Otherwise, compile into a CommonJS module.
