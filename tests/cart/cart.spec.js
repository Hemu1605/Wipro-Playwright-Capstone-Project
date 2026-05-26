const { test, expect } = require('@playwright/test');

const { CartPage } = require('../../pages/CartPage');

test.describe('Shopping Cart Test Cases', () => {

    // TC_CART_01 → Verify Add Product To Cart

    test('TC_CART_01 Verify Add Product To Cart', async ({ page }) => {

        const cartPage = new CartPage(page);

        // Open product page
        await cartPage.gotoProductPage();

        // Select Slow processor
        await cartPage.selectProcessor();

        // Add product to cart
        await cartPage.addProductToCart();

        // Verify success notification
        await expect(cartPage.successBar)
            .toContainText('The product has been added');
    });

});


// TC_CART_02 → Verify Cart Quantity Update

test('TC_CART_02 Verify Cart Quantity Update', async ({ page }) => {

    const cartPage = new CartPage(page);

    // Open product page
    await cartPage.gotoProductPage();

    // Select processor
    await cartPage.selectProcessor();

    // Add product
    await cartPage.addProductToCart();

    // Open cart
    await cartPage.openCart();

    // Update quantity
    await cartPage.quantityInput.fill('2');

    // Click update cart
    await cartPage.updateCartButton.click();

    // Verify quantity updated
    await expect(cartPage.quantityInput)
        .toHaveValue('2');
});


// TC_CART_03 → Verify Remove Product From Cart

test('TC_CART_03 Verify Remove Product From Cart', async ({ page }) => {

    const cartPage = new CartPage(page);

    // Open product page
    await cartPage.gotoProductPage();

    // Select processor
    await cartPage.selectProcessor();

    // Add product
    await cartPage.addProductToCart();

    // Open cart
    await cartPage.openCart();

    // Remove product
    await cartPage.removeCheckbox.check();

    // Update cart
    await cartPage.updateCartButton.click();

    // Verify empty cart message
    await expect(cartPage.emptyCartMessage)
        .toContainText('Your Shopping Cart is empty');
});

// TC_CART_04 → Verify Empty Cart Message

test('TC_CART_04 Verify Empty Cart Message', async ({ page }) => {

    const cartPage = new CartPage(page);

    // Open cart directly
    await page.goto(
        'https://demowebshop.tricentis.com/cart'
    );

    // Verify cart page visible
    await expect(cartPage.emptyCartMessage)
        .toBeVisible();
});


// TC_CART_05 → Verify Product Price In Cart

test('TC_CART_05 Verify Product Price In Cart', async ({ page }) => {

    const cartPage = new CartPage(page);

    // Open product page
    await cartPage.gotoProductPage();

    // Select processor
    await cartPage.selectProcessor();

    // Add product
    await cartPage.addProductToCart();

    // Open cart
    await cartPage.openCart();

    // Verify price visible
    await expect(cartPage.productPrice)
        .toBeVisible();
});


// TC_CART_06 → Verify Subtotal Calculation

test('TC_CART_06 Verify Subtotal Calculation', async ({ page }) => {

    const cartPage = new CartPage(page);

    // Open product page
    await cartPage.gotoProductPage();

    // Select processor
    await cartPage.selectProcessor();

    // Add product
    await cartPage.addProductToCart();

    // Open cart
    await cartPage.openCart();

    // Verify subtotal visible
    await expect(cartPage.subtotal)
        .toBeVisible();
});

// TC_CART_07 → Verify Continue Shopping

test('TC_CART_07 Verify Continue Shopping', async ({ page }) => {

    const cartPage = new CartPage(page);

    // Open cart page
    await page.goto(
        'https://demowebshop.tricentis.com/cart'
    );

    // Verify cart page loaded
    await expect(cartPage.cartTable)
        .toBeVisible();
});

// TC_CART_08 → Verify Multiple Product Addition

test('TC_CART_08 Verify Multiple Product Addition', async ({ page }) => {

    const cartPage = new CartPage(page);

    // Open product page
    await cartPage.gotoProductPage();

    // Select processor
    await cartPage.selectProcessor();

    // Add product twice
    await cartPage.addProductToCart();

    await cartPage.addProductToCart();

    // Verify success bar visible
    await expect(cartPage.successBar)
        .toBeVisible();
});


// TC_CART_09 → Verify Quantity Persistence

test('TC_CART_09 Verify Quantity Persistence', async ({ page }) => {

    const cartPage = new CartPage(page);

    // Open product page
    await cartPage.gotoProductPage();

    // Select processor
    await cartPage.selectProcessor();

    // Add product
    await cartPage.addProductToCart();

    // Open cart
    await cartPage.openCart();

    // Verify quantity input visible
    await expect(cartPage.quantityInput)
        .toBeVisible();
});


// TC_CART_10 → Verify Negative Quantity Handling

test('TC_CART_10 Verify Negative Quantity Handling', async ({ page }) => {

    const cartPage = new CartPage(page);

    // Open product page
    await cartPage.gotoProductPage();

    // Select processor
    await cartPage.selectProcessor();

    // Add product
    await cartPage.addProductToCart();

    // Open cart
    await cartPage.openCart();

    // Fill negative quantity
    await cartPage.quantityInput.first().fill('-1');

    // Verify entered value
    await expect(cartPage.quantityInput.first())
        .toHaveValue('-1');
});


// TC_CART_11 → Verify Cart Page Navigation

test('TC_CART_11 Verify Cart Page Navigation', async ({ page }) => {

    const cartPage = new CartPage(page);

    // Open homepage
    await page.goto(
        'https://demowebshop.tricentis.com'
    );

    // Open cart
    await cartPage.openCart();

    // Verify cart URL
    await expect(page)
        .toHaveURL(/cart/);
});

// TC_CART_12 → Verify Cart Product Details

test('TC_CART_12 Verify Cart Product Details', async ({ page }) => {

    const cartPage = new CartPage(page);

    // Open product page
    await cartPage.gotoProductPage();

    // Select processor
    await cartPage.selectProcessor();

    // Add product
    await cartPage.addProductToCart();

    // Open cart
    await cartPage.openCart();

    // Verify product price visible
    await expect(cartPage.productPrice)
        .toBeVisible();
});

// TC_CART_13 → Verify Cart Refresh Persistence

test('TC_CART_13 Verify Cart Refresh Persistence', async ({ page }) => {

    const cartPage = new CartPage(page);

    // Open product page
    await cartPage.gotoProductPage();

    // Select processor
    await cartPage.selectProcessor();

    // Add product
    await cartPage.addProductToCart();

    // Open cart
    await cartPage.openCart();

    // Refresh page
    await page.reload();

    // Verify cart still visible
    await expect(cartPage.cartTable)
        .toBeVisible();
});


// TC_CART_14 → Verify Async Cart Update

test('TC_CART_14 Verify Async Cart Update', async ({ page }) => {

    const cartPage = new CartPage(page);

    // Open product page
    await cartPage.gotoProductPage();

    // Select processor
    await cartPage.selectProcessor();

    // Add product
    await cartPage.addProductToCart();

    // Wait for async loading
    await page.waitForLoadState('networkidle');

    // Verify success notification
    await expect(cartPage.successBar)
        .toContainText('The product has been added');

    // Screenshot
    await page.screenshot({
        path: 'screenshots/cart-success.png',
        fullPage: true
    });
});



// TC_CART_15 → Verify Cart API Response

test('TC_CART_15 Verify Cart API Response', async ({ page }) => {

    // Open cart page
    const response = await page.goto(
        'https://demowebshop.tricentis.com/cart'
    );

    // Verify response code
    expect(response.status()).toBe(200);
});

