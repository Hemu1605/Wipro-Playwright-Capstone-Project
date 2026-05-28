# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/login.spec.js >> Authentication Test Cases >> TC_AUTH_02 Verify login with valid credentials
- Location: tests/auth/login.spec.js:14:3

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "/", waiting until "load"

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
> 14 |     await this.page.goto('/');
     |                     ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  15 |   }
  16 | 
  17 |   async openLoginPage() {
  18 |     await this.loginLink.click();
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
  35 | 
  36 |     await this.logoutLink.waitFor({
  37 |         state: 'visible'
  38 |     });
  39 | 
  40 |     await this.logoutLink.click();
  41 | }
  42 | }
  43 | 
  44 | module.exports = { LoginPage };
```