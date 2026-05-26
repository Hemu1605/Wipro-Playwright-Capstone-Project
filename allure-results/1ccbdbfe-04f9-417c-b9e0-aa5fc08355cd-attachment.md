# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product/product.spec.js >> TC_PDT_12 Verify Add to Wishlist button visibility
- Location: tests/product/product.spec.js:189:6

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.add-to-wishlist-button').first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('.add-to-wishlist-button').first()

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
- strong: Categories
- list:
  - listitem:
    - link "Books":
      - /url: /books
  - listitem:
    - link "Computers":
      - /url: /computers
    - list:
      - listitem:
        - link "Desktops":
          - /url: /desktops
      - listitem:
        - link "Notebooks":
          - /url: /notebooks
      - listitem:
        - link "Accessories":
          - /url: /accessories
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
- strong: Manufacturers
- list:
  - listitem:
    - link "Tricentis":
      - /url: /tricentis
- strong: Newsletter
- text: "Sign up for our newsletter:"
- textbox
- button "Subscribe"
- list:
  - listitem:
    - link "Home":
      - /url: /
    - text: /
  - listitem:
    - link "Computers":
      - /url: /computers
    - text: /
  - listitem:
    - link "Desktops":
      - /url: /desktops
    - text: /
  - listitem:
    - strong: Build your own computer
- img "Picture of Build your own computer"
- link "Picture of Build your own computer":
  - /url: https://demowebshop.tricentis.com/content/images/thumbs/0000031_build-your-own-computer.jpeg
  - img "Picture of Build your own computer"
- link "Picture of Build your own computer":
  - /url: https://demowebshop.tricentis.com/content/images/thumbs/0000032_build-your-own-computer.jpeg
  - img "Picture of Build your own computer"
- link "Picture of Build your own computer":
  - /url: https://demowebshop.tricentis.com/content/images/thumbs/0000033_build-your-own-computer.jpeg
  - img "Picture of Build your own computer"
- heading "Build your own computer" [level=1]
- text: "Build it Availability: In stock Free shipping"
- link "378 review(s)":
  - /url: /productreviews/16
- text: "|"
- link "Add your review":
  - /url: /productreviews/16
- term: Processor *
- definition:
  - combobox:
    - option "2.2 GHz Intel Pentium Dual-Core E2200"
    - option "2.5 GHz Intel Pentium Dual-Core E2200 [+15.00]" [selected]
- term: RAM *
- definition:
  - combobox:
    - option "2 GB" [selected]
    - option "4GB [+20.00]"
    - option "8GB [+60.00]"
- term: HDD *
- definition:
  - list:
    - listitem:
      - radio "320 GB"
      - text: 320 GB
    - listitem:
      - radio "400 GB [+100.00]"
      - text: 400 GB [+100.00]
- term: OS *
- definition:
  - list:
    - listitem:
      - radio "Ubuntu" [checked]
      - text: Ubuntu
    - listitem:
      - radio "Windows 7 [+50.00]"
      - text: Windows 7 [+50.00]
    - listitem:
      - radio "Windows 10 [+60.00]"
      - text: Windows 10 [+60.00]
- term: Software
- definition:
  - list:
    - listitem:
      - checkbox "Microsoft Office [+50.00]" [checked]
      - text: Microsoft Office [+50.00]
    - listitem:
      - checkbox "Acrobat Reader [+10.00]"
      - text: Acrobat Reader [+10.00]
    - listitem:
      - checkbox "Total Commander [+5.00]"
      - text: Total Commander [+5.00]
- text: "1200.00 Qty:"
- textbox "Qty:": "1"
- button "Add to cart"
- button "Email a friend"
- button "Add to compare list"
- paragraph: Fight back against cluttered workspaces with this stylish All-in-One desktop PC, featuring powerful computing resources and a stunning 20.1-inch widescreen display with stunning HiColor LCD technology. It has a built-in microphone and a camera with face-tracking technology that allows for easy communication with friends and family. And it has a built-in DVD burner so you can create a digital entertainment library for personal viewing at your convenience. Easy to setup and even easier to use, it includes an elegantly designed keyboard and a USB mouse.
- strong: Product tags
- list:
  - listitem:
    - link "computer":
      - /url: /producttag/6/computer
    - text: (10)
  - listitem: ","
  - listitem:
    - link "awesome":
      - /url: /producttag/8/awesome
    - text: (20)
- strong: Customers who bought this item also bought
- link "Picture of $100 Physical Gift Card":
  - /url: /100-physical-gift-card
  - img "Picture of $100 Physical Gift Card"
- heading "$100 Physical Gift Card" [level=2]:
  - link "$100 Physical Gift Card":
    - /url: /100-physical-gift-card
- text: "100.00"
- button "Add to cart"
- link "Picture of Build your own expensive computer":
  - /url: /build-your-own-expensive-computer-2
  - img "Picture of Build your own expensive computer"
- heading "Build your own expensive computer" [level=2]:
  - link "Build your own expensive computer":
    - /url: /build-your-own-expensive-computer-2
- text: "1800.00"
- button "Add to cart"
- link "Picture of 14.1-inch Laptop":
  - /url: /141-inch-laptop
  - img "Picture of 14.1-inch Laptop"
- heading "14.1-inch Laptop" [level=2]:
  - link "14.1-inch Laptop":
    - /url: /141-inch-laptop
- text: "1590.00"
- button "Add to cart"
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
  189 | test.only('TC_PDT_12 Verify Add to Wishlist button visibility', async ({ page }) => {
  190 | 
  191 |     // Open stable product page
  192 |     await page.goto(
  193 |         'https://demowebshop.tricentis.com/build-your-own-computer'
  194 |     );
  195 | 
  196 |     // Wishlist button locator
  197 |     const wishlistButton = page.locator(
  198 |         '.add-to-wishlist-button'
  199 |     ).first();
  200 | 
  201 |     // Verify button visible
  202 |     await expect(wishlistButton)
> 203 |         .toBeVisible();
      |          ^ Error: expect(locator).toBeVisible() failed
  204 | });
  205 | 
  206 | // TC_PDT_13 → Verify stock validation
  207 | 
  208 | test('TC_PDT_13 Verify stock validation', async ({ page }) => {
  209 | 
  210 |     const productPage = new ProductPage(page);
  211 | 
  212 |     // Open product page
  213 |     await productPage.openProductDirectly();
  214 | 
  215 |     // Verify stock text visible
  216 |     await expect(productPage.stockAvailability)
  217 |         .toContainText('In stock');
  218 | });
  219 | 
  220 | 
  221 | // TC_PDT_14 → Verify async image loading
  222 | 
  223 | test('TC_PDT_14 Verify async image loading', async ({ page }) => {
  224 | 
  225 |     const productPage = new ProductPage(page);
  226 | 
  227 |     // Open product page
  228 |     await productPage.openProductDirectly();
  229 | 
  230 |     // Wait for network load
  231 |     await page.waitForLoadState('networkidle');
  232 | 
  233 |     // Verify image visible
  234 |     await expect(productPage.productImage)
  235 |         .toBeVisible();
  236 | 
  237 |     // Screenshot
  238 |     await page.screenshot({
  239 |         path: 'screenshots/product-page.png',
  240 |         fullPage: true
  241 |     });
  242 | });
  243 | 
  244 | // TC_PDT_15 → Verify product detail API response
  245 | 
  246 | test('TC_PDT_15 Verify product detail API response', async ({ page }) => {
  247 | 
  248 |     // Open product page
  249 |     const response = await page.goto(
  250 |         'https://demowebshop.tricentis.com/build-your-cheap-own-computer'
  251 |     );
  252 | 
  253 |     // Verify status code
  254 |     expect(response.status()).toBe(200);
  255 | });
```