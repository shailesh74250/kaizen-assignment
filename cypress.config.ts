import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here if necessary
    },
    baseUrl: 'http://localhost:5173', // Update this to match your app's base URL
    specPattern: 'cypress/e2e/**/*.cy.ts', // Pattern for test files
    viewportWidth: 1280, // Optional: set viewport size
    viewportHeight: 720, // Optional: set viewport size
  },
});
