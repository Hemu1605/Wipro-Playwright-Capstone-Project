# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/login.spec.js >> TC_AUTH_10 Verify login using Enter key
- Location: tests/auth/login.spec.js:90:1

# Error details

```
Error: locator.fill: value: expected string, got undefined
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
        - heading "Welcome, Please Sign In!" [level=1] [ref=e83]
        - generic [ref=e84]:
          - generic [ref=e85]:
            - generic [ref=e86]:
              - strong [ref=e88]: New Customer
              - generic [ref=e89]: By creating an account on our website you will be able to shop faster, be up to date on an orders status, and keep track of the orders you have previously made.
              - button "Register" [ref=e91] [cursor=pointer]
            - generic [ref=e92]:
              - strong [ref=e94]: Returning Customer
              - generic [ref=e96]:
                - generic [ref=e97]:
                  - generic [ref=e98]: "Email:"
                  - textbox "Email:" [active] [ref=e99]
                - generic [ref=e100]:
                  - generic [ref=e101]: "Password:"
                  - textbox "Password:" [ref=e102]
                - generic [ref=e103]:
                  - checkbox "Remember me?" [ref=e104]
                  - generic [ref=e105]: Remember me?
                  - link "Forgot password?" [ref=e107] [cursor=pointer]:
                    - /url: /passwordrecovery
                - button "Log in" [ref=e109] [cursor=pointer]
          - generic [ref=e110]:
            - heading "About login / registration" [level=2] [ref=e112]
            - paragraph [ref=e114]: Put your login / registration information here. You can edit this in the admin site.
  - generic [ref=e115]:
    - generic [ref=e116]:
      - generic [ref=e117]:
        - heading "Information" [level=3] [ref=e118]
        - list [ref=e119]:
          - listitem [ref=e120]:
            - link "Sitemap" [ref=e121] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=e122]:
            - link "Shipping & Returns" [ref=e123] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=e124]:
            - link "Privacy Notice" [ref=e125] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=e126]:
            - link "Conditions of Use" [ref=e127] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=e128]:
            - link "About us" [ref=e129] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=e130]:
            - link "Contact us" [ref=e131] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=e132]:
        - heading "Customer service" [level=3] [ref=e133]
        - list [ref=e134]:
          - listitem [ref=e135]:
            - link "Search" [ref=e136] [cursor=pointer]:
              - /url: /search
          - listitem [ref=e137]:
            - link "News" [ref=e138] [cursor=pointer]:
              - /url: /news
          - listitem [ref=e139]:
            - link "Blog" [ref=e140] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=e141]:
            - link "Recently viewed products" [ref=e142] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=e143]:
            - link "Compare products list" [ref=e144] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=e145]:
            - link "New products" [ref=e146] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=e147]:
        - heading "My account" [level=3] [ref=e148]
        - list [ref=e149]:
          - listitem [ref=e150]:
            - link "My account" [ref=e151] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=e152]:
            - link "Orders" [ref=e153] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=e154]:
            - link "Addresses" [ref=e155] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=e156]:
            - link "Shopping cart" [ref=e157] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=e158]:
            - link "Wishlist" [ref=e159] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=e160]:
        - heading "Follow us" [level=3] [ref=e161]
        - list [ref=e162]:
          - listitem [ref=e163]:
            - link "Facebook" [ref=e164] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=e165]:
            - link "Twitter" [ref=e166] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=e167]:
            - link "RSS" [ref=e168] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=e169]:
            - link "YouTube" [ref=e170] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=e171]:
            - link "Google+" [ref=e172] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=e173]:
      - text: Powered by
      - link "nopCommerce" [ref=e174] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=e175]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | const { LoginPage } = require('../../pages/LoginPage');
  3   | 
  4   | test.describe('Authentication Test Cases', () => {
  5   | 
  6   |   test.beforeEach(async ({ page }) => {
  7   |     const loginPage = new LoginPage(page);
  8   |     await loginPage.goto();
  9   |   });
  10  | 
  11  | 
  12  |   // TC_AUTH_02 Verify login with valid credentials
  13  | 
  14  |   test('TC_AUTH_02 Verify login with valid credentials', async ({ page }) => {
  15  |     const loginPage = new LoginPage(page);
  16  | 
  17  |     await loginPage.openLoginPage();
  18  |     await loginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);
  19  | 
  20  |     await expect(loginPage.logoutLink).toBeVisible();
  21  |   });
  22  | 
  23  | 
  24  |   // TC_AUTH_03 Verify login with invalid password
  25  | 
  26  |   test('TC_AUTH_03 Verify login with invalid password', async ({ page }) => {
  27  |     const loginPage = new LoginPage(page);
  28  | 
  29  |     await loginPage.openLoginPage();
  30  |     await loginPage.login(process.env.USER_EMAIL, 'wrongpassword123');
  31  | 
  32  |     await expect(loginPage.errorMessage).toBeVisible();
  33  |     await expect(loginPage.errorMessage).toContainText('Login was unsuccessful');
  34  |   });
  35  | 
  36  | });
  37  | 
  38  | // TC_AUTH_05 → Logout Functionality
  39  | 
  40  | test('TC_AUTH_05 Verify logout functionality', async ({ page }) => {
  41  | 
  42  |     const loginPage = new LoginPage(page);
  43  | 
  44  |     // Open homepage first
  45  |     await loginPage.goto();
  46  | 
  47  |     // Open login page
  48  |     await loginPage.openLoginPage();
  49  | 
  50  |     // Login
  51  |     await loginPage.login(
  52  |         process.env.USER_EMAIL,
  53  |         process.env.USER_PASSWORD
  54  |     );
  55  | 
  56  |     // Wait for logout link
  57  |     await expect(loginPage.logoutLink).toBeVisible();
  58  | 
  59  |     // Logout
  60  |     await loginPage.logout();
  61  | 
  62  |     // Verify login link appears again
  63  |     await expect(loginPage.loginLink).toBeVisible();
  64  | });
  65  | 
  66  | // TC_AUTH_06 → Remember Me Functionality
  67  | 
  68  | test('TC_AUTH_06 Verify remember me functionality', async ({ page }) => {
  69  | 
  70  |     const loginPage = new LoginPage(page);
  71  | 
  72  |     // Open homepage
  73  |     await loginPage.goto();
  74  | 
  75  |     // Open login page
  76  |     await loginPage.openLoginPage();
  77  | 
  78  |     // Login with remember me
  79  |     await loginPage.loginWithRememberMe(
  80  |         process.env.USER_EMAIL,
  81  |         process.env.USER_PASSWORD
  82  |     );
  83  | 
  84  |     // Verify successful login
  85  |     await expect(loginPage.logoutLink).toBeVisible();
  86  | });
  87  | 
  88  | // TC_AUTH_10 → Login Using Enter Key
  89  | 
  90  | test('TC_AUTH_10 Verify login using Enter key', async ({ page }) => {
  91  | 
  92  |     const loginPage = new LoginPage(page);
  93  | 
  94  |     // Open homepage
  95  |     await loginPage.goto();
  96  | 
  97  |     // Open login page
  98  |     await loginPage.openLoginPage();
  99  | 
  100 |     // Fill credentials
> 101 |     await loginPage.emailInput.fill(process.env.USER_EMAIL);
      |                                ^ Error: locator.fill: value: expected string, got undefined
  102 | 
  103 |     await loginPage.passwordInput.fill(process.env.USER_PASSWORD);
  104 | 
  105 |     // Press Enter key
  106 |     await page.keyboard.press('Enter');
  107 | 
  108 |     // Verify successful login
  109 |     await expect(loginPage.logoutLink).toBeVisible();
  110 | });
  111 | 
  112 | // TC_AUTH_14 → Async Loader Validation
  113 | 
  114 | test('TC_AUTH_14 Verify async login processing _addon test cases', async ({ page }) => {
  115 | 
  116 |     const loginPage = new LoginPage(page);
  117 | 
  118 |     // Open homepage
  119 |     await loginPage.goto();
  120 | 
  121 |     // Open login page
  122 |     await loginPage.openLoginPage();
  123 | 
  124 |     // Login
  125 |     await loginPage.login(
  126 |         process.env.USER_EMAIL,
  127 |         process.env.USER_PASSWORD
  128 |     );
  129 | 
  130 |     // Verify login success
  131 |     await expect(loginPage.logoutLink).toBeVisible();
  132 | 
  133 |     // Capture screenshot
  134 |     await page.screenshot({
  135 |         path: 'screenshots/login-success.png',
  136 |         fullPage: true
  137 |     });
  138 | });
  139 | 
  140 | 
  141 | // TC_AUTH_11 → Session Expiration Handling
  142 | 
  143 | test('TC_AUTH_11 Verify session expiration handling', async ({ page }) => {
  144 | 
  145 |     const loginPage = new LoginPage(page);
  146 | 
  147 |     // Open homepage
  148 |     await loginPage.goto();
  149 | 
  150 |     // Open login page
  151 |     await loginPage.openLoginPage();
  152 | 
  153 |     // Login
  154 |     await loginPage.login(
  155 |         process.env.USER_EMAIL,
  156 |         process.env.USER_PASSWORD
  157 |     );
  158 | 
  159 |     // Verify login successful
  160 |     await expect(loginPage.logoutLink).toBeVisible();
  161 | 
  162 |     // Simulate session clear
  163 |     await page.context().clearCookies();
  164 | 
  165 |     // Reload page
  166 |     await page.reload();
  167 | 
  168 |     // Verify login button appears again
  169 |     await expect(loginPage.loginLink).toBeVisible();
  170 | });
  171 | 
  172 | // TC_AUTH_13 → Multiple Failed Login Attempts
  173 | 
  174 | test('TC_AUTH_13 Verify multiple failed login attempts', async ({ page }) => {
  175 | 
  176 |     const loginPage = new LoginPage(page);
  177 | 
  178 |     // Open homepage
  179 |     await loginPage.goto();
  180 | 
  181 |     // Open login page
  182 |     await loginPage.openLoginPage();
  183 | 
  184 |     // Try invalid login multiple times
  185 |     for (let i = 0; i < 3; i++) {
  186 | 
  187 |         await loginPage.login(
  188 |             process.env.USER_EMAIL,
  189 |             'WrongPassword123'
  190 |         );
  191 | 
  192 |         await expect(loginPage.errorMessage)
  193 |             .toContainText('Login was unsuccessful');
  194 |     }
  195 | });
  196 | 
  197 | 
  198 | // TC_AUTH_15 → API Login Response Validation
  199 | 
  200 | test('TC_AUTH_15 Verify login page API response(_addon test cases', async ({ page }) => {
  201 | 
```