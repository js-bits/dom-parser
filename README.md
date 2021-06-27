# Cross-environment (nodejs/web) DOM parser for XML and HTML

This package uses built-in `DOMParser` in a browser and `jsdom` module in a Node.js environment end exports `parse` function.

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

- [DOMParser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser)
- [jsdom](https://www.npmjs.com/package/jsdom)
