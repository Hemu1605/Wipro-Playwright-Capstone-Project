# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart/cart.spec.js >> TC_CART_12 Verify Cart Product Details
- Location: tests/cart/cart.spec.js:264:1

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
  227 | 
  228 |     // Add product
  229 |     await cartPage.addProductToCart();
  230 | 
  231 |     // Open cart
  232 |     await cartPage.openCart();
  233 | 
  234 |     // Fill negative quantity
  235 |     await cartPage.quantityInput.first().fill('-1');
  236 | 
  237 |     // Verify entered value
  238 |     await expect(cartPage.quantityInput.first())
  239 |         .toHaveValue('-1');
  240 | });
  241 | 
  242 | 
  243 | // TC_CART_11 → Verify Cart Page Navigation
  244 | 
  245 | test('TC_CART_11 Verify Cart Page Navigation', async ({ page }) => {
  246 | 
  247 |     const cartPage = new CartPage(page);
  248 | 
  249 |     // Open homepage
  250 |     await page.goto(
  251 |         'https://demowebshop.tricentis.com'
  252 |     );
  253 | 
  254 |     // Open cart
  255 |     await cartPage.openCart();
  256 | 
  257 |     // Verify cart URL
  258 |     await expect(page)
  259 |         .toHaveURL(/cart/);
  260 | });
  261 | 
  262 | // TC_CART_12 → Verify Cart Product Details
  263 | 
  264 | test('TC_CART_12 Verify Cart Product Details', async ({ page }) => {
  265 | 
  266 |     const cartPage = new CartPage(page);
  267 | 
  268 |     // Open product page
  269 |     await cartPage.gotoProductPage();
  270 | 
  271 |     // Select processor
  272 |     await cartPage.selectProcessor();
  273 | 
  274 |     // Add product
  275 |     await cartPage.addProductToCart();
  276 | 
  277 |     // Open cart
  278 |     await cartPage.openCart();
  279 | 
  280 |     // Verify product price visible
  281 |     await expect(cartPage.productPrice)
> 282 |         .toBeVisible();
      |          ^ Error: expect(locator).toBeVisible() failed
  283 | });
  284 | 
  285 | // TC_CART_13 → Verify Cart Refresh Persistence
  286 | 
  287 | test('TC_CART_13 Verify Cart Refresh Persistence', async ({ page }) => {
  288 | 
  289 |     const cartPage = new CartPage(page);
  290 | 
  291 |     // Open product page
  292 |     await cartPage.gotoProductPage();
  293 | 
  294 |     // Select processor
  295 |     await cartPage.selectProcessor();
  296 | 
  297 |     // Add product
  298 |     await cartPage.addProductToCart();
  299 | 
  300 |     // Open cart
  301 |     await cartPage.openCart();
  302 | 
  303 |     // Refresh page
  304 |     await page.reload();
  305 | 
  306 |     // Verify cart still visible
  307 |     await expect(cartPage.cartTable)
  308 |         .toBeVisible();
  309 | });
  310 | 
  311 | 
  312 | // TC_CART_14 → Verify Async Cart Update
  313 | 
  314 | test('TC_CART_14 Verify Async Cart Update', async ({ page }) => {
  315 | 
  316 |     const cartPage = new CartPage(page);
  317 | 
  318 |     // Open product page
  319 |     await cartPage.gotoProductPage();
  320 | 
  321 |     // Select processor
  322 |     await cartPage.selectProcessor();
  323 | 
  324 |     // Add product
  325 |     await cartPage.addProductToCart();
  326 | 
  327 |     // Wait for async loading
  328 |     await page.waitForLoadState('networkidle');
  329 | 
  330 |     // Verify success notification
  331 |     await expect(cartPage.successBar)
  332 |         .toContainText('The product has been added');
  333 | 
  334 |     // Screenshot
  335 |     await page.screenshot({
  336 |         path: 'screenshots/cart-success.png',
  337 |         fullPage: true
  338 |     });
  339 | });
  340 | 
  341 | 
  342 | 
  343 | // TC_CART_15 → Verify Cart API Response
  344 | 
  345 | test('TC_CART_15 Verify Cart API Response', async ({ page }) => {
  346 | 
  347 |     // Open cart page
  348 |     const response = await page.goto(
  349 |         'https://demowebshop.tricentis.com/cart'
  350 |     );
  351 | 
  352 |     // Verify response code
  353 |     expect(response.status()).toBe(200);
  354 | });
  355 | 
  356 | 
```