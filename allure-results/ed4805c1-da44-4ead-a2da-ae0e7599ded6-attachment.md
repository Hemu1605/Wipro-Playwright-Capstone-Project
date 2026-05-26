# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout/checkout.spec.js >> TC_CHK_06 Verify Payment Method Selection
- Location: tests/checkout/checkout.spec.js:148:6

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('input.button-1.payment-method-next-step-button')
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('input.button-1.payment-method-next-step-button')

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
  59  | 
  60  | // TC_CHK_03 → Verify Billing Address Form
  61  | 
  62  | test('TC_CHK_03 Verify Billing Address Form', async ({ page }) => {
  63  | 
  64  |     const checkoutPage = new CheckoutPage(page);
  65  | 
  66  |     // Open product page
  67  |     await checkoutPage.gotoProductPage();
  68  | 
  69  |     // Add product
  70  |     await checkoutPage.addProductForCheckout();
  71  | 
  72  |     // Open cart
  73  |     await checkoutPage.openCart();
  74  | 
  75  |     // Proceed checkout
  76  |     await checkoutPage.proceedToCheckout();
  77  | 
  78  |     // Guest checkout
  79  |     await checkoutPage.checkoutAsGuestButton.click();
  80  | 
  81  |     // Fill city
  82  |     await checkoutPage.cityInput.fill('Delhi');
  83  | 
  84  |     // Fill address
  85  |     await checkoutPage.addressInput.fill('Sector 15');
  86  | 
  87  |     // Fill zip
  88  |     await checkoutPage.zipInput.fill('121001');
  89  | 
  90  |     // Fill phone
  91  |     await checkoutPage.phoneInput.fill('9876543210');
  92  | 
  93  |     // Verify city entered
  94  |     await expect(checkoutPage.cityInput)
  95  |         .toHaveValue('Delhi');
  96  | });
  97  | 
  98  | 
  99  | // TC_CHK_04 → Verify Shipping Address Form
  100 | 
  101 | test('TC_CHK_04 Verify Shipping Address Form', async ({ page }) => {
  102 | 
  103 |     const checkoutPage = new CheckoutPage(page);
  104 | 
  105 |     // Open product page
  106 |     await checkoutPage.gotoProductPage();
  107 | 
  108 |     // Add product
  109 |     await checkoutPage.addProductForCheckout();
  110 | 
  111 |     // Open cart
  112 |     await checkoutPage.openCart();
  113 | 
  114 |     // Verify checkout button visible
  115 |     await expect(checkoutPage.checkoutButton)
  116 |         .toBeVisible();
  117 | });
  118 | 
  119 | 
  120 | // TC_CHK_05 → Verify Shipping Method Selection
  121 | 
  122 | test('TC_CHK_05 Verify Shipping Method Selection', async ({ page }) => {
  123 | 
  124 |     const checkoutPage = new CheckoutPage(page);
  125 | 
  126 |     // Open product page
  127 |     await checkoutPage.gotoProductPage();
  128 | 
  129 |     // Add product
  130 |     await checkoutPage.addProductForCheckout();
  131 | 
  132 |     // Open cart
  133 |     await checkoutPage.openCart();
  134 | 
  135 |     // Proceed checkout
  136 |     await checkoutPage.proceedToCheckout();
  137 | 
  138 |     // Guest checkout
  139 |     await checkoutPage.checkoutAsGuestButton.click();
  140 | 
  141 |     // Verify checkout page visible
  142 |     await expect(page.locator('body'))
  143 |         .toContainText('Checkout');
  144 | });
  145 | 
  146 | // TC_CHK_06 → Verify Payment Method Selection
  147 | 
  148 | test.only('TC_CHK_06 Verify Payment Method Selection', async ({ page }) => {
  149 | 
  150 |     const checkoutPage = new CheckoutPage(page);
  151 | 
  152 |     // Open checkout page
  153 |     await page.goto(
  154 |         'https://demowebshop.tricentis.com/onepagecheckout'
  155 |     );
  156 | 
  157 |     // Verify payment button visible
  158 |     await expect(checkoutPage.paymentMethodContinueButton)
> 159 |         .toBeVisible();
      |          ^ Error: expect(locator).toBeVisible() failed
  160 | });
  161 | 
  162 | // TC_CHK_07 → Verify Payment Information Validation
  163 | 
  164 | test('TC_CHK_07 Verify Payment Information Validation', async ({ page }) => {
  165 | 
  166 |     const checkoutPage = new CheckoutPage(page);
  167 | 
  168 |     // Open checkout page
  169 |     await page.goto(
  170 |         'https://demowebshop.tricentis.com/onepagecheckout'
  171 |     );
  172 | 
  173 |     // Verify payment info button visible
  174 |     await expect(checkoutPage.paymentInfoContinueButton)
  175 |         .toBeVisible();
  176 | });
  177 | 
  178 | // TC_CHK_08 → Verify Confirm Order Button
  179 | 
  180 | test('TC_CHK_08 Verify Confirm Order Button', async ({ page }) => {
  181 | 
  182 |     const checkoutPage = new CheckoutPage(page);
  183 | 
  184 |     // Open checkout page
  185 |     await page.goto(
  186 |         'https://demowebshop.tricentis.com/onepagecheckout'
  187 |     );
  188 | 
  189 |     // Verify confirm order button visible
  190 |     await expect(checkoutPage.confirmOrderButton)
  191 |         .toBeVisible();
  192 | });
  193 | 
  194 | // TC_CHK_09 → Verify Order Confirmation Message
  195 | 
  196 | test('TC_CHK_09 Verify Order Confirmation Message', async ({ page }) => {
  197 | 
  198 |     // Open homepage
  199 |     await page.goto(
  200 |         'https://demowebshop.tricentis.com'
  201 |     );
  202 | 
  203 |     // Verify homepage visible
  204 |     await expect(page.locator('body'))
  205 |         .toContainText('Welcome to our store');
  206 | });
  207 | 
  208 | 
  209 | // TC_CHK_10 → Verify Required Field Validation
  210 | 
  211 | test('TC_CHK_10 Verify Required Field Validation', async ({ page }) => {
  212 | 
  213 |     const checkoutPage = new CheckoutPage(page);
  214 | 
  215 |     // Open checkout page
  216 |     await page.goto(
  217 |         'https://demowebshop.tricentis.com/onepagecheckout'
  218 |     );
  219 | 
  220 |     // Verify checkout page visible
  221 |     await expect(page.locator('body'))
  222 |         .toBeVisible();
  223 | });
```