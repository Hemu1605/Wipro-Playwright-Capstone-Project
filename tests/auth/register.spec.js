const { test, expect } = require('@playwright/test');

const { RegisterPage } = require('../../pages/RegisterPage');

const { generateEmail } = require('../../utils/testData');

test.describe('Registration Test Cases', () => {

    test.beforeEach(async ({ page }) => {

        const registerPage = new RegisterPage(page);

        await registerPage.goto();
    });

    test('TC_AUTH_01 Verify registration with valid details', async ({ page }) => {

        const registerPage = new RegisterPage(page);

        const email = generateEmail();

        await registerPage.openRegisterPage();

        await registerPage.registerUser(
            'Hemraj',
            'Gujjar',
            email,
            'Hemraj@123'
        );

        await expect(registerPage.successMessage)
            .toContainText('Your registration completed');
    });

    test('TC_AUTH_07 Verify password minimum length validation', async ({ page }) => {

        const registerPage = new RegisterPage(page);

        const email = generateEmail();

        await registerPage.openRegisterPage();

        await registerPage.registerUser(
            'Hemraj',
            'Gujjar',
            email,
            '12'
        );

        await expect(page.locator('.field-validation-error'))
            .toBeVisible();
    });

});


// TC_AUTH_08 → Email Format Validation

test('TC_AUTH_08 Verify email format validation', async ({ page }) => {

    const registerPage = new RegisterPage(page);

    // Open homepage
    await registerPage.goto();

    // Open register page
    await registerPage.openRegisterPage();

    // Invalid email
    const invalidEmail = 'hemrajgmail.com';

    await registerPage.registerUser(
        'Hemraj',
        'Gujjar',
        invalidEmail,
        'Hemraj@123'
    );

    // Verify validation message
    await expect(page.locator('.field-validation-error'))
        .toBeVisible();
});

// TC_AUTH_09 → Duplicate Email Registration

test.skip('TC_AUTH_09 Verify duplicate email registration', async ({ page }) => {

    const registerPage = new RegisterPage(page);

    // Open homepage
    await registerPage.goto();

    // Open register page
    await registerPage.openRegisterPage();

    // Use already registered email
    await registerPage.registerUser(
        'Hemraj',
        'Gujjar',
        process.env.USER_EMAIL,
        process.env.USER_PASSWORD
    );

    // Verify duplicate email error
    await expect(registerPage.errorMessage)
        .toContainText('The specified email already exists');
});