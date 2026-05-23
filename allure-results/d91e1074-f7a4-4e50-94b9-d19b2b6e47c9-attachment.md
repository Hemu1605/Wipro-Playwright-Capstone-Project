# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/login.spec.js >> TC_AUTH_05 Verify logout functionality
- Location: tests/auth/login.spec.js:40:1

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('.ico-login')

```

# Test source

```ts
  1  | class LoginPage {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  |     this.loginLink = page.locator('.ico-login');
  5  |     this.emailInput = page.locator('#Email');
  6  |     this.passwordInput = page.locator('#Password');
  7  |     this.rememberMe = page.locator('#RememberMe');
  8  |     this.loginButton = page.locator('input[value="Log in"]');
  9  |     this.logoutLink = page.locator('.ico-logout');
  10 |     this.errorMessage = page.locator('.validation-summary-errors');
  11 |   }
  12 | 
  13 |   async goto() {
  14 |     await this.page.goto('/');
  15 |   }
  16 | 
  17 |   async openLoginPage() {
> 18 |     await this.loginLink.click();
     |                          ^ Error: locator.click: Target page, context or browser has been closed
  19 |   }
  20 | 
  21 |   async login(email, password) {
  22 |     await this.emailInput.fill(email);
  23 |     await this.passwordInput.fill(password);
  24 |     await this.loginButton.click();
  25 |   }
  26 | 
  27 |   async loginWithRememberMe(email, password) {
  28 |     await this.emailInput.fill(email);
  29 |     await this.passwordInput.fill(password);
  30 |     await this.rememberMe.check();
  31 |     await this.loginButton.click();
  32 |   }
  33 | 
  34 |   async logout() {
  35 |     await this.logoutLink.click();
  36 |   }
  37 | }
  38 | 
  39 | module.exports = { LoginPage };
```