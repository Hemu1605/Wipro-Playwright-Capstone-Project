const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');

test.describe('Authentication Test Cases', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
  });


  // TC_AUTH_02 Verify login with valid credentials

  test('TC_AUTH_02 Verify login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.openLoginPage();
    await loginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);

    await expect(loginPage.logoutLink).toBeVisible();
  });


  // TC_AUTH_03 Verify login with invalid password

  test('TC_AUTH_03 Verify login with invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.openLoginPage();
    await loginPage.login(process.env.USER_EMAIL, 'wrongpassword123');

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Login was unsuccessful');
  });

});

// TC_AUTH_05 → Logout Functionality

test('TC_AUTH_05 Verify logout functionality', async ({ page }) => {

    const loginPage = new LoginPage(page);

    // Open homepage first
    await loginPage.goto();

    // Open login page
    await loginPage.openLoginPage();

    // Login
    await loginPage.login(
        process.env.USER_EMAIL,
        process.env.USER_PASSWORD
    );

    // Wait for logout link
    await expect(loginPage.logoutLink).toBeVisible();

    // Logout
    await loginPage.logout();

    // Verify login link appears again
    await expect(loginPage.loginLink).toBeVisible();
});

// TC_AUTH_06 → Remember Me Functionality

test('TC_AUTH_06 Verify remember me functionality', async ({ page }) => {

    const loginPage = new LoginPage(page);

    // Open homepage
    await loginPage.goto();

    // Open login page
    await loginPage.openLoginPage();

    // Login with remember me
    await loginPage.loginWithRememberMe(
        process.env.USER_EMAIL,
        process.env.USER_PASSWORD
    );

    // Verify successful login
    await expect(loginPage.logoutLink).toBeVisible();
});

// TC_AUTH_10 → Login Using Enter Key

test('TC_AUTH_10 Verify login using Enter key', async ({ page }) => {

    const loginPage = new LoginPage(page);

    // Open homepage
    await loginPage.goto();

    // Open login page
    await loginPage.openLoginPage();

    // Fill credentials
    await loginPage.emailInput.fill(process.env.USER_EMAIL);

    await loginPage.passwordInput.fill(process.env.USER_PASSWORD);

    // Press Enter key
    await page.keyboard.press('Enter');

    // Verify successful login
    await expect(loginPage.logoutLink).toBeVisible();
});

// TC_AUTH_14 → Async Loader Validation

test('TC_AUTH_14 Verify async login processing', async ({ page }) => {

    const loginPage = new LoginPage(page);

    // Open homepage
    await loginPage.goto();

    // Open login page
    await loginPage.openLoginPage();

    // Login
    await loginPage.login(
        process.env.USER_EMAIL,
        process.env.USER_PASSWORD
    );

    // Verify login success
    await expect(loginPage.logoutLink).toBeVisible();

    // Capture screenshot
    await page.screenshot({
        path: 'screenshots/login-success.png',
        fullPage: true
    });
});


// TC_AUTH_11 → Session Expiration Handling

test('TC_AUTH_11 Verify session expiration handling', async ({ page }) => {

    const loginPage = new LoginPage(page);

    // Open homepage
    await loginPage.goto();

    // Open login page
    await loginPage.openLoginPage();

    // Login
    await loginPage.login(
        process.env.USER_EMAIL,
        process.env.USER_PASSWORD
    );

    // Verify login successful
    await expect(loginPage.logoutLink).toBeVisible();

    // Simulate session clear
    await page.context().clearCookies();

    // Reload page
    await page.reload();

    // Verify login button appears again
    await expect(loginPage.loginLink).toBeVisible();
});

// TC_AUTH_13 → Multiple Failed Login Attempts

test('TC_AUTH_13 Verify multiple failed login attempts', async ({ page }) => {

    const loginPage = new LoginPage(page);

    // Open homepage
    await loginPage.goto();

    // Open login page
    await loginPage.openLoginPage();

    // Try invalid login multiple times
    for (let i = 0; i < 3; i++) {

        await loginPage.login(
            process.env.USER_EMAIL,
            'WrongPassword123'
        );

        await expect(loginPage.errorMessage)
            .toContainText('Login was unsuccessful');
    }
});


// TC_AUTH_15 → API Login Response Validation

test('TC_AUTH_15 Verify login page API response', async ({ page }) => {

    // Capture login page response
    const response = await page.goto(
        'https://demowebshop.tricentis.com/login'
    );

    // Verify status code
    expect(response.status()).toBe(200);
});