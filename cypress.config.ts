import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000/'
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite'
    }
  }
});
