// @ts-check
const { defineConfig, devices } = require('@playwright/test');


module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  //fullyParallel: true,
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    headless: false,
    screenshot: "on",
    video: "on",
    browserName : 'chromium'
    //trace: 'on-first-retry',
  },

});

