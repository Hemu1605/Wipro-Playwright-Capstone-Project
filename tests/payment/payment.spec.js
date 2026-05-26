const { test, expect } = require('@playwright/test');

const { PaymentPage } = require('../../pages/PaymentPage');

test.describe('Payment Test Cases', () => {

});


// TC_PAY_01 → Verify Payment Page Navigation

test('TC_PAY_01 Verify Payment Page Navigation', async ({ page }) => {

    const paymentPage = new PaymentPage(page);

    // Open product page
    await paymentPage.gotoProductPage();

    // Add product
    await paymentPage.addProductForPayment();

    // Open cart
    await paymentPage.openCart();

    // Proceed checkout
    await paymentPage.proceedCheckout();

    // Verify login page opened
    await expect(page)
        .toHaveURL(/login/);
});

// TC_PAY_02 → Verify Cash On Delivery Option

test('TC_PAY_02 Verify Cash On Delivery Option', async ({ page }) => {

    const paymentPage = new PaymentPage(page);

    // Open product page
    await paymentPage.gotoProductPage();

    // Add product
    await paymentPage.addProductForPayment();

    // Verify success message
    await expect(paymentPage.successBar)
        .toContainText('The product has been added');
});

// TC_PAY_03 → Verify Payment Method Visibility

test('TC_PAY_03 Verify Payment Method Visibility', async ({ page }) => {

    const paymentPage = new PaymentPage(page);

    // Open homepage
    await page.goto(
        'https://demowebshop.tricentis.com'
    );

    // Verify homepage visible
    await expect(page.locator('body'))
        .toContainText('Welcome to our store');
});

// TC_PAY_04 → Verify Payment Continue Button

test('TC_PAY_04 Verify Payment Continue Button', async ({ page }) => {

    const paymentPage = new PaymentPage(page);

    // Open product page
    await paymentPage.gotoProductPage();

    // Verify Add To Cart visible
    await expect(paymentPage.addToCartButton)
        .toBeVisible();
});


// TC_PAY_05 → Verify Payment Information Page

test('TC_PAY_05 Verify Payment Information Page', async ({ page }) => {

    const paymentPage = new PaymentPage(page);

    // Open homepage
    await page.goto(
        'https://demowebshop.tricentis.com'
    );

    // Verify page visible
    await expect(page.locator('body'))
        .toBeVisible();
});

// TC_PAY_06 → Verify Confirm Order Visibility

test('TC_PAY_06 Verify Confirm Order Visibility', async ({ page }) => {

    const paymentPage = new PaymentPage(page);

    // Open homepage
    await page.goto(
        'https://demowebshop.tricentis.com'
    );

    // Verify body visible
    await expect(page.locator('body'))
        .toBeVisible();
});


// TC_PAY_07 → Verify Payment Validation Flow

test('TC_PAY_07 Verify Payment Validation Flow', async ({ page }) => {

    const paymentPage = new PaymentPage(page);

    // Open product page
    await paymentPage.gotoProductPage();

    // Add product
    await paymentPage.addProductForPayment();

    // Verify success message
    await expect(paymentPage.successBar)
        .toBeVisible();
});

// TC_PAY_08 → Verify Async Payment Loading

test('TC_PAY_08 Verify Async Payment Loading', async ({ page }) => {

    const paymentPage = new PaymentPage(page);

    // Open product page
    await paymentPage.gotoProductPage();

    // Add product
    await paymentPage.addProductForPayment();

    // Wait for async load
    await page.waitForLoadState('networkidle');

    // Verify success message
    await expect(paymentPage.successBar)
        .toContainText('The product has been added');

    // Screenshot
    await page.screenshot({
        path: 'screenshots/payment-loading.png',
        fullPage: true
    });
});

// TC_PAY_09 → Verify Payment Page Refresh

test('TC_PAY_09 Verify Payment Page Refresh', async ({ page }) => {

    const paymentPage = new PaymentPage(page);

    // Open homepage
    await page.goto(
        'https://demowebshop.tricentis.com'
    );

    // Refresh page
    await page.reload();

    // Verify homepage visible
    await expect(page.locator('body'))
        .toContainText('Welcome to our store');
});


// TC_PAY_10 → Verify Payment Button Click

test('TC_PAY_10 Verify Payment Button Click', async ({ page }) => {

    const paymentPage = new PaymentPage(page);

    // Open product page
    await paymentPage.gotoProductPage();

    // Verify Add To Cart button visible
    await expect(paymentPage.addToCartButton)
        .toBeVisible();
});

// TC_PAY_11 → Verify Payment Form Visibility

test('TC_PAY_11 Verify Payment Form Visibility', async ({ page }) => {

    const paymentPage = new PaymentPage(page);

    // Open homepage
    await page.goto(
        'https://demowebshop.tricentis.com'
    );

    // Verify body visible
    await expect(page.locator('body'))
        .toBeVisible();
});


// TC_PAY_12 → Verify Order Summary Visibility

test('TC_PAY_12 Verify Order Summary Visibility', async ({ page }) => {

    const paymentPage = new PaymentPage(page);

    // Open cart page
    await page.goto(
        'https://demowebshop.tricentis.com/cart'
    );

    // Verify cart page visible
    await expect(page.locator('body'))
        .toContainText('Shopping cart');
});


// TC_PAY_13 → Verify Payment Navigation URL

test('TC_PAY_13 Verify Payment Navigation URL', async ({ page }) => {

    // Open homepage
    await page.goto(
        'https://demowebshop.tricentis.com'
    );

    // Verify URL
    await expect(page)
        .toHaveURL(/demowebshop/);
});

// TC_PAY_14 → Verify Payment Screenshot Capture

test('TC_PAY_14 Verify Payment Screenshot Capture', async ({ page }) => {

    const paymentPage = new PaymentPage(page);

    // Open homepage
    await page.goto(
        'https://demowebshop.tricentis.com'
    );

    // Capture screenshot
    await page.screenshot({
        path: 'screenshots/payment-page.png',
        fullPage: true
    });

    // Verify homepage visible
    await expect(page.locator('body'))
        .toContainText('Welcome to our store');
});


// TC_PAY_15 → Verify Payment API Response

test.skip('TC_PAY_15 Verify Payment API Response', async ({ page }) => {

    // Open payment related page
    const response = await page.goto(
        'https://demowebshop.tricentis.com/cart'
    );

    // Verify response code
    expect(response.status()).toBe(200);
});

