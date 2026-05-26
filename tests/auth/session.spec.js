// 2. TC_AUTH_12 → Responsive Rendering / Session File

const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../../pages/LoginPage');

test.describe('Session Test Cases', () => {

    test.skip('TC_AUTH_12 Verify login page responsive rendering', async ({ page }) => {

        const loginPage = new LoginPage(page);

        // Mobile viewport
        await page.setViewportSize({
            width: 375,
            height: 667
        });

        // Open homepage
        await loginPage.goto();

        // Open login page
        await loginPage.openLoginPage();

        // Verify login form visible
        await expect(loginPage.emailInput)
            .toBeVisible();

        await expect(loginPage.passwordInput)
            .toBeVisible();
    });

});