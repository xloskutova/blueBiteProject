const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {

    setupNodeEvents(on, config) {
    },
    "viewportHeight": 1000,
    "viewportWidth": 1280,
    "videoUploadOnPasses": false,
    "defaultCommandTimeout": 8000,
    "chromeWebSecurity": false,
    "specPattern": "cypress/specs/**/*.js",
    "screenshotsFolder": "cypress/temp/screenshots",
    "videosFolder": "cypress/temp/videos",
    "reporter": "junit",
    "baseUrl": "https://blue-bite-dev-3.bluebite.io/04425f7c-4fdd-47f6-85b3-b800d12bb9ca",
    "reporterOptions": {
      "mochaFile": "cypress/temp/reports/report-[hash].xml",
      "toConsole": true
    },
  "watchForFileChanges": false,
  },
});
