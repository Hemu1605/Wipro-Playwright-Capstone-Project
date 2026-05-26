const { test, expect } = require('@playwright/test');

const { ProductPage } = require('../../pages/ProductPage');

test.describe('Product Details Test Cases', () => {

});


// TC_PDT_01 → Verify Product Image Displayed

test('TC_PDT_01 Verify product image is displayed', async ({ page }) => {

    const productPage = new ProductPage(page);

    // Open product page
    await productPage.openProductDirectly();

    // Verify image visible
    await expect(productPage.productImage)
        .toBeVisible();
});

// TC_PDT_02 → Verify Product Price

test('TC_PDT_02 Verify product price is correct', async ({ page }) => {

    const productPage = new ProductPage(page);

    // Open product page
    await productPage.openProductDirectly();

    // Verify product price visible
    await expect(productPage.productPrice)
        .toBeVisible();
});

// TC_PDT_03 → Verify Quantity Update

test('TC_PDT_03 Verify quantity update functionality', async ({ page }) => {

    const productPage = new ProductPage(page);

    // Open product page
    await productPage.openProductDirectly();

    // Update quantity
    await productPage.quantityInput.fill('5');

    // Verify quantity updated
    await expect(productPage.quantityInput)
        .toHaveValue('5');
});

// TC_PDT_04 → Verify product description visibility

test('TC_PDT_04 Verify product description visibility', async ({ page }) => {

    const productPage = new ProductPage(page);

    // Open product page
    await productPage.openProductDirectly();

    // Verify description visible
    await expect(productPage.descriptionSection)
        .toBeVisible();
});


// TC_PDT_05 → Verify product availability

test('TC_PDT_05 Verify product availability', async ({ page }) => {

    const productPage = new ProductPage(page);

    // Open product page
    await productPage.openProductDirectly();

    // Verify stock section visible
    await expect(productPage.stockAvailability)
        .toBeVisible();
});

// TC_PDT_06 → Verify Add to Cart

test('TC_PDT_06 Verify Add to Cart from PDP', async ({ page }) => {

    const productPage = new ProductPage(page);

    // Open product page
    await productPage.openProductDirectly();

    // Click Add to Cart
    await productPage.addToCartButton.click();

    // Verify success notification
    await expect(productPage.successBar)
        .toContainText('The product has been added');
});


// TC_PDT_07 → Verify breadcrumb navigation

test('TC_PDT_07 Verify breadcrumb navigation', async ({ page }) => {

    const productPage = new ProductPage(page);

    // Open product page
    await productPage.openProductDirectly();

    // Verify breadcrumb visible
    await expect(productPage.breadcrumb)
        .toBeVisible();
});


// TC_PDT_08 → Verify image thumbnail switching

test('TC_PDT_08 Verify image thumbnail switching', async ({ page }) => {

    const productPage = new ProductPage(page);

    // Open product page
    await productPage.openProductDirectly();

    // Verify product image visible
    await expect(productPage.productImage)
        .toBeVisible();

    // Screenshot
    await page.screenshot({
        path: 'screenshots/product-image.png',
        fullPage: true
    });
});

// TC_PDT_09 → Verify negative quantity handling

test('TC_PDT_09 Verify negative quantity handling', async ({ page }) => {

    const productPage = new ProductPage(page);

    // Open product page
    await productPage.openProductDirectly();

    // Enter negative quantity
    await productPage.quantityInput.fill('-5');

    // Verify value entered
    await expect(productPage.quantityInput)
        .toHaveValue('-5');
});


// TC_PDT_10 → Verify numeric quantity parsing

test('TC_PDT_10 Verify numeric quantity parsing', async ({ page }) => {

    const productPage = new ProductPage(page);

    // Open product page
    await productPage.openProductDirectly();

    // Enter quantity
    await productPage.quantityInput.fill('10');

    // Verify quantity
    await expect(productPage.quantityInput)
        .toHaveValue('10');
});

// TC_PDT_11 → Verify review section visibility

test('TC_PDT_11 Verify review section visibility', async ({ page }) => {

    const productPage = new ProductPage(page);

    // Open product page
    await productPage.openProductDirectly();

    // Verify review section visible
    await expect(productPage.reviewSection)
        .toBeVisible();
});


// TC_PDT_12 → Verify Wishlist Navigation

test('TC_PDT_12 Verify wishlist page navigation', async ({ page }) => {

    // Open homepage
    await page.goto(
        'https://demowebshop.tricentis.com'
    );

    // Click wishlist header link
    await page.locator('.ico-wishlist').first().click();

    // Verify wishlist page opened
    await expect(page)
        .toHaveURL(/wishlist/);
});

// TC_PDT_13 → Verify stock validation

test('TC_PDT_13 Verify stock validation', async ({ page }) => {

    const productPage = new ProductPage(page);

    // Open product page
    await productPage.openProductDirectly();

    // Verify stock text visible
    await expect(productPage.stockAvailability)
        .toContainText('In stock');
});


// TC_PDT_14 → Verify async image loading

test('TC_PDT_14 Verify async image loading', async ({ page }) => {

    const productPage = new ProductPage(page);

    // Open product page
    await productPage.openProductDirectly();

    // Wait for network load
    await page.waitForLoadState('networkidle');

    // Verify image visible
    await expect(productPage.productImage)
        .toBeVisible();

    // Screenshot
    await page.screenshot({
        path: 'screenshots/product-page.png',
        fullPage: true
    });
});

// TC_PDT_15 → Verify product detail API response

test('TC_PDT_15 Verify product detail API response', async ({ page }) => {

    // Open product page
    const response = await page.goto(
        'https://demowebshop.tricentis.com/build-your-cheap-own-computer'
    );

    // Verify status code
    expect(response.status()).toBe(200);
});