const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: 'cypress/e2e/**/*.feature',
    excludeSpecPattern: '**/node_modules',
  },
})
      
    },
  },
  
  
});
