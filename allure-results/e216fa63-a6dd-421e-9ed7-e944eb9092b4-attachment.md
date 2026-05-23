# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: search/search.spec.js >> TC_SRH_05 Verify sorting functionality
- Location: tests/search/search.spec.js:85:6

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.selectOption: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('#products-orderby')
    - locator resolved to <select id="products-orderby" name="products-orderby" onchange="setLocation(this.value);">…</select>
  - attempting select option action
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
    - waiting 20ms
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
      - waiting 100ms
    111 × waiting for element to be visible and enabled
        - did not find some options
      - retrying select option action
        - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - link "Tricentis Demo Web Shop" [ref=e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=e7]
      - list [ref=e10]:
        - listitem [ref=e11]:
          - link "Register" [ref=e12] [cursor=pointer]:
            - /url: /register
        - listitem [ref=e13]:
          - link "Log in" [ref=e14] [cursor=pointer]:
            - /url: /login
        - listitem [ref=e15]:
          - link "Shopping cart (0)" [ref=e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=e17]: Shopping cart
            - generic [ref=e18]: (0)
        - listitem [ref=e19]:
          - link "Wishlist (0)" [ref=e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=e21]: Wishlist
            - generic [ref=e22]: (0)
      - generic [ref=e24]:
        - status [ref=e25]
        - textbox [ref=e26]: Search store
        - button "Search" [ref=e27] [cursor=pointer]
    - list [ref=e29]:
      - listitem [ref=e30]:
        - link "Books" [ref=e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=e32]:
        - link "Computers" [ref=e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=e34]:
        - link "Electronics" [ref=e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=e36]:
        - link "Apparel & Shoes" [ref=e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=e38]:
        - link "Digital downloads" [ref=e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=e40]:
        - link "Jewelry" [ref=e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=e42]:
        - link "Gift Cards" [ref=e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic:
      - generic [ref=e44]:
        - generic [ref=e45]:
          - strong [ref=e47]: Categories
          - list [ref=e49]:
            - listitem [ref=e50]:
              - link "Books" [ref=e51] [cursor=pointer]:
                - /url: /books
            - listitem [ref=e52]:
              - link "Computers" [ref=e53] [cursor=pointer]:
                - /url: /computers
            - listitem [ref=e54]:
              - link "Electronics" [ref=e55] [cursor=pointer]:
                - /url: /electronics
            - listitem [ref=e56]:
              - link "Apparel & Shoes" [ref=e57] [cursor=pointer]:
                - /url: /apparel-shoes
            - listitem [ref=e58]:
              - link "Digital downloads" [ref=e59] [cursor=pointer]:
                - /url: /digital-downloads
            - listitem [ref=e60]:
              - link "Jewelry" [ref=e61] [cursor=pointer]:
                - /url: /jewelry
            - listitem [ref=e62]:
              - link "Gift Cards" [ref=e63] [cursor=pointer]:
                - /url: /gift-cards
        - generic [ref=e64]:
          - strong [ref=e66]: Manufacturers
          - list [ref=e68]:
            - listitem [ref=e69]:
              - link "Tricentis" [ref=e70] [cursor=pointer]:
                - /url: /tricentis
        - generic [ref=e71]:
          - strong [ref=e73]: Newsletter
          - generic [ref=e75]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=e77]
            - button "Subscribe" [ref=e79] [cursor=pointer]
      - generic [ref=e81]:
        - heading "Search" [level=1] [ref=e83]
        - generic [ref=e84]:
          - generic [ref=e86]:
            - generic [ref=e87]:
              - generic [ref=e88]:
                - generic [ref=e89]: "Search keyword:"
                - textbox "Search keyword:" [ref=e90]: book
              - generic [ref=e91]:
                - checkbox "Advanced search" [ref=e92]
                - generic [ref=e93]: Advanced search
            - button "Search" [ref=e95] [cursor=pointer]
          - generic [ref=e96]:
            - generic [ref=e97]:
              - text: View as
              - combobox [ref=e98]:
                - option "Grid" [selected]
                - option "List"
            - generic [ref=e99]:
              - text: Sort by
              - combobox [ref=e100]:
                - option "Position" [selected]
                - 'option "Name: A to Z"'
                - 'option "Name: Z to A"'
                - 'option "Price: Low to High"'
                - 'option "Price: High to Low"'
                - option "Created on"
            - generic [ref=e101]:
              - text: Display
              - combobox [ref=e102]:
                - option "4"
                - option "8" [selected]
                - option "12"
              - text: per page
          - generic [ref=e106]:
            - link "Picture of Health Book" [ref=e108] [cursor=pointer]:
              - /url: /health
              - img "Picture of Health Book" [ref=e109]
            - generic [ref=e110]:
              - heading "Health Book" [level=2] [ref=e111]:
                - link "Health Book" [ref=e112] [cursor=pointer]:
                  - /url: /health
              - generic "493 review(s)" [ref=e113]
              - generic [ref=e116]:
                - generic [ref=e117]:
                  - generic [ref=e118]: "27.00"
                  - generic [ref=e119]: "10.00"
                - button "Add to cart" [ref=e121] [cursor=pointer]
  - generic [ref=e122]:
    - generic [ref=e123]:
      - generic [ref=e124]:
        - heading "Information" [level=3] [ref=e125]
        - list [ref=e126]:
          - listitem [ref=e127]:
            - link "Sitemap" [ref=e128] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=e129]:
            - link "Shipping & Returns" [ref=e130] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=e131]:
            - link "Privacy Notice" [ref=e132] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=e133]:
            - link "Conditions of Use" [ref=e134] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=e135]:
            - link "About us" [ref=e136] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=e137]:
            - link "Contact us" [ref=e138] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=e139]:
        - heading "Customer service" [level=3] [ref=e140]
        - list [ref=e141]:
          - listitem [ref=e142]:
            - link "Search" [ref=e143] [cursor=pointer]:
              - /url: /search
          - listitem [ref=e144]:
            - link "News" [ref=e145] [cursor=pointer]:
              - /url: /news
          - listitem [ref=e146]:
            - link "Blog" [ref=e147] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=e148]:
            - link "Recently viewed products" [ref=e149] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=e150]:
            - link "Compare products list" [ref=e151] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=e152]:
            - link "New products" [ref=e153] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=e154]:
        - heading "My account" [level=3] [ref=e155]
        - list [ref=e156]:
          - listitem [ref=e157]:
            - link "My account" [ref=e158] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=e159]:
            - link "Orders" [ref=e160] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=e161]:
            - link "Addresses" [ref=e162] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=e163]:
            - link "Shopping cart" [ref=e164] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=e165]:
            - link "Wishlist" [ref=e166] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=e167]:
        - heading "Follow us" [level=3] [ref=e168]
        - list [ref=e169]:
          - listitem [ref=e170]:
            - link "Facebook" [ref=e171] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=e172]:
            - link "Twitter" [ref=e173] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=e174]:
            - link "RSS" [ref=e175] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=e176]:
            - link "YouTube" [ref=e177] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=e178]:
            - link "Google+" [ref=e179] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=e180]:
      - text: Powered by
      - link "nopCommerce" [ref=e181] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=e182]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
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
  28  | test('TC_SRH_02 Search invalid product keyword', async ({ page }) => {
  29  | 
  30  |     const searchPage = new SearchPage(page);
  31  | 
  32  |     // Open homepage
  33  |     await searchPage.goto();
  34  | 
  35  |     // Search invalid product
  36  |     await searchPage.searchProduct('invalid12345');
  37  | 
  38  |     // Verify no-result text visible
  39  |     await expect(page.locator('body'))
  40  |         .toContainText('No products were found');
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
  56  |     await expect(page.locator('body'))
  57  |         .toContainText(
  58  |             'No products were found that matched your criteria.'
  59  |         );
  60  | });
  61  | 
  62  | // TC_SRH_04 → Verify Search Result Count
  63  | 
  64  | test('TC_SRH_04 Verify search result count', async ({ page }) => {
  65  | 
  66  |     const searchPage = new SearchPage(page);
  67  | 
  68  |     // Open homepage
  69  |     await searchPage.goto();
  70  | 
  71  |     // Search product
  72  |     await searchPage.searchProduct('computer');
  73  | 
  74  |     // Count products
  75  |     const count = await searchPage.productTitles.count();
  76  | 
  77  |     // Verify count greater than zero
  78  |     expect(count).toBeGreaterThan(0);
  79  | 
  80  |     console.log('Total Products:', count);
  81  | });
  82  | 
  83  | // TC_SRH_05 → Verify Sorting Functionality
  84  | 
  85  | test.only('TC_SRH_05 Verify sorting functionality', async ({ page }) => {
  86  | 
  87  |     const searchPage = new SearchPage(page);
  88  | 
  89  |     // Open homepage
  90  |     await searchPage.goto();
  91  | 
  92  |     // Search product
  93  |     await searchPage.searchProduct('book');
  94  | 
  95  |     // Select sorting option
> 96  |     await searchPage.sortDropdown.selectOption('10');
      |                                   ^ Error: locator.selectOption: Test timeout of 60000ms exceeded.
  97  | 
  98  |     // Wait for products load
  99  |     await page.waitForTimeout(2000);
  100 | 
  101 |     // Verify products visible
  102 |     await expect(searchPage.productTitles.first())
  103 |         .toBeVisible();
  104 | });
  105 | 
  106 | // TC_SRH_06 → Verify Partial Keyword Search
  107 | 
  108 | test('TC_SRH_06 Verify partial keyword search', async ({ page }) => {
  109 | 
  110 |     const searchPage = new SearchPage(page);
  111 | 
  112 |     // Open homepage
  113 |     await searchPage.goto();
  114 | 
  115 |     // Partial search
  116 |     await searchPage.searchProduct('comp');
  117 | 
  118 |     // Verify products visible
  119 |     await expect(searchPage.productTitles.first())
  120 |         .toBeVisible();
  121 | });
  122 | 
  123 | // TC_SRH_07 → Verify uppercase keyword search
  124 | 
  125 | test('TC_SRH_07 Verify uppercase keyword search', async ({ page }) => {
  126 | 
  127 |     const searchPage = new SearchPage(page);
  128 | 
  129 |     // Open homepage
  130 |     await searchPage.goto();
  131 | 
  132 |     // Uppercase search
  133 |     await searchPage.searchProduct('BOOK');
  134 | 
  135 |     // Verify results visible
  136 |     await expect(searchPage.productTitles.first())
  137 |         .toBeVisible();
  138 | });
```