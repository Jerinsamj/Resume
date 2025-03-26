const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://jerinsamj.github.io/Resume/",
    chromeWebSecurity: false,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "public/test-report",
      overwrite: true,
      html: true,
      json: true,
    },
  },
})

