# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart/cart.spec.js >> TC_CART_12 Verify Cart Product Details
- Location: tests/cart/cart.spec.js:319:1

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
  237 |     await cartPage.addProductToCart();
  238 | 
  239 |     await cartPage.addProductToCart();
  240 | 
  241 |     // Verify success bar visible
  242 |     await expect(cartPage.successBar)
  243 |         .toBeVisible();
  244 | });
  245 | 
  246 | 
  247 | // TC_CART_09 → Verify Quantity Persistence
  248 | 
  249 | test('TC_CART_09 Verify Quantity Persistence', async ({ page }) => {
  250 | 
  251 |     const cartPage = new CartPage(page);
  252 | 
  253 |     // Open product page
  254 |     await cartPage.gotoProductPage();
  255 | 
  256 |     // Select processor
  257 |     await cartPage.selectProcessor();
  258 | 
  259 |     // Add product
  260 |     await cartPage.addProductToCart();
  261 | 
  262 |     // Open cart
  263 |     await cartPage.openCart();
  264 | 
  265 |     // Verify quantity input visible
  266 |     await expect(cartPage.quantityInput)
  267 |         .toBeVisible();
  268 | });
  269 | 
  270 | 
  271 | // TC_CART_10 → Verify Negative Quantity Handling
  272 | 
  273 | test('TC_CART_10 Verify Negative Quantity Handling', async ({ page }) => {
  274 | 
  275 |     const cartPage = new CartPage(page);
  276 | 
  277 |     // Open product page
  278 |     await cartPage.gotoProductPage();
  279 | 
  280 |     // Select processor
  281 |     await cartPage.selectProcessor();
  282 | 
  283 |     // Add product
  284 |     await cartPage.addProductToCart();
  285 | 
  286 |     // Open cart
  287 |     await cartPage.openCart();
  288 | 
  289 |     // Fill negative quantity
  290 |     await cartPage.quantityInput.first().fill('-1');
  291 | 
  292 |     // Verify entered value
  293 |     await expect(cartPage.quantityInput.first())
  294 |         .toHaveValue('-1');
  295 | });
  296 | 
  297 | 
  298 | // TC_CART_11 → Verify Cart Page Navigation
  299 | 
  300 | test('TC_CART_11 Verify Cart Page Navigation', async ({ page }) => {
  301 | 
  302 |     const cartPage = new CartPage(page);
  303 | 
  304 |     // Open homepage
  305 |     await page.goto(
  306 |         'https://demowebshop.tricentis.com'
  307 |     );
  308 | 
  309 |     // Open cart
  310 |     await cartPage.openCart();
  311 | 
  312 |     // Verify cart URL
  313 |     await expect(page)
  314 |         .toHaveURL(/cart/);
  315 | });
  316 | 
  317 | // TC_CART_12 → Verify Cart Product Details
  318 | 
  319 | test('TC_CART_12 Verify Cart Product Details', async ({ page }) => {
  320 | 
  321 |     const cartPage = new CartPage(page);
  322 | 
  323 |     // Open product page
  324 |     await cartPage.gotoProductPage();
  325 | 
  326 |     // Select processor
  327 |     await cartPage.selectProcessor();
  328 | 
  329 |     // Add product
  330 |     await cartPage.addProductToCart();
  331 | 
  332 |     // Open cart
  333 |     await cartPage.openCart();
  334 | 
  335 |     // Verify product price visible
  336 |     await expect(cartPage.productPrice)
> 337 |         .toBeVisible();
      |          ^ Error: expect(locator).toBeVisible() failed
  338 | });
  339 | 
  340 | // TC_CART_13 → Verify Cart Refresh Persistence
  341 | 
  342 | test('TC_CART_13 Verify Cart Refresh Persistence _addon test cases', async ({ page }) => {
  343 | 
  344 |     const cartPage = new CartPage(page);
  345 | 
  346 |     // Open product page
  347 |     await cartPage.gotoProductPage();
  348 | 
  349 |     // Select processor
  350 |     await cartPage.selectProcessor();
  351 | 
  352 |     // Add product
  353 |     await cartPage.addProductToCart();
  354 | 
  355 |     // Open cart
  356 |     await cartPage.openCart();
  357 | 
  358 |     // Refresh page
  359 |     await page.reload();
  360 | 
  361 |     // Verify cart still visible
  362 |     await expect(cartPage.cartTable)
  363 |         .toBeVisible();
  364 | });
  365 | 
  366 | 
  367 | // TC_CART_14 → Verify Async Cart Update
  368 | 
  369 | test('TC_CART_14 Verify Async Cart Update _addon test cases', async ({ page }) => {
  370 | 
  371 |     const cartPage = new CartPage(page);
  372 | 
  373 |     // Open product page
  374 |     await cartPage.gotoProductPage();
  375 | 
  376 |     // Select processor
  377 |     await cartPage.selectProcessor();
  378 | 
  379 |     // Add product
  380 |     await cartPage.addProductToCart();
  381 | 
  382 |     // Wait for async loading
  383 |     await page.waitForLoadState('networkidle');
  384 | 
  385 |     // Verify success notification
  386 |     await expect(cartPage.successBar)
  387 |         .toContainText('The product has been added');
  388 | 
  389 |     // Screenshot
  390 |     await page.screenshot({
  391 |         path: 'screenshots/cart-success.png',
  392 |         fullPage: true
  393 |     });
  394 | });
  395 | 
  396 | 
  397 | 
  398 | // TC_CART_15 → Verify Cart API Response
  399 | 
  400 | test('TC_CART_15 Verify Cart API Response _addon test cases', async ({ page }) => {
  401 | 
  402 |     // Open cart page
  403 |     const response = await page.goto(
  404 |         'https://demowebshop.tricentis.com/cart'
  405 |     );
  406 | 
  407 |     // Verify response code
  408 |     expect(response.status()).toBe(200);
  409 | });
  410 | 
  411 | 
```