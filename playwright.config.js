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
    ['html'],
    ['allure-playwright']
  ],

  // 
  
  use: {
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