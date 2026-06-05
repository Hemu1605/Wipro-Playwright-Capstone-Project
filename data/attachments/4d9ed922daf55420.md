# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart/cart.spec.js >> TC_CART_10 Verify Negative Quantity Handling
- Location: tests/cart/cart.spec.js:273:1

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.fill: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('.qty-input').first()

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
  190 | 
  191 |     // Open product page
  192 |     await cartPage.gotoProductPage();
  193 | 
  194 |     // Select processor
  195 |     await cartPage.selectProcessor();
  196 | 
  197 |     // Add product
  198 |     await cartPage.addProductToCart();
  199 | 
  200 |     // Open cart
  201 |     await cartPage.openCart();
  202 | 
  203 |     // Verify subtotal visible
  204 |     await expect(cartPage.subtotal)
  205 |         .toBeVisible();
  206 | });
  207 | 
  208 | // TC_CART_07 → Verify Continue Shopping
  209 | 
  210 | test('TC_CART_07 Verify Continue Shopping', async ({ page }) => {
  211 | 
  212 |     const cartPage = new CartPage(page);
  213 | 
  214 |     // Open cart page
  215 |     await page.goto(
  216 |         'https://demowebshop.tricentis.com/cart'
  217 |     );
  218 | 
  219 |     // Verify cart page loaded
  220 |     await expect(cartPage.cartTable)
  221 |         .toBeVisible();
  222 | });
  223 | 
  224 | // TC_CART_08 → Verify Multiple Product Addition
  225 | 
  226 | test('TC_CART_08 Verify Multiple Product Addition', async ({ page }) => {
  227 | 
  228 |     const cartPage = new CartPage(page);
  229 | 
  230 |     // Open product page
  231 |     await cartPage.gotoProductPage();
  232 | 
  233 |     // Select processor
  234 |     await cartPage.selectProcessor();
  235 | 
  236 |     // Add product twice
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
> 290 |     await cartPage.quantityInput.first().fill('-1');
      |                                          ^ Error: locator.fill: Test timeout of 60000ms exceeded.
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
  337 |         .toBeVisible();
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
```