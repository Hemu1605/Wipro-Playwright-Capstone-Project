# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product/product.spec.js >> TC_PDT_12 Verify wishlist page navigation
- Location: tests/product/product.spec.js:189:6

# Error details

```
Error: locator.click: Error: strict mode violation: locator('.ico-wishlist') resolved to 2 elements:
    1) <a href="/wishlist" class="ico-wishlist">…</a> aka getByRole('link', { name: 'Wishlist (0)' })
    2) <a href="/wishlist" class="ico-wishlist">Wishlist</a> aka getByRole('link', { name: 'Wishlist', exact: true })

Call log:
  - waiting for locator('.ico-wishlist')

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
          - strong [ref=e73]: Popular tags
          - generic [ref=e74]:
            - list [ref=e76]:
              - listitem [ref=e77]:
                - link "apparel" [ref=e78] [cursor=pointer]:
                  - /url: /producttag/4/apparel
              - listitem [ref=e79]:
                - link "awesome" [ref=e80] [cursor=pointer]:
                  - /url: /producttag/8/awesome
              - listitem [ref=e81]:
                - link "book" [ref=e82] [cursor=pointer]:
                  - /url: /producttag/10/book
              - listitem [ref=e83]:
                - link "camera" [ref=e84] [cursor=pointer]:
                  - /url: /producttag/13/camera
              - listitem [ref=e85]:
                - link "cell" [ref=e86] [cursor=pointer]:
                  - /url: /producttag/12/cell
              - listitem [ref=e87]:
                - link "compact" [ref=e88] [cursor=pointer]:
                  - /url: /producttag/9/compact
              - listitem [ref=e89]:
                - link "computer" [ref=e90] [cursor=pointer]:
                  - /url: /producttag/6/computer
              - listitem [ref=e91]:
                - link "cool" [ref=e92] [cursor=pointer]:
                  - /url: /producttag/3/cool
              - listitem [ref=e93]:
                - link "digital" [ref=e94] [cursor=pointer]:
                  - /url: /producttag/16/digital
              - listitem [ref=e95]:
                - link "jeans" [ref=e96] [cursor=pointer]:
                  - /url: /producttag/14/jeans
              - listitem [ref=e97]:
                - link "jewelry" [ref=e98] [cursor=pointer]:
                  - /url: /producttag/11/jewelry
              - listitem [ref=e99]:
                - link "nice" [ref=e100] [cursor=pointer]:
                  - /url: /producttag/1/nice
              - listitem [ref=e101]:
                - link "shirt" [ref=e102] [cursor=pointer]:
                  - /url: /producttag/5/shirt
              - listitem [ref=e103]:
                - link "shoes" [ref=e104] [cursor=pointer]:
                  - /url: /producttag/7/shoes
              - listitem [ref=e105]:
                - link "TCP" [ref=e106] [cursor=pointer]:
                  - /url: /producttag/19/tcp
            - link "View all" [ref=e108] [cursor=pointer]:
              - /url: /producttag/all
      - generic [ref=e109]:
        - generic [ref=e110]:
          - strong [ref=e112]: Newsletter
          - generic [ref=e114]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=e116]
            - button "Subscribe" [ref=e118] [cursor=pointer]
        - generic [ref=e119]:
          - strong [ref=e121]: Community poll
          - generic [ref=e123]:
            - strong [ref=e124]: Do you like nopCommerce?
            - list [ref=e125]:
              - listitem [ref=e126]:
                - radio "Excellent" [ref=e127]
                - text: Excellent
              - listitem [ref=e128]:
                - radio "Good" [ref=e129]
                - text: Good
              - listitem [ref=e130]:
                - radio "Poor" [ref=e131]
                - text: Poor
              - listitem [ref=e132]:
                - radio "Very bad" [ref=e133]
                - text: Very bad
            - button "Vote" [ref=e135] [cursor=pointer]
      - generic [ref=e138]:
        - generic [ref=e139]:
          - generic [ref=e140]:
            - link [ref=e141] [cursor=pointer]:
              - /url: https://www.tricentis.com/speed/
            - img [ref=e142]
            - generic [ref=e143]: Speed | Tricentis
            - generic:
              - generic [ref=e144] [cursor=pointer]: Prev
              - generic [ref=e145] [cursor=pointer]: Next
          - generic [ref=e146]:
            - generic [ref=e147] [cursor=pointer]: "1"
            - generic [ref=e148] [cursor=pointer]: "2"
        - generic [ref=e149]:
          - heading "Welcome to our store" [level=2] [ref=e151]
          - generic [ref=e152]:
            - paragraph [ref=e153]: Welcome to the new Tricentis store!
            - paragraph [ref=e154]: Feel free to shop around and explore everything.
        - generic [ref=e155]:
          - strong [ref=e157]: Featured products
          - generic [ref=e159]:
            - link "Picture of $25 Virtual Gift Card" [ref=e161] [cursor=pointer]:
              - /url: /25-virtual-gift-card
              - img "Picture of $25 Virtual Gift Card" [ref=e162]
            - generic [ref=e163]:
              - heading "$25 Virtual Gift Card" [level=2] [ref=e164]:
                - link "$25 Virtual Gift Card" [ref=e165] [cursor=pointer]:
                  - /url: /25-virtual-gift-card
              - generic "824 review(s)" [ref=e166]
              - generic [ref=e169]:
                - generic [ref=e171]: "25.00"
                - button "Add to cart" [ref=e173] [cursor=pointer]
          - generic [ref=e175]:
            - link "Picture of 14.1-inch Laptop" [ref=e177] [cursor=pointer]:
              - /url: /141-inch-laptop
              - img "Picture of 14.1-inch Laptop" [ref=e178]
            - generic [ref=e179]:
              - heading "14.1-inch Laptop" [level=2] [ref=e180]:
                - link "14.1-inch Laptop" [ref=e181] [cursor=pointer]:
                  - /url: /141-inch-laptop
              - generic "1633 review(s)" [ref=e182]
              - generic [ref=e185]:
                - generic [ref=e187]: "1590.00"
                - button "Add to cart" [ref=e189] [cursor=pointer]
          - generic [ref=e191]:
            - link "Picture of Build your own cheap computer" [ref=e193] [cursor=pointer]:
              - /url: /build-your-cheap-own-computer
              - img "Picture of Build your own cheap computer" [ref=e194]
            - generic [ref=e195]:
              - heading "Build your own cheap computer" [level=2] [ref=e196]:
                - link "Build your own cheap computer" [ref=e197] [cursor=pointer]:
                  - /url: /build-your-cheap-own-computer
              - generic "840 review(s)" [ref=e198]
              - generic [ref=e201]:
                - generic [ref=e203]: "800.00"
                - button "Add to cart" [ref=e205] [cursor=pointer]
          - generic [ref=e207]:
            - link "Picture of Build your own computer" [ref=e209] [cursor=pointer]:
              - /url: /build-your-own-computer
              - img "Picture of Build your own computer" [ref=e210]
            - generic [ref=e211]:
              - heading "Build your own computer" [level=2] [ref=e212]:
                - link "Build your own computer" [ref=e213] [cursor=pointer]:
                  - /url: /build-your-own-computer
              - generic "378 review(s)" [ref=e214]
              - generic [ref=e217]:
                - generic [ref=e219]: "1200.00"
                - button "Add to cart" [ref=e221] [cursor=pointer]
          - generic [ref=e223]:
            - link "Picture of Build your own expensive computer" [ref=e225] [cursor=pointer]:
              - /url: /build-your-own-expensive-computer-2
              - img "Picture of Build your own expensive computer" [ref=e226]
            - generic [ref=e227]:
              - heading "Build your own expensive computer" [level=2] [ref=e228]:
                - link "Build your own expensive computer" [ref=e229] [cursor=pointer]:
                  - /url: /build-your-own-expensive-computer-2
              - generic "428 review(s)" [ref=e230]
              - generic [ref=e233]:
                - generic [ref=e235]: "1800.00"
                - button "Add to cart" [ref=e237] [cursor=pointer]
          - generic [ref=e239]:
            - link "Picture of Simple Computer" [ref=e241] [cursor=pointer]:
              - /url: /simple-computer
              - img "Picture of Simple Computer" [ref=e242]
            - generic [ref=e243]:
              - heading "Simple Computer" [level=2] [ref=e244]:
                - link "Simple Computer" [ref=e245] [cursor=pointer]:
                  - /url: /simple-computer
              - generic "395 review(s)" [ref=e246]
              - generic [ref=e249]:
                - generic [ref=e251]: "800.00"
                - button "Add to cart" [ref=e253] [cursor=pointer]
  - generic [ref=e254]:
    - generic [ref=e255]:
      - generic [ref=e256]:
        - heading "Information" [level=3] [ref=e257]
        - list [ref=e258]:
          - listitem [ref=e259]:
            - link "Sitemap" [ref=e260] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=e261]:
            - link "Shipping & Returns" [ref=e262] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=e263]:
            - link "Privacy Notice" [ref=e264] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=e265]:
            - link "Conditions of Use" [ref=e266] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=e267]:
            - link "About us" [ref=e268] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=e269]:
            - link "Contact us" [ref=e270] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=e271]:
        - heading "Customer service" [level=3] [ref=e272]
        - list [ref=e273]:
          - listitem [ref=e274]:
            - link "Search" [ref=e275] [cursor=pointer]:
              - /url: /search
          - listitem [ref=e276]:
            - link "News" [ref=e277] [cursor=pointer]:
              - /url: /news
          - listitem [ref=e278]:
            - link "Blog" [ref=e279] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=e280]:
            - link "Recently viewed products" [ref=e281] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=e282]:
            - link "Compare products list" [ref=e283] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=e284]:
            - link "New products" [ref=e285] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=e286]:
        - heading "My account" [level=3] [ref=e287]
        - list [ref=e288]:
          - listitem [ref=e289]:
            - link "My account" [ref=e290] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=e291]:
            - link "Orders" [ref=e292] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=e293]:
            - link "Addresses" [ref=e294] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=e295]:
            - link "Shopping cart" [ref=e296] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=e297]:
            - link "Wishlist" [ref=e298] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=e299]:
        - heading "Follow us" [level=3] [ref=e300]
        - list [ref=e301]:
          - listitem [ref=e302]:
            - link "Facebook" [ref=e303] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=e304]:
            - link "Twitter" [ref=e305] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=e306]:
            - link "RSS" [ref=e307] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=e308]:
            - link "YouTube" [ref=e309] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=e310]:
            - link "Google+" [ref=e311] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=e312]:
      - text: Powered by
      - link "nopCommerce" [ref=e313] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=e314]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
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
  187 | // TC_PDT_12 → Verify Wishlist Navigation
  188 | 
  189 | test.only('TC_PDT_12 Verify wishlist page navigation', async ({ page }) => {
  190 | 
  191 |     // Open homepage
  192 |     await page.goto(
  193 |         'https://demowebshop.tricentis.com'
  194 |     );
  195 | 
  196 |     // Click wishlist header link
> 197 |     await page.locator('.ico-wishlist').click();
      |                                         ^ Error: locator.click: Error: strict mode violation: locator('.ico-wishlist') resolved to 2 elements:
  198 | 
  199 |     // Verify wishlist page opened
  200 |     await expect(page)
  201 |         .toHaveURL(/wishlist/);
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