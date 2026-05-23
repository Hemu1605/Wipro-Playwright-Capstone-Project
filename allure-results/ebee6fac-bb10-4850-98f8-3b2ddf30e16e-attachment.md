# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: search/search.spec.js >> TC_SRH_02 Search invalid product keyword
- Location: tests/search/search.spec.js:28:6

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.no-result')
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('.no-result')

```

```yaml
- link "Tricentis Demo Web Shop":
  - /url: /
  - img "Tricentis Demo Web Shop"
- list:
  - listitem:
    - link "Register":
      - /url: /register
  - listitem:
    - link "Log in":
      - /url: /login
  - listitem:
    - link "Shopping cart (0)":
      - /url: /cart
  - listitem:
    - link "Wishlist (0)":
      - /url: /wishlist
- status
- textbox: Search store
- button "Search"
- list:
  - listitem:
    - link "Books":
      - /url: /books
  - listitem:
    - link "Computers":
      - /url: /computers
  - listitem:
    - link "Electronics":
      - /url: /electronics
  - listitem:
    - link "Apparel & Shoes":
      - /url: /apparel-shoes
  - listitem:
    - link "Digital downloads":
      - /url: /digital-downloads
  - listitem:
    - link "Jewelry":
      - /url: /jewelry
  - listitem:
    - link "Gift Cards":
      - /url: /gift-cards
- strong: Categories
- list:
  - listitem:
    - link "Books":
      - /url: /books
  - listitem:
    - link "Computers":
      - /url: /computers
  - listitem:
    - link "Electronics":
      - /url: /electronics
  - listitem:
    - link "Apparel & Shoes":
      - /url: /apparel-shoes
  - listitem:
    - link "Digital downloads":
      - /url: /digital-downloads
  - listitem:
    - link "Jewelry":
      - /url: /jewelry
  - listitem:
    - link "Gift Cards":
      - /url: /gift-cards
- strong: Manufacturers
- list:
  - listitem:
    - link "Tricentis":
      - /url: /tricentis
- strong: Newsletter
- text: "Sign up for our newsletter:"
- textbox
- button "Subscribe"
- heading "Search" [level=1]
- text: "Search keyword:"
- textbox "Search keyword:": invalid12345
- checkbox "Advanced search"
- text: Advanced search
- button "Search"
- strong: No products were found that matched your criteria.
- heading "Information" [level=3]
- list:
  - listitem:
    - link "Sitemap":
      - /url: /sitemap
  - listitem:
    - link "Shipping & Returns":
      - /url: /shipping-returns
  - listitem:
    - link "Privacy Notice":
      - /url: /privacy-policy
  - listitem:
    - link "Conditions of Use":
      - /url: /conditions-of-use
  - listitem:
    - link "About us":
      - /url: /about-us
  - listitem:
    - link "Contact us":
      - /url: /contactus
- heading "Customer service" [level=3]
- list:
  - listitem:
    - link "Search":
      - /url: /search
  - listitem:
    - link "News":
      - /url: /news
  - listitem:
    - link "Blog":
      - /url: /blog
  - listitem:
    - link "Recently viewed products":
      - /url: /recentlyviewedproducts
  - listitem:
    - link "Compare products list":
      - /url: /compareproducts
  - listitem:
    - link "New products":
      - /url: /newproducts
- heading "My account" [level=3]
- list:
  - listitem:
    - link "My account":
      - /url: /customer/info
  - listitem:
    - link "Orders":
      - /url: /customer/orders
  - listitem:
    - link "Addresses":
      - /url: /customer/addresses
  - listitem:
    - link "Shopping cart":
      - /url: /cart
  - listitem:
    - link "Wishlist":
      - /url: /wishlist
- heading "Follow us" [level=3]
- list:
  - listitem:
    - link "Facebook":
      - /url: http://www.facebook.com/nopCommerce
  - listitem:
    - link "Twitter":
      - /url: https://twitter.com/nopCommerce
  - listitem:
    - link "RSS":
      - /url: /news/rss/1
  - listitem:
    - link "YouTube":
      - /url: http://www.youtube.com/user/nopCommerce
  - listitem:
    - link "Google+":
      - /url: https://plus.google.com/+nopcommerce
- text: Powered by
- link "nopCommerce":
  - /url: http://www.nopcommerce.com/
- text: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | 
  3   | const { SearchPage } = require('../../pages/SearchPage');
  4   | 
  5   | test.describe('Product Search Test Cases', () => {
  6   | 
  7   | });
  8   | 
  9   | // TC_SRH_01 → Search Valid Product
  10  | 
  11  | test('TC_SRH_01 Search valid product keyword', async ({ page }) => {
  12  | 
  13  |     const searchPage = new SearchPage(page);
  14  | 
  15  |     // Open homepage
  16  |     await searchPage.goto();
  17  | 
  18  |     // Search product
  19  |     await searchPage.searchProduct('book');
  20  | 
  21  |     // Verify search results visible
  22  |     await expect(searchPage.productTitles.first())
  23  |         .toBeVisible();
  24  | });
  25  | 
  26  | // TC_SRH_02 → Search Invalid Product Keyword
  27  | 
  28  | test.only('TC_SRH_02 Search invalid product keyword', async ({ page }) => {
  29  | 
  30  |     const searchPage = new SearchPage(page);
  31  | 
  32  |     // Open homepage
  33  |     await searchPage.goto();
  34  | 
  35  |     // Search invalid product
  36  |     await searchPage.searchProduct('invalid12345');
  37  | 
  38  |     // Verify no-result message visible
  39  |     await expect(searchPage.noResultMessage)
> 40  |         .toBeVisible();
      |          ^ Error: expect(locator).toBeVisible() failed
  41  | });
  42  | 
  43  | // TC_SRH_03 → Verify No Result Message
  44  | 
  45  | test('TC_SRH_03 Verify no-result message', async ({ page }) => {
  46  | 
  47  |     const searchPage = new SearchPage(page);
  48  | 
  49  |     // Open homepage
  50  |     await searchPage.goto();
  51  | 
  52  |     // Search invalid product
  53  |     await searchPage.searchProduct('abcdefxyz');
  54  | 
  55  |     // Verify exact message
  56  |     await expect(searchPage.noResultMessage)
  57  |         .toContainText('No products were found');
  58  | });
  59  | 
  60  | // TC_SRH_04 → Verify Search Result Count
  61  | 
  62  | test('TC_SRH_04 Verify search result count', async ({ page }) => {
  63  | 
  64  |     const searchPage = new SearchPage(page);
  65  | 
  66  |     // Open homepage
  67  |     await searchPage.goto();
  68  | 
  69  |     // Search product
  70  |     await searchPage.searchProduct('computer');
  71  | 
  72  |     // Count products
  73  |     const count = await searchPage.productTitles.count();
  74  | 
  75  |     // Verify count greater than zero
  76  |     expect(count).toBeGreaterThan(0);
  77  | 
  78  |     console.log('Total Products:', count);
  79  | });
  80  | 
  81  | // TC_SRH_05 → Verify Sorting Functionality
  82  | 
  83  | test('TC_SRH_05 Verify sorting functionality', async ({ page }) => {
  84  | 
  85  |     const searchPage = new SearchPage(page);
  86  | 
  87  |     // Open homepage
  88  |     await searchPage.goto();
  89  | 
  90  |     // Search product
  91  |     await searchPage.searchProduct('book');
  92  | 
  93  |     // Select sorting option
  94  |     await searchPage.sortDropdown.selectOption('10');
  95  | 
  96  |     // Wait for products load
  97  |     await page.waitForTimeout(2000);
  98  | 
  99  |     // Verify products visible
  100 |     await expect(searchPage.productTitles.first())
  101 |         .toBeVisible();
  102 | });
  103 | 
  104 | // TC_SRH_06 → Verify Partial Keyword Search
  105 | 
  106 | test('TC_SRH_06 Verify partial keyword search', async ({ page }) => {
  107 | 
  108 |     const searchPage = new SearchPage(page);
  109 | 
  110 |     // Open homepage
  111 |     await searchPage.goto();
  112 | 
  113 |     // Partial search
  114 |     await searchPage.searchProduct('comp');
  115 | 
  116 |     // Verify products visible
  117 |     await expect(searchPage.productTitles.first())
  118 |         .toBeVisible();
  119 | });
  120 | 
  121 | // TC_SRH_07 → Verify uppercase keyword search
  122 | 
  123 | test('TC_SRH_07 Verify uppercase keyword search', async ({ page }) => {
  124 | 
  125 |     const searchPage = new SearchPage(page);
  126 | 
  127 |     // Open homepage
  128 |     await searchPage.goto();
  129 | 
  130 |     // Uppercase search
  131 |     await searchPage.searchProduct('BOOK');
  132 | 
  133 |     // Verify results visible
  134 |     await expect(searchPage.productTitles.first())
  135 |         .toBeVisible();
  136 | });
```