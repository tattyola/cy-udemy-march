const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '21vo9a',

  defaultCommandTimeout: 6000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      url: "https://rahulshettyacademy.com",
      // userId: '',
      // password: ''
    },
    projectId: '21vo9a',
    retries: {
      // runMode: 1,
      // openMode: 1,
    },

    // baseUrl: 'https://www.selenium.dev/selenium/web/web-form.html',
    // baseUrl: 'https://rahulshettyacademy.com/loginpagePractise/#',
    // baseUrl: 'https://rahulshettyacademy.com/seleniumPractise/#/',
    // baseUrl: 'https://rahulshettyacademy.com/AutomationPractice/',
    // baseUrl: 'https://rahulshettyacademy.com/angularpractice/',
    // baseUrl: 'https://qaclickacademy.com/practice.php/',
    specPattern: 'cypress/e2e/*.cy.js',
    chromeWebSecurity: false,
    video: false,
  },
});
