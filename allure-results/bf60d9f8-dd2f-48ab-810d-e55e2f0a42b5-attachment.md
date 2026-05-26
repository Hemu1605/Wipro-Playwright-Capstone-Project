# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product/product.spec.js >> TC_PDT_13 Verify stock validation
- Location: tests/product/product.spec.js:206:6

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://demowebshop.tricentis.com/build-your-cheap-own-computer", waiting until "load"

```

# Test source

```ts
  1  | class ProductPage {
  2  | 
  3  |     constructor(page) {
  4  | 
  5  |         this.page = page;
  6  | 
  7  |         this.firstProduct = page.locator('.product-item').first();
  8  | 
  9  |         this.productImage = page.locator('#main-product-img-72');
  10 | 
  11 |         this.productPrice = page.locator('.product-price');
  12 | 
  13 |         this.quantityInput = page.locator('.qty-input');
  14 | 
  15 |         this.addToCartButton = page.locator('.add-to-cart-button');
  16 | 
  17 |         this.descriptionSection = page.locator('.full-description');
  18 | 
  19 |         this.stockAvailability = page.locator('.stock');
  20 | 
  21 |         this.reviewSection = page.locator('.product-review-links');
  22 | 
  23 |         this.addToWishlistButton = page.locator(
  24 |           'input[value="Add to wishlist"]'
  25 |         ).first();
  26 | 
  27 |         this.successBar = page.locator('#bar-notification');
  28 | 
  29 |         this.breadcrumb = page.locator('.breadcrumb');
  30 |     }
  31 | 
  32 |     async goto() {
  33 | 
  34 |         await this.page.goto('/');
  35 |     }
  36 | 
  37 |     async openFirstProduct() {
  38 | 
  39 |         await this.firstProduct.click();
  40 |     }
  41 | 
  42 |     async openProductDirectly() {
  43 | 
> 44 |     await this.page.goto(
     |                     ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  45 |         'https://demowebshop.tricentis.com/build-your-cheap-own-computer'
  46 |     );
  47 |     }
  48 | }
  49 | 
  50 | module.exports = { ProductPage };
```