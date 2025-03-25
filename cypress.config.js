const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // You can implement event listeners here if needed
    },
    reporter: "mochawesome",  // Set Mochawesome as the reporter
    reporterOptions: {
      reportDir: "cypress/results",  // Path where reports are saved
      overwrite: false,
      html: true,  // Generate HTML report
      json: true   // Generate JSON report
    }
  }
});
