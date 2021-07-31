// eslint-disable-next-line import/no-extraneous-dependencies
import { jest } from '@jest/globals';
import parse from './index.js';
// const parse = require('./dist/index.cjs');

const xml = `<?xml version="1.0" encoding="utf-8"?>
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>
`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
`;

describe(`DOMParser`, () => {
  test('parse xml', () => {
    const doc = parse(xml);
    const headings = doc.querySelectorAll('heading');
    expect(headings.length).toEqual(1);
    expect(headings[0].textContent).toEqual('Reminder');
  });

  test('parse svg', () => {
    const doc = parse(svg, 'image/svg+xml');
    const headings = doc.querySelectorAll('circle');
    expect(headings.length).toEqual(1);
    expect(headings[0].getAttribute('stroke')).toEqual('black');
  });
});
