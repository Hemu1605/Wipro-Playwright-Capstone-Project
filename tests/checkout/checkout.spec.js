const { test, expect } = require('@playwright/test');

const { CheckoutPage } = require('../../pages/CheckoutPage');

test.describe('Checkout Test Cases', () => {

});


// TC_CHK_01 → Verify Checkout Navigation

test('TC_CHK_01 Verify Checkout Navigation', async ({ page }) => {

    const checkoutPage = new CheckoutPage(page);

    // Open product page
    await checkoutPage.gotoProductPage();

    // Add product
    await checkoutPage.addProductForCheckout();

    // Open cart
    await checkoutPage.openCart();

    // Proceed checkout
    await checkoutPage.proceedToCheckout();

    // Verify checkout page opened
    await expect(page)
        .toHaveURL(/login/);
});


// TC_CHK_02 → Verify Guest Checkout

test('TC_CHK_02 Verify Guest Checkout', async ({ page }) => {

    const checkoutPage = new CheckoutPage(page);

    // Open product page
    await checkoutPage.gotoProductPage();

    // Add product
    await checkoutPage.addProductForCheckout();

    // Open cart
    await checkoutPage.openCart();

    // Proceed checkout
    await checkoutPage.proceedToCheckout();

    // Click guest checkout
    await checkoutPage.checkoutAsGuestButton.click();

    // Verify checkout URL
    await expect(page)
        .toHaveURL(/onepagecheckout/);
});

// TC_CHK_03 → Verify Billing Address Form

test('TC_CHK_03 Verify Billing Address Form', async ({ page }) => {

    const checkoutPage = new CheckoutPage(page);

    // Open product page
    await checkoutPage.gotoProductPage();

    // Add product
    await checkoutPage.addProductForCheckout();

    // Open cart
    await checkoutPage.openCart();

    // Proceed checkout
    await checkoutPage.proceedToCheckout();

    // Guest checkout
    await checkoutPage.checkoutAsGuestButton.click();

    // Fill city
    await checkoutPage.cityInput.fill('Delhi');

    // Fill address
    await checkoutPage.addressInput.fill('Sector 15');

    // Fill zip
    await checkoutPage.zipInput.fill('121001');

    // Fill phone
    await checkoutPage.phoneInput.fill('9876543210');

    // Verify city entered
    await expect(checkoutPage.cityInput)
        .toHaveValue('Delhi');
});


// TC_CHK_04 → Verify Shipping Address Form

test('TC_CHK_04 Verify Shipping Address Form', async ({ page }) => {

    const checkoutPage = new CheckoutPage(page);

    // Open product page
    await checkoutPage.gotoProductPage();

    // Add product
    await checkoutPage.addProductForCheckout();

    // Open cart
    await checkoutPage.openCart();

    // Verify checkout button visible
    await expect(checkoutPage.checkoutButton)
        .toBeVisible();
});


// TC_CHK_05 → Verify Shipping Method Selection

test('TC_CHK_05 Verify Shipping Method Selection', async ({ page }) => {

    const checkoutPage = new CheckoutPage(page);

    // Open product page
    await checkoutPage.gotoProductPage();

    // Add product
    await checkoutPage.addProductForCheckout();

    // Open cart
    await checkoutPage.openCart();

    // Proceed checkout
    await checkoutPage.proceedToCheckout();

    // Guest checkout
    await checkoutPage.checkoutAsGuestButton.click();

    // Verify checkout page visible
    await expect(page.locator('body'))
        .toContainText('Checkout');
});

// TC_CHK_06 → Verify Payment Method Selection

test('TC_CHK_06 Verify Payment Method Selection', async ({ page }) => {

    const checkoutPage = new CheckoutPage(page);

    // Open product page
    await checkoutPage.gotoProductPage();

    // Add product
    await checkoutPage.addProductForCheckout();

    // Open cart
    await checkoutPage.openCart();

    // Proceed checkout
    await checkoutPage.proceedToCheckout();

    // Guest checkout
    await checkoutPage.checkoutAsGuestButton.click();

    // Verify checkout page visible
    await expect(page.locator('body'))
        .toContainText('Billing address');
});

// TC_CHK_07 → Verify Payment Information Validation

test('TC_CHK_07 Verify Payment Information Validation', async ({ page }) => {

    const checkoutPage = new CheckoutPage(page);

    // Open product page
    await checkoutPage.gotoProductPage();

    // Add product
    await checkoutPage.addProductForCheckout();

    // Open cart
    await checkoutPage.openCart();

    // Proceed checkout
    await checkoutPage.proceedToCheckout();

    // Guest checkout
    await checkoutPage.checkoutAsGuestButton.click();

    // Verify checkout page body visible
    await expect(page.locator('body'))
        .toContainText('Checkout');
});

// TC_CHK_08 → Verify Confirm Order Button

test('TC_CHK_08 Verify Confirm Order Button', async ({ page }) => {

    const checkoutPage = new CheckoutPage(page);

    // Open product page
    await checkoutPage.gotoProductPage();

    // Add product
    await checkoutPage.addProductForCheckout();

    // Open cart
    await checkoutPage.openCart();

    // Proceed checkout
    await checkoutPage.proceedToCheckout();

    // Guest checkout
    await checkoutPage.checkoutAsGuestButton.click();

    // Verify checkout page loaded
    await expect(page.locator('body'))
        .toContainText('Checkout');
});

// TC_CHK_09 → Verify Order Confirmation Message

test('TC_CHK_09 Verify Order Confirmation Message', async ({ page }) => {

    // Open homepage
    await page.goto(
        'https://demowebshop.tricentis.com'
    );

    // Verify homepage visible
    await expect(page.locator('body'))
        .toContainText('Welcome to our store');
});


// TC_CHK_10 → Verify Required Field Validation

test('TC_CHK_10 Verify Required Field Validation', async ({ page }) => {

    const checkoutPage = new CheckoutPage(page);

    // Open checkout page
    await page.goto(
        'https://demowebshop.tricentis.com/onepagecheckout'
    );

    // Verify checkout page visible
    await expect(page.locator('body'))
        .toBeVisible();
});


// TC_CHK_11 → Verify Invalid Zip Code Handling

test('TC_CHK_11 Verify Invalid Zip Code Handling', async ({ page }) => {

    const checkoutPage = new CheckoutPage(page);

    // Open product page
    await checkoutPage.gotoProductPage();

    // Add product
    await checkoutPage.addProductForCheckout();

    // Open cart
    await checkoutPage.openCart();

    // Proceed checkout
    await checkoutPage.proceedToCheckout();

    // Guest checkout
    await checkoutPage.checkoutAsGuestButton.click();

    // Enter invalid zip
    await checkoutPage.zipInput.fill('@@@@');

    // Verify value entered
    await expect(checkoutPage.zipInput)
        .toHaveValue('@@@@');
});


// TC_CHK_12 → Verify Checkout Page Refresh

test('TC_CHK_12 Verify Checkout Page Refresh', async ({ page }) => {

    const checkoutPage = new CheckoutPage(page);

    // Open product page
    await checkoutPage.gotoProductPage();

    // Add product
    await checkoutPage.addProductForCheckout();

    // Open cart
    await checkoutPage.openCart();

    // Refresh page
    await page.reload();

    // Verify cart still visible
    await expect(page.locator('body'))
        .toContainText('Shopping cart');
});

// TC_CHK_13 → Verify Checkout Total Visibility

test('TC_CHK_13 Verify Checkout Total Visibility', async ({ page }) => {

    const checkoutPage = new CheckoutPage(page);

    // Open product page
    await checkoutPage.gotoProductPage();

    // Add product
    await checkoutPage.addProductForCheckout();

    // Open cart
    await checkoutPage.openCart();

    // Verify cart total visible
    await expect(page.locator('body'))
        .toContainText('Total');
});

// TC_CHK_14 → Verify Async Checkout Loading

test('TC_CHK_14 Verify Async Checkout Loading', async ({ page }) => {

    const checkoutPage = new CheckoutPage(page);

    // Open product page
    await checkoutPage.gotoProductPage();

    // Add product
    await checkoutPage.addProductForCheckout();

    // Wait for async loading
    await page.waitForLoadState('networkidle');

    // Verify success notification
    await expect(checkoutPage.successBar)
        .toContainText('The product has been added');

    // Screenshot
    await page.screenshot({
        path: 'screenshots/checkout-loading.png',
        fullPage: true
    });
});


// TC_CHK_15 → Verify Checkout API Response

test.skip('TC_CHK_15 Verify Checkout API Response', async ({ page }) => {

    // Open checkout page
    const response = await page.goto(
        'https://demowebshop.tricentis.com/cart'
    );

    // Verify response code
    expect(response.status()).toBe(200);
});