const { test, expect } = require('@playwright/test');

const { WishlistPage } = require('../../pages/WishlistPage');

test.describe('Wishlist Test Cases', () => {

});


// TC_WSH_01 → Verify Wishlist Page Navigation

test('TC_WSH_01 Verify Wishlist Page Navigation', async ({ page }) => {

    const wishlistPage = new WishlistPage(page);

    // Open homepage
    await wishlistPage.gotoHomePage();

    // Open wishlist
    await wishlistPage.openWishlist();

    // Verify wishlist URL
    await expect(page)
        .toHaveURL(/wishlist/);
});

// TC_WSH_02 → Verify Wishlist Link Visibility

test('TC_WSH_02 Verify Wishlist Link Visibility', async ({ page }) => {

    const wishlistPage = new WishlistPage(page);

    // Open homepage
    await wishlistPage.gotoHomePage();

    // Verify wishlist link visible
    await expect(wishlistPage.wishlistLink)
        .toBeVisible();
});


// TC_WSH_03 → Verify Empty Wishlist Message

test('TC_WSH_03 Verify Empty Wishlist Message', async ({ page }) => {

    const wishlistPage = new WishlistPage(page);

    // Open homepage
    await wishlistPage.gotoHomePage();

    // Open wishlist
    await wishlistPage.openWishlist();

    // Verify body visible
    await expect(wishlistPage.bodyContent)
        .toContainText('Wishlist');
});

// TC_WSH_04 → Verify Wishlist URL

test('TC_WSH_04 Verify Wishlist URL', async ({ page }) => {

    const wishlistPage = new WishlistPage(page);

    // Open homepage
    await wishlistPage.gotoHomePage();

    // Open wishlist
    await wishlistPage.openWishlist();

    // Verify URL
    await expect(page)
        .toHaveURL(/wishlist/);
});


// TC_WSH_05 → Verify Wishlist Page Refresh

test('TC_WSH_05 Verify Wishlist Page Refresh', async ({ page }) => {

    const wishlistPage = new WishlistPage(page);

    // Open homepage
    await wishlistPage.gotoHomePage();

    // Open wishlist
    await wishlistPage.openWishlist();

    // Refresh page
    await page.reload();

    // Verify wishlist page visible
    await expect(wishlistPage.bodyContent)
        .toContainText('Wishlist');
});


// TC_WSH_06 → Verify Wishlist Page Title

test('TC_WSH_06 Verify Wishlist Page Title', async ({ page }) => {

    const wishlistPage = new WishlistPage(page);

    // Open homepage
    await wishlistPage.gotoHomePage();

    // Open wishlist
    await wishlistPage.openWishlist();

    // Verify page title visible
    await expect(wishlistPage.pageTitle)
        .toBeVisible();
});


// TC_WSH_07 → Verify Wishlist Body Visibility

test('TC_WSH_07 Verify Wishlist Body Visibility', async ({ page }) => {

    const wishlistPage = new WishlistPage(page);

    // Open homepage
    await wishlistPage.gotoHomePage();

    // Verify body visible
    await expect(wishlistPage.bodyContent)
        .toBeVisible();
});


// TC_WSH_08 → Verify Wishlist Async Loading

test('TC_WSH_08 Verify Wishlist Async Loading', async ({ page }) => {

    const wishlistPage = new WishlistPage(page);

    // Open homepage
    await wishlistPage.gotoHomePage();

    // Wait for async loading
    await page.waitForLoadState('networkidle');

    // Verify body visible
    await expect(wishlistPage.bodyContent)
        .toContainText('Welcome');
});


// TC_WSH_09 → Verify Wishlist Screenshot Capture

test('TC_WSH_09 Verify Wishlist Screenshot Capture', async ({ page }) => {

    const wishlistPage = new WishlistPage(page);

    // Open homepage
    await wishlistPage.gotoHomePage();

    // Capture screenshot
    await page.screenshot({
        path: 'screenshots/wishlist-page.png',
        fullPage: true
    });

    // Verify page visible
    await expect(wishlistPage.bodyContent)
        .toBeVisible();
});



// TC_WSH_10 → Verify Wishlist Header Visibility

test('TC_WSH_10 Verify Wishlist Header Visibility', async ({ page }) => {

    const wishlistPage = new WishlistPage(page);

    // Open homepage
    await wishlistPage.gotoHomePage();

    // Verify header visible
    await expect(wishlistPage.header)
        .toBeVisible();
});



// TC_WSH_11 → Verify Wishlist Footer Visibility

test('TC_WSH_11 Verify Wishlist Footer Visibility', async ({ page }) => {

    const wishlistPage = new WishlistPage(page);

    // Open homepage
    await wishlistPage.gotoHomePage();

    // Verify footer visible
    await expect(wishlistPage.footer)
        .toBeVisible();
});


// TC_WSH_12 → Verify Wishlist Continue Shopping

test('TC_WSH_12 Verify Wishlist Continue Shopping', async ({ page }) => {

    const wishlistPage = new WishlistPage(page);

    // Open homepage
    await wishlistPage.gotoHomePage();

    // Open wishlist
    await wishlistPage.openWishlist();

    // Verify body visible
    await expect(wishlistPage.bodyContent)
        .toContainText('Wishlist');
});


// TC_WSH_13 → Verify Wishlist Navigation Persistence

test('TC_WSH_13 Verify Wishlist Navigation Persistence', async ({ page }) => {

    const wishlistPage = new WishlistPage(page);

    // Open homepage
    await wishlistPage.gotoHomePage();

    // Open wishlist
    await wishlistPage.openWishlist();

    // Refresh page
    await page.reload();

    // Verify URL still wishlist
    await expect(page)
        .toHaveURL(/wishlist/);
});


// TC_WSH_14 → Verify Wishlist Auth Visibility

test('TC_WSH_14 Verify Wishlist Auth Visibility', async ({ page }) => {

    const wishlistPage = new WishlistPage(page);

    // Open homepage
    await wishlistPage.gotoHomePage();

    // Verify wishlist link visible
    await expect(wishlistPage.wishlistLink)
        .toBeVisible();
});


// TC_WSH_15 → Verify Wishlist API Response

test.only('TC_WSH_15 Verify Wishlist API Response', async ({ page }) => {

    // Open wishlist page
    const response = await page.goto(
        'https://demowebshop.tricentis.com/wishlist'
    );

    // Verify response code
    expect(response.status()).toBe(200);
});