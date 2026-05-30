# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart/cart.spec.js >> TC_CART_02 Verify Cart Quantity Update
- Location: tests/cart/cart.spec.js:32:1

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.fill: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('.qty-input')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - link "Tricentis Demo Web Shop" [ref=e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=e7]
      - generic [ref=e8]:
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
        - generic [ref=e25]: You have no items in your shopping cart.
      - generic [ref=e27]:
        - status [ref=e28]
        - textbox [ref=e29]: Search store
        - button "Search" [ref=e30] [cursor=pointer]
    - list [ref=e32]:
      - listitem [ref=e33]:
        - link "Books" [ref=e34] [cursor=pointer]:
          - /url: /books
      - listitem [ref=e35]:
        - link "Computers" [ref=e36] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=e37]:
        - link "Electronics" [ref=e38] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=e39]:
        - link "Apparel & Shoes" [ref=e40] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=e41]:
        - link "Digital downloads" [ref=e42] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=e43]:
        - link "Jewelry" [ref=e44] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=e45]:
        - link "Gift Cards" [ref=e46] [cursor=pointer]:
          - /url: /gift-cards
    - generic [ref=e47]:
      - list [ref=e49]:
        - listitem [ref=e50]:
          - link "Cart" [ref=e51] [cursor=pointer]:
            - /url: /cart
        - listitem [ref=e52]: Address
        - listitem [ref=e53]: Shipping
        - listitem [ref=e54]: Payment
        - listitem [ref=e55]: Confirm
        - listitem [ref=e56]: Complete
      - generic [ref=e57]:
        - heading "Shopping cart" [level=1] [ref=e59]
        - generic [ref=e61]: Your Shopping Cart is empty!
  - generic [ref=e62]:
    - generic [ref=e63]:
      - generic [ref=e64]:
        - heading "Information" [level=3] [ref=e65]
        - list [ref=e66]:
          - listitem [ref=e67]:
            - link "Sitemap" [ref=e68] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=e69]:
            - link "Shipping & Returns" [ref=e70] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=e71]:
            - link "Privacy Notice" [ref=e72] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=e73]:
            - link "Conditions of Use" [ref=e74] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=e75]:
            - link "About us" [ref=e76] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=e77]:
            - link "Contact us" [ref=e78] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=e79]:
        - heading "Customer service" [level=3] [ref=e80]
        - list [ref=e81]:
          - listitem [ref=e82]:
            - link "Search" [ref=e83] [cursor=pointer]:
              - /url: /search
          - listitem [ref=e84]:
            - link "News" [ref=e85] [cursor=pointer]:
              - /url: /news
          - listitem [ref=e86]:
            - link "Blog" [ref=e87] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=e88]:
            - link "Recently viewed products" [ref=e89] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=e90]:
            - link "Compare products list" [ref=e91] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=e92]:
            - link "New products" [ref=e93] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=e94]:
        - heading "My account" [level=3] [ref=e95]
        - list [ref=e96]:
          - listitem [ref=e97]:
            - link "My account" [ref=e98] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=e99]:
            - link "Orders" [ref=e100] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=e101]:
            - link "Addresses" [ref=e102] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=e103]:
            - link "Shopping cart" [ref=e104] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=e105]:
            - link "Wishlist" [ref=e106] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=e107]:
        - heading "Follow us" [level=3] [ref=e108]
        - list [ref=e109]:
          - listitem [ref=e110]:
            - link "Facebook" [ref=e111] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=e112]:
            - link "Twitter" [ref=e113] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=e114]:
            - link "RSS" [ref=e115] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=e116]:
            - link "YouTube" [ref=e117] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=e118]:
            - link "Google+" [ref=e119] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=e120]:
      - text: Powered by
      - link "nopCommerce" [ref=e121] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=e122]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | 
  3   | const { CartPage } = require('../../pages/CartPage');
  4   | 
  5   | test.describe('Shopping Cart Test Cases', () => {
  6   | 
  7   |     // TC_CART_01 → Verify Add Product To Cart
  8   | 
  9   |     test('TC_CART_01 Verify Add Product To Cart', async ({ page }) => {
  10  | 
  11  |         const cartPage = new CartPage(page);
  12  | 
  13  |         // Open product page
  14  |         await cartPage.gotoProductPage();
  15  | 
  16  |         // Select Slow processor
  17  |         await cartPage.selectProcessor();
  18  | 
  19  |         // Add product to cart
  20  |         await cartPage.addProductToCart();
  21  | 
  22  |         // Verify success notification
  23  |         await expect(cartPage.successBar)
  24  |             .toContainText('The product has been added');
  25  |     });
  26  | 
  27  | });
  28  | 
  29  | 
  30  | // TC_CART_02 → Verify Cart Quantity Update
  31  | 
  32  | test('TC_CART_02 Verify Cart Quantity Update', async ({ page }) => {
  33  | 
  34  |     const cartPage = new CartPage(page);
  35  | 
  36  |     // Open product page
  37  |     await cartPage.gotoProductPage();
  38  | 
  39  |     // Select processor
  40  |     await cartPage.selectProcessor();
  41  | 
  42  |     // Add product
  43  |     await cartPage.addProductToCart();
  44  | 
  45  |     // Open cart
  46  |     await cartPage.openCart();
  47  | 
  48  |     // Update quantity
> 49  |     await cartPage.quantityInput.fill('2');
      |                                  ^ Error: locator.fill: Test timeout of 60000ms exceeded.
  50  | 
  51  |     // Click update cart
  52  |     await cartPage.updateCartButton.click();
  53  | 
  54  |     // Verify quantity updated
  55  |     await expect(cartPage.quantityInput)
  56  |         .toHaveValue('2');
  57  | });
  58  | 
  59  | 
  60  | // TC_CART_03 → Verify Remove Product From Cart
  61  | 
  62  | test('TC_CART_03 Verify Remove Product From Cart', async ({ page }) => {
  63  | 
  64  |     const cartPage = new CartPage(page);
  65  | 
  66  |     // Open product page
  67  |     await cartPage.gotoProductPage();
  68  | 
  69  |     // Select processor
  70  |     await cartPage.selectProcessor();
  71  | 
  72  |     // Add product
  73  |     await cartPage.addProductToCart();
  74  | 
  75  |     // Open cart
  76  |     await cartPage.openCart();
  77  | 
  78  |     // Remove product
  79  |     await cartPage.removeCheckbox.check();
  80  | 
  81  |     // Update cart
  82  |     await cartPage.updateCartButton.click();
  83  | 
  84  |     // Verify empty cart message
  85  |     await expect(cartPage.emptyCartMessage)
  86  |         .toContainText('Your Shopping Cart is empty');
  87  | });
  88  | 
  89  | // TC_CART_04 → Verify Empty Cart Message
  90  | 
  91  | test('TC_CART_04 Verify Empty Cart Message', async ({ page }) => {
  92  | 
  93  |     const cartPage = new CartPage(page);
  94  | 
  95  |     // Open cart directly
  96  |     await page.goto(
  97  |         'https://demowebshop.tricentis.com/cart'
  98  |     );
  99  | 
  100 |     // Verify cart page visible
  101 |     await expect(cartPage.emptyCartMessage)
  102 |         .toBeVisible();
  103 | });
  104 | 
  105 | 
  106 | // TC_CART_05 → Verify Product Price In Cart
  107 | 
  108 | test('TC_CART_05 Verify Product Price In Cart', async ({ page }) => {
  109 | 
  110 |     const cartPage = new CartPage(page);
  111 | 
  112 |     // Open product page
  113 |     await cartPage.gotoProductPage();
  114 | 
  115 |     // Select processor
  116 |     await cartPage.selectProcessor();
  117 | 
  118 |     // Add product
  119 |     await cartPage.addProductToCart();
  120 | 
  121 |     // Open cart
  122 |     await cartPage.openCart();
  123 | 
  124 |     // Verify price visible
  125 |     await expect(cartPage.productPrice)
  126 |         .toBeVisible();
  127 | });
  128 | 
  129 | 
  130 | // TC_CART_06 → Verify Subtotal Calculation
  131 | 
  132 | test('TC_CART_06 Verify Subtotal Calculation', async ({ page }) => {
  133 | 
  134 |     const cartPage = new CartPage(page);
  135 | 
  136 |     // Open product page
  137 |     await cartPage.gotoProductPage();
  138 | 
  139 |     // Select processor
  140 |     await cartPage.selectProcessor();
  141 | 
  142 |     // Add product
  143 |     await cartPage.addProductToCart();
  144 | 
  145 |     // Open cart
  146 |     await cartPage.openCart();
  147 | 
  148 |     // Verify subtotal visible
  149 |     await expect(cartPage.subtotal)
```