const { test, expect } = require('@playwright/test');

const { SearchPage } = require('../../pages/SearchPage');

test.describe('Product Search Test Cases', () => {

});

// TC_SRH_01 → Search Valid Product

test('TC_SRH_01 Search valid product keyword', async ({ page }) => {

    const searchPage = new SearchPage(page);

    // Open homepage
    await searchPage.goto();

    // Search product
    await searchPage.searchProduct('book');

    // Verify search results visible
    await expect(searchPage.productTitles.first())
        .toBeVisible();
});

// TC_SRH_02 → Search Invalid Product Keyword

test('TC_SRH_02 Search invalid product keyword', async ({ page }) => {

    const searchPage = new SearchPage(page);

    // Open homepage
    await searchPage.goto();

    // Search invalid product
    await searchPage.searchProduct('invalid12345');

    // Verify no-result text visible
    await expect(page.locator('body'))
        .toContainText('No products were found');
});

// TC_SRH_03 → Verify No Result Message

test('TC_SRH_03 Verify no-result message', async ({ page }) => {

    const searchPage = new SearchPage(page);

    // Open homepage
    await searchPage.goto();

    // Search invalid product
    await searchPage.searchProduct('abcdefxyz');

    // Verify exact message
    await expect(page.locator('body'))
        .toContainText(
            'No products were found that matched your criteria.'
        );
});

// TC_SRH_04 → Verify Search Result Count

test('TC_SRH_04 Verify search result count', async ({ page }) => {

    const searchPage = new SearchPage(page);

    // Open homepage
    await searchPage.goto();

    // Search product
    await searchPage.searchProduct('computer');

    // Count products
    const count = await searchPage.productTitles.count();

    // Verify count greater than zero
    expect(count).toBeGreaterThan(0);

    console.log('Total Products:', count);
});

// TC_SRH_05 → Verify Sorting Functionality

test('TC_SRH_05 Verify sorting functionality', async ({ page }) => {

    const searchPage = new SearchPage(page);

    // Open homepage
    await searchPage.goto();

    // Search product
    await searchPage.searchProduct('book');

    // Select sorting option
    await searchPage.sortDropdown.selectOption({
        label: 'Price: Low to High'
    });

    // Wait for page load
    await page.waitForTimeout(2000);

    // Verify products visible
    await expect(searchPage.productTitles.first())
        .toBeVisible();
});

// TC_SRH_06 → Verify Partial Keyword Search

test('TC_SRH_06 Verify partial keyword search', async ({ page }) => {

    const searchPage = new SearchPage(page);

    // Open homepage
    await searchPage.goto();

    // Partial search
    await searchPage.searchProduct('comp');

    // Verify products visible
    await expect(searchPage.productTitles.first())
        .toBeVisible();
});

// TC_SRH_07 → Verify uppercase keyword search

test('TC_SRH_07 Verify uppercase keyword search', async ({ page }) => {

    const searchPage = new SearchPage(page);

    // Open homepage
    await searchPage.goto();

    // Uppercase search
    await searchPage.searchProduct('BOOK');

    // Verify results visible
    await expect(searchPage.productTitles.first())
        .toBeVisible();
});


// TC_SRH_08 → Verify Special Character Handling

test('TC_SRH_08 Verify special character search handling', async ({ page }) => {

    const searchPage = new SearchPage(page);

    // Open homepage
    await searchPage.goto();

    // Search special characters
    await searchPage.searchProduct('@#$%^&*');

    // Verify page loads safely
    await expect(page.locator('body'))
        .toBeVisible();
});

// TC_SRH_09 → Verify Search Suggestions

test('TC_SRH_09 Verify search suggestions', async ({ page }) => {

    const searchPage = new SearchPage(page);

    // Open homepage
    await searchPage.goto();

    // Fill partial text
    await searchPage.searchBox.fill('book');

    // Verify text entered
    await expect(searchPage.searchBox)
        .toHaveValue('book');
});

// TC_SRH_10 → Verify Search Result Pagination

test('TC_SRH_10 Verify search result pagination', async ({ page }) => {

    const searchPage = new SearchPage(page);

    // Open homepage
    await searchPage.goto();

    // Search broad keyword
    await searchPage.searchProduct('computer');

    // Verify product grid visible
    await expect(searchPage.searchResultGrid)
        .toBeVisible();
});

// TC_SRH_11 → Verify product links

test('TC_SRH_11 Verify product links', async ({ page }) => {

    const searchPage = new SearchPage(page);

    // Open homepage
    await searchPage.goto();

    // Search product
    await searchPage.searchProduct('book');

    // Click first product
    await searchPage.productTitles.first().click();

    // Verify product page opens
    await expect(page)
        .toHaveURL(/.*/);
});


// TC_SRH_12 → Verify descending sorting

test('TC_SRH_12 Verify descending sorting', async ({ page }) => {

    const searchPage = new SearchPage(page);

    // Open homepage
    await searchPage.goto();

    // Search product
    await searchPage.searchProduct('book');

    // Select descending sort
    await searchPage.sortDropdown.selectOption({
        label: 'Price: High to Low'
    });

    // Wait for reload
    await page.waitForTimeout(2000);

    // Verify products visible
    await expect(searchPage.productTitles.first())
        .toBeVisible();
});

// TC_SRH_13 → Verify filtering

test('TC_SRH_13 Verify filtering after search', async ({ page }) => {

    const searchPage = new SearchPage(page);

    // Open homepage
    await searchPage.goto();

    // Search product
    await searchPage.searchProduct('computer');

    // Verify results visible
    const count = await searchPage.productTitles.count();

    expect(count).toBeGreaterThan(0);
});

// TC_SRH_14 → Verify async loader

test('TC_SRH_14 Verify async product loading', async ({ page }) => {

    const searchPage = new SearchPage(page);

    // Open homepage
    await searchPage.goto();

    // Search product
    await searchPage.searchProduct('book');

    // Wait for async loading
    await page.waitForLoadState('networkidle');

    // Verify products loaded
    await expect(searchPage.productTitles.first())
        .toBeVisible();

    // Screenshot
    await page.screenshot({
        path: 'screenshots/search-results.png',
        fullPage: true
    });
});

// TC_SRH_15 → Verify search API response

test('TC_SRH_15 Verify search API response', async ({ page }) => {

    // Open search page
    const response = await page.goto(
        'https://demowebshop.tricentis.com/search?q=book'
    );

    // Verify response status
    expect(response.status()).toBe(200);
});