import { defineConfig } from 'cypress'

export default defineConfig({
  video: true,
  videoCompression: 15,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    async setupNodeEvents(on, config) {
      const mod = await import('./cypress/plugins/index.js')
      const plugin = (mod.default ?? mod) as Cypress.PluginConfig
      return plugin(on, config)
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:3000',
  },
})
