import { TextDecoder, TextEncoder } from 'util';

const config = {
  projects: [
    {
      displayName: 'node',
      testEnvironment: 'node',
    },
    {
      displayName: 'jsdom',
      testEnvironment: 'jsdom',
      globals: {
        TextEncoder: TextDecoder,
        TextDecoder: TextEncoder,
      },
    },
  ],
};

export default config;
