import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setupNodeEvents() {
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
