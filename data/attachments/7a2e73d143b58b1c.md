# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart/cart.spec.js >> TC_CART_05 Verify Product Price In Cart
- Location: tests/cart/cart.spec.js:108:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.product-unit-price')
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('.product-unit-price')

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
- text: You have no items in your shopping cart.
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
- list:
  - listitem:
    - link "Cart":
      - /url: /cart
  - listitem: Address
  - listitem: Shipping
  - listitem: Payment
  - listitem: Confirm
  - listitem: Complete
- heading "Shopping cart" [level=1]
- text: Your Shopping Cart is empty!
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
  49  |     await cartPage.quantityInput.fill('2');
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
> 126 |         .toBeVisible();
      |          ^ Error: expect(locator).toBeVisible() failed
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
  150 |         .toBeVisible();
  151 | });
  152 | 
  153 | // TC_CART_07 → Verify Continue Shopping
  154 | 
  155 | test('TC_CART_07 Verify Continue Shopping', async ({ page }) => {
  156 | 
  157 |     const cartPage = new CartPage(page);
  158 | 
  159 |     // Open cart page
  160 |     await page.goto(
  161 |         'https://demowebshop.tricentis.com/cart'
  162 |     );
  163 | 
  164 |     // Verify cart page loaded
  165 |     await expect(cartPage.cartTable)
  166 |         .toBeVisible();
  167 | });
  168 | 
  169 | // TC_CART_08 → Verify Multiple Product Addition
  170 | 
  171 | test('TC_CART_08 Verify Multiple Product Addition', async ({ page }) => {
  172 | 
  173 |     const cartPage = new CartPage(page);
  174 | 
  175 |     // Open product page
  176 |     await cartPage.gotoProductPage();
  177 | 
  178 |     // Select processor
  179 |     await cartPage.selectProcessor();
  180 | 
  181 |     // Add product twice
  182 |     await cartPage.addProductToCart();
  183 | 
  184 |     await cartPage.addProductToCart();
  185 | 
  186 |     // Verify success bar visible
  187 |     await expect(cartPage.successBar)
  188 |         .toBeVisible();
  189 | });
  190 | 
  191 | 
  192 | // TC_CART_09 → Verify Quantity Persistence
  193 | 
  194 | test('TC_CART_09 Verify Quantity Persistence', async ({ page }) => {
  195 | 
  196 |     const cartPage = new CartPage(page);
  197 | 
  198 |     // Open product page
  199 |     await cartPage.gotoProductPage();
  200 | 
  201 |     // Select processor
  202 |     await cartPage.selectProcessor();
  203 | 
  204 |     // Add product
  205 |     await cartPage.addProductToCart();
  206 | 
  207 |     // Open cart
  208 |     await cartPage.openCart();
  209 | 
  210 |     // Verify quantity input visible
  211 |     await expect(cartPage.quantityInput)
  212 |         .toBeVisible();
  213 | });
  214 | 
  215 | 
  216 | // TC_CART_10 → Verify Negative Quantity Handling
  217 | 
  218 | test('TC_CART_10 Verify Negative Quantity Handling', async ({ page }) => {
  219 | 
  220 |     const cartPage = new CartPage(page);
  221 | 
  222 |     // Open product page
  223 |     await cartPage.gotoProductPage();
  224 | 
  225 |     // Select processor
  226 |     await cartPage.selectProcessor();
```