const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://jerinsamj.github.io/Resume/",
    chromeWebSecurity: false,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: true,
      html: true,
      json: true,
    },
  },
})

