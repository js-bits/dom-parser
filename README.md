# Cross-environment (nodejs/web) DOM parser for XML and HTML

This package uses built-in [DOMParser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser) in a browser and [jsdom](https://www.npmjs.com/package/jsdom) module in a Node.js environment and exports `parse` function.

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

or require for CommonJS:

```javascript
const parse = require('@js-bits/dom-parser');
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

```javascript
const svg = `<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
`;

const doc = parse(svg, 'image/svg+xml'); // Document
console.log(doc.querySelectorAll('circle')); // NodeList
```

## Notes

- Minimal size (bytes) in a browser since [DOMParser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser) is natively supported. Does not include any polyfills.
