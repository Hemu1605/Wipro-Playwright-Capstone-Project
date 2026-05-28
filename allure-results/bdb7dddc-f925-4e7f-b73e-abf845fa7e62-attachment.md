# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/register.spec.js >> TC_AUTH_08 Verify email format validation
- Location: tests/auth/register.spec.js:59:1

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "/", waiting until "load"

```

# Test source

```ts
  1  | class RegisterPage {
  2  | 
  3  |     constructor(page) {
  4  | 
  5  |         this.page = page;
  6  | 
  7  |         this.registerLink = page.locator('.ico-register');
  8  | 
  9  |         this.firstName = page.locator('#FirstName');
  10 |         this.lastName = page.locator('#LastName');
  11 |         this.email = page.locator('#Email');
  12 | 
  13 |         this.password = page.locator('#Password');
  14 |         this.confirmPassword = page.locator('#ConfirmPassword');
  15 | 
  16 |         this.registerButton = page.locator('#register-button');
  17 | 
  18 |         this.successMessage = page.locator('.result');
  19 | 
  20 |         this.errorMessage = page.locator('.message-error');
  21 |     }
  22 | 
  23 |     async goto() {
> 24 |         await this.page.goto('/');
     |                         ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  25 |     }
  26 | 
  27 |     async openRegisterPage() {
  28 |         await this.registerLink.click();
  29 |     }
  30 | 
  31 |     async registerUser(first, last, email, password) {
  32 | 
  33 |         await this.firstName.fill(first);
  34 | 
  35 |         await this.lastName.fill(last);
  36 | 
  37 |         await this.email.fill(email);
  38 | 
  39 |         await this.password.fill(password);
  40 | 
  41 |         await this.confirmPassword.fill(password);
  42 | 
  43 |         await this.registerButton.click();
  44 |     }
  45 | }
  46 | 
  47 | module.exports = { RegisterPage };
```