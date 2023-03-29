const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ss5efv",
  e2e: {
    baseUrl: "https://alura-fotos.herokuapp.com",
    apiServer: "https://apialurapic.herokuapp.com",
    videoUploadOnPasses: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
