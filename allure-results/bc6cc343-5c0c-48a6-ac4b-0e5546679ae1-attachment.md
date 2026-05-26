# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product/product.spec.js >> TC_PDT_12 Verify Add to Wishlist
- Location: tests/product/product.spec.js:189:6

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('input[value="Add to wishlist"]').first()

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
        - heading "Page not found" [level=1] [ref=e83]
        - generic [ref=e86]:
          - paragraph [ref=e87]:
            - strong [ref=e88]: The page you requested was not found, and we have a fine guess why.
          - list [ref=e89]:
            - listitem [ref=e90]: If you typed the URL directly, please make sure the spelling is correct.
            - listitem [ref=e91]: The page no longer exists. In this case, we profusely apologize for the inconvenience and for any damage this may cause.
  - generic [ref=e92]:
    - generic [ref=e93]:
      - generic [ref=e94]:
        - heading "Information" [level=3] [ref=e95]
        - list [ref=e96]:
          - listitem [ref=e97]:
            - link "Sitemap" [ref=e98] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=e99]:
            - link "Shipping & Returns" [ref=e100] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=e101]:
            - link "Privacy Notice" [ref=e102] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=e103]:
            - link "Conditions of Use" [ref=e104] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=e105]:
            - link "About us" [ref=e106] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=e107]:
            - link "Contact us" [ref=e108] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=e109]:
        - heading "Customer service" [level=3] [ref=e110]
        - list [ref=e111]:
          - listitem [ref=e112]:
            - link "Search" [ref=e113] [cursor=pointer]:
              - /url: /search
          - listitem [ref=e114]:
            - link "News" [ref=e115] [cursor=pointer]:
              - /url: /news
          - listitem [ref=e116]:
            - link "Blog" [ref=e117] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=e118]:
            - link "Recently viewed products" [ref=e119] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=e120]:
            - link "Compare products list" [ref=e121] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=e122]:
            - link "New products" [ref=e123] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=e124]:
        - heading "My account" [level=3] [ref=e125]
        - list [ref=e126]:
          - listitem [ref=e127]:
            - link "My account" [ref=e128] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=e129]:
            - link "Orders" [ref=e130] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=e131]:
            - link "Addresses" [ref=e132] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=e133]:
            - link "Shopping cart" [ref=e134] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=e135]:
            - link "Wishlist" [ref=e136] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=e137]:
        - heading "Follow us" [level=3] [ref=e138]
        - list [ref=e139]:
          - listitem [ref=e140]:
            - link "Facebook" [ref=e141] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=e142]:
            - link "Twitter" [ref=e143] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=e144]:
            - link "RSS" [ref=e145] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=e146]:
            - link "YouTube" [ref=e147] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=e148]:
            - link "Google+" [ref=e149] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=e150]:
      - text: Powered by
      - link "nopCommerce" [ref=e151] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=e152]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  97  |     await expect(productPage.successBar)
  98  |         .toContainText('The product has been added');
  99  | });
  100 | 
  101 | 
  102 | // TC_PDT_07 → Verify breadcrumb navigation
  103 | 
  104 | test('TC_PDT_07 Verify breadcrumb navigation', async ({ page }) => {
  105 | 
  106 |     const productPage = new ProductPage(page);
  107 | 
  108 |     // Open product page
  109 |     await productPage.openProductDirectly();
  110 | 
  111 |     // Verify breadcrumb visible
  112 |     await expect(productPage.breadcrumb)
  113 |         .toBeVisible();
  114 | });
  115 | 
  116 | 
  117 | // TC_PDT_08 → Verify image thumbnail switching
  118 | 
  119 | test('TC_PDT_08 Verify image thumbnail switching', async ({ page }) => {
  120 | 
  121 |     const productPage = new ProductPage(page);
  122 | 
  123 |     // Open product page
  124 |     await productPage.openProductDirectly();
  125 | 
  126 |     // Verify product image visible
  127 |     await expect(productPage.productImage)
  128 |         .toBeVisible();
  129 | 
  130 |     // Screenshot
  131 |     await page.screenshot({
  132 |         path: 'screenshots/product-image.png',
  133 |         fullPage: true
  134 |     });
  135 | });
  136 | 
  137 | // TC_PDT_09 → Verify negative quantity handling
  138 | 
  139 | test('TC_PDT_09 Verify negative quantity handling', async ({ page }) => {
  140 | 
  141 |     const productPage = new ProductPage(page);
  142 | 
  143 |     // Open product page
  144 |     await productPage.openProductDirectly();
  145 | 
  146 |     // Enter negative quantity
  147 |     await productPage.quantityInput.fill('-5');
  148 | 
  149 |     // Verify value entered
  150 |     await expect(productPage.quantityInput)
  151 |         .toHaveValue('-5');
  152 | });
  153 | 
  154 | 
  155 | // TC_PDT_10 → Verify numeric quantity parsing
  156 | 
  157 | test('TC_PDT_10 Verify numeric quantity parsing', async ({ page }) => {
  158 | 
  159 |     const productPage = new ProductPage(page);
  160 | 
  161 |     // Open product page
  162 |     await productPage.openProductDirectly();
  163 | 
  164 |     // Enter quantity
  165 |     await productPage.quantityInput.fill('10');
  166 | 
  167 |     // Verify quantity
  168 |     await expect(productPage.quantityInput)
  169 |         .toHaveValue('10');
  170 | });
  171 | 
  172 | // TC_PDT_11 → Verify review section visibility
  173 | 
  174 | test('TC_PDT_11 Verify review section visibility', async ({ page }) => {
  175 | 
  176 |     const productPage = new ProductPage(page);
  177 | 
  178 |     // Open product page
  179 |     await productPage.openProductDirectly();
  180 | 
  181 |     // Verify review section visible
  182 |     await expect(productPage.reviewSection)
  183 |         .toBeVisible();
  184 | });
  185 | 
  186 | 
  187 | // TC_PDT_12 → Verify Add To Wishlist
  188 | 
  189 | test.only('TC_PDT_12 Verify Add to Wishlist', async ({ page }) => {
  190 | 
  191 |     // Open product page
  192 |     await page.goto(
  193 |         'https://demowebshop.tricentis.com/14-inch-laptop'
  194 |     );
  195 | 
  196 |     // Click wishlist button using exact locator
> 197 |     await page.locator('input[value="Add to wishlist"]').nth(0).click();
      |                                                                 ^ Error: locator.click: Test timeout of 60000ms exceeded.
  198 | 
  199 |     // Verify success notification
  200 |     await expect(page.locator('#bar-notification'))
  201 |         .toContainText('The product has been added');
  202 | });
  203 | 
  204 | // TC_PDT_13 → Verify stock validation
  205 | 
  206 | test('TC_PDT_13 Verify stock validation', async ({ page }) => {
  207 | 
  208 |     const productPage = new ProductPage(page);
  209 | 
  210 |     // Open product page
  211 |     await productPage.openProductDirectly();
  212 | 
  213 |     // Verify stock text visible
  214 |     await expect(productPage.stockAvailability)
  215 |         .toContainText('In stock');
  216 | });
  217 | 
  218 | 
  219 | // TC_PDT_14 → Verify async image loading
  220 | 
  221 | test('TC_PDT_14 Verify async image loading', async ({ page }) => {
  222 | 
  223 |     const productPage = new ProductPage(page);
  224 | 
  225 |     // Open product page
  226 |     await productPage.openProductDirectly();
  227 | 
  228 |     // Wait for network load
  229 |     await page.waitForLoadState('networkidle');
  230 | 
  231 |     // Verify image visible
  232 |     await expect(productPage.productImage)
  233 |         .toBeVisible();
  234 | 
  235 |     // Screenshot
  236 |     await page.screenshot({
  237 |         path: 'screenshots/product-page.png',
  238 |         fullPage: true
  239 |     });
  240 | });
  241 | 
  242 | // TC_PDT_15 → Verify product detail API response
  243 | 
  244 | test('TC_PDT_15 Verify product detail API response', async ({ page }) => {
  245 | 
  246 |     // Open product page
  247 |     const response = await page.goto(
  248 |         'https://demowebshop.tricentis.com/build-your-cheap-own-computer'
  249 |     );
  250 | 
  251 |     // Verify status code
  252 |     expect(response.status()).toBe(200);
  253 | });
```