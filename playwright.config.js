const { defineConfig, devices } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60000,
  expect: {
    timeout: 10000,
  },

  fullyParallel: true,

  reporter: [
    ['list'],
    ['html'],
    ['allure-playwright']
  ],

  //
  
  use: {
  baseURL: 'https://demowebshop.tricentis.com',
  headless: true,
  screenshot: 'only-on-failure',
  trace: 'on-first-retry'
},

workers: 1,
retries: 1,

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});