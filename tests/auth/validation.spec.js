// 1. TC_AUTH_04 → Required Field Validation


const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../../pages/LoginPage');

test.describe('Validation Test Cases', () => {

    test('TC_AUTH_04 Verify required field validation', async ({ page }) => {

        const loginPage = new LoginPage(page);

        // Open homepage
        await loginPage.goto();

        // Open login page
        await loginPage.openLoginPage();

        // Click login without entering credentials
        await loginPage.loginButton.click();

        // Verify validation message
        await expect(loginPage.errorMessage)
            .toBeVisible();
    });

});