# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: search/search.spec.js >> TC_SRH_06 Verify partial keyword search
- Location: tests/search/search.spec.js:110:1

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "/", waiting until "load"

```

# Test source

```ts
  1  | class SearchPage {
  2  | 
  3  |     constructor(page) {
  4  | 
  5  |         this.page = page;
  6  | 
  7  |         this.searchBox = page.locator('#small-searchterms');
  8  | 
  9  |         this.searchButton = page.locator('input[value="Search"]');
  10 | 
  11 |         this.productTitles = page.locator('.product-title');
  12 | 
  13 |         this.noResultMessage = page.locator('.no-result');
  14 | 
  15 |         this.sortDropdown = page.locator('#products-orderby');
  16 | 
  17 |         this.productPrices = page.locator('.prices');
  18 | 
  19 |         this.searchResultGrid = page.locator('.product-grid');
  20 | 
  21 |         this.searchInput = page.locator('#small-searchterms');
  22 |     }
  23 | 
  24 |     async goto() {
  25 | 
> 26 |         await this.page.goto('/');
     |                         ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  27 |     }
  28 | 
  29 |     async searchProduct(productName) {
  30 | 
  31 |         await this.searchBox.fill(productName);
  32 | 
  33 |         await this.searchButton.click();
  34 |     }
  35 | }
  36 | 
  37 | module.exports = { SearchPage };
```