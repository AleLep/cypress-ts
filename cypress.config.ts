import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "f3o9bi",
  e2e: {
    baseUrl: 'http://localhost:8081',
    env: {
      backendUrl: 'http://localhost:4001'
    },
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--disable-search-engine-choice-screen')
        }
        return launchOptions
      })
    },
  },
});
