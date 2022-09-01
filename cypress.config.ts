import { defineConfig } from 'cypress'

export default defineConfig({
  video: true,
  videoCompression: 15,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:3000', // dev : https://bankless-website-iwc92yq94-banklessdao.vercel.app
  },
})
