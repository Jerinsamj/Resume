const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here (if any)
    },
    reporter: "mochawesome",  // Set mochawesome as the reporter
    reporterOptions: {
      reportDir: "cypress/results",  // Directory where reports will be saved
      overwrite: true,  // Do not overwrite previous reports
      html: true,  // Generate an HTML report
      json: true,  // Generate a JSON report
    },
  },
});
