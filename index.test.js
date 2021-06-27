// eslint-disable-next-line import/no-extraneous-dependencies
import { jest } from '@jest/globals';
import { cyan } from '@js-bits/log-in-color';
import parse from './index.js';

const env = cyan(`[${typeof window === 'undefined' ? 'node' : 'jsdom'}]`);

const xml = `<?xml version="1.0" encoding="utf-8"?>
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>
`;

describe(`DOMParser: ${env}`, () => {
  test('parse', () => {
    const doc = parse(xml);
    const headings = doc.querySelectorAll('heading');
    expect(headings.length).toEqual(1);
    expect(headings[0].textContent).toEqual('Reminder');
  });
});
