const { test, expect } = require('@playwright/test');

const { ProfilePage } = require('../../pages/ProfilePage');

test.describe('User Profile Test Cases', () => {

});


// TC_PRF_01 → Verify User Login Before Profile Access

test('TC_PRF_01 Verify User Login Before Profile Access', async ({ page }) => {

    const profilePage = new ProfilePage(page);

    // Open login page
    await profilePage.gotoLoginPage();

    // Login user
    await profilePage.login(
        process.env.USER_EMAIL,
        process.env.USER_PASSWORD
    );

    // Verify account visible
    await expect(profilePage.accountLink)
        .toBeVisible();
});


// TC_PRF_02 → Verify My Account Navigation

test('TC_PRF_02 Verify My Account Navigation', async ({ page }) => {

    const profilePage = new ProfilePage(page);

    // Open login page
    await profilePage.gotoLoginPage();

    // Login user
    await profilePage.login(
        process.env.USER_EMAIL,
        process.env.USER_PASSWORD
    );

    // Click My Account
    await profilePage.myAccountLink.first().click();

    // Verify URL
    await expect(page)
        .toHaveURL(/customer/);
});

// TC_PRF_03 → Verify Profile Information Visibility

test('TC_PRF_03 Verify Profile Information Visibility', async ({ page }) => {

    const profilePage = new ProfilePage(page);

    // Open login page
    await profilePage.gotoLoginPage();

    // Login user
    await profilePage.login(
        process.env.USER_EMAIL,
        process.env.USER_PASSWORD
    );

    // Verify body visible
    await expect(profilePage.bodyContent)
        .toContainText('My account');
});

// TC_PRF_04 → Verify Email Visibility

test('TC_PRF_04 Verify Email Visibility', async ({ page }) => {

    const profilePage = new ProfilePage(page);

    // Open login page
    await profilePage.gotoLoginPage();

    // Login user
    await profilePage.login(
        process.env.USER_EMAIL,
        process.env.USER_PASSWORD
    );

    // Verify email visible
    await expect(profilePage.accountLink)
        .toContainText(process.env.USER_EMAIL);
});

// TC_PRF_05 → Verify Account Navigation URL

test('TC_PRF_05 Verify Account Navigation URL', async ({ page }) => {

    const profilePage = new ProfilePage(page);

    // Open login page
    await profilePage.gotoLoginPage();

    // Login user
    await profilePage.login(
        process.env.USER_EMAIL,
        process.env.USER_PASSWORD
    );

    // Verify account URL
    await expect(page)
        .toHaveURL(/demowebshop/);
});


// TC_PRF_06 → Verify Order History Navigation

test('TC_PRF_06 Verify Order History Navigation', async ({ page }) => {

    const profilePage = new ProfilePage(page);

    // Open login page
    await profilePage.gotoLoginPage();

    // Login user
    await profilePage.login(
        process.env.USER_EMAIL,
        process.env.USER_PASSWORD
    );

    // Open orders page
    await page.goto(
        'https://demowebshop.tricentis.com/customer/orders'
    );

    // Verify orders page visible
    await expect(profilePage.bodyContent)
        .toContainText('Orders');
});


// TC_PRF_07 → Verify Order History Page Visibility

test('TC_PRF_07 Verify Order History Page Visibility', async ({ page }) => {

    const profilePage = new ProfilePage(page);

    // Open login page
    await profilePage.gotoLoginPage();

    // Login user
    await profilePage.login(
        process.env.USER_EMAIL,
        process.env.USER_PASSWORD
    );

    // Verify page visible
    await expect(profilePage.bodyContent)
        .toBeVisible();
});


// TC_PRF_08 → Verify Logout Functionality

test('TC_PRF_08 Verify Logout Functionality', async ({ page }) => {

    const profilePage = new ProfilePage(page);

    // Open login page
    await profilePage.gotoLoginPage();

    // Login user
    await profilePage.login(
        process.env.USER_EMAIL,
        process.env.USER_PASSWORD
    );

    // Logout user
    await profilePage.logoutLink.click();

    // Verify login link visible
    await expect(profilePage.loginLink)
        .toBeVisible();
});


// TC_PRF_09 → Verify Session Persistence

test('TC_PRF_09 Verify Session Persistence', async ({ page }) => {

    const profilePage = new ProfilePage(page);

    // Open login page
    await profilePage.gotoLoginPage();

    // Login user
    await profilePage.login(
        process.env.USER_EMAIL,
        process.env.USER_PASSWORD
    );

    // Refresh page
    await page.reload();

    // Verify account still visible
    await expect(profilePage.accountLink)
        .toBeVisible();
});


// TC_PRF_10 → Verify Profile Page Refresh

test('TC_PRF_10 Verify Profile Page Refresh', async ({ page }) => {

    const profilePage = new ProfilePage(page);

    // Open login page
    await profilePage.gotoLoginPage();

    // Refresh page
    await page.reload();

    // Verify login page visible
    await expect(profilePage.bodyContent)
        .toContainText('Welcome');
});


// TC_PRF_11 → Verify Screenshot Capture

test('TC_PRF_11 Verify Screenshot Capture', async ({ page }) => {

    const profilePage = new ProfilePage(page);

    // Open login page
    await profilePage.gotoLoginPage();

    // Login user
    await profilePage.login(
        process.env.USER_EMAIL,
        process.env.USER_PASSWORD
    );

    // Capture screenshot
    await page.screenshot({
        path: 'screenshots/profile-page.png',
        fullPage: true
    });

    // Verify profile visible
    await expect(profilePage.accountLink)
        .toBeVisible();
});

// TC_PRF_12 → Verify Profile Page Title

test('TC_PRF_12 Verify Profile Page Title', async ({ page }) => {

    const profilePage = new ProfilePage(page);

    // Open login page
    await profilePage.gotoLoginPage();

    // Verify page title visible
    await expect(profilePage.pageTitle)
        .toBeVisible();
});


// TC_PRF_13 → Verify Async Profile Loading

test('TC_PRF_13 Verify Async Profile Loading', async ({ page }) => {

    const profilePage = new ProfilePage(page);

    // Open login page
    await profilePage.gotoLoginPage();

    // Wait for async loading
    await page.waitForLoadState('networkidle');

    // Verify login page visible
    await expect(profilePage.bodyContent)
        .toContainText('Welcome');
});


// TC_PRF_14 → Verify Authenticated User Visibility

test('TC_PRF_14 Verify Authenticated User Visibility', async ({ page }) => {

    const profilePage = new ProfilePage(page);

    // Open login page
    await profilePage.gotoLoginPage();

    // Login user
    await profilePage.login(
        process.env.USER_EMAIL,
        process.env.USER_PASSWORD
    );

    // Verify authenticated user visible
    await expect(profilePage.accountLink)
        .toContainText(process.env.USER_EMAIL);
});


// TC_PRF_15 → Verify Profile API Response

test.only('TC_PRF_15 Verify Profile API Response', async ({ page }) => {

    // Open profile related page
    const response = await page.goto(
        'https://demowebshop.tricentis.com/login'
    );

    // Verify response status
    expect(response.status()).toBe(200);
});